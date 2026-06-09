"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Eyebrow } from "./Services";

const cards = [
  { n: "/ 01", title: "Founder-Led Execution", desc: "Work directly with the person building the product — no account managers, no handoffs, no diluted vision." },
  { n: "/ 02", title: "Rapid Delivery", desc: "Move from concept to working software quickly, with tight feedback loops and visible progress every week." },
  { n: "/ 03", title: "Product Mindset", desc: "We optimise for outcomes, not billable hours — every decision serves the result your business needs." },
  { n: "/ 04", title: "Long-Term Partnership", desc: "Build systems designed to scale with your business, supported well beyond the initial launch." },
];

export default function WhyNexavine() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="whynexavine" style={{ paddingBlock: 132 }}>
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          className="max-w-[720px]"
        >
          <Eyebrow num="03">The difference</Eyebrow>
          <h2 className="mt-[22px]" style={{ fontFamily: '"Newsreader", serif', fontWeight: 400, letterSpacing: "-0.018em", lineHeight: 1.06, fontSize: "clamp(34px, 4.6vw, 58px)" }}>
            Why businesses choose Nexavine
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
          {cards.map(({ n, title, desc }, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.1 + i * 0.08 }}
              className="rounded-[14px] p-7 transition-all duration-[250ms] hover:-translate-y-[3px]"
              style={{ background: "var(--surface)", border: "1px solid var(--hairline)" }}
            >
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12, color: "var(--indigo)" }}>{n}</div>
              <h3 className="mt-7" style={{ fontFamily: '"Newsreader", serif', fontSize: 20, fontWeight: 500, letterSpacing: "-0.005em" }}>{title}</h3>
              <p className="mt-[11px]" style={{ color: "var(--ink-2)", fontSize: 14.5 }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
