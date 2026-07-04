import type { CaseContent } from "../lib/content";
import ImagePlaceholder from "./ImagePlaceholder";

/** Full-viewport dark green grainy hero with centered italic serif headline. */
export default function Hero({ c }: { c: CaseContent }) {
  return (
    <section id="top" className="hero-bg text-white">
      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-page flex-col items-center justify-center px-5 pt-28 sm:px-8">
        <h1
          className="max-w-4xl text-center font-display font-light italic leading-[1.15] animate-fade-up"
          style={{ fontSize: "clamp(2rem, 4.6vw, 3.4rem)" }}
        >
          {c.hero.title}
        </h1>

        <p
          className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center font-sans font-semibold animate-fade-up"
          style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.125rem)", animationDelay: "0.15s" }}
        >
          {c.hero.tags.map((tag, i) => (
            <span key={tag} className="flex items-center gap-3">
              {i > 0 && <span aria-hidden>•</span>}
              {tag}
            </span>
          ))}
        </p>

        <div className="mt-14 w-full animate-fade-in" style={{ animationDelay: "0.35s" }}>
          <ImagePlaceholder dark caption={c.hero.caption} ratio="aspect-[16/8]" className="rounded-t-2xl" />
        </div>
      </div>
    </section>
  );
}
