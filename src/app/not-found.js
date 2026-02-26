"use client"
import { useState, useEffect } from "react";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .p404 {
    font-family: 'DM Sans', sans-serif;
    min-height: 100vh;
    background: #fafaf8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 24px;
    position: relative;
    overflow: hidden;
  }

  /* Subtle dot grid */
  .p404::before {
    content: '';
    position: absolute; inset: 0;
    background-image: radial-gradient(circle, #d4d4c8 1px, transparent 1px);
    background-size: 28px 28px;
    opacity: 0.5;
    pointer-events: none;
  }

  /* Big italic number */
  @keyframes breathe {
    0%,100% { transform: scale(1) rotate(-1deg); }
    50%      { transform: scale(1.015) rotate(-1deg); }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; } to { opacity: 1; }
  }
  @keyframes dash {
    to { stroke-dashoffset: 0; }
  }
  @keyframes blink {
    0%,100% { opacity: 1; } 50% { opacity: 0; }
  }
  @keyframes slideRight {
    from { transform: scaleX(0); transform-origin: left; }
    to   { transform: scaleX(1); transform-origin: left; }
  }
  @keyframes wiggle {
    0%,100% { transform: rotate(0deg); }
    25% { transform: rotate(-6deg); }
    75% { transform: rotate(6deg); }
  }

  .hero-number {
    font-family: 'Instrument Serif', Georgia, serif;
    font-style: italic;
    font-size: clamp(160px, 28vw, 320px);
    line-height: 0.85;
    color: #e8e8e0;
    user-select: none;
    animation: breathe 5s ease-in-out infinite;
    letter-spacing: -0.04em;
    position: relative;
    z-index: 0;
  }

  /* Strikethrough on the 0 */
  .hero-number .zero {
    position: relative;
    display: inline-block;
  }
  .hero-number .zero::after {
    content: '';
    position: absolute;
    left: -4%; right: -4%;
    top: 48%; height: 6px;
    background: #111;
    border-radius: 3px;
    transform: rotate(-8deg);
    animation: slideRight 0.6s cubic-bezier(.22,.68,0,1.1) 1s both;
  }

  .tag {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #999;
    background: #efefea;
    border-radius: 100px;
    padding: 4px 14px;
    animation: fadeIn 0.5s ease 0.1s both;
  }

  .headline {
    font-family: 'Instrument Serif', serif;
    font-style: italic;
    font-size: clamp(28px, 5vw, 44px);
    color: #111;
    line-height: 1.2;
    text-align: center;
    animation: fadeUp 0.6s cubic-bezier(.22,.68,0,1.1) 0.3s both;
    max-width: 520px;
  }
  .headline em {
    font-style: normal;
    -webkit-text-stroke: 1.5px #111;
    color: transparent;
  }

  .sub {
    font-size: 15px;
    color: #888;
    text-align: center;
    max-width: 340px;
    line-height: 1.7;
    animation: fadeUp 0.6s cubic-bezier(.22,.68,0,1.1) 0.45s both;
  }

  /* Divider line */
  .line {
    width: 48px; height: 2px;
    background: #111;
    border-radius: 2px;
    animation: slideRight 0.5s cubic-bezier(.22,.68,0,1.1) 0.5s both;
    transform-origin: left;
    transform: scaleX(0);
  }

  /* Buttons */
  .btn-row {
    display: flex; gap: 12px; flex-wrap: wrap; justify-content: center;
    animation: fadeUp 0.6s cubic-bezier(.22,.68,0,1.1) 0.6s both;
  }
  .btn-dark {
    background: #111;
    color: #fff;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    padding: 12px 28px;
    border-radius: 100px;
    border: none;
    cursor: pointer;
    transition: background 0.18s, transform 0.18s cubic-bezier(.22,.68,0,1.2);
    letter-spacing: 0.01em;
  }
  .btn-dark:hover { background: #333; transform: translateY(-2px); }
  .btn-dark:active { transform: scale(0.97); }

  .btn-outline {
    background: transparent;
    color: #555;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 500;
    padding: 11px 24px;
    border-radius: 100px;
    border: 1.5px solid #ddd;
    cursor: pointer;
    transition: border-color 0.18s, color 0.18s, transform 0.18s cubic-bezier(.22,.68,0,1.2);
  }
  .btn-outline:hover { border-color: #aaa; color: #111; transform: translateY(-2px); }

  /* Floating doodle elements */
  .doodle {
    position: absolute;
    pointer-events: none;
    animation: fadeIn 0.8s ease 0.9s both;
  }
  .doodle-arrow {
    top: 32%; right: 12%;
    animation: fadeIn 0.8s ease 0.9s both, wiggle 3s ease-in-out 1.5s infinite;
  }
  .doodle-circle {
    bottom: 20%; left: 8%;
    animation: fadeIn 0.8s ease 1s both;
  }
  .doodle-x {
    top: 18%; left: 14%;
    animation: fadeIn 0.8s ease 1.1s both;
  }

  /* Cursor blink */
  .cursor-blink {
    display: inline-block;
    width: 2px; height: 1em;
    background: #111;
    vertical-align: middle;
    margin-left: 2px;
    animation: blink 1s step-start infinite;
  }

  /* SVG path draw */
  .draw-path {
    stroke-dasharray: 300;
    stroke-dashoffset: 300;
    animation: dash 1.2s cubic-bezier(.22,.68,0,1.1) 1s forwards;
  }
`;

export default function NotFound() {
  const [typed, setTyped] = useState("");
  const full = "page_not_found";

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      if (i <= full.length) {
        setTyped(full.slice(0, i));
        i++;
      } else {
        clearInterval(t);
      }
    }, 70);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <style>{css}</style>
      <div className="p404">

        {/* Hand-drawn doodles */}
        <div className="doodle doodle-arrow">
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
            <path className="draw-path" d="M8 44 C16 20, 38 18, 44 8" stroke="#bbb" strokeWidth="2" strokeLinecap="round" fill="none"/>
            <path className="draw-path" d="M44 8 L36 12 M44 8 L42 17" stroke="#bbb" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="doodle doodle-circle">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <circle className="draw-path" cx="30" cy="30" r="22" stroke="#ddd" strokeWidth="1.5" strokeDasharray="4 6" fill="none"/>
          </svg>
        </div>
        <div className="doodle doodle-x" style={{ color: "#ddd" }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path className="draw-path" d="M4 4 L24 24 M24 4 L4 24" stroke="#ccc" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>

        {/* Stack */}
        <div className="relative z-10 flex flex-col items-center gap-6">

          {/* Tag */}
          <span className="tag">Error 404</span>

          {/* Big number — sits behind headline visually */}
          <div style={{ position: "relative", marginBottom: "-40px", marginTop: "-20px" }}>
            <div className="hero-number" aria-hidden="true">
              4<span className="zero">0</span>4
            </div>
          </div>

          {/* Headline */}
          <h1 className="headline">
            Nothing to see<br />
            <em>here.</em>
          </h1>

          {/* Typewriter */}
          <div
            className="font-mono text-sm text-gray-400 bg-gray-100 rounded-lg px-4 py-2"
            style={{ animation: "fadeIn 0.4s ease 0.2s both" }}
          >
            ~/{typed}<span className="cursor-blink" />
          </div>

          {/* Divider */}
          <div className="line" />

          {/* Sub text */}
          <p className="sub">
            The page you're after has moved, been deleted, or perhaps it simply never existed.
          </p>

          {/* Buttons */}
          <div className="btn-row">
            <button className="btn-dark" onClick={() => window.history.back()}>
              ← Go back
            </button>
            <button className="btn-outline" onClick={() => window.location.href = "/"}>
              Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
}