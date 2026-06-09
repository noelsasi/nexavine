"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    num: "7+",
    lbl: "Years building software products",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="w-[17px] h-[17px]">
        <path d="M12 2v20M2 7l10-5 10 5M4 10v7M20 10v7M2 21h20" />
      </svg>
    ),
  },
  {
    num: "End‑to‑end",
    lbl: "Full-stack product expertise",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="w-[17px] h-[17px]">
        <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M8 4v16" />
      </svg>
    ),
  },
  {
    num: "AI + Auto",
    lbl: "AI & workflow automation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="w-[17px] h-[17px]">
        <circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
      </svg>
    ),
  },
  {
    num: "Idea→Prod",
    lbl: "End-to-end product development",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="w-[17px] h-[17px]">
        <path d="M3 3v18h18" /><path d="M7 14l4-4 3 3 5-6" />
      </svg>
    ),
  },
];

export default function Trust() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} style={{ background: "var(--bg-2)", borderBlock: "1px solid var(--hairline)", paddingBlock: 88 }}>
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(({ num, lbl, icon }, i) => (
            <motion.div
              key={lbl}
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" as const, delay: i * 0.08 }}
              className="rounded-[14px] p-[26px] transition-all duration-[250ms] hover:-translate-y-[3px]"
              style={{ background: "var(--surface)", border: "1px solid var(--hairline)" }}
            >
              <div
                className="w-[34px] h-[34px] rounded-[9px] grid place-items-center mb-[18px]"
                style={{ background: "var(--indigo-soft)", border: "1px solid var(--indigo-line)", color: "var(--indigo)" }}
              >
                {icon}
              </div>
              <div style={{ fontFamily: '"Newsreader", Georgia, serif', fontSize: 38, letterSpacing: "-0.02em" }}>{num}</div>
              <div style={{ color: "var(--ink-2)", fontSize: 14.5, marginTop: 8, lineHeight: 1.45 }}>{lbl}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
