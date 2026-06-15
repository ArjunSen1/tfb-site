"use client";

import { useEffect, useRef } from "react";

export function FinalCtaSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.2 }
    );
    const els = ref.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-40 md:py-56 px-6 bg-[#080605] overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(218,166,60,0.06)_0%,transparent_70%)]" />

      {/* Concentric rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        {[500, 700, 900, 1100].map((size, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-[#DAA63C]/[0.04]"
            style={{ width: size, height: size }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="reveal">
          <p className="label mb-10">The Question That Remains</p>

          <h2 className="font-display font-light italic text-[#F5EDD7] text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] mb-8">
            The Gap in your business
            <br />
            is running right now.
          </h2>

          <p className="font-sans font-light text-[#C4B490] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-5">
            The question is whether you&apos;re running it — or it&apos;s running you.
          </p>
          <p className="font-sans font-light text-[#7A6D52] text-base leading-relaxed max-w-xl mx-auto mb-16">
            Every day the Invisible Economy operates without design is a day it
            operates against you. The Numb Customers it creates today will not
            appear in your data for months. The cost accrues in silence.
          </p>

          <div className="gold-line-h w-20 mx-auto mb-14" />

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="https://book.zenmango.com/branddiagnostic"
              className="bg-[#DAA63C] text-[#0C0A09] px-12 py-5 text-[0.65rem] font-semibold tracking-[0.2em] uppercase hover:bg-[#EAC76A] transition-colors"
            >
              Begin Your Discovery
            </a>
            <a
              href="https://zenmango.com"
              className="border border-[#28231A] text-[#7A6D52] px-12 py-5 text-[0.65rem] font-semibold tracking-[0.2em] uppercase hover:border-[#DAA63C]/40 hover:text-[#DAA63C] transition-all"
            >
              Visit ZenMango.com
            </a>
          </div>

          <p className="font-sans text-xs text-[#3D3529] font-light">
            First engagement: The Feeling Business Diagnostic™ &nbsp;·&nbsp;
            $4,500 – $7,500 &nbsp;·&nbsp; Half-day executive session
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-32 pt-10 border-t border-[#1C1814] max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-[#F5EDD7] text-base font-light italic">
          The Feeling Business®
        </p>
        <p className="font-sans text-xs text-[#3D3529] font-light text-center">
          © ZenMango · Houston, Texas · Est. 1994
          <br className="md:hidden" />
          <span className="hidden md:inline"> &nbsp;·&nbsp; </span>
          The Feeling Business® is a registered trademark of Arjun Sen / ZenMango.
        </p>
        <a
          href="https://zenmango.com"
          className="font-sans text-xs text-[#3D3529] hover:text-[#7A6D52] tracking-[0.15em] uppercase font-light transition-colors"
        >
          ZenMango.com
        </a>
      </div>
    </section>
  );
}
