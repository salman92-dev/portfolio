"use client";

import { useState, useEffect, useRef } from "react";

const QUICK_MESSAGES = [
  { text: "Hi, I want to discuss a project", emoji: "💼" },
  { text: "Hello! I need a website", emoji: "🌐" },
  { text: "Hey, can you help with UI/UX design", emoji: "🎨" },
  { text: "Hi, I'd like a quote for my idea", emoji: "💡" },
];

const PHONE_NUMBER = "923241161920";

const WA_SVG = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const MOOD_OPTIONS = [
  { label: "Friendly", icon: "😊", prefix: "Hey! Hope you're doing well. " },
  { label: "Formal",   icon: "👔", prefix: "Good day. I am reaching out to " },
  { label: "Urgent",   icon: "⚡", prefix: "Hi, urgent inquiry: " },
  { label: "Excited",  icon: "🔥", prefix: "Hi!! I'm super excited to " },
];

const CHAR_LIMIT = 300;

const WhatsAppButton = () => {
  const [open, setOpen]               = useState(false);
  const [pulse, setPulse]             = useState(true);
  const [activeTab, setActiveTab]     = useState("quick");
  const [customMsg, setCustomMsg]     = useState("");
  const [selectedMood, setSelectedMood] = useState(null);
  const [sent, setSent]               = useState(false);
  const ref         = useRef(null);
  const textareaRef = useRef(null);

  const handleToggle = () => { setOpen(p => !p); setPulse(false); };

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (activeTab === "compose" && open) setTimeout(() => textareaRef.current?.focus(), 80);
  }, [activeTab, open]);

  const handleSend = (msg) => {
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
    setTimeout(() => { setOpen(false); setSent(false); }, 1300);
  };

  const applyMood = (mood) => {
    setSelectedMood(mood.label);
    setCustomMsg(mood.prefix);
    textareaRef.current?.focus();
  };

  const remaining = CHAR_LIMIT - customMsg.length;
  const barColor  = remaining < 30 ? "#ef4444" : remaining < 80 ? "#f59e0b" : "#25D366";

  return (
    <>
      <style>{`
        @keyframes wa-fade-up {
          from { opacity:0; transform:translateY(14px) scale(0.96); }
          to   { opacity:1; transform:translateY(0)    scale(1); }
        }
        @keyframes wa-item-in {
          from { opacity:0; transform:translateX(8px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes wa-pulse-ring {
          0%   { transform:scale(1);   opacity:0.55; }
          100% { transform:scale(2.1); opacity:0; }
        }
        @keyframes wa-sent {
          0%  { transform:scale(0.8); opacity:0; }
          60% { transform:scale(1.15); }
          100%{ transform:scale(1);   opacity:1; }
        }
        .wa-popup    { animation: wa-fade-up 0.28s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        .wa-item     { animation: wa-item-in 0.22s ease forwards; opacity:0; }
        .wa-pulse    { animation: wa-pulse-ring 1.7s ease-out infinite; }
        .wa-sent-a   { animation: wa-sent 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        .wa-btn:hover .wa-icon { transform: scale(1.1) rotate(-6deg); }
        .wa-icon     { transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1); display:flex; }
        .wa-msg-btn  { transition: background .15s, transform .15s, border-color .15s; }
        .wa-msg-btn:hover { transform: translateX(3px); }
        .wa-mood-btn { transition: all .15s ease; }
        .wa-mood-btn:hover { transform: translateY(-2px); }
        .wa-tab      { transition: all .15s ease; }
        .wa-textarea { transition: border-color .15s, box-shadow .15s; }
        .wa-textarea:focus { outline:none; border-color:#25D366; box-shadow:0 0 0 3px rgba(37,211,102,0.15); }
        .wa-send-btn { transition: all .18s ease; }
        .wa-send-btn:hover:not(:disabled) { transform:translateY(-1px); box-shadow:0 6px 20px rgba(37,211,102,0.35); }
        .wa-send-btn:active:not(:disabled) { transform:scale(0.97); }
        .wa-char-bar { transition: width .2s ease, background .3s ease; }
      `}</style>

      <div ref={ref} className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">

        {/* ── Popup ── */}
        {open && (
          <div className="wa-popup bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100" style={{ width: 288 }}>

            {/* Header */}
            <div className="px-4 py-3 flex items-center gap-3" style={{ background: "linear-gradient(135deg,#25D366 0%,#128C7E 100%)" }}>
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 text-white">
                {WA_SVG}
              </div>
              <div>
                <p className="text-white font-semibold text-sm leading-tight">Chat with us</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-300 inline-block" />
                  <p className="text-white/75 text-xs">Online · Replies instantly</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="ml-auto text-white/60 hover:text-white text-xl leading-none transition-colors pb-0.5">×</button>
            </div>

            {/* Tabs */}
            <div className="flex bg-gray-50 border-b border-gray-100">
              {[
                { id: "quick",   icon: "⚡", label: "Quick Reply" },
                { id: "compose", icon: "✏️", label: "Write Your Own" },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`wa-tab flex-1 py-2.5 text-xs font-semibold flex items-center justify-center gap-1 ${
                    activeTab === tab.id
                      ? "text-green-700 bg-white border-b-2 border-green-500"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>

            {/* ── Quick Tab ── */}
            {activeTab === "quick" && (
              <div className="p-3 flex flex-col gap-1.5">
                <p className="text-xs text-gray-400 font-medium px-1 mb-0.5">Choose a message to start:</p>
                {QUICK_MESSAGES.map((msg, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(msg.text)}
                    className="wa-item wa-msg-btn text-left px-3 py-2.5 rounded-xl text-sm text-gray-700 bg-gray-50 hover:bg-green-50 hover:text-green-800 border border-transparent hover:border-green-200 flex items-center gap-2.5"
                    style={{ animationDelay: `${i * 55}ms` }}
                  >
                    <span className="text-base flex-shrink-0">{msg.emoji}</span>
                    <span className="leading-snug">{msg.text}</span>
                  </button>
                ))}
              </div>
            )}

            {/* ── Compose Tab ── */}
            {activeTab === "compose" && (
              <div className="p-3 flex flex-col gap-2.5">

                {/* Mood picker */}
                <div>
                  <p className="text-xs text-gray-400 font-medium mb-1.5">Set the tone:</p>
                  <div className="grid grid-cols-4 gap-1.5">
                    {MOOD_OPTIONS.map(mood => (
                      <button
                        key={mood.label}
                        onClick={() => applyMood(mood)}
                        className={`wa-mood-btn flex flex-col items-center py-2 rounded-xl border ${
                          selectedMood === mood.label
                            ? "bg-green-50 border-green-300 text-green-700"
                            : "bg-gray-50 border-gray-100 text-gray-500 hover:border-gray-200"
                        }`}
                      >
                        <span className="text-lg leading-none">{mood.icon}</span>
                        <span className="font-medium mt-0.5" style={{ fontSize: 10 }}>{mood.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Textarea */}
                <div>
                  <textarea
                    ref={textareaRef}
                    value={customMsg}
                    onChange={e => setCustomMsg(e.target.value.slice(0, CHAR_LIMIT))}
                    placeholder="Type your message here…"
                    rows={4}
                    className="wa-textarea w-full px-3 py-2.5 rounded-xl border border-gray-200 text-gray-700 placeholder-gray-300 resize-none"
                    style={{ fontSize: 13, lineHeight: 1.5 }}
                  />
                  {/* Char bar */}
                  <div className="mt-1 flex items-center gap-2 px-0.5">
                    <div className="flex-1 h-1 rounded-full bg-gray-100 overflow-hidden">
                      <div
                        className="wa-char-bar h-full rounded-full"
                        style={{ width: `${(customMsg.length / CHAR_LIMIT) * 100}%`, background: barColor }}
                      />
                    </div>
                    <span className="text-xs tabular-nums" style={{ color: remaining < 30 ? "#ef4444" : "#d1d5db" }}>{remaining}</span>
                  </div>
                </div>

                {/* Send */}
                <button
                  onClick={() => customMsg.trim() && handleSend(customMsg.trim())}
                  disabled={!customMsg.trim() || sent}
                  className="wa-send-btn w-full py-2.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{ background: "linear-gradient(135deg,#25D366 0%,#128C7E 100%)" }}
                >
                  {sent
                    ? <span className="wa-sent-a">✓ Opening WhatsApp…</span>
                    : <><span className="flex">{WA_SVG}</span> Send on WhatsApp</>
                  }
                </button>

              </div>
            )}
          </div>
        )}

        {/* ── FAB ── */}
        <div className="relative">
          {pulse && (
            <>
              <span className="wa-pulse absolute inset-0 rounded-full" style={{ background: "#25D366", animationDelay: "0s" }} />
              <span className="wa-pulse absolute inset-0 rounded-full" style={{ background: "#25D366", animationDelay: "0.65s" }} />
            </>
          )}
          <button
            onClick={handleToggle}
            aria-label="Open WhatsApp chat"
            className="wa-btn relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer text-white"
            style={{ background: "linear-gradient(135deg,#25D366 0%,#128C7E 100%)" }}
          >
            <span className="wa-icon">{WA_SVG}</span>
          </button>
        </div>

      </div>
    </>
  );
};

export default WhatsAppButton;