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

/* Fanned "paper sheet" behind the mockup — part of the folder illusion */
function Sheet({ label, className }: { label: string; className?: string }) {
  return (
    <div
      className={`absolute h-44 w-56 rounded-xl bg-ink/10 blur-[1px] transition-transform duration-500 sm:h-56 sm:w-72 ${className ?? ""}`}
    >
      <span className="block pt-3 text-center font-display text-sm italic text-white/80">
        {label}
      </span>
    </div>
  );
}

function ProjectBlock({ p, index }: { p: HomeProject; index: number }) {
  const card = (
    <div
      className={`group relative mt-10 overflow-hidden rounded-3xl ${cardColors[p.color]} aspect-[4/3] sm:aspect-[2/1]`}
    >
      {/* Back layer: fanned sheets peeking out of the folder */}
      <Sheet
        label={p.tags[0]}
        className="left-[8%] top-[14%] -rotate-6 group-hover:-translate-y-2 group-hover:-rotate-[7deg]"
      />
      <Sheet
        label={p.tags[1] ?? p.tags[0]}
        className="right-[8%] top-[14%] rotate-6 group-hover:-translate-y-2 group-hover:rotate-[7deg]"
      />
      <Sheet
        label={p.caption}
        className="left-1/2 top-[9%] w-72 -translate-x-1/2 -rotate-1 sm:w-96"
      />

      {/* Mockup: tucked into the folder, pops out sharp on hover */}
      <div className="absolute inset-x-[8%] top-[22%] z-10 blur-[2px] transition-all duration-500 ease-out group-hover:top-[10%] group-hover:scale-[1.02] group-hover:blur-0 sm:inset-x-[16%] sm:top-[18%]">
        <ImagePlaceholder
          caption={p.caption}
          ratio="aspect-[16/9]"
          className="rounded-xl bg-white shadow-2xl"
          src={p.href ? `/images/${p.href.replace(/^\//, "")}-hero.jpg` : undefined}
        />
      </div>

      {/* Front flap of the folder — fades away on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-1 bottom-0 top-[55%] z-20 rounded-t-[28px] bg-gradient-to-b from-white/25 via-white/60 to-white/85 backdrop-blur-[1px] transition-opacity duration-500 group-hover:opacity-0"
      />

      <span className="absolute bottom-5 right-5 z-30 rounded-full bg-nav-active px-4 py-2 font-sans text-sm text-white transition-transform duration-300 group-hover:scale-105 sm:bottom-8 sm:right-8">
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
