"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

type View = "ops" | "docs" | "ship" | "assist" | "comp";

const navItems: { id: View; label: string; icon: React.ReactNode }[] = [
  {
    id: "ops",
    label: "Operations",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="w-[18px] h-[18px]"><rect x="3" y="3" width="7" height="9" rx="1.5" /><rect x="14" y="3" width="7" height="5" rx="1.5" /><rect x="14" y="12" width="7" height="9" rx="1.5" /><rect x="3" y="16" width="7" height="5" rx="1.5" /></svg>,
  },
  {
    id: "docs",
    label: "Document Intelligence",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="w-[18px] h-[18px]"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M8 13h8M8 17h5" /></svg>,
  },
  {
    id: "ship",
    label: "Shipments",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="w-[18px] h-[18px]"><path d="M3 13l2-5h11l3 5M3 13v5h18v-5M3 13h18M7 18v2M17 18v2" /><circle cx="7.5" cy="13" r="0.5" /></svg>,
  },
  {
    id: "assist",
    label: "Operations Assistant",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="w-[18px] h-[18px]"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
  },
  {
    id: "comp",
    label: "Compliance",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="w-[18px] h-[18px]"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" /><path d="M9 12l2 2 4-4" /></svg>,
  },
];

const meta: Record<View, [string, string]> = {
  ops:    ["Operations", "Live overview · last sync 2 min ago"],
  docs:   ["Document Intelligence", "bill_of_lading_MSC-4471.pdf · 42 fields extracted"],
  ship:   ["Shipments", "6 active shipments across 5 lanes"],
  assist: ["Operations Assistant", "Grounded in your live operating data"],
  comp:   ["Compliance", "Shipment DXB-2208 · 3 items need attention"],
};

export default function TradeAIApp() {
  const [view, setView] = useState<View>("ops");

  return (
    <div className="flex min-h-screen" style={{ background: "var(--bg)" }}>
      <Sidebar view={view} onSelect={setView} />
      <div className="flex flex-col flex-1 min-w-0">
        <Topbar view={view} />
        <main className="flex-1">
          {view === "ops"    && <OpsView />}
          {view === "docs"   && <DocsView />}
          {view === "ship"   && <ShipView />}
          {view === "assist" && <AssistView />}
          {view === "comp"   && <CompView />}
        </main>
      </div>
    </div>
  );
}

function Sidebar({ view, onSelect }: { view: View; onSelect: (v: View) => void }) {
  return (
    <aside
      className="hidden md:flex flex-col sticky top-0 h-screen"
      style={{ width: 244, borderRight: "1px solid var(--hairline)", background: "oklch(0.165 0.009 270)", padding: "20px 14px" }}
    >
      <Link href="/" className="flex items-center gap-[11px] font-semibold text-[16px] pb-[22px] px-[10px]" style={{ color: "var(--ink)" }}>
        <BrandMark />
        TradeAI
      </Link>

      <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10.5, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-4)", padding: "0 10px", margin: "14px 0 8px" }}>
        Workspace
      </div>

      <nav className="grid gap-[3px]">
        {navItems.map(({ id, label, icon }) => (
          <button
            key={id}
            onClick={() => onSelect(id)}
            className="flex items-center gap-3 px-[11px] py-[10px] rounded-[9px] w-full text-left transition-all duration-[180ms]"
            style={{
              fontFamily: '"Hanken Grotesk", system-ui, sans-serif',
              fontSize: 14.5,
              fontWeight: 500,
              background: view === id ? "var(--indigo-soft)" : "none",
              color: view === id ? "var(--ink)" : "var(--ink-2)",
              border: view === id ? "1px solid var(--indigo-line)" : "1px solid transparent",
            }}
          >
            <span style={{ color: view === id ? "var(--indigo)" : undefined, opacity: view === id ? 1 : 0.85 }}>{icon}</span>
            {label}
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-[14px]" style={{ borderTop: "1px solid var(--hairline)" }}>
        <Link
          href="/"
          className="flex items-center gap-2 px-[11px] py-[9px] rounded-[9px] text-[13px] transition-all duration-[180ms] hover:bg-[oklch(1_0_0_/_0.04)]"
          style={{ color: "var(--ink-3)" }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[15px] h-[15px]"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
          Back to Nexavine
        </Link>
        <div className="flex items-center gap-[11px] px-[10px] py-2 mt-1">
          <span className="w-[34px] h-[34px] rounded-[9px] flex-none" style={{ background: "linear-gradient(150deg, var(--indigo), var(--violet))" }} />
          <div>
            <div style={{ fontSize: 13.5, fontWeight: 600 }}>Operations</div>
            <div style={{ fontSize: 11.5, color: "var(--ink-3)", fontFamily: '"JetBrains Mono", monospace' }}>Gulf Freight Co.</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function Topbar({ view }: { view: View }) {
  const [title, sub] = meta[view];
  return (
    <header
      className="flex items-center gap-[18px] sticky top-0 z-20"
      style={{
        padding: "18px 32px",
        borderBottom: "1px solid var(--hairline)",
        background: "oklch(0.145 0.008 270 / 0.85)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="flex-none">
        <div style={{ fontFamily: '"Newsreader", Georgia, serif', fontSize: 24, fontWeight: 500, letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>{title}</div>
        <div style={{ fontSize: 13, color: "var(--ink-3)", marginTop: 1 }}>{sub}</div>
      </div>
      <div
        className="ml-auto flex items-center gap-[9px] overflow-hidden"
        style={{ padding: "9px 14px", border: "1px solid var(--hairline)", borderRadius: 9, background: "oklch(1 0 0 / 0.02)", color: "var(--ink-4)", fontSize: 13.5, maxWidth: 240, whiteSpace: "nowrap" }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[15px] h-[15px] flex-none"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4-4" /></svg>
        Search shipments, docs…
        <kbd className="ml-auto" style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, border: "1px solid var(--hairline)", borderRadius: 5, padding: "1px 6px", color: "var(--ink-3)" }}>⌘K</kbd>
      </div>
      <span className="hidden lg:flex items-center gap-2 px-3 py-[5px] rounded-full" style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: "0.04em", color: "var(--ink-3)", border: "1px dashed var(--hairline-2)" }}>
        <span className="w-[6px] h-[6px] rounded-full" style={{ background: "var(--indigo)" }} />
        Interactive demo
      </span>
      <Link
        href="#contact"
        className="flex-none flex items-center text-[15px] font-semibold px-[22px] py-[13px] rounded-[10px] text-white transition-all duration-200 hover:-translate-y-px"
        style={{ background: "var(--indigo)", border: "1px solid oklch(0.7 0.18 274 / 0.6)" }}
      >
        Request Demo
      </Link>
    </header>
  );
}

/* ===== OPS VIEW ===== */
function OpsView() {
  return (
    <div className="p-8 grid gap-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { lbl: "On-time delivery", val: "98.2%", delta: "▲ 3.4% vs last week", up: true },
          { lbl: "Documents processed", val: "1,284", delta: "▲ 212 today", up: true },
          { lbl: "Open exceptions", val: "7", delta: "11 resolved automatically", up: false },
        ].map(({ lbl, val, delta, up }) => (
          <div key={lbl} className="rounded-[14px] p-5" style={{ background: "var(--surface)", border: "1px solid var(--hairline)" }}>
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink-3)" }}>{lbl}</div>
            <div style={{ fontFamily: '"Newsreader", serif', fontSize: 36, letterSpacing: "-0.01em", marginTop: 10 }}>{val}</div>
            <div style={{ fontSize: 12.5, marginTop: 6, color: up ? "oklch(0.8 0.16 150)" : "var(--ink-3)" }}>{delta}</div>
          </div>
        ))}
      </div>

      <div className="rounded-[14px] p-[22px]" style={{ background: "var(--surface)", border: "1px solid var(--hairline)" }}>
        <div className="flex items-center justify-between mb-[6px]">
          <div>
            <div style={{ fontWeight: 600, fontSize: 15 }}>Shipment throughput</div>
            <div style={{ fontSize: 12.5, color: "var(--ink-3)", marginTop: 2 }}>Containers cleared per day · last 9 weeks</div>
          </div>
          <span className="flex gap-4" style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: "var(--ink-3)" }}>
            <span><i className="inline-block w-[10px] h-[2px] mr-[6px] align-middle" style={{ background: "var(--indigo)" }} />Processed</span>
            <span><i className="inline-block w-[10px] h-[2px] mr-[6px] align-middle" style={{ background: "oklch(1 0 0 / 0.25)" }} />Forecast</span>
          </span>
        </div>
        <svg viewBox="0 0 900 220" preserveAspectRatio="none" className="w-full block" style={{ height: 220 }} aria-hidden>
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="oklch(0.625 0.196 274 / 0.28)" />
              <stop offset="1" stopColor="oklch(0.625 0.196 274 / 0)" />
            </linearGradient>
          </defs>
          <g stroke="oklch(1 0 0 / 0.06)" strokeWidth="1">
            <line x1="0" y1="44" x2="900" y2="44" /><line x1="0" y1="98" x2="900" y2="98" /><line x1="0" y1="152" x2="900" y2="152" />
          </g>
          <polygon points="0,180 112,162 225,168 337,128 450,138 562,92 675,100 787,58 900,70 900,210 0,210" fill="url(#g1)" />
          <polyline points="0,150 112,135 225,140 337,108 450,116 562,80 675,88 787,52 900,62" fill="none" stroke="oklch(1 0 0 / 0.2)" strokeWidth="2" strokeDasharray="6 6" />
          <polyline points="0,180 112,162 225,168 337,128 450,138 562,92 675,100 787,58 900,70" fill="none" stroke="var(--indigo)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <QueueCard title="Workflow queue" badge="AUTO · 4 ACTIVE" rows={[
          { title: "Bill of lading · MSC-4471", sub: "Document intelligence", status: "Cleared", ok: true },
          { title: "Customs declaration · DXB-2208", sub: "Compliance check", status: "Running", ok: false },
          { title: "Shipment ETA recalculation", sub: "Operations agent", status: "Running", ok: false },
          { title: "Invoice ↔ PO reconciliation", sub: "Finance workflow", status: "Cleared", ok: true },
        ]} />
        <QueueCard title="Exceptions needing attention" rows={[
          { title: "Missing certificate of origin", sub: "Shipment DXB-2208 · held", status: "Review", warn: true },
          { title: "HS code mismatch", sub: "Invoice INV-90213", status: "Review", warn: true },
          { title: "Demurrage risk · 2 days to free-time", sub: "Container TGHU-7781", status: "Watch", warn: true },
        ]} />
      </div>
    </div>
  );
}

function QueueCard({ title, badge, rows }: { title: string; badge?: string; rows: { title: string; sub: string; status: string; ok?: boolean; warn?: boolean }[] }) {
  return (
    <div className="rounded-[14px] overflow-hidden" style={{ background: "var(--surface)", border: "1px solid var(--hairline)" }}>
      <div className="flex items-center justify-between px-[18px] py-4" style={{ borderBottom: "1px solid var(--hairline)", fontWeight: 600, fontSize: 14.5 }}>
        {title}
        {badge && <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10.5, color: "var(--ink-3)", letterSpacing: "0.05em" }}>{badge}</span>}
      </div>
      {rows.map(({ title, sub, status, ok, warn }) => (
        <div key={title} className="grid items-center gap-[10px] px-[18px] py-[11px]" style={{ gridTemplateColumns: "1fr auto", borderBottom: "1px solid var(--hairline)" }}>
          <div className="flex items-center gap-[11px] min-w-0">
            <span
              className="w-[26px] h-[26px] rounded-[7px] flex-none grid place-items-center"
              style={{
                background: warn ? "oklch(0.78 0.13 75 / 0.14)" : "var(--indigo-soft)",
                border: warn ? "1px solid oklch(0.78 0.13 75 / 0.4)" : "1px solid var(--indigo-line)",
              }}
            >
              <span className="w-[9px] h-[9px] rounded-[2px]" style={{ background: warn ? "oklch(0.82 0.13 75)" : "var(--indigo)" }} />
            </span>
            <span style={{ fontSize: 13, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {title}
              <small className="block" style={{ color: "var(--ink-3)", fontFamily: '"JetBrains Mono", monospace', fontSize: 10.5, marginTop: 2 }}>{sub}</small>
            </span>
          </div>
          <span
            className="whitespace-nowrap px-[9px] py-1 rounded-full"
            style={{
              fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: "0.04em", textTransform: "uppercase",
              color: ok ? "oklch(0.82 0.15 150)" : warn ? "oklch(0.82 0.13 75)" : "var(--violet)",
              border: ok ? "1px solid oklch(0.7 0.15 150 / 0.35)" : warn ? "1px solid oklch(0.78 0.13 75 / 0.4)" : "1px solid var(--indigo-line)",
              background: ok ? "oklch(0.7 0.15 150 / 0.08)" : warn ? "oklch(0.78 0.13 75 / 0.1)" : "var(--indigo-soft)",
            }}
          >
            {status}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ===== DOCS VIEW ===== */
function DocsView() {
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-4 items-start">
        {/* Document */}
        <div className="rounded-[14px] overflow-hidden" style={{ background: "var(--surface)", border: "1px solid var(--hairline)" }}>
          <div className="flex items-center gap-[10px] px-4 py-3" style={{ borderBottom: "1px solid var(--hairline)", fontSize: 13 }}>
            <span className="w-[22px] h-[22px] rounded-[5px] grid place-items-center" style={{ background: "var(--indigo-soft)", border: "1px solid var(--indigo-line)" }}>
              <span className="w-[8px] h-[8px] rounded-[2px]" style={{ background: "var(--indigo)" }} />
            </span>
            <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12.5 }}>bill_of_lading_MSC-4471.pdf</span>
            <span className="ml-auto whitespace-nowrap px-[9px] py-1 rounded-full" style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: "0.04em", textTransform: "uppercase", color: "oklch(0.82 0.15 150)", border: "1px solid oklch(0.7 0.15 150 / 0.35)", background: "oklch(0.7 0.15 150 / 0.08)" }}>
              Extracted · 42 fields
            </span>
          </div>
          <div className="p-6" style={{ background: "oklch(1 0 0 / 0.015)" }}>
            <div className="rounded-[6px] p-[26px]" style={{ background: "oklch(0.96 0.004 270)", color: "oklch(0.2 0.01 270)", aspectRatio: "1/1.18", boxShadow: "0 20px 50px -30px oklch(0 0 0 / 0.6)" }}>
              <div className="flex justify-between items-start pb-3" style={{ borderBottom: "2px solid oklch(0.2 0.01 270)" }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, letterSpacing: "-0.01em" }}>MEDITERRANEAN SHIPPING</div>
                  <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "oklch(0.45 0.01 270)" }}>Bill of Lading</div>
                </div>
                <div style={{ textAlign: "right", fontSize: 10, color: "oklch(0.5 0.01 270)" }}>No. <span style={{ background: "var(--indigo-soft)", boxShadow: "0 0 0 2px var(--indigo-line)", borderRadius: 3, padding: "0 3px" }}>MSC-4471</span></div>
              </div>
              {[
                { k: "Shipper", v: "Gulf Freight Co. FZE" },
                { k: "Consignee", v: "Levant Trading LLC" },
                { k: "Port of Loading", v: "Jebel Ali (AEJEA)", hl: true },
                { k: "Port of Discharge", v: "Beirut (LBBEY)" },
                { k: "Container", v: "TGHU-7781·40HC", hl: true },
              ].map(({ k, v, hl }) => (
                <div key={k} className="flex justify-between gap-4 mt-3" style={{ fontSize: 11.5, alignItems: "baseline" }}>
                  <span style={{ color: "oklch(0.5 0.01 270)", whiteSpace: "nowrap" }}>{k}</span>
                  <span style={{ fontWeight: 600, ...(hl ? { background: "var(--indigo-soft)", boxShadow: "0 0 0 2px var(--indigo-line)", borderRadius: 3, padding: "0 3px" } : {}) }}>{v}</span>
                </div>
              ))}
              <div className="mt-[18px]">
                {[null, null, "60%"].map((w, i) => (
                  <div key={i} style={{ height: 7, background: "oklch(0.86 0.005 270)", borderRadius: 3, marginTop: 8, width: w || "100%" }} />
                ))}
              </div>
              <div className="mt-[18px] pt-3 grid gap-3" style={{ borderTop: "1px solid oklch(0.85 0.005 270)" }}>
                {[{ k: "Gross Weight", v: "18,420 kg" }, { k: "Freight Terms", v: "Prepaid" }].map(({ k, v }) => (
                  <div key={k} className="flex justify-between" style={{ fontSize: 11.5 }}>
                    <span style={{ color: "oklch(0.5 0.01 270)" }}>{k}</span>
                    <span style={{ fontWeight: 600 }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Fields */}
        <div className="rounded-[14px] overflow-hidden" style={{ background: "var(--surface)", border: "1px solid var(--hairline)" }}>
          <div className="flex items-center justify-between px-[18px] py-[14px]" style={{ borderBottom: "1px solid var(--hairline)" }}>
            <span style={{ fontWeight: 600, fontSize: 14.5 }}>Extracted fields</span>
            <span className="whitespace-nowrap px-[9px] py-1 rounded-full" style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--violet)", border: "1px solid var(--indigo-line)", background: "var(--indigo-soft)" }}>AI verified</span>
          </div>
          {[
            { k: "B/L Number", v: "MSC-4471", pct: 99 },
            { k: "Port of Loading", v: "Jebel Ali (AEJEA)", pct: 98 },
            { k: "Container No.", v: "TGHU-7781 · 40HC", pct: 97 },
            { k: "Consignee", v: "Levant Trading LLC", pct: 96 },
            { k: "Gross Weight", v: "18,420 kg", pct: 94 },
            { k: "Freight Terms", v: "Prepaid", pct: 99 },
          ].map(({ k, v, pct }) => (
            <div key={k} className="px-[18px] py-[13px]" style={{ borderBottom: "1px solid var(--hairline)" }}>
              <div className="flex items-center justify-between">
                <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--ink-3)" }}>{k}</span>
                <span className="flex items-center gap-2" style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, color: "var(--ink-3)" }}>
                  <span className="overflow-hidden rounded-[3px]" style={{ width: 54, height: 4, background: "oklch(1 0 0 / 0.1)" }}>
                    <span className="block h-full rounded-[3px]" style={{ width: `${pct}%`, background: "oklch(0.78 0.15 150)" }} />
                  </span>
                  {pct}%
                </span>
              </div>
              <div style={{ fontSize: 14.5, fontWeight: 600, marginTop: 4 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ===== SHIPMENTS VIEW ===== */
function ShipView() {
  const rows = [
    { id: "MSC-4471", lane: ["Jebel Ali", "Beirut"], carrier: "MSC", eta: "Jun 09", status: "On track", ok: true },
    { id: "DXB-2208", lane: ["Jebel Ali", "Jeddah"], carrier: "CMA CGM", eta: "Jun 11", status: "Held", held: true },
    { id: "MAEU-1190", lane: ["Khalifa Port", "Mumbai"], carrier: "Maersk", eta: "Jun 12", status: "On track", ok: true },
    { id: "HLCU-3325", lane: ["Jebel Ali", "Dammam"], carrier: "Hapag-Lloyd", eta: "Jun 10", status: "In transit", transit: true },
    { id: "ONEY-8842", lane: ["Sharjah", "Karachi"], carrier: "ONE", eta: "Jun 14", status: "On track", ok: true },
    { id: "COSU-5503", lane: ["Jebel Ali", "Doha"], carrier: "COSCO", eta: "Jun 08", status: "In transit", transit: true },
  ];
  return (
    <div className="p-8">
      <div className="rounded-[14px] overflow-hidden" style={{ background: "var(--surface)", border: "1px solid var(--hairline)" }}>
        <table className="w-full" style={{ borderCollapse: "collapse", fontSize: 14 }}>
          <thead>
            <tr>
              {["Shipment", "Lane", "Carrier", "ETA", "Status"].map((h) => (
                <th key={h} style={{ textAlign: "left", fontFamily: '"JetBrains Mono", monospace', fontSize: 10.5, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-4)", fontWeight: 500, padding: "0 16px 14px", borderBottom: "1px solid var(--hairline)" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(({ id, lane, carrier, eta, status, ok, held, transit }) => (
              <tr key={id} className="transition-colors duration-150 hover:bg-[oklch(1_0_0_/_0.022)]">
                <td style={{ padding: "15px 16px", borderBottom: "1px solid var(--hairline)", fontFamily: '"JetBrains Mono", monospace', fontSize: 12.5, color: "var(--ink)" }}>{id}</td>
                <td style={{ padding: "15px 16px", borderBottom: "1px solid var(--hairline)", color: "var(--ink-2)" }}>
                  <span className="inline-flex items-center gap-2">{lane[0]} <span style={{ color: "var(--ink-4)" }}>→</span> {lane[1]}</span>
                </td>
                <td style={{ padding: "15px 16px", borderBottom: "1px solid var(--hairline)", color: "var(--ink-2)" }}>{carrier}</td>
                <td style={{ padding: "15px 16px", borderBottom: "1px solid var(--hairline)", color: "var(--ink-2)" }}>{eta}</td>
                <td style={{ padding: "15px 16px", borderBottom: "1px solid var(--hairline)" }}>
                  <span className="whitespace-nowrap px-[9px] py-1 rounded-full" style={{
                    fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: "0.04em", textTransform: "uppercase",
                    color: ok ? "oklch(0.82 0.15 150)" : held ? "oklch(0.82 0.13 75)" : "var(--violet)",
                    border: ok ? "1px solid oklch(0.7 0.15 150 / 0.35)" : held ? "1px solid oklch(0.78 0.13 75 / 0.4)" : "1px solid var(--indigo-line)",
                    background: ok ? "oklch(0.7 0.15 150 / 0.08)" : held ? "oklch(0.78 0.13 75 / 0.1)" : "var(--indigo-soft)",
                  }}>{status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ===== ASSISTANT VIEW ===== */
const replies: Record<string, string> = {
  "What's my on-time delivery trend this month?": "Your on-time delivery is <b>98.2%</b> this month, up <b>3.4 points</b> week-over-week. The improvement is driven mostly by the Jebel Ali → Jeddah and → Dammam lanes, where automated ETA recalculation cut avg delay notifications from 9h to under 2h.",
  "Summarize the bill of lading for MSC-4471.": "<b>MSC-4471</b> covers a 40HC container (<b>TGHU-7781</b>) from <b>Jebel Ali → Beirut</b>, shipper Gulf Freight Co. FZE, consignee Levant Trading LLC. Gross weight 18,420 kg, freight prepaid. All 42 fields extracted with 94%+ confidence and reconciled against the commercial invoice.",
  "Which containers are close to demurrage?": "One container is at risk: <b>TGHU-7781</b> has <b>2 days</b> of free-time remaining at Beirut. No other active containers are within the 3-day demurrage window. I can notify the consignee and pre-clear customs paperwork to avoid charges.",
};

type Message = { role: "user" | "ai"; text: string };

function AssistView() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "user", text: "Which shipments are at risk this week and why?" },
    { role: "ai", text: 'Two shipments need attention this week. <b>DXB-2208</b> (Jebel Ali → Jeddah) is currently <b>held</b> — it\'s missing a certificate of origin and has an HS-code mismatch on invoice INV-90213. <b>Container TGHU-7781</b> has a demurrage risk with only 2 days of free-time remaining. Everything else on your active lanes is on track.<br/><br/>I can draft the certificate request to Levant Trading and flag the HS code for review — want me to proceed?<div style="margin-top:10px"><span class="cite">▣ shipments · 6 records</span><span class="cite">▣ compliance log</span></div>' },
  ]);
  const chatRef = useRef<HTMLDivElement>(null);

  const send = (q: string) => {
    setMessages((prev) => [...prev, { role: "user", text: q }]);
    setTimeout(() => {
      const r = replies[q] || "Let me look into that across your live operating data.";
      setMessages((prev) => [...prev, { role: "ai", text: r }]);
    }, 450);
  };

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="p-8">
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        <div ref={chatRef} className="grid gap-[18px]" style={{ maxHeight: "60vh", overflowY: "auto" }}>
          {messages.map((m, i) => (
            <div key={i} className="flex gap-[14px]">
              <span className="w-[32px] h-[32px] rounded-[8px] flex-none" style={{ background: m.role === "user" ? "oklch(0.3 0.01 270)" : "linear-gradient(150deg, var(--indigo), var(--violet))" }} />
              <div className="flex-1">
                <div style={{ fontSize: 12.5, fontFamily: '"JetBrains Mono", monospace', color: "var(--ink-3)", marginBottom: 6 }}>
                  {m.role === "user" ? "Operations · Gulf Freight Co." : "TradeAI"}
                </div>
                <div
                  style={{ fontSize: m.role === "user" ? 16 : 15.5, color: m.role === "user" ? "var(--ink)" : "var(--ink-2)", lineHeight: 1.65 }}
                  dangerouslySetInnerHTML={{ __html: m.text }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 mt-7 px-[18px] py-[14px] rounded-[12px]" style={{ border: "1px solid var(--hairline-2)", background: "oklch(1 0 0 / 0.025)" }}>
          <span style={{ color: "var(--ink-4)", fontSize: 15, flex: 1 }}>Ask about shipments, documents or compliance…</span>
          <span className="w-[36px] h-[36px] rounded-[9px] grid place-items-center flex-none" style={{ background: "var(--indigo)" }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-[17px] h-[17px]"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </span>
        </div>

        <div className="flex gap-[10px] flex-wrap mt-4">
          {Object.keys(replies).map((q) => (
            <button
              key={q}
              onClick={() => send(q)}
              className="rounded-full px-[14px] py-2 text-[13px] transition-all duration-[180ms] hover:bg-[oklch(1_0_0_/_0.04)]"
              style={{ color: "var(--ink-2)", border: "1px solid var(--hairline)" }}
            >
              {q === "What's my on-time delivery trend this month?" ? "On-time delivery trend"
               : q === "Summarize the bill of lading for MSC-4471." ? "Summarize MSC-4471"
               : "Demurrage risks"}
            </button>
          ))}
        </div>
      </div>

      <style>{`.cite { display: inline-flex; align-items: center; gap: 6px; font-family: "JetBrains Mono", monospace; font-size: 11px; color: var(--violet); border: 1px solid var(--indigo-line); background: var(--indigo-soft); border-radius: 6px; padding: 2px 8px; margin-right: 6px; }`}</style>
    </div>
  );
}

/* ===== COMPLIANCE VIEW ===== */
function CompView() {
  return (
    <div className="p-8 grid gap-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { lbl: "Checks passed", val: "96%", delta: "▲ this quarter", up: true },
          { lbl: "Avg clearance time", val: "4.2h", delta: "▼ from 11h", up: true },
          { lbl: "Flagged for review", val: "3", delta: "awaiting documents", up: false },
        ].map(({ lbl, val, delta, up }) => (
          <div key={lbl} className="rounded-[14px] p-5" style={{ background: "var(--surface)", border: "1px solid var(--hairline)" }}>
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink-3)" }}>{lbl}</div>
            <div style={{ fontFamily: '"Newsreader", serif', fontSize: 36, letterSpacing: "-0.01em", marginTop: 10 }}>{val}</div>
            <div style={{ fontSize: 12.5, marginTop: 6, color: up ? "oklch(0.8 0.16 150)" : "var(--ink-3)" }}>{delta}</div>
          </div>
        ))}
      </div>

      <div className="rounded-[14px] overflow-hidden" style={{ background: "var(--surface)", border: "1px solid var(--hairline)" }}>
        <div className="px-5 py-4" style={{ borderBottom: "1px solid var(--hairline)", fontWeight: 600, fontSize: 14.5 }}>
          Compliance checklist · Shipment DXB-2208
        </div>
        {[
          { type: "ok", title: "Commercial invoice", desc: "Matched to purchase order · totals reconciled", status: "Cleared" },
          { type: "ok", title: "Packing list", desc: "Quantities verified against bill of lading", status: "Cleared" },
          { type: "warn", title: "Certificate of origin", desc: "Missing — request drafted to Levant Trading LLC", status: "Action needed" },
          { type: "warn", title: "HS code classification", desc: "Mismatch on line 3 of INV-90213 · flagged for review", status: "Action needed" },
          { type: "run", title: "Customs declaration", desc: "Auto-generated · pending broker confirmation", status: "Running" },
        ].map(({ type, title, desc, status }) => (
          <div key={title} className="grid items-center gap-4 px-5 py-[18px]" style={{ gridTemplateColumns: "auto 1fr auto", borderBottom: "1px solid var(--hairline)" }}>
            <span
              className="w-[26px] h-[26px] rounded-[7px] grid place-items-center flex-none"
              style={{
                background: type === "ok" ? "oklch(0.7 0.15 150 / 0.14)" : type === "warn" ? "oklch(0.78 0.13 75 / 0.14)" : "var(--indigo-soft)",
                border: type === "ok" ? "1px solid oklch(0.7 0.15 150 / 0.4)" : type === "warn" ? "1px solid oklch(0.78 0.13 75 / 0.4)" : "1px solid var(--indigo-line)",
                color: type === "ok" ? "oklch(0.82 0.15 150)" : type === "warn" ? "oklch(0.82 0.13 75)" : "var(--violet)",
              }}
            >
              {type === "ok" && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-[14px] h-[14px]"><path d="M5 12l5 5L20 6" /></svg>}
              {type === "warn" && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-[14px] h-[14px]"><path d="M12 8v5M12 17h.01" /><circle cx="12" cy="12" r="9" /></svg>}
              {type === "run" && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-[14px] h-[14px]"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>}
            </span>
            <div>
              <div style={{ fontSize: 15, fontWeight: 600 }}>{title}</div>
              <div style={{ fontSize: 13, color: "var(--ink-3)", marginTop: 2 }}>{desc}</div>
            </div>
            <span className="whitespace-nowrap px-[9px] py-1 rounded-full" style={{
              fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: "0.04em", textTransform: "uppercase",
              color: type === "ok" ? "oklch(0.82 0.15 150)" : type === "warn" ? "oklch(0.82 0.13 75)" : "var(--violet)",
              border: type === "ok" ? "1px solid oklch(0.7 0.15 150 / 0.35)" : type === "warn" ? "1px solid oklch(0.78 0.13 75 / 0.4)" : "1px solid var(--indigo-line)",
              background: type === "ok" ? "oklch(0.7 0.15 150 / 0.08)" : type === "warn" ? "oklch(0.78 0.13 75 / 0.1)" : "var(--indigo-soft)",
            }}>{status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BrandMark() {
  return (
    <span className="relative w-[26px] h-[26px] rounded-[7px] grid place-items-center flex-none" style={{ background: "linear-gradient(150deg, var(--indigo), var(--violet))" }}>
      <span className="absolute" style={{ inset: 6, border: "1.5px solid oklch(1 0 0 / 0.9)", borderRadius: 3, borderRightColor: "transparent", borderBottomColor: "transparent", transform: "rotate(45deg)" }} />
    </span>
  );
}
