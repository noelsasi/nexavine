"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "oklch(0.145 0.008 270 / 0.72)" : "transparent",
          backdropFilter: scrolled ? "saturate(140%) blur(14px)" : "none",
          WebkitBackdropFilter: scrolled ? "saturate(140%) blur(14px)" : "none",
          borderBottom: scrolled ? "1px solid var(--hairline)" : "1px solid transparent",
        }}
      >
        <div className="mx-auto w-full max-w-[1200px] px-6 flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center gap-[11px] font-semibold text-[17px] tracking-tight" style={{ color: "var(--ink)" }}>
            <BrandMark />
            Nexavine
          </Link>

          <nav className="hidden md:flex items-center gap-[34px]">
            {["Services", "TradeAI", "Why Nexavine", "About", "Process"].map((item) => (
              <a
                key={item}
                href={item === "TradeAI" ? "#tradeai" : item === "About" ? "#founder" : `#${item.toLowerCase().replace(/\s/g, "")}`}
                className="text-[14.5px] font-medium whitespace-nowrap relative transition-colors duration-200 nav-link"
                style={{ color: "var(--ink-2)" }}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 text-[15px] font-semibold px-[22px] py-[13px] rounded-[10px] text-white transition-all duration-200 hover:-translate-y-px"
              style={{ background: "var(--indigo)", border: "1px solid oklch(0.7 0.18 274 / 0.6)" }}
            >
              Book a Discovery Call
            </a>
            <button
              className="md:hidden flex items-center justify-center p-2 rounded-lg transition-colors"
              style={{ background: "oklch(1 0 0 / 0.03)", border: "1px solid var(--hairline-2)", color: "var(--ink)" }}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={toggleMenu}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="17" x2="21" y2="17" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav */}
      <nav
        className="md:hidden fixed inset-x-0 z-40 transition-all duration-[250ms]"
        style={{
          top: 72,
          bottom: 0,
          background: "oklch(0.145 0.008 270 / 0.97)",
          backdropFilter: "blur(16px)",
          padding: "28px 24px",
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? "none" : "translateY(-12px)",
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        {[
          { label: "Services", href: "#services" },
          { label: "TradeAI", href: "#tradeai" },
          { label: "Why Nexavine", href: "#whynexavine" },
          { label: "About", href: "#founder" },
          { label: "Process", href: "#process" },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            onClick={closeMenu}
            className="block py-[14px] text-[28px]"
            style={{
              fontFamily: '"Newsreader", Georgia, serif',
              borderBottom: "1px solid var(--hairline)",
              color: "var(--ink)",
            }}
          >
            {label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={closeMenu}
          className="mt-6 flex items-center justify-center text-[15px] font-semibold px-[22px] py-[13px] rounded-[10px] text-white w-full"
          style={{ background: "var(--indigo)", border: "1px solid oklch(0.7 0.18 274 / 0.6)" }}
        >
          Book a Discovery Call
        </a>
      </nav>

      <style>{`
        .nav-link::after {
          content: "";
          position: absolute;
          left: 0; bottom: -6px;
          height: 1.5px; width: 0;
          background: var(--indigo);
          transition: width .25s ease;
        }
        .nav-link:hover { color: var(--ink) !important; }
        .nav-link:hover::after { width: 100%; }
      `}</style>
    </>
  );
}

function BrandMark() {
  return (
    <span
      className="relative w-[26px] h-[26px] rounded-[7px] grid place-items-center flex-none"
      style={{ background: "linear-gradient(150deg, var(--indigo), var(--violet))" }}
    >
      <span
        className="absolute"
        style={{
          inset: 6,
          border: "1.5px solid oklch(1 0 0 / 0.9)",
          borderRadius: 3,
          borderRightColor: "transparent",
          borderBottomColor: "transparent",
          transform: "rotate(45deg)",
        }}
      />
    </span>
  );
}
