import type { Content } from "../lib/content";
import SectionLabel from "./SectionLabel";

export default function Impact({ t }: { t: Content }) {
  return (
    <section className="dark-section bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionLabel>{t.impact.heading}</SectionLabel>
        <div className="grid gap-12 sm:grid-cols-3 sm:gap-8">
          {t.impact.stats.map((s) => (
            <div key={s.title}>
              <p
                className="font-display text-accent"
                style={{ fontSize: "clamp(3rem, 7vw, 5rem)" }}
              >
                {s.value}
              </p>
              <p className="mt-3 text-xl font-semibold">{s.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
