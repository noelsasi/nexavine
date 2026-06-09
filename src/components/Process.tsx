"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Eyebrow } from "./Services";

const steps = [
  { n: "STEP 01", title: "Discovery", desc: "Understand business challenges, workflows and where time is really being lost." },
  { n: "STEP 02", title: "Prototype", desc: "Rapidly validate ideas with working solutions you can put in front of your team." },
  { n: "STEP 03", title: "Build", desc: "Develop scalable, production-ready software engineered for reliability." },
  { n: "STEP 04", title: "Scale", desc: "Continuously improve and expand capabilities as your operations grow." },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" style={{ paddingBlock: 132 }}>
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          className="max-w-[720px]"
        >
          <Eyebrow num="04">Engagement</Eyebrow>
          <h2 className="mt-[22px]" style={{ fontFamily: '"Newsreader", serif', fontWeight: 400, letterSpacing: "-0.018em", lineHeight: 1.06, fontSize: "clamp(34px, 4.6vw, 58px)" }}>
            How we work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 mt-14">
          {steps.map(({ n, title, desc }, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.1 + i * 0.08 }}
              className="relative pt-[30px] pb-[30px]"
              style={{
                paddingRight: i < 3 ? 30 : 0,
                borderTop: "2px solid var(--hairline-2)",
              }}
            >
              {/* dot */}
              <span className="absolute w-[10px] h-[10px] rounded-full" style={{ top: -6, left: 0, background: "var(--indigo)" }} />
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12, color: "var(--indigo)", letterSpacing: "0.06em" }}>{n}</div>
              <h3 className="mt-[18px]" style={{ fontFamily: '"Newsreader", serif', fontSize: 24, fontWeight: 500 }}>{title}</h3>
              <p className="mt-[10px] max-w-[230px]" style={{ color: "var(--ink-2)", fontSize: 14.5 }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
