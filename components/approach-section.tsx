"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    num: "01",
    name: "The Invisible Economy Audit™",
    tagline: "Find the Gap",
    desc: "We go beneath the dashboards, the satisfaction scores, and the brand decks to find the feeling your brand actually creates in the people it serves. Not the feeling you intend — the feeling that exists. The gap between those two is the most important strategic finding in your business.",
  },
  {
    num: "02",
    name: "The Emotional Territory Claim™",
    tagline: "Own Your Position",
    desc: "We identify the precise emotional territory only your brand can inhabit and build the positioning, language, and story that makes it undeniable. Not a tagline. Not a campaign. A competitive position so specific to your human truth that no competitor can replicate it — because they are not you.",
  },
  {
    num: "03",
    name: "The Feeling Architecture™",
    tagline: "Make It Operational",
    desc: "Strategy that stays in the boardroom is not strategy. We embed the feeling into your culture, your operations, your customer touchpoints, and your frontline moments so it is not a positioning exercise. It is a felt experience. Consistent. Repeatable. Compounding over time into the one asset your competitors cannot acquire.",
  },
];

export function ApproachSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    const els = ref.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="approach" className="py-28 md:py-40 px-6 bg-[#0E0B08]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal mb-20 max-w-3xl">
          <p className="label mb-8">The Approach</p>
          <h2 className="font-display font-light italic text-[#F5EDD7] text-4xl md:text-5xl leading-[1.1]">
            The gap between what you deliver and what people feel is where{" "}
            <span className="text-[#DAA63C]">growth lives or quietly dies.</span>
          </h2>
        </div>

        {/* B2B qualifier */}
        <div className="reveal mb-20 border border-[#DAA63C]/20 bg-[#14100A] p-6 max-w-2xl">
          <p className="font-sans text-sm text-[#C4B490] font-light leading-relaxed">
            <span className="text-[#DAA63C] font-medium">ZenMango works exclusively with organizational leadership</span> —
            founders, CEOs, and operators who own the strategic direction and the
            outcome. If the person reading this does not control the business,
            this is not the right firm for this conversation.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-0 border-t border-[#28231A]">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`reveal border-b border-[#28231A] py-12 grid grid-cols-1 lg:grid-cols-[120px_1fr_1fr] gap-8 lg:gap-16 items-start transition-colors group hover:bg-[#100D09]`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Number */}
              <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-2">
                <span className="font-display text-5xl text-[#28231A] group-hover:text-[#DAA63C]/20 transition-colors font-light">
                  {step.num}
                </span>
                <div className="gold-line-v h-8 hidden lg:block" />
              </div>

              {/* Name + tagline */}
              <div>
                <p className="label mb-3 text-[#DAA63C]">{step.tagline}</p>
                <h3 className="font-display text-2xl md:text-3xl text-[#F5EDD7] font-light italic leading-tight">
                  {step.name}
                </h3>
              </div>

              {/* Description */}
              <p className="font-sans font-light text-[#7A6D52] text-sm leading-relaxed group-hover:text-[#C4B490] transition-colors">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal mt-16 flex gap-6 items-center">
          <a
            href="https://book.zenmango.com/branddiagnostic"
            className="bg-[#DAA63C] text-[#0C0A09] px-10 py-4 text-[0.65rem] font-semibold tracking-[0.2em] uppercase hover:bg-[#EAC76A] transition-colors"
          >
            Begin Your Discovery
          </a>
          <span className="font-sans text-xs text-[#7A6D52] font-light">
            First engagement: The Feeling Business Diagnostic™
          </span>
        </div>
      </div>
    </section>
  );
}
