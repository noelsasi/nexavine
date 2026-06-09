"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    num: "01",
    title: "AI Workflow Automation",
    desc: "Automate repetitive business processes using AI-powered workflows and intelligent decision systems — so your team spends time on judgement, not data entry.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5"><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /><path d="M10 6.5h4a3 3 0 0 1 3 3v4" /></svg>,
  },
  {
    num: "02",
    title: "Custom AI Applications",
    desc: "Build AI-powered tools, copilots, assistants, and business applications tailored precisely to how your operations actually run.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5"><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M8 21h8M12 18v3M8 9l-2 2 2 2M16 9l2 2-2 2" /></svg>,
  },
  {
    num: "03",
    title: "Internal Operations Platforms",
    desc: "Modern internal tools and dashboards for operations, logistics, and business teams — replacing spreadsheets and disconnected systems.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>,
  },
  {
    num: "04",
    title: "Product Engineering",
    desc: "End-to-end product development from idea to production — architecture, design, and scalable engineering under one roof.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5"><path d="M12 2l3 6 6 .9-4.5 4.3 1 6.1L12 16.8 6.5 19.3l1-6.1L3 8.9 9 8z" /></svg>,
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" style={{ paddingBlock: 132 }}>
      <div className="mx-auto w-full max-w-[1200px] px-6">
        {/* Head */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          className="max-w-[720px]"
        >
          <Eyebrow num="01">Capabilities</Eyebrow>
          <h2 className="mt-[22px]" style={{ fontFamily: '"Newsreader", serif', fontWeight: 400, letterSpacing: "-0.018em", lineHeight: 1.06, fontSize: "clamp(34px, 4.6vw, 58px)" }}>
            What we build
          </h2>
          <p className="mt-5" style={{ fontSize: "clamp(18px, 1.5vw, 21px)", lineHeight: 1.55, color: "var(--ink-2)" }}>
            Intelligent software, engineered end-to-end — from the automation layer beneath your operations to the products your teams use every day.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-14">
          {services.map(({ num, title, desc, icon }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.1 + (i % 2) * 0.08 }}
              className="rounded-[14px] p-8 flex flex-col min-h-[220px] transition-all duration-[250ms] hover:-translate-y-[3px]"
              style={{ background: "var(--surface)", border: "1px solid var(--hairline)" }}
            >
              <div className="flex items-center">
                <div className="w-[42px] h-[42px] rounded-[11px] grid place-items-center" style={{ background: "var(--surface-2)", border: "1px solid var(--hairline-2)", color: "var(--ink)" }}>
                  {icon}
                </div>
                <span className="ml-auto" style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12, color: "var(--ink-4)" }}>{num}</span>
              </div>
              <h3 className="mt-[22px]" style={{ fontFamily: '"Newsreader", serif', fontSize: 23, fontWeight: 500, letterSpacing: "-0.01em" }}>{title}</h3>
              <p className="mt-3" style={{ color: "var(--ink-2)", fontSize: 15.5 }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Eyebrow({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-[10px]" style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12.5, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ink-3)", fontWeight: 500 }}>
      <span className="inline-block w-[22px] h-[1px]" style={{ background: "var(--indigo-line)" }} />
      <span style={{ color: "var(--indigo)" }}>{num}</span>
      {children}
    </span>
  );
}
