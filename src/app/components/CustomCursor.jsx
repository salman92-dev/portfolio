"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const LERP     = 0.11;
const LERP_DOT = 0.22;

export default function CustomCursor() {
  const ringRef = useRef(null);
  const dotRef  = useRef(null);
  const mouse   = useRef({ x: -200, y: -200 });
  const ringPos = useRef({ x: -200, y: -200 });
  const dotPos  = useRef({ x: -200, y: -200 });

  const [state, setState]   = useState("default");
  const [label, setLabel]   = useState("");
  const [visible, setVisible] = useState(false);

  const animate = useCallback(() => {
    ringPos.current.x += (mouse.current.x - ringPos.current.x) * LERP;
    ringPos.current.y += (mouse.current.y - ringPos.current.y) * LERP;
    dotPos.current.x  += (mouse.current.x - dotPos.current.x)  * LERP_DOT;
    dotPos.current.y  += (mouse.current.y - dotPos.current.y)  * LERP_DOT;

    if (ringRef.current)
      ringRef.current.style.transform =
        `translate(${ringPos.current.x}px,${ringPos.current.y}px) translate(-50%,-50%)`;
    if (dotRef.current)
      dotRef.current.style.transform =
        `translate(${dotPos.current.x}px,${dotPos.current.y}px) translate(-50%,-50%)`;

    requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      let el = e.target;
      let nextState = "default";
      let nextLabel = "";

      while (el && el !== document.body) {
        const dc = el.getAttribute?.("data-cursor");
        if (dc) {
          nextState = dc;
          nextLabel = el.getAttribute("data-cursor-label") || "";
          break;
        }
        const tag = el.tagName?.toLowerCase();
        if (["a", "button"].includes(tag))                 { nextState = "hover";  break; }
        if (["input", "textarea", "select"].includes(tag)) { nextState = "hidden"; break; }
        if (["img", "video"].includes(tag))                { nextState = "image";  break; }
        if (["p", "span", "li", "h1", "h2", "h3", "h4"].includes(tag)) {
          nextState = "text"; break;
        }
        el = el.parentElement;
      }

      if (nextLabel && nextState !== "label") nextState = "label";
      setState(nextState);
      setLabel(nextLabel);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const onClick = (e) => {
      const burst = document.createElement("div");
      burst.style.cssText = `
        position:fixed;pointer-events:none;z-index:99998;
        border-radius:50%;width:36px;height:36px;
        border:1px solid #111;
        left:${e.clientX}px;top:${e.clientY}px;
        transform:translate(-50%,-50%);
        animation:cc-burst .45s ease-out forwards;
      `;
      document.body.appendChild(burst);
      burst.addEventListener("animationend", () => burst.remove());
    };

    document.addEventListener("mousemove",  onMove,  { passive: true });
    document.addEventListener("mouseleave", onLeave, { passive: true });
    document.addEventListener("mouseenter", onEnter, { passive: true });
    document.addEventListener("click",      onClick);
    document.documentElement.style.cursor = "none";

    const raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove",  onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("click",      onClick);
      document.documentElement.style.cursor = "";
      cancelAnimationFrame(raf);
    };
  }, [animate, visible]);

  // ── Style maps per state ───────────────────────────────
  const ringMap = {
    default: { width: 36, height: 36, border: "1.5px solid #111", background: "transparent", opacity: 0.45, borderRadius: "50%",  mixBlendMode: "normal"     },
    hover:   { width: 52, height: 52, border: "1.5px solid #fff", background: "transparent", opacity: 1,    borderRadius: "50%",  mixBlendMode: "difference" },
    text:    { width:  3, height: 28, border: "none",             background: "#111",        opacity: 0.6,  borderRadius: "2px",  mixBlendMode: "normal"     },
    image:   { width: 46, height: 46, border: "1px solid #111",   background: "transparent", opacity: 0.55, borderRadius: "0px",  mixBlendMode: "normal"     },
    label:   { width: 72, height: 72, border: "1px solid #111",   background: "rgba(17,17,17,0.04)", opacity: 1, borderRadius: "50%", mixBlendMode: "normal" },
    hidden:  { width:  0, height:  0, border: "none",             background: "transparent", opacity: 0,    borderRadius: "50%",  mixBlendMode: "normal"     },
  };

  const dotMap = {
    default: { width: 5, height: 5, background: "#111", opacity: 1,   mixBlendMode: "normal"     },
    hover:   { width: 5, height: 5, background: "#fff", opacity: 1,   mixBlendMode: "difference" },
    text:    { width: 0, height: 0, background: "transparent", opacity: 0, mixBlendMode: "normal" },
    image:   { width: 4, height: 4, background: "#111", opacity: 0.8, mixBlendMode: "normal"     },
    label:   { width: 4, height: 4, background: "#111", opacity: 0.6, mixBlendMode: "normal"     },
    hidden:  { width: 0, height: 0, background: "transparent", opacity: 0, mixBlendMode: "normal" },
  };

  const rs = ringMap[state] ?? ringMap.default;
  const ds = dotMap[state]  ?? dotMap.default;

  const base = {
    position: "fixed", top: 0, left: 0,
    pointerEvents: "none",
    zIndex: 99999,
    willChange: "transform",
    transition: [
      "width .22s cubic-bezier(0.34,1.56,0.64,1)",
      "height .22s cubic-bezier(0.34,1.56,0.64,1)",
      "opacity .18s ease",
      "border-radius .22s ease",
      "background .18s ease",
      "border-color .18s ease",
    ].join(","),
  };

  if (!visible) return null;

  return (
    <>
      <style>{`
        @keyframes cc-burst {
          0%   { transform: translate(-50%,-50%) scale(1);   opacity: .35; }
          100% { transform: translate(-50%,-50%) scale(2.2); opacity: 0;   }
        }
        .cc-image::before,
        .cc-image::after {
          content: '';
          position: absolute;
          width: 9px; height: 9px;
          border-color: #111;
          border-style: solid;
        }
        .cc-image::before { top: -1px; left: -1px; border-width: 1.5px 0 0 1.5px; }
        .cc-image::after  { bottom: -1px; right: -1px; border-width: 0 1.5px 1.5px 0; }
        .cc-label {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          font-size: 9.5px; font-weight: 500;
          letter-spacing: .1em; text-transform: uppercase;
          color: #111; white-space: nowrap;
          pointer-events: none;
        }
      `}</style>

      {/* Ring */}
      <div
        ref={ringRef}
        className={state === "image" ? "cc-image" : ""}
        style={{ ...base, ...rs }}
      >
        {state === "label" && label && (
          <span className="cc-label">{label}</span>
        )}
      </div>

      {/* Dot */}
      <div
        ref={dotRef}
        style={{ ...base, borderRadius: "50%", ...ds }}
      />
    </>
  );
}