"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    tier: "Start Here — Free",
    name: "The Numb Customer Scorecard™",
    desc: "A 10-question self-assessment that scores your organization's exposure to silent customer attrition. Takes 4 minutes. Delivers a Gap Risk Rating. The hook: your most expensive customer isn't the one who complains.",
    price: "Free",
    cta: "Take the Scorecard",
    href: "#",
    highlight: false,
  },
  {
    tier: "First Engagement",
    name: "The Feeling Business Diagnostic™",
    desc: "A half-day working session with your senior leadership team. ZenMango facilitates a structured diagnosis using The Feeling Ladder™ and The Five Perspectives™. You walk out having felt the methodology — not just heard it.",
    price: "$4,500 – $7,500",
    cta: "Book the Diagnostic",
    href: "https://book.zenmango.com/branddiagnostic",
    highlight: false,
  },
  {
    tier: "Discovery Engagement",
    name: "The Invisible Economy Audit™",
    desc: "A 2-week discovery engagement. ZenMango interviews leadership, reviews customer data, and audits key touchpoints to identify where your Invisible Economy is leaking value. Delivered as a written report with a live leadership presentation.",
    price: "$8,500 – $15,000",
    cta: "Start the Audit",
    href: "https://book.zenmango.com/branddiagnostic",
    highlight: false,
  },
  {
    tier: "Signature Project",
    name: "The Gap Close™ — Brand Feeling Strategy",
    desc: "Full brand strategy engagement. ZenMango defines your Emotional Signature, rebuilds positioning around it, and creates the messaging architecture that aligns marketing, operations, and leadership communication to that feeling.",
    price: "$25,000 – $65,000",
    cta: "Discuss Scope",
    href: "https://book.zenmango.com/branddiagnostic",
    highlight: true,
  },
  {
    tier: "Ongoing Partnership",
    name: "The Feeling Business Advisory Retainer",
    desc: "Monthly access to ZenMango for strategy, messaging review, leadership coaching, and Invisible Economy monitoring. Structured as a standing executive advisory relationship — not project work, not agency execution.",
    price: "$5,000 – $12,000 / month",
    cta: "Explore the Retainer",
    href: "https://book.zenmango.com/branddiagnostic",
    highlight: false,
  },
];

export function ServicesSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.06 }
    );
    const els = ref.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="services" className="py-28 md:py-40 px-6 bg-[#0E0B08]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal mb-20 max-w-3xl">
          <p className="label mb-8">Where To Begin</p>
          <h2 className="font-display font-light italic text-[#F5EDD7] text-4xl md:text-5xl leading-[1.1]">
            Every engagement is designed to pay for itself before it ends.
          </h2>
          <p className="font-sans font-light text-[#7A6D52] text-sm mt-6 leading-relaxed max-w-xl">
            The natural motion: Scorecard → Diagnostic → Audit → Project → Retainer. Each step is
            self-funding and self-justifying. No step requires a leap of faith.
          </p>
        </div>

        {/* Services list */}
        <div className="space-y-px border-t border-[#28231A]">
          {services.map((s, i) => (
            <div
              key={s.name}
              className={`reveal border-b border-[#28231A] py-10 grid grid-cols-1 md:grid-cols-[1fr_2fr_auto] gap-8 items-start hover:bg-[#100D09] transition-colors group ${
                s.highlight ? "bg-[#14100A]" : ""
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Left: tier + price */}
              <div>
                <p className="label text-[0.55rem] mb-2 text-[#7A6D52]">{s.tier}</p>
                <p
                  className={`font-display text-xl font-light italic ${
                    s.highlight ? "text-[#DAA63C]" : "text-[#DDD3BC]"
                  }`}
                >
                  {s.price}
                </p>
              </div>

              {/* Center: name + desc */}
              <div>
                <h3 className="font-display text-xl md:text-2xl text-[#F5EDD7] font-light italic mb-3 leading-snug">
                  {s.name}
                </h3>
                <p className="font-sans text-sm text-[#7A6D52] font-light leading-relaxed group-hover:text-[#C4B490] transition-colors">
                  {s.desc}
                </p>
              </div>

              {/* Right: CTA */}
              <div className="flex items-center">
                <a
                  href={s.href}
                  className={`whitespace-nowrap text-[0.6rem] font-semibold tracking-[0.18em] uppercase px-6 py-3 transition-all ${
                    s.highlight
                      ? "bg-[#DAA63C] text-[#0C0A09] hover:bg-[#EAC76A]"
                      : "border border-[#28231A] text-[#7A6D52] hover:border-[#DAA63C]/40 hover:text-[#DAA63C]"
                  }`}
                >
                  {s.cta} →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="reveal mt-10 font-sans text-xs text-[#3D3529] font-light">
          ZenMango works exclusively with organizational leadership — founders,
          CEOs, and operators who own the strategic direction and the outcome.
        </div>
      </div>
    </section>
  );
}
