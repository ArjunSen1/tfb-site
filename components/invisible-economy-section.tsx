"use client";

import { useEffect, useRef } from "react";

export function InvisibleEconomySection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.15 }
    );
    const els = ref.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} id="problem">
      {/* ── Section 1: THE INVISIBLE ECONOMY ── */}
      <section className="py-28 md:py-40 px-6 bg-[#0C0A09]">
        <div className="max-w-7xl mx-auto">
          <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left: Copy */}
            <div>
              <p className="label mb-8">The Truth Most Businesses Overlook</p>
              <h2 className="font-display font-light italic text-[#F5EDD7] text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8">
                Feelings decide first.{" "}
                <span className="not-italic text-[#C4B490]">
                  Everything else is explanation.
                </span>
              </h2>
              <div className="gold-line-h w-16 mb-8" />
              <div className="space-y-5 font-sans font-light text-[#C4B490] text-base leading-relaxed">
                <p>
                  Every purchase begins with a feeling — not a feature. Every
                  loyalty decision, every referral, every reason a customer
                  returns starts long before logic enters the picture.
                </p>
                <p>
                  Most organizations optimize what they can measure: satisfaction
                  scores, response times, operational metrics. What they miss is
                  the Invisible Economy — the feelings created and destroyed in
                  every interaction, every day. That economy drives the visible
                  one completely.
                </p>
                <p>
                  When the Invisible Economy is working, the Visible Economy
                  responds. People come back more often. They refer without being
                  asked. They pay premium. They defend you. When it is broken,
                  the Visible Economy bleeds — slowly, quietly, and by the time
                  the damage shows up in the metrics, the relational damage is
                  already years old.
                </p>
              </div>
            </div>

            {/* Right: Two economies visual */}
            <div className="space-y-4 pt-4 lg:pt-16">
              {/* Visible Economy box */}
              <div className="border border-[#28231A] p-8 bg-[#141210]">
                <p className="label mb-3 text-[#7A6D52]">The Visible Economy</p>
                <p className="font-display text-3xl text-[#DDD3BC] font-light mb-4">
                  What your dashboard shows
                </p>
                <div className="space-y-2">
                  {["Revenue & margin", "Satisfaction scores", "Repeat visit rate", "NPS & survey data"].map(
                    (item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="w-1 h-1 rounded-full bg-[#7A6D52]" />
                        <span className="font-sans text-sm text-[#7A6D52] font-light">
                          {item}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-4 px-4">
                <div className="gold-line-h flex-1" />
                <span className="font-sans text-[0.6rem] tracking-[0.2em] uppercase text-[#DAA63C]">
                  Driven by
                </span>
                <div className="gold-line-h flex-1" />
              </div>

              {/* Invisible Economy box */}
              <div className="border border-[#DAA63C]/30 p-8 bg-[#14100A]">
                <p className="label mb-3">The Invisible Economy™</p>
                <p className="font-display text-3xl text-[#F5EDD7] font-light italic mb-4">
                  What your dashboard cannot see
                </p>
                <div className="space-y-2">
                  {[
                    "The feeling of every interaction",
                    "Whether customers feel seen",
                    "The emotional signature of your brand",
                    "What happens after customers leave",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-[#DAA63C]/60" />
                      <span className="font-sans text-sm text-[#C4B490] font-light">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: THE NUMB CUSTOMER ── */}
      <section className="py-28 md:py-40 px-6 bg-[#0A0806]">
        <div className="max-w-7xl mx-auto">
          <div className="reveal max-w-3xl mx-auto text-center mb-20">
            <p className="label mb-8">The Most Expensive Customer You Cannot See</p>
            <h2 className="font-display font-light italic text-[#F5EDD7] text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8">
              The Numb Customer™
            </h2>
            <div className="gold-line-h w-16 mx-auto mb-8" />
            <p className="font-sans font-light text-[#C4B490] text-lg leading-relaxed">
              Not angry. Not leaving a negative review. Not calling to complain.
              Scoring you a 7 or 8 on your satisfaction survey. Coming back a few
              more times. And then, without a word, without drama, without giving
              you a single data point to identify them or act on —{" "}
              <span className="text-[#DDD3BC]">they stop.</span>
            </p>
          </div>

          {/* Numb Customer profile cards */}
          <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-px bg-[#28231A]">
            {[
              {
                label: "What your data says",
                value: "Satisfied",
                desc: "Scores 7–8 on every survey. No complaints on file. Looks like a retained customer.",
                color: "#7A6D52",
              },
              {
                label: "What is actually happening",
                value: "Drifting",
                desc: "The feeling that made them come back the first time has slowly gone. They just haven't told you.",
                color: "#DAA63C",
              },
              {
                label: "What happens next",
                value: "Gone",
                desc: "They stop. No review. No explanation. No warning. One of your most common customers — invisible in your data.",
                color: "#F5EDD7",
              },
            ].map((card) => (
              <div
                key={card.label}
                className="bg-[#0C0A09] p-10 flex flex-col gap-4"
              >
                <p className="label text-[#7A6D52]">{card.label}</p>
                <p
                  className="font-display text-4xl font-light italic"
                  style={{ color: card.color }}
                >
                  {card.value}
                </p>
                <p className="font-sans font-light text-sm text-[#7A6D52] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Pull quote */}
          <div className="reveal mt-16 border-l-2 border-[#DAA63C] pl-8 max-w-2xl">
            <p className="font-display text-2xl md:text-3xl text-[#F5EDD7] font-light italic leading-snug mb-4">
              &ldquo;The most dangerous position in the Invisible Economy is not
              dissatisfaction. It is numbness.&rdquo;
            </p>
            <p className="label text-[#7A6D52]">
              Arjun Sen — The Feeling Business®
            </p>
          </div>

          {/* Free tool CTA */}
          <div className="reveal mt-16 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <a
              href="#services"
              className="border border-[#DAA63C]/40 text-[#DAA63C] px-8 py-3.5 text-[0.65rem] font-semibold tracking-[0.18em] uppercase hover:border-[#DAA63C] hover:bg-[#DAA63C]/5 transition-all"
            >
              Take The Numb Customer Scorecard →
            </a>
            <span className="font-sans text-xs text-[#7A6D52] font-light">
              Free 10-question diagnostic. Takes 4 minutes.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
