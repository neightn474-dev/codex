"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How does the process work?",
    answer:
      "We begin with a discovery conversation, then map your opportunity and activate the network that can deliver the right partnership or advisory outcome.",
  },
  {
    question: "Do you guarantee results?",
    answer:
      "We do not guarantee outcomes, but we guarantee a structured matching process built to surface the most relevant and high-value connections.",
  },
  {
    question: "How are partners evaluated?",
    answer:
      "Partners are evaluated on strategic fit, industry alignment, relationship value, and historical success with similar outcomes.",
  },
  {
    question: "How long does matching take?",
    answer:
      "Most introductions occur within 4-8 weeks, depending on opportunity complexity and timing requirements.",
  },
  {
    question: "What types of companies do you work with?",
    answer:
      "We work with growth-oriented businesses across SaaS, fintech, healthtech, marketplaces, advisory services, and technology-enabled sectors.",
  },
];

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="mt-16 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl lg:p-12">
      <div className="space-y-6">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">Questions founders ask before they book the first call.</h2>
        </div>
        <div className="grid gap-4">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/80">
              <button type="button" className="flex w-full items-center justify-between px-6 py-5 text-left" onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}>
                <span className="text-base font-semibold text-white">{faq.question}</span>
                <span className="text-xl text-cyan-300">{activeIndex === index ? "–" : "+"}</span>
              </button>
              <AnimatePresence initial={false}>
                {activeIndex === index ? (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28 }} className="px-6 pb-5 text-slate-300">
                    <p className="leading-8">{faq.answer}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
