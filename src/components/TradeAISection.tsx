"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const features = [
  {
    title: "Document Intelligence",
    desc: "Extract, classify and validate bills of lading, invoices and customs paperwork automatically.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="w-[15px] h-[15px]"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M8 13h8M8 17h5" /></svg>,
  },
  {
    title: "Shipment Insights",
    desc: "Live visibility into status, ETAs and exceptions across every lane and carrier.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="w-[15px] h-[15px]"><path d="M3 3v18h18" /><path d="M7 14l4-4 3 3 5-6" /></svg>,
  },
  {
    title: "Workflow Automation",
    desc: "Route approvals, trigger follow-ups and resolve routine tasks without manual handoffs.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="w-[15px] h-[15px]"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>,
  },
  {
    title: "Operations Knowledge Assistant",
    desc: "Ask plain-language questions and get answers grounded in your own operating data.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="w-[15px] h-[15px]"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
  },
  {
    title: "Compliance Support",
    desc: "Flag missing documents and regulatory risks before shipments are held up.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="w-[15px] h-[15px]"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" /><path d="M9 12l2 2 4-4" /></svg>,
  },
];

export default function TradeAISection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="tradeai" style={{ background: "var(--bg-2)", borderBlock: "1px solid var(--hairline)", paddingBlock: 132 }}>
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-[60px] items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
          >
            <span className="inline-flex items-center gap-[9px]" style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--violet)" }}>
              <span className="w-[6px] h-[6px] rounded-full" style={{ background: "var(--violet)" }} />
              Flagship Product
            </span>
            <h2 className="mt-[18px]" style={{ fontFamily: '"Newsreader", serif', fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1 }}>
              TradeAI
            </h2>
            <p className="mt-4" style={{ fontSize: 19, color: "var(--ink-2)" }}>
              An AI copilot for trade &amp; logistics operations.
            </p>

            <div className="mt-[34px] grid gap-[2px]">
              {features.map(({ title, desc, icon }) => (
                <div key={title} className="grid gap-[14px] items-start py-4 px-1" style={{ gridTemplateColumns: "auto 1fr", borderTop: "1px solid var(--hairline)" }}>
                  <span className="w-[30px] h-[30px] rounded-[8px] grid place-items-center mt-[1px]" style={{ background: "var(--indigo-soft)", border: "1px solid var(--indigo-line)", color: "var(--indigo)", flexShrink: 0 }}>
                    {icon}
                  </span>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 600 }}>{title}</div>
                    <div style={{ color: "var(--ink-3)", fontSize: 14, marginTop: 3 }}>{desc}</div>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid var(--hairline)" }} />
            </div>

            <div className="flex gap-[13px] mt-[38px] flex-wrap">
              <Link
                href="/tradeai"
                className="inline-flex items-center gap-2 text-[15px] font-semibold px-[22px] py-[13px] rounded-[10px] text-white transition-all duration-200 hover:-translate-y-px"
                style={{ background: "var(--indigo)", border: "1px solid oklch(0.7 0.18 274 / 0.6)" }}
              >
                View Product
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center text-[15px] font-semibold px-[22px] py-[13px] rounded-[10px] transition-all duration-200 hover:-translate-y-px"
                style={{ background: "oklch(1 0 0 / 0.03)", color: "var(--ink)", border: "1px solid var(--hairline-2)" }}
              >
                Request Demo
              </a>
            </div>
          </motion.div>

          {/* Right — product mock */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.12 }}
          >
            <Link href="/tradeai" style={{ display: "block" }}>
              <div
                className="overflow-hidden rounded-[16px]"
                style={{
                  background: "linear-gradient(180deg, oklch(0.205 0.010 271), oklch(0.185 0.010 271))",
                  border: "1px solid var(--hairline-2)",
                  boxShadow: "0 50px 110px -45px oklch(0.55 0.18 280 / 0.55), 0 40px 90px -40px oklch(0 0 0 / 0.7)",
                }}
              >
                <div className="flex items-center gap-[14px] px-4 py-[13px]" style={{ borderBottom: "1px solid var(--hairline)", background: "oklch(1 0 0 / 0.018)" }}>
                  <div className="flex gap-[6px]">
                    {[0,1,2].map(i => <span key={i} className="w-[10px] h-[10px] rounded-full" style={{ background: "oklch(1 0 0 / 0.14)" }} />)}
                  </div>
                  <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11.5, color: "var(--ink-3)", letterSpacing: "0.04em" }}>
                    TradeAI&nbsp;/&nbsp;<b style={{ color: "var(--ink-2)", fontWeight: 500 }}>Document Intelligence</b>
                  </span>
                  <span className="ml-auto inline-flex items-center gap-[7px] px-[10px] py-1 rounded-full" style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: "var(--ink-2)", border: "1px solid var(--hairline)" }}>
                    <span className="w-[6px] h-[6px] rounded-full animate-pulse-dot" style={{ background: "oklch(0.78 0.17 150)" }} />
                    Live
                  </span>
                </div>
                <div className="p-[18px] grid gap-[14px]" style={{ gridTemplateColumns: "1fr 1fr" }}>
                  <div className="col-span-2 h-[150px] rounded-[14px] grid place-items-center" style={{ background: "var(--surface)", border: "1px solid var(--hairline)", backgroundImage: "repeating-linear-gradient(135deg, oklch(1 0 0 / 0.022) 0 12px, transparent 12px 24px)", fontFamily: '"JetBrains Mono", monospace', fontSize: 12, color: "var(--ink-4)", letterSpacing: "0.04em" }}>
                    [ product screenshot ]
                  </div>
                  {[
                    { lbl: "Fields extracted", val: "42", delta: "100% validated" },
                    { lbl: "Confidence", val: "99.4%", delta: "avg per field" },
                  ].map(({ lbl, val, delta }) => (
                    <div key={lbl} className="rounded-[11px] p-[14px]" style={{ background: "oklch(1 0 0 / 0.022)", border: "1px solid var(--hairline)" }}>
                      <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10.5, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink-3)" }}>{lbl}</div>
                      <div style={{ fontFamily: '"Newsreader", serif', fontSize: 27, marginTop: 9, letterSpacing: "-0.01em" }}>{val}</div>
                      <div style={{ fontSize: 12, marginTop: 5, color: "oklch(0.8 0.16 150)" }}>{delta}</div>
                    </div>
                  ))}
                  <div className="col-span-2 rounded-[11px] overflow-hidden" style={{ background: "oklch(1 0 0 / 0.022)", border: "1px solid var(--hairline)" }}>
                    {[
                      { title: "Commercial invoice · INV-90213", sub: "Auto-matched to PO", ok: true },
                      { title: "Certificate of origin", sub: "Flagged for review", ok: false },
                    ].map(({ title, sub, ok }) => (
                      <div key={title} className="grid items-center gap-[10px] px-[14px] py-[11px]" style={{ gridTemplateColumns: "1fr auto", borderBottom: "1px solid var(--hairline)" }}>
                        <div className="flex items-center gap-[11px] min-w-0">
                          <span className="w-[26px] h-[26px] rounded-[7px] flex-none grid place-items-center" style={{ background: "var(--indigo-soft)", border: "1px solid var(--indigo-line)" }}>
                            <span className="w-[9px] h-[9px] rounded-[2px]" style={{ background: "var(--indigo)" }} />
                          </span>
                          <span style={{ fontSize: 13, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                            {title}
                            <small className="block" style={{ color: "var(--ink-3)", fontFamily: '"JetBrains Mono", monospace', fontSize: 10.5, marginTop: 2 }}>{sub}</small>
                          </span>
                        </div>
                        <span className="whitespace-nowrap px-[9px] py-1 rounded-full" style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: "0.04em", textTransform: "uppercase", color: ok ? "oklch(0.82 0.15 150)" : "var(--violet)", border: ok ? "1px solid oklch(0.7 0.15 150 / 0.35)" : "1px solid var(--indigo-line)", background: ok ? "oklch(0.7 0.15 150 / 0.08)" : "var(--indigo-soft)" }}>
                          {ok ? "Cleared" : "Review"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
