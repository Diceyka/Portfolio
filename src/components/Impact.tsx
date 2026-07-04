import type { CaseContent } from "../lib/content";
import Reveal from "./Reveal";

/** Light card with three large serif-italic stats and vertical dividers. */
export default function Impact({ c }: { c: CaseContent }) {
  return (
    <section className="mx-auto max-w-page px-5 sm:px-8">
      <div className="rounded-2xl bg-card p-8 sm:p-12">
        <h2 className="mb-10 font-display text-2xl">{c.impact.heading}</h2>
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-0">
          {c.impact.stats.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 120}
              className={i > 0 ? "sm:border-l sm:border-border sm:pl-10" : ""}
            >
              <p
                className="font-display italic leading-none"
                style={{ fontSize: "clamp(2.8rem, 5.5vw, 4rem)" }}
              >
                {s.value}
              </p>
              <p className="mt-4 font-display text-2xl leading-tight">{s.title}</p>
              <p className="mt-3 font-sans text-sm text-muted">{s.note}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
