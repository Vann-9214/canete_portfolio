// Header
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Navbar
export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  // Scroll handler
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
        setIsOpen(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed md:left-8 md:right-8 top-7.5 left-5 right-5 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-[200%]"
      }`}
    >
      {/* Main Bar */}
      <div className="h-[50px] md:h-[70px] w-full bg-white/90 backdrop-blur-xl px-[25px] md:px-[40px] rounded-full flex justify-between items-center shadow-sm border border-white/20 relative z-50 transition-all duration-300">
        <div className="text-[22px] md:text-[26px] font-bold tracking-tighter text-[#2D3436]">
          ICC
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="font-semibold text-[#2D3436]/80 hover:text-[#2D3436] text-sm transition-colors"
          >
            Home
          </Link>
          <Link
            href="#project"
            className="font-semibold text-[#2D3436]/80 hover:text-[#2D3436] text-sm transition-colors"
          >
            Project
          </Link>
          <Link
            href="#connect"
            className="font-semibold text-[#2D3436]/80 hover:text-[#2D3436] text-sm transition-colors"
          >
            Connect
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 text-[#2D3436] focus:outline-none md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-[60px] right-0 w-[160px] bg-gradient-to-b from-white to-[#B9E2FE] rounded-2xl shadow-lg border border-white/20 p-5 flex flex-col gap-6 z-40 md:hidden">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="font-semibold text-[#2D3436]/80 active:text-[#2D3436] text-sm text-left transition-colors"
          >
            Home
          </Link>
          <Link
            href="#project"
            onClick={() => setIsOpen(false)}
            className="font-semibold text-[#2D3436]/80 active:text-[#2D3436] text-sm text-left transition-colors"
          >
            Project
          </Link>
          <Link
            href="#connect"
            onClick={() => setIsOpen(false)}
            className="font-semibold text-[#2D3436]/80 active:text-[#2D3436] text-sm text-left transition-colors"
          >
            Connect
          </Link>
        </div>
      )}
    </nav>
  );
};
