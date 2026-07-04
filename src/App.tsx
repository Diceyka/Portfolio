import { useState } from "react";
import { content, type Lang } from "./lib/content";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Impact from "./components/Impact";
import Footer from "./components/Footer";
import SectionLabel from "./components/SectionLabel";
import ImagePlaceholder from "./components/ImagePlaceholder";
import Reveal from "./components/Reveal";
import Em from "./components/Em";

/* Reference-style serif headline: light gray base + black italic emphasis */
function Headline({ text, size = "clamp(1.6rem, 3vw, 2.1rem)" }: { text: string; size?: string }) {
  return (
    <h2
      className="max-w-xl font-display font-light leading-snug text-muted"
      style={{ fontSize: size }}
    >
      <Em text={text} />
    </h2>
  );
}

/* Two-column narrative section: headline left, body right */
function Narrative({
  label,
  title,
  children,
  id,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="mx-auto max-w-page px-5 py-20 sm:px-8 sm:py-28">
      <SectionLabel>{label}</SectionLabel>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Headline text={title} />
        </Reveal>
        <Reveal delay={150}>
          <div className="space-y-6 font-sans text-lg leading-relaxed text-body">{children}</div>
        </Reveal>
      </div>
    </section>
  );
}

export default function App() {
  const [lang, setLang] = useState<Lang>("en");
  const t = content[lang];

  return (
    <div className="min-h-screen bg-page text-ink">
      <Navbar lang={lang} onLangChange={setLang} t={t} />

      <Hero t={t} />

      {/* Product + Details + Problem/Solution/Result — card grid on white */}
      <section className="mx-auto max-w-page space-y-4 px-5 pt-4 sm:px-8">
        <Reveal>
          <div className="rounded-2xl bg-card p-8 sm:p-12">
            <h2 className="font-display text-2xl">
              {t.product.label} <em className="italic text-muted">{t.product.name}</em>
            </h2>
            <p className="mt-6 max-w-3xl font-sans text-lg font-semibold leading-relaxed text-ink">
              {t.product.text}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl bg-card p-8 sm:p-12">
              <h2 className="mb-8 font-display text-2xl">{t.details.heading}</h2>
              <dl>
                {t.details.rows.map((row, i) => (
                  <div
                    key={row.label}
                    className={i > 0 ? "border-t border-border py-5" : "pb-5"}
                  >
                    <dt className="font-sans font-semibold text-ink">{row.value}</dt>
                    <dd className="mt-1 font-sans text-body">{row.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <div className="flex flex-col gap-4">
            {t.psr.map((block, i) => (
              <Reveal key={block.label} delay={i * 100} className="flex-1">
                <div className="h-full rounded-2xl bg-card p-8 sm:p-10">
                  <h3 className="font-display text-2xl">
                    {block.label} <em className="italic text-muted">{block.title}</em>
                  </h3>
                  <p className="mt-4 font-sans leading-relaxed text-body">{block.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-page px-5 pt-4 sm:px-8" />

      <Impact t={t} />

      {/* Context */}
      <Narrative id="context" label={t.context.label} title={t.context.title}>
        {t.context.paras.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Narrative>

      {/* Problem */}
      <Narrative label={t.problem.label} title={t.problem.title}>
        <p>{t.problem.intro}</p>
        <ul className="space-y-3">
          {t.problem.points.map((point, i) => (
            <li key={i} className="flex gap-3">
              <span aria-hidden className="text-muted">
                ·
              </span>
              {point}
            </li>
          ))}
        </ul>
      </Narrative>

      {/* Goals */}
      <Narrative label={t.goals.label} title={t.goals.title}>
        {t.goals.items.map((goal) => (
          <p key={goal.name}>
            <strong className="font-semibold text-ink">{goal.name}</strong>: {goal.text}
          </p>
        ))}
      </Narrative>

      {/* Process + Key Insights */}
      <Narrative label={t.process.label} title={t.process.title}>
        {t.process.insights.map((insight) => (
          <p key={insight.name}>
            <strong className="font-semibold text-ink">{insight.name}</strong> {insight.text}
          </p>
        ))}
      </Narrative>

      {/* Solution statement — wide serif line */}
      <section className="mx-auto max-w-page px-5 py-20 sm:px-8 sm:py-28">
        <SectionLabel>{t.solution.label}</SectionLabel>
        <Reveal>
          <h2
            className="max-w-4xl font-display font-light leading-snug text-muted"
            style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.7rem)" }}
          >
            <Em text={t.solution.title} />
          </h2>
        </Reveal>
      </section>

      {/* Design sections */}
      <div id="design">
        {t.design.map((d) => (
          <section key={d.label} className="mx-auto max-w-page px-5 py-16 sm:px-8 sm:py-20">
            <SectionLabel>{d.label}</SectionLabel>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <Reveal>
                <h3
                  className="font-display leading-snug"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2.1rem)" }}
                >
                  <em className="italic text-ink">{d.name}</em>
                  <br />
                  <span className="font-light text-muted">{d.sub}</span>
                </h3>
              </Reveal>
              <Reveal delay={150}>
                <p className="font-sans text-lg leading-relaxed text-body">{d.text}</p>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <div className="mt-12 rounded-2xl bg-card-media p-4 sm:p-8">
                <ImagePlaceholder caption={d.imageCaption} ratio="aspect-[16/9]" />
              </div>
            </Reveal>
          </section>
        ))}
      </div>

      {/* Reflections */}
      <section className="mx-auto max-w-page px-5 py-20 sm:px-8 sm:py-28">
        <SectionLabel>{t.reflections.label}</SectionLabel>
        <div className="grid gap-10 md:grid-cols-3">
          {t.reflections.items.map((r, i) => (
            <Reveal key={r.name} delay={i * 120}>
              <p className="font-sans text-lg leading-relaxed text-body">
                <strong className="font-semibold text-ink">{r.name}</strong>: {r.text}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* What next */}
      <section className="mx-auto max-w-page px-5 py-16 sm:px-8 sm:py-20">
        <SectionLabel>{t.next.label}</SectionLabel>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Headline text={`*${t.next.title}*`} />
          </Reveal>
          <Reveal delay={150}>
            <p className="font-sans text-lg leading-relaxed text-body">{t.next.text}</p>
          </Reveal>
        </div>
      </section>

      {/* fin */}
      <section className="mx-auto max-w-page px-5 py-24 text-center sm:px-8">
        <Reveal>
          <p
            className="font-display font-light italic text-muted"
            style={{ fontSize: "clamp(1.4rem, 2.8vw, 2rem)" }}
          >
            {t.finLine}
          </p>
          <p className="mt-6 font-display text-2xl italic">{t.fin}</p>
        </Reveal>
      </section>

      <Footer t={t} />
    </div>
  );
}
