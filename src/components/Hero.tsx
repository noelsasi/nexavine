"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const, delay },
});

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ paddingTop: 168, paddingBottom: 96 }}>
      {/* glow */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          top: -180, right: -120,
          width: 720, height: 720,
          background: "radial-gradient(circle at center, var(--indigo-soft), transparent 62%)",
          filter: "blur(8px)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 grid grid-cols-1 lg:grid-cols-[1.02fr_1.18fr] gap-16 items-center">
        {/* Copy */}
        <motion.div {...fadeUp(0)} className="max-w-[620px]">
          <span
            className="inline-flex items-center gap-[7px] text-[12px] tracking-[0.04em] px-[11px] py-[6px] rounded-full"
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              color: "var(--ink-2)",
              border: "1px solid var(--hairline)",
              background: "oklch(1 0 0 / 0.02)",
            }}
          >
            <span className="w-[6px] h-[6px] rounded-full" style={{ background: "var(--indigo)" }} />
            AI Product Studio · Dubai, UAE
          </span>

          <h1
            className="mt-[26px]"
            style={{
              fontFamily: '"Newsreader", Georgia, serif',
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1.02,
              fontSize: "clamp(40px, 6.2vw, 84px)",
            }}
          >
            AI solutions that automate complex business workflows
          </h1>

          <p className="mt-[26px] max-w-[540px]" style={{ fontSize: "clamp(18px, 1.5vw, 21px)", lineHeight: 1.55, color: "var(--ink-2)" }}>
            We design and build AI-powered products, workflow automation systems, and intelligent business platforms that help companies move faster and operate smarter.
          </p>

          <div className="flex gap-[14px] mt-[38px] flex-wrap">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[15px] font-semibold px-[22px] py-[13px] rounded-[10px] text-white transition-all duration-200 hover:-translate-y-px"
              style={{ background: "var(--indigo)", border: "1px solid oklch(0.7 0.18 274 / 0.6)" }}
            >
              Book a Discovery Call
              <ArrowIcon />
            </a>
            <a
              href="#tradeai"
              className="inline-flex items-center gap-2 text-[15px] font-semibold px-[22px] py-[13px] rounded-[10px] transition-all duration-200 hover:-translate-y-px"
              style={{ background: "oklch(1 0 0 / 0.03)", color: "var(--ink)", border: "1px solid var(--hairline-2)" }}
            >
              Explore TradeAI
            </a>
          </div>

          <div
            className="flex gap-7 mt-[44px] flex-wrap pt-[30px]"
            style={{ borderTop: "1px solid var(--hairline)" }}
          >
            {[
              { num: "7+", lbl: "Years building software" },
              { num: "0→1", lbl: "Products shipped" },
              { num: "Full-stack", lbl: "AI & automation" },
            ].map(({ num, lbl }) => (
              <div key={lbl} className="flex flex-col gap-[3px]">
                <span style={{ fontFamily: '"Newsreader", serif', fontSize: 28, letterSpacing: "-0.01em" }}>{num}</span>
                <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11.5, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-3)" }}>{lbl}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Dashboard mock */}
        <motion.div {...fadeUp(0.12)}>
          <DashboardMock />
        </motion.div>
      </div>
    </section>
  );
}

function DashboardMock() {
  return (
    <div
      className="overflow-hidden rounded-[16px]"
      style={{
        background: "linear-gradient(180deg, oklch(0.205 0.010 271), oklch(0.185 0.010 271))",
        border: "1px solid var(--hairline-2)",
        boxShadow: "0 40px 90px -40px oklch(0 0 0 / 0.7), 0 2px 0 0 oklch(1 0 0 / 0.04) inset",
      }}
    >
      {/* Bar */}
      <div className="flex items-center gap-[14px] px-4 py-[13px]" style={{ borderBottom: "1px solid var(--hairline)", background: "oklch(1 0 0 / 0.018)" }}>
        <div className="flex gap-[6px]">
          {[0, 1, 2].map((i) => <span key={i} className="w-[10px] h-[10px] rounded-full" style={{ background: "oklch(1 0 0 / 0.14)" }} />)}
        </div>
        <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11.5, color: "var(--ink-3)", letterSpacing: "0.04em" }}>
          TradeAI&nbsp;/&nbsp;<b style={{ color: "var(--ink-2)", fontWeight: 500 }}>Operations</b>
        </span>
        <span className="ml-auto inline-flex items-center gap-[7px] px-[10px] py-1 rounded-full" style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: "var(--ink-2)", border: "1px solid var(--hairline)" }}>
          <span className="w-[6px] h-[6px] rounded-full animate-pulse-dot" style={{ background: "oklch(0.78 0.17 150)" }} />
          Live
        </span>
      </div>

      {/* Body */}
      <div className="p-[18px] grid gap-[14px]">
        {/* KPIs */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { lbl: "On-time delivery", val: "98.2%", delta: "▲ 3.4% vs last wk", up: true },
            { lbl: "Docs processed", val: "1,284", delta: "▲ 212 today", up: true },
            { lbl: "Open exceptions", val: "7", delta: "▼ 11 resolved", up: true },
          ].map(({ lbl, val, delta, up }) => (
            <div key={lbl} className="rounded-[11px] p-[14px]" style={{ background: "oklch(1 0 0 / 0.022)", border: "1px solid var(--hairline)" }}>
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10.5, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink-3)" }}>{lbl}</div>
              <div style={{ fontFamily: '"Newsreader", serif', fontSize: 27, marginTop: 9, letterSpacing: "-0.01em" }}>{val}</div>
              <div style={{ fontSize: 12, marginTop: 5, color: up ? "oklch(0.8 0.16 150)" : "var(--ink-3)" }}>{delta}</div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="rounded-[11px] p-4" style={{ background: "oklch(1 0 0 / 0.022)", border: "1px solid var(--hairline)" }}>
          <div className="flex items-center justify-between mb-2">
            <span style={{ fontSize: 13.5, fontWeight: 600 }}>Shipment throughput</span>
            <span className="flex gap-[14px]" style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10.5, color: "var(--ink-3)" }}>
              <span><i className="inline-block w-[9px] h-[2px] mr-[5px] align-middle" style={{ background: "var(--indigo)" }} />Processed</span>
              <span><i className="inline-block w-[9px] h-[2px] mr-[5px] align-middle" style={{ background: "oklch(1 0 0 / 0.22)" }} />Forecast</span>
            </span>
          </div>
          <svg viewBox="0 0 520 116" preserveAspectRatio="none" className="w-full block" style={{ height: 116 }} aria-hidden>
            <g stroke="oklch(1 0 0 / 0.06)" strokeWidth="1">
              <line x1="0" y1="29" x2="520" y2="29" /><line x1="0" y1="58" x2="520" y2="58" /><line x1="0" y1="87" x2="520" y2="87" />
            </g>
            <polyline points="0,92 65,80 130,84 195,60 260,66 325,40 390,46 455,24 520,30" fill="none" stroke="oklch(1 0 0 / 0.18)" strokeWidth="2" strokeDasharray="5 5" />
            <polyline points="0,98 65,88 130,90 195,70 260,74 325,52 390,56 455,34 520,38" fill="none" stroke="var(--indigo)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Queue */}
        <div className="rounded-[11px] overflow-hidden" style={{ background: "oklch(1 0 0 / 0.022)", border: "1px solid var(--hairline)" }}>
          <div className="flex items-center justify-between px-[14px] py-3" style={{ borderBottom: "1px solid var(--hairline)", fontSize: 13, fontWeight: 600 }}>
            Workflow queue
            <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10.5, color: "var(--ink-3)", letterSpacing: "0.05em" }}>AUTO · 4 ACTIVE</span>
          </div>
          {[
            { title: "Bill of lading · MSC-4471", sub: "Document intelligence", status: "Cleared", ok: true },
            { title: "Customs declaration · DXB-2208", sub: "Compliance check", status: "Running", ok: false },
            { title: "Shipment ETA recalculation", sub: "Operations agent", status: "Running", ok: false },
          ].map(({ title, sub, status, ok }) => (
            <div key={title} className="grid items-center gap-[10px] px-[14px] py-[11px]" style={{ gridTemplateColumns: "1fr auto", borderBottom: "1px solid var(--hairline)" }}>
              <div className="flex items-center gap-[11px] min-w-0">
                <QIco />
                <span style={{ fontSize: 13, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {title}
                  <small className="block" style={{ color: "var(--ink-3)", fontFamily: '"JetBrains Mono", monospace', fontSize: 10.5, marginTop: 2 }}>{sub}</small>
                </span>
              </div>
              <Pill ok={ok}>{status}</Pill>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function QIco() {
  return (
    <span className="w-[26px] h-[26px] rounded-[7px] flex-none grid place-items-center" style={{ background: "var(--indigo-soft)", border: "1px solid var(--indigo-line)" }}>
      <span className="w-[9px] h-[9px] rounded-[2px]" style={{ background: "var(--indigo)" }} />
    </span>
  );
}

function Pill({ ok, children }: { ok: boolean; children: React.ReactNode }) {
  return (
    <span
      className="whitespace-nowrap px-[9px] py-1 rounded-full"
      style={{
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: 10,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        color: ok ? "oklch(0.82 0.15 150)" : "var(--violet)",
        border: ok ? "1px solid oklch(0.7 0.15 150 / 0.35)" : "1px solid var(--indigo-line)",
        background: ok ? "oklch(0.7 0.15 150 / 0.08)" : "var(--indigo-soft)",
      }}
    >
      {children}
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
