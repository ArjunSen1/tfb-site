"use client";

import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setTimeout(() => el.classList.add("visible"), 100);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 fp-bg overflow-hidden">
      {/* Concentric arc decorations */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        {[700, 900, 1100, 1300].map((size, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-[#DAA63C]/[0.04]"
            style={{ width: size, height: size }}
          />
        ))}
      </div>

      <div ref={ref} className="reveal relative z-10 max-w-4xl mx-auto text-center">
        {/* Overline label */}
        <p className="label mb-10 text-[#DAA63C]/80">
          The Feeling Business® &nbsp;·&nbsp; ZenMango &nbsp;·&nbsp; Est. 1994
        </p>

        {/* Hero headline */}
        <h1 className="font-display font-light italic text-[#F5EDD7] text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] mb-10">
          You&apos;re not in the business
          <br />
          <span className="text-[#DAA63C]">you think you&apos;re in.</span>
        </h1>

        {/* Thin gold rule */}
        <div className="gold-line-h w-20 mx-auto mb-10" />

        {/* Sub-copy */}
        <p className="font-sans text-[#C4B490] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-14 font-light">
          Every great brand is built on a feeling. Most organizations deliver
          the transaction and miss the transformation. ZenMango exists to close
          that gap — and turn what your customers feel into your most defensible
          competitive advantage.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://book.zenmango.com/branddiagnostic"
            className="bg-[#DAA63C] text-[#0C0A09] px-10 py-4 text-[0.65rem] font-semibold tracking-[0.2em] uppercase hover:bg-[#EAC76A] transition-colors"
          >
            Begin Your Discovery
          </a>
          <a
            href="#problem"
            className="border border-[#DAA63C]/35 text-[#DAA63C] px-10 py-4 text-[0.65rem] font-semibold tracking-[0.2em] uppercase hover:border-[#DAA63C] hover:bg-[#DAA63C]/5 transition-all"
          >
            What Is The Feeling Business?
          </a>
        </div>

        {/* Scroll prompt */}
        <div className="mt-20 flex flex-col items-center gap-2 text-[#7A6D52]">
          <span className="label text-[0.55rem]">Scroll</span>
          <ArrowDown size={13} className="text-[#DAA63C]/50 animate-bob" />
        </div>
      </div>
    </section>
  );
}
