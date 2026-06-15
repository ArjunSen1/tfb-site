"use client";

import { useEffect, useRef } from "react";

const stats = [
  { num: "30+", label: "Years brand-building inside and outside the boardroom" },
  { num: "$1B+", label: "Revenue impact built across client engagements" },
  { num: "100+", label: "Brands transformed across 12+ industries" },
  { num: "1", label: "Methodology no other firm in the world practices" },
];

export function FounderSection() {
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
    <section ref={ref} className="py-28 md:py-40 px-6 bg-[#0A0806]">
      <div className="max-w-7xl mx-auto">
        <div className="reveal grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">
          {/* Left: portrait placeholder + stats */}
          <div>
            {/* Portrait */}
            <div className="relative mb-10">
              <div
                className="w-full aspect-[3/4] max-w-xs bg-[#141210] border border-[#28231A] flex items-end overflow-hidden"
              >
                {/* Fingerprint arc bg */}
                <div className="absolute inset-0 overflow-hidden opacity-10">
                  {[120, 200, 280, 360].map((r) => (
                    <div
                      key={r}
                      className="absolute rounded-full border border-[#DAA63C]"
                      style={{
                        width: r * 2,
                        height: r * 2,
                        top: "60%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  ))}
                </div>
                <div className="relative z-10 p-6 w-full bg-gradient-to-t from-[#0A0806] to-transparent">
                  <p className="font-display text-xl text-[#F5EDD7] font-light italic">
                    Arjun Sen
                  </p>
                  <p className="label text-[0.55rem] mt-1 text-[#DAA63C]">
                    Founder, ZenMango · Author
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-6">
              {stats.map((s) => (
                <div key={s.num} className="flex gap-4 items-start">
                  <p className="font-display text-2xl text-[#DAA63C] font-light italic w-16 flex-shrink-0">
                    {s.num}
                  </p>
                  <p className="font-sans text-xs text-[#7A6D52] font-light leading-relaxed pt-1.5">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: bio */}
          <div className="reveal">
            <p className="label mb-8">Founder &amp; Author</p>
            <h2 className="font-display font-light italic text-[#F5EDD7] text-4xl md:text-5xl leading-[1.1] mb-8">
              Arjun Sen has spent 30+ years answering one question:{" "}
              <span className="text-[#DAA63C]">What do people actually feel?</span>
            </h2>
            <div className="gold-line-h w-16 mb-8" />

            <div className="space-y-5 font-sans font-light text-[#C4B490] text-base leading-relaxed mb-10">
              <p>
                Before ZenMango, Arjun Sen was in the Papa John&apos;s boardroom
                where a $1B+ online business was conceived. The Pizza Hut research
                labs where Bigfoot Pizza was built. The Boston Market strategy
                sessions that redefined fast-casual. A small conference room with
                start-up leaders where Einstein Bros. Bagel was born.
              </p>
              <p>
                Sixteen years inside Fortune 500 organizations, at the level where
                decisions are felt across thousands of locations, millions of
                customers, and billions in revenue.
              </p>
              <p>
                He did not leave to become a consultant.
              </p>
              <p>
                He left because he saw, again and again, the same quiet gap:
                organizations brilliant at delivering the transaction, missing the
                feeling. And he knew that closing that gap systematically,
                replicably, at scale was the most important strategic problem in
                business.
              </p>
              <p className="text-[#DDD3BC]">
                That conviction became The Feeling Business®. That methodology
                became ZenMango.
              </p>
            </div>

            {/* Featured in */}
            <div>
              <p className="label mb-5 text-[#7A6D52]">Featured in</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {["Forbes", "Advertising Age", "Nation's Restaurant News", "CBS", "Fast Casual", "Pizza Today"].map(
                  (pub) => (
                    <span
                      key={pub}
                      className="font-sans text-xs text-[#3D3529] tracking-[0.12em] uppercase font-light"
                    >
                      {pub}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
