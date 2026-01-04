"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

const messages = [
  "Hi, I want to discuss a project 🚀",
  "Hello! I need a website 💻",
  "Hey, can you help with UI/UX design 🎨",
  "Hi, I’d like a quote for my idea 💡",
];

const PHONE_NUMBER = "923241161920"; // without +

const WhatsAppButton = () => {
  const [open, setOpen] = useState(false);

  const handleSend = (msg) => {
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
      msg
    )}`;
    window.open(url, "_blank");
    setOpen(false);
  };

  return (
    <div className="fixed bottom-24 right-8 z-50">
      {/* Options */}
      {open && (
        <div className="mb-3 bg-white shadow-xl rounded-2xl p-3 flex flex-col gap-2 animate-fadeIn">
          {messages.map((msg, i) => (
            <button
              key={i}
              onClick={() => handleSend(msg)}
              className="text-left px-4 py-2 rounded-xl text-sm text-black hover:bg-black hover:text-white transition"
            >
              {msg}
            </button>
          ))}
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:scale-110 transition"
      >
        <MessageCircle size={26} />
      </button>
    </div>
  );
};

export default WhatsAppButton;
