"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Eyebrow } from "./Services";

const tags = ["AI Integrations", "Workflow Automation", "SaaS Platforms", "Product Architecture", "Full-Stack Engineering"];

export default function Founder() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="founder" style={{ background: "var(--bg-2)", borderBlock: "1px solid var(--hairline)", paddingBlock: 132 }}>
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          className="max-w-[720px] mb-14"
        >
          <Eyebrow num="03">About me</Eyebrow>
          <h2 className="mt-[22px]" style={{ fontFamily: '"Newsreader", serif', fontWeight: 400, letterSpacing: "-0.018em", lineHeight: 1.06, fontSize: "clamp(34px, 4.6vw, 58px)" }}>
            About me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.05 }}
            className="rounded-[14px] grid place-items-center"
            style={{
              aspectRatio: "4/5",
              border: "1px solid var(--hairline)",
              background: "var(--surface)",
              backgroundImage: "repeating-linear-gradient(135deg, oklch(1 0 0 / 0.022) 0 12px, transparent 12px 24px)",
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 12,
              color: "var(--ink-4)",
              letterSpacing: "0.04em",
            }}
          >
            [ founder portrait ]
          </motion.div>

          {/* Body */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.1 }}
          >
            <h3 style={{ fontFamily: '"Newsreader", serif', fontSize: 34, fontWeight: 400, letterSpacing: "-0.01em" }}>Noel</h3>
            <div className="mt-2" style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 13, color: "var(--ink-3)", letterSpacing: "0.04em" }}>
              Senior Full-Stack Engineer · AI & Automation · Product Builder
            </div>
            <p className="mt-5" style={{ color: "var(--ink-2)", fontSize: 16.5 }}>
              7+ years building scalable software products — from internal operations platforms and workflow automation systems to AI-powered applications shipped end-to-end. I work across the full stack, from architecture to production, with a strong focus on solving real business problems through well-engineered software.
            </p>

            <div className="flex flex-wrap gap-[10px] mt-[26px]">
              {tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center whitespace-nowrap px-[11px] py-[6px] rounded-full"
                  style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12, letterSpacing: "0.04em", color: "var(--ink-2)", border: "1px solid var(--hairline)", background: "oklch(1 0 0 / 0.02)" }}
                >
                  {t}
                </span>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
