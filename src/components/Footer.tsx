"use client";

import Link from "next/link";

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

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--hairline)", paddingBlock: "64px 40px" }}>
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-10">
          <div>
            <Link href="/" className="flex items-center gap-[11px] font-semibold text-[17px] tracking-tight mb-4" style={{ color: "var(--ink)" }}>
              <BrandMark />
              Nexavine
            </Link>
            <p style={{ color: "var(--ink-3)", fontSize: 14.5, maxWidth: 320 }}>
              A boutique AI product studio building workflow automation and intelligent software for logistics, trade and operations teams across Dubai and the UAE.
            </p>
          </div>

          <div>
            <h4 className="mb-[18px]" style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11.5, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-4)", fontWeight: 500 }}>Navigate</h4>
            <ul className="grid gap-3 list-none p-0 m-0">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "#services" },
                { label: "TradeAI", href: "/tradeai" },
                { label: "About", href: "#founder" },
                { label: "Contact", href: "#contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="transition-colors duration-200" style={{ color: "var(--ink-2)", fontSize: 14.5 }}
                    onMouseOver={(e) => (e.currentTarget.style.color = "var(--ink)")}
                    onMouseOut={(e) => (e.currentTarget.style.color = "var(--ink-2)")}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-[18px]" style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11.5, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-4)", fontWeight: 500 }}>Connect</h4>
            <ul className="grid gap-3 list-none p-0 m-0">
              {[
                { label: "LinkedIn", href: "#" },
                { label: "GitHub", href: "#" },
                { label: "hello@nexavine.com", href: "mailto:hello@nexavine.com" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} rel="noopener" className="transition-colors duration-200" style={{ color: "var(--ink-2)", fontSize: 14.5 }}
                    onMouseOver={(e) => (e.currentTarget.style.color = "var(--ink)")}
                    onMouseOut={(e) => (e.currentTarget.style.color = "var(--ink-2)")}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="flex items-center justify-between mt-14 pt-7 flex-wrap gap-[14px]"
          style={{ borderTop: "1px solid var(--hairline)", fontFamily: '"JetBrains Mono", monospace', fontSize: 12, color: "var(--ink-4)" }}
        >
          <span>© 2026 Nexavine Technologies. Dubai, UAE.</span>
          <span>AI Solutions · Product Engineering</span>
        </div>
      </div>
    </footer>
  );
}
