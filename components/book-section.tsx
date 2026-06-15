"use client";

import { useEffect, useRef } from "react";

export function BookSection() {
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
    <section ref={ref} id="book" className="py-28 md:py-40 px-6 bg-[#080605]">
      <div className="max-w-7xl mx-auto">
        <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          {/* Book cover */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Glow behind book */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(218,166,60,0.15)_0%,transparent_70%)] scale-150" />
              {/* Book cover — styled representation */}
              <div
                className="relative w-72 md:w-80 aspect-[2/3] bg-[#0A0806] border border-[#DAA63C]/20 flex flex-col items-center justify-between p-8 shadow-2xl"
                style={{
                  boxShadow: "8px 8px 40px rgba(0,0,0,0.6), -2px 0 8px rgba(218,166,60,0.08)",
                }}
              >
                {/* Fingerprint arc decoration */}
                <div className="absolute inset-0 overflow-hidden opacity-20">
                  {[60, 100, 140, 180, 220, 260, 300].map((r) => (
                    <div
                      key={r}
                      className="absolute rounded-full border border-[#DAA63C]/40"
                      style={{
                        width: r * 2,
                        height: r * 2,
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  ))}
                </div>

                {/* Top: series label */}
                <div className="relative z-10 text-center">
                  <p className="label text-[0.55rem] text-[#DAA63C]/60 mb-1">ZenMango Press</p>
                </div>

                {/* Center: title */}
                <div className="relative z-10 text-center">
                  <p className="label mb-4 text-[#DAA63C]">Now Available</p>
                  <h3 className="font-display font-light italic text-[#F5EDD7] text-3xl leading-tight mb-3">
                    The Feeling
                    <br />
                    Business®
                  </h3>
                  <p className="font-sans text-[#7A6D52] text-xs leading-relaxed font-light px-2">
                    How the Invisible Economy of Feeling Decides Everything in
                    Business, Loyalty, and Life
                  </p>
                </div>

                {/* Bottom: author */}
                <div className="relative z-10 text-center">
                  <div className="gold-line-h w-12 mx-auto mb-3" />
                  <p className="font-sans text-[#C4B490] text-xs tracking-widest uppercase font-light">
                    Arjun Sen
                  </p>
                </div>
              </div>

              {/* Shadow underneath */}
              <div className="w-full h-4 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.6)_0%,transparent_70%)] mt-2" />
            </div>
          </div>

          {/* Book info */}
          <div className="reveal">
            <p className="label mb-8">The Book That Names The Category</p>
            <h2 className="font-display font-light italic text-[#F5EDD7] text-4xl md:text-5xl leading-[1.1] mb-6">
              The methodology in print. The category named for the first time.
            </h2>
            <div className="gold-line-h w-16 mb-8" />
            <div className="space-y-4 font-sans font-light text-[#C4B490] text-base leading-relaxed mb-10">
              <p>
                This is not a book about hospitality, customer service, or
                leadership. It is a book about an economic category — one that
                operates in every industry, every sector, every interaction
                between an organization and a human being.
              </p>
              <p>
                Across 18 chapters and 15 stories from 15 different industries,
                it builds the architecture of what The Feeling Business® looks
                like when it is run with intention.
              </p>
            </div>

            {/* Pull quote */}
            <div className="border-l-2 border-[#DAA63C] pl-6 mb-10">
              <p className="font-display text-xl md:text-2xl text-[#F5EDD7] font-light italic leading-snug">
                &ldquo;The Invisible Economy does not appear on any dashboard.
                But it drives the Visible Economy completely.&rdquo;
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10 border-t border-b border-[#28231A] py-6">
              {[
                { num: "18", label: "Chapters" },
                { num: "15", label: "Industries" },
                { num: "1", label: "Methodology" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-display text-3xl text-[#DAA63C] font-light italic">
                    {s.num}
                  </p>
                  <p className="label text-[0.55rem] mt-1 text-[#7A6D52]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="https://zenmango.com"
              className="inline-block bg-[#DAA63C] text-[#0C0A09] px-10 py-4 text-[0.65rem] font-semibold tracking-[0.2em] uppercase hover:bg-[#EAC76A] transition-colors"
            >
              Get The Book →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
