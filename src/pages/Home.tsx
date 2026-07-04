import type { Content, HomeProject } from "../lib/content";
import { Link } from "../lib/router";
import Reveal from "../components/Reveal";
import ImagePlaceholder from "../components/ImagePlaceholder";

const cardColors: Record<HomeProject["color"], string> = {
  green: "bg-[#dfe9b9]",
  peach: "bg-[#f6ded2]",
  periwinkle: "bg-[#bcc8f0]",
  sand: "bg-[#ece5d8]",
};

function ProjectBlock({ p, index }: { p: HomeProject; index: number }) {
  const card = (
    <div
      className={`group relative mt-10 overflow-hidden rounded-3xl ${cardColors[p.color]} p-6 transition-transform duration-500 hover:scale-[1.01] sm:p-14`}
    >
      <ImagePlaceholder
        caption={p.caption}
        ratio="aspect-[16/8]"
        className="bg-white/50 transition-transform duration-500 group-hover:scale-[1.02]"
      />
      <span className="absolute bottom-6 right-6 rounded-full bg-nav-active px-4 py-2 font-sans text-sm text-white sm:bottom-10 sm:right-10">
        {p.cta}
      </span>
    </div>
  );

  return (
    <section className="mx-auto max-w-page px-5 py-16 sm:px-8 sm:py-24">
      <Reveal delay={index * 60}>
        <h2
          className="max-w-4xl font-display italic leading-snug"
          style={{ fontSize: "clamp(1.6rem, 3.4vw, 2.5rem)" }}
        >
          {p.headline}
        </h2>
        <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 font-sans font-semibold text-label">
          {p.tags.map((tag, i) => (
            <span key={tag} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden>·</span>}
              {tag}
            </span>
          ))}
        </p>
        {p.href ? <Link to={p.href}>{card}</Link> : card}
      </Reveal>
    </section>
  );
}

export default function Home({ t }: { t: Content }) {
  const tickerItems = [...t.home.ticker, ...t.home.ticker, ...t.home.ticker, ...t.home.ticker];

  return (
    <main>
      {/* Ticker behind the nav */}
      <div className="marquee pt-6 sm:pt-7" aria-hidden>
        <div className="marquee-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={i}
              className="mx-8 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="relative mx-auto max-w-page px-5 pb-10 pt-24 text-center sm:px-8 sm:pt-32">
        <h1
          className="mx-auto max-w-4xl font-display font-bold leading-[1.12] animate-fade-up"
          style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
        >
          {t.home.heroTitle}
        </h1>
        <p
          className="script-overlay pointer-events-none relative z-10 -mt-4 text-right animate-fade-in sm:-mt-8 sm:pr-16"
          style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", animationDelay: "0.4s" }}
        >
          {t.home.heroScript}
        </p>
      </section>

      {/* Projects */}
      {t.projects.map((p, i) => (
        <ProjectBlock key={p.caption} p={p} index={i} />
      ))}
    </main>
  );
}
