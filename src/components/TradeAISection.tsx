"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Eyebrow } from "./Services";

export default function ProductsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="tradeai" style={{ background: "var(--bg-2)", borderBlock: "1px solid var(--hairline)", paddingBlock: 132 }}>
      <div className="mx-auto w-full max-w-[1200px] px-6">

        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          className="max-w-[720px] mb-16"
        >
          <Eyebrow num="02">Products</Eyebrow>
          <h2 className="mt-[22px]" style={{ fontFamily: '"Newsreader", serif', fontWeight: 400, letterSpacing: "-0.018em", lineHeight: 1.06, fontSize: "clamp(34px, 4.6vw, 58px)" }}>
            What we&apos;ve shipped
          </h2>
          <p className="mt-5" style={{ fontSize: "clamp(18px, 1.5vw, 21px)", lineHeight: 1.55, color: "var(--ink-2)" }}>
            Purpose-built AI products tackling real operational problems — from logistics intelligence to document automation.
          </p>
        </motion.div>

        {/* Product cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* TradeAI */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.08 }}
            className="rounded-[16px] overflow-hidden flex flex-col"
            style={{ background: "var(--surface)", border: "1px solid var(--hairline)" }}
          >
            {/* Mock */}
            <div className="overflow-hidden" style={{ background: "oklch(0.165 0.009 270)", borderBottom: "1px solid var(--hairline)" }}>
              <div className="flex items-center gap-[14px] px-4 py-[11px]" style={{ borderBottom: "1px solid var(--hairline)", background: "oklch(1 0 0 / 0.02)" }}>
                <div className="flex gap-[5px]">
                  {[0,1,2].map(i => <span key={i} className="w-[8px] h-[8px] rounded-full" style={{ background: "oklch(1 0 0 / 0.14)" }} />)}
                </div>
                <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10.5, color: "var(--ink-3)", letterSpacing: "0.04em" }}>
                  TradeAI&nbsp;/&nbsp;<b style={{ color: "var(--ink-2)", fontWeight: 500 }}>Operations</b>
                </span>
                <span className="ml-auto inline-flex items-center gap-[6px] px-[9px] py-[3px] rounded-full" style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, color: "var(--ink-2)", border: "1px solid var(--hairline)" }}>
                  <span className="w-[5px] h-[5px] rounded-full animate-pulse-dot" style={{ background: "oklch(0.78 0.17 150)" }} />
                  Live
                </span>
              </div>
              <div className="p-4 grid gap-3">
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { lbl: "On-time delivery", val: "98.2%" },
                    { lbl: "Docs processed", val: "1,284" },
                    { lbl: "Open exceptions", val: "7" },
                  ].map(({ lbl, val }) => (
                    <div key={lbl} className="rounded-[9px] p-3" style={{ background: "oklch(1 0 0 / 0.04)", border: "1px solid var(--hairline)" }}>
                      <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 9, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink-4)" }}>{lbl}</div>
                      <div style={{ fontFamily: '"Newsreader", serif', fontSize: 20, marginTop: 6, letterSpacing: "-0.01em" }}>{val}</div>
                    </div>
                  ))}
                </div>
                <div className="rounded-[9px] overflow-hidden" style={{ background: "oklch(1 0 0 / 0.04)", border: "1px solid var(--hairline)" }}>
                  {[
                    { title: "Bill of lading · MSC-4471", sub: "Document intelligence", ok: true },
                    { title: "Customs declaration · DXB-2208", sub: "Compliance check", ok: false },
                    { title: "Shipment ETA recalculation", sub: "Operations agent", ok: false },
                  ].map(({ title, sub, ok }) => (
                    <div key={title} className="flex items-center justify-between gap-2 px-3 py-[9px]" style={{ borderBottom: "1px solid var(--hairline)" }}>
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="w-[18px] h-[18px] rounded-[4px] flex-none grid place-items-center" style={{ background: "var(--indigo-soft)", border: "1px solid var(--indigo-line)" }}>
                          <span className="w-[6px] h-[6px] rounded-[1px]" style={{ background: "var(--indigo)" }} />
                        </span>
                        <span className="truncate" style={{ fontSize: 11, color: "var(--ink-2)" }}>{title}
                          <small className="block" style={{ color: "var(--ink-4)", fontFamily: '"JetBrains Mono", monospace', fontSize: 9 }}>{sub}</small>
                        </span>
                      </div>
                      <span className="flex-none px-2 py-[2px] rounded-full" style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 9, textTransform: "uppercase", color: ok ? "oklch(0.82 0.15 150)" : "var(--violet)", border: ok ? "1px solid oklch(0.7 0.15 150 / 0.35)" : "1px solid var(--indigo-line)", background: ok ? "oklch(0.7 0.15 150 / 0.08)" : "var(--indigo-soft)" }}>
                        {ok ? "Cleared" : "Running"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="p-7 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center gap-[7px] px-3 py-1 rounded-full" style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10.5, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--violet)", border: "1px solid var(--indigo-line)", background: "var(--indigo-soft)" }}>
                  <span className="w-[5px] h-[5px] rounded-full" style={{ background: "var(--violet)" }} />
                  Flagship
                </span>
              </div>
              <h3 style={{ fontFamily: '"Newsreader", serif', fontSize: 28, fontWeight: 400, letterSpacing: "-0.01em" }}>TradeAI</h3>
              <p className="mt-2 mb-6" style={{ color: "var(--ink-2)", fontSize: 15 }}>
                AI copilot for trade &amp; logistics operations — document intelligence, shipment tracking, workflow automation, and compliance support.
              </p>
              <div className="flex gap-3 flex-wrap mt-auto">
                <Link href="/tradeai" className="inline-flex items-center gap-2 text-[14px] font-semibold px-5 py-[11px] rounded-[9px] text-white transition-all duration-200 hover:-translate-y-px"
                  style={{ background: "var(--indigo)", border: "1px solid oklch(0.7 0.18 274 / 0.6)" }}>
                  View Product
                  <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </Link>
                <a href="#contact" className="inline-flex items-center text-[14px] font-semibold px-5 py-[11px] rounded-[9px] transition-all duration-200 hover:-translate-y-px"
                  style={{ background: "oklch(1 0 0 / 0.03)", color: "var(--ink)", border: "1px solid var(--hairline-2)" }}>
                  Request Demo
                </a>
              </div>
            </div>
          </motion.div>

          {/* DocuMind */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.16 }}
            className="rounded-[16px] overflow-hidden flex flex-col"
            style={{ background: "var(--surface)", border: "1px solid var(--hairline)" }}
          >
            {/* Mock — DocuMind UI */}
            <div className="overflow-hidden" style={{ background: "oklch(0.13 0.01 280)", borderBottom: "1px solid var(--hairline)" }}>
              {/* Topbar */}
              <div className="flex items-center justify-between px-4 py-[10px]" style={{ borderBottom: "1px solid oklch(1 0 0 / 0.07)" }}>
                <div className="flex items-center gap-2">
                  <span className="w-[22px] h-[22px] rounded-[6px] grid place-items-center text-white font-bold text-[11px]" style={{ background: "var(--violet)" }}>D</span>
                  <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: "oklch(0.9 0.005 280)", fontWeight: 600 }}>DocuMind</span>
                </div>
                <span className="px-3 py-[3px] rounded-full text-white text-[10px] font-semibold" style={{ background: "var(--violet)" }}>Go to Dashboard</span>
              </div>

              {/* Three-panel layout */}
              <div className="flex" style={{ height: 220 }}>
                {/* Sidebar */}
                <div className="flex flex-col py-3 px-2" style={{ width: 130, borderRight: "1px solid oklch(1 0 0 / 0.07)", flexShrink: 0 }}>
                  <div className="px-2 py-[6px] rounded-[6px] text-white text-[10px] font-semibold mb-3 flex items-center gap-1" style={{ background: "var(--violet)" }}>
                    <span className="text-[12px]">+</span> New document
                  </div>
                  <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 8.5, letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.5 0.01 280)", padding: "0 8px", marginBottom: 6 }}>Documents</div>
                  {[
                    { name: "Master_Agreement.pdf", active: false },
                    { name: "Q3_Service_Contract.pdf", active: true },
                  ].map(({ name, active }) => (
                    <div key={name} className="flex items-center gap-2 px-2 py-[7px] rounded-[6px]" style={{ background: active ? "oklch(1 0 0 / 0.06)" : "transparent" }}>
                      <span className="w-[5px] h-[5px] rounded-full flex-none" style={{ background: active ? "var(--violet)" : "oklch(0.4 0.01 280)" }} />
                      <span className="truncate" style={{ fontSize: 10, color: active ? "oklch(0.9 0.005 280)" : "oklch(0.55 0.01 280)" }}>{name}</span>
                    </div>
                  ))}
                </div>

                {/* Doc preview */}
                <div className="flex-1 flex items-start justify-center pt-3 px-3 overflow-hidden" style={{ borderRight: "1px solid oklch(1 0 0 / 0.07)" }}>
                  <div className="w-full rounded-[4px] p-3" style={{ background: "oklch(0.97 0.003 270)", maxWidth: 180 }}>
                    <div style={{ fontWeight: 700, fontSize: 8, color: "oklch(0.2 0.01 270)", letterSpacing: "0.02em" }}>SERVICE AGREEMENT</div>
                    <div style={{ fontSize: 7, color: "oklch(0.45 0.01 270)", marginTop: 1 }}>Q3 2025 · Ref: SVC-20914</div>
                    <div style={{ height: 1, background: "oklch(0.82 0.005 270)", marginTop: 6, marginBottom: 6 }} />
                    <div style={{ fontSize: 7, color: "oklch(0.45 0.01 270)" }}>PARTIES</div>
                    {[90, 75].map((w, i) => (
                      <div key={i} style={{ height: 4, background: "oklch(0.84 0.005 270)", borderRadius: 2, marginTop: 4, width: `${w}%` }} />
                    ))}
                    <div style={{ fontSize: 7, color: "oklch(0.45 0.01 270)", marginTop: 8 }}>SCOPE OF WORK</div>
                    {[100, 88, 94, 72].map((w, i) => (
                      <div key={i} style={{ height: 4, background: "oklch(0.84 0.005 270)", borderRadius: 2, marginTop: 4, width: `${w}%` }} />
                    ))}
                    <div style={{ fontSize: 7, color: "oklch(0.45 0.01 270)", marginTop: 8 }}>PAYMENT TERMS</div>
                    {[85, 100].map((w, i) => (
                      <div key={i} style={{ height: 4, background: "oklch(0.84 0.005 270)", borderRadius: 2, marginTop: 4, width: `${w}%` }} />
                    ))}
                  </div>
                </div>

                {/* Chat */}
                <div className="flex flex-col py-3 px-3" style={{ width: 180, flexShrink: 0 }}>
                  <div style={{ fontSize: 10, fontWeight: 600, color: "oklch(0.9 0.005 280)", marginBottom: 2 }}>Q3_Service_Contract.pdf</div>
                  <div style={{ fontSize: 9, color: "oklch(0.5 0.01 280)", marginBottom: 10 }}>Ask anything about this document</div>
                  <div className="flex flex-col gap-2 flex-1 overflow-hidden">
                    <div className="self-end px-2 py-[5px] rounded-[8px] text-white text-[9px] max-w-[90%]" style={{ background: "var(--violet)" }}>
                      What are the payment terms?
                    </div>
                    <div className="self-start px-2 py-[5px] rounded-[8px] text-[9px] max-w-[95%]" style={{ background: "oklch(1 0 0 / 0.06)", color: "oklch(0.75 0.005 280)" }}>
                      Payment is due net-30 from invoice date. Late fees of 1.5% apply monthly.
                    </div>
                    <div className="self-end px-2 py-[5px] rounded-[8px] text-white text-[9px] max-w-[90%]" style={{ background: "var(--violet)" }}>
                      Any termination clauses?
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="p-7 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center gap-[7px] px-3 py-1 rounded-full" style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10.5, letterSpacing: "0.08em", textTransform: "uppercase", color: "oklch(0.72 0.18 300)", border: "1px solid oklch(0.645 0.196 300 / 0.35)", background: "oklch(0.645 0.196 300 / 0.1)" }}>
                  <span className="w-[5px] h-[5px] rounded-full" style={{ background: "var(--violet)" }} />
                  Live
                </span>
              </div>
              <h3 style={{ fontFamily: '"Newsreader", serif', fontSize: 28, fontWeight: 400, letterSpacing: "-0.01em" }}>DocuMind</h3>
              <p className="mt-2 mb-6" style={{ color: "var(--ink-2)", fontSize: 15 }}>
                Upload any PDF and instantly extract insights, answer questions, and integrate with your workflows. Built for teams that move fast.
              </p>
              <div className="flex gap-3 flex-wrap mt-auto">
                <a href="https://docai.nexavinetech.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[14px] font-semibold px-5 py-[11px] rounded-[9px] text-white transition-all duration-200 hover:-translate-y-px"
                  style={{ background: "var(--violet)", border: "1px solid oklch(0.7 0.18 300 / 0.6)" }}>
                  Try DocuMind
                  <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
                <a href="#contact" className="inline-flex items-center text-[14px] font-semibold px-5 py-[11px] rounded-[9px] transition-all duration-200 hover:-translate-y-px"
                  style={{ background: "oklch(1 0 0 / 0.03)", color: "var(--ink)", border: "1px solid var(--hairline-2)" }}>
                  Request Demo
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
