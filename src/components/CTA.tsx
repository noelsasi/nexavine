"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" style={{ paddingBlock: 132 }}>
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          className="relative overflow-hidden rounded-[24px] text-center"
          style={{
            border: "1px solid var(--hairline-2)",
            background: "linear-gradient(165deg, oklch(0.22 0.03 274), oklch(0.175 0.012 272))",
            padding: "76px 64px",
          }}
        >
          {/* glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: -200, left: "50%", transform: "translateX(-50%)",
              width: 700, height: 460,
              background: "radial-gradient(ellipse at center, oklch(0.625 0.196 274 / 0.30), transparent 65%)",
            }}
          />

          <h2
            className="relative"
            style={{ fontFamily: '"Newsreader", serif', fontWeight: 400, fontSize: "clamp(34px, 4.4vw, 56px)", letterSpacing: "-0.02em", lineHeight: 1.05 }}
          >
            Let&apos;s build something valuable
          </h2>
          <p className="relative mt-[22px] mx-auto max-w-[560px]" style={{ color: "var(--ink-2)", fontSize: 18 }}>
            Whether you need workflow automation, AI-powered software, or a custom product, let&apos;s explore how we can help your business operate smarter.
          </p>
          <div className="relative flex gap-[14px] justify-center mt-[38px] flex-wrap">
            <a
              href="mailto:noelsasikanth@gmail.com"
              className="inline-flex items-center gap-2 text-[15px] font-semibold px-[22px] py-[13px] rounded-[10px] text-white transition-all duration-200 hover:-translate-y-px"
              style={{ background: "var(--indigo)", border: "1px solid oklch(0.7 0.18 274 / 0.6)" }}
            >
              Book a Call
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
            <a
              href="mailto:noelsasikanth@gmail.com"
              className="inline-flex items-center text-[15px] font-semibold px-[22px] py-[13px] rounded-[10px] transition-all duration-200 hover:-translate-y-px"
              style={{ background: "oklch(1 0 0 / 0.03)", color: "var(--ink)", border: "1px solid var(--hairline-2)" }}
            >
              Send an Inquiry
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
