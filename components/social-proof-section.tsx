"use client";

import { useEffect, useRef } from "react";

const logos = [
  "McDonald's", "Chipotle", "Coca-Cola", "Domino's", "Chili's",
  "Walgreens", "DaVita", "DISH", "Smashburger", "Floyd's Barbershop",
  "Velvet Taco", "Via 313", "AliveCor", "Celsior",
];

const testimonials = [
  {
    context: "When Smashburger needed to stop competing on price and start owning their emotional territory, they discovered their Gap.",
    quote: "Clear, strategic, actionable insights that drives the business.",
    name: "Tom Ryan",
    title: "Founder, Smashburger",
  },
  {
    context: "When the C-Suite Network needed the definitive voice on brand strategy for their community of global executives, they found one person.",
    quote: "There are great marketers. And then there are super marketers that the great marketers go to for advice. Meet Arjun Sen.",
    name: "Jeffrey Hayzlett",
    title: "Chairman & CEO, C-Suite Network",
  },
  {
    context: "When Drive North needed to fundamentally rethink how they go to market, The Feeling Business® framework changed everything.",
    quote: "ZenMango's work and insights has fundamentally changed the way we go to market. I can't recommend them highly enough.",
    name: "Dave Newman",
    title: "Founder, Drive North",
  },
  {
    context: "When Coca-Cola needed an outside perspective that could see what the inside couldn't, ZenMango brought something the industry had never offered.",
    quote: "Unique perspective on branding that I haven't seen in the industry.",
    name: "Andrea Clevenger",
    title: "Retail Strategy Director, The Coca-Cola Company",
  },
  {
    context: "When P.F. Chang's needed strategy that moved beyond analysis and into action, ZenMango made the path inevitable.",
    quote: "Solves business problems in a way that makes action seem inevitable.",
    name: "Lane Cardwell",
    title: "Former CEO, P.F. Chang's",
  },
  {
    context: "When TGI Friday's and Natural Grocers needed insights that would actually move the needle, ZenMango delivered outcomes, not observations.",
    quote: "Uncovers insights that translate into tangible and successful results.",
    name: "Trey Hall",
    title: "Former CMO, TGI Friday's & Natural Grocers",
  },
];

export function SocialProofSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    const els = ref.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-28 md:py-40 px-6 bg-[#0C0A09]">
      <div className="max-w-7xl mx-auto">
        {/* Logo section */}
        <div className="reveal mb-24">
          <p className="label text-center mb-4">
            Organizations That Have Felt The Difference
          </p>
          <p className="font-sans text-center text-[#7A6D52] text-xs font-light tracking-wide mb-12">
            From 30-unit growth chains to Fortune 500 global brands — restaurants,
            healthcare, retail, hospitality, and nonprofits.
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {logos.map((logo) => (
              <span
                key={logo}
                className="font-sans text-xs text-[#3D3529] hover:text-[#7A6D52] tracking-[0.15em] uppercase transition-colors font-light"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>

        {/* Gold divider */}
        <div className="reveal gold-line-h mb-24" />

        {/* Testimonials */}
        <div className="reveal mb-12">
          <p className="label mb-3">What It Feels Like to Work With ZenMango</p>
          <h2 className="font-display font-light italic text-[#F5EDD7] text-3xl md:text-4xl">
            From leaders who know the difference.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1C1814]">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="reveal bg-[#0C0A09] p-8 flex flex-col gap-6 hover:bg-[#100D09] transition-colors group"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Context */}
              <p className="font-sans text-[0.7rem] text-[#3D3529] font-light leading-relaxed italic group-hover:text-[#7A6D52] transition-colors">
                {t.context}
              </p>
              {/* Divider */}
              <div className="gold-line-h" />
              {/* Quote */}
              <p className="font-display text-lg text-[#DDD3BC] font-light italic leading-snug flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              {/* Attribution */}
              <div>
                <p className="font-sans text-sm text-[#C4B490] font-medium">
                  {t.name}
                </p>
                <p className="font-sans text-xs text-[#7A6D52] font-light mt-0.5">
                  {t.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
