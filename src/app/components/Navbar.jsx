// components/Navbar.jsx
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import NavOverlay from "./Navoverlay";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4">
        <span className="text-white font-bold">LOGO</span>

        <button
          onClick={() => setOpen(true)}
          className="text-black"
        >
          <Menu size={28} />
        </button>
      </nav>

      <NavOverlay open={open} setOpen={setOpen} />
    </>
  );
}
