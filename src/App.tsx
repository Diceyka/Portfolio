import { useState } from "react";
import { content, type Lang } from "./lib/content";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Impact from "./components/Impact";
import Footer from "./components/Footer";
import SectionLabel from "./components/SectionLabel";
import ImagePlaceholder from "./components/ImagePlaceholder";

export default function App() {
  const [lang, setLang] = useState<Lang>("en");
  const t = content[lang];

  return (
    <div className="grain min-h-screen bg-background text-foreground">
      <Navbar lang={lang} onLangChange={setLang} t={t} />

      <Hero t={t} />

      {/* Product intro */}
      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr,1.4fr]">
          <div>
            <SectionLabel>{t.product.label}</SectionLabel>
            <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
              {t.product.name}
            </h2>
          </div>
          <p className="self-end text-xl font-medium leading-relaxed">{t.product.text}</p>
        </div>

        {/* Details */}
        <div className="mt-20 rounded-2xl border border-border bg-card p-6 sm:p-10">
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {t.details.heading}
          </p>
          <dl className="grid gap-8 sm:grid-cols-2">
            {t.details.rows.map((row) => (
              <div key={row.label} className="border-l-2 border-accent pl-4">
                <dt className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                  {row.label}
                </dt>
                <dd className="mt-1 font-semibold">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Problem / Solution / Result */}
        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {t.psr.map((block) => (
            <div key={block.label}>
              <SectionLabel>{block.label}</SectionLabel>
              <h3 className="text-xl font-bold">{block.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{block.text}</p>
            </div>
          ))}
        </div>
      </section>

      <Impact t={t} />

      {/* Context */}
      <section id="context" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionLabel>{t.context.label}</SectionLabel>
        <h2
          className="max-w-3xl font-display leading-tight"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
        >
          {t.context.title}
        </h2>
        <div className="mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
          {t.context.paras.map((p, i) => (
            <p key={i} className="leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <SectionLabel>{t.problem.label}</SectionLabel>
        <h2
          className="max-w-3xl font-display leading-tight"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
        >
          {t.problem.title}
        </h2>
        <p className="mt-8 font-semibold">{t.problem.intro}</p>
        <ul className="mt-4 max-w-3xl space-y-4">
          {t.problem.points.map((point, i) => (
            <li key={i} className="flex gap-4 rounded-xl border border-border bg-card p-5">
              <span className="font-mono text-sm text-accent">0{i + 1}</span>
              <span className="leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Goals */}
      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <SectionLabel>{t.goals.label}</SectionLabel>
        <h2
          className="max-w-3xl font-display leading-tight"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
        >
          {t.goals.title}
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {t.goals.items.map((goal) => (
            <div key={goal.name} className="rounded-2xl border border-border p-6 sm:p-8">
              <h3 className="font-bold">{goal.name}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{goal.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process + insights */}
      <section className="dark-section bg-background text-foreground">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
          <SectionLabel>{t.process.label}</SectionLabel>
          <h2
            className="max-w-3xl font-display leading-tight"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}
          >
            {t.process.title}
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {t.process.insights.map((insight) => (
              <div key={insight.name} className="rounded-2xl bg-card p-6 sm:p-8">
                <h3 className="font-bold text-accent">{insight.name}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{insight.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution statement */}
      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionLabel>{t.solution.label}</SectionLabel>
        <h2
          className="max-w-4xl font-display leading-tight"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)" }}
        >
          {t.solution.title}
        </h2>
      </section>

      {/* Design sections */}
      <section id="design" className="mx-auto max-w-6xl space-y-28 px-5 pb-28 sm:px-8">
        {t.design.map((d, i) => (
          <div key={d.label}>
            <SectionLabel>{d.label}</SectionLabel>
            <div
              className={`grid items-start gap-10 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <h3
                  className="font-display leading-tight"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
                >
                  {d.title}
                </h3>
                <p className="mt-5 leading-relaxed text-muted-foreground">{d.text}</p>
              </div>
              <ImagePlaceholder caption={d.imageCaption} ratio="aspect-[4/3]" />
            </div>
          </div>
        ))}
      </section>

      {/* Reflections */}
      <section className="mx-auto max-w-6xl px-5 pb-28 sm:px-8">
        <SectionLabel>{t.reflections.label}</SectionLabel>
        <div className="grid gap-10 md:grid-cols-3">
          {t.reflections.items.map((r) => (
            <div key={r.name} className="border-t-2 border-foreground pt-5">
              <h3 className="font-bold">{r.name}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What next */}
      <section className="mx-auto max-w-6xl px-5 pb-28 sm:px-8">
        <SectionLabel>{t.next.label}</SectionLabel>
        <div className="rounded-3xl border border-border bg-card p-8 sm:p-14">
          <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            {t.next.title}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t.next.text}
          </p>
        </div>
        <p
          className="mt-24 text-center font-display italic text-muted-foreground"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
        >
          {t.fin}
        </p>
      </section>

      <Footer t={t} />
    </div>
  );
}
