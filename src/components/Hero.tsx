import type { Content } from "../lib/content";
import ImagePlaceholder from "./ImagePlaceholder";

export default function Hero({ t }: { t: Content }) {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pt-32 sm:px-8 sm:pt-40">
      <div className="flex flex-wrap gap-2 animate-fade-up">
        {t.hero.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <h1
        className="mt-10 max-w-4xl font-display leading-[1.08] animate-fade-up"
        style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)", animationDelay: "0.1s" }}
      >
        {t.hero.title}
      </h1>

      <p
        className="mt-6 max-w-xl text-lg text-muted-foreground animate-fade-up"
        style={{ animationDelay: "0.2s" }}
      >
        {t.hero.caption}
      </p>

      <div className="mt-14 animate-fade-in" style={{ animationDelay: "0.35s" }}>
        <ImagePlaceholder caption={t.hero.caption} ratio="aspect-[16/8]" />
      </div>
    </section>
  );
}
