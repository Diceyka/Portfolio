import type { CaseContent } from "../lib/content";
import Hero from "../components/Hero";
import Impact from "../components/Impact";
import SectionLabel from "../components/SectionLabel";
import ImagePlaceholder from "../components/ImagePlaceholder";
import Reveal from "../components/Reveal";
import Em from "../components/Em";

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

export default function CasePage({ c }: { c: CaseContent }) {
  return (
    <main>
      <Hero c={c} />

      {/* Product + Details + Problem/Solution/Result — card grid on white */}
      <section className="mx-auto max-w-page space-y-4 px-5 pt-4 sm:px-8">
        <Reveal>
          <div className="rounded-2xl bg-card p-8 sm:p-12">
            <h2 className="font-display text-2xl">
              {c.product.label} <em className="italic text-muted">{c.product.name}</em>
            </h2>
            <p className="mt-6 max-w-3xl font-sans text-lg font-semibold leading-relaxed text-ink">
              {c.product.text}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl bg-card p-8 sm:p-12">
              <h2 className="mb-8 font-display text-2xl">{c.details.heading}</h2>
              <dl>
                {c.details.rows.map((row, i) => (
                  <div key={row.label} className={i > 0 ? "border-t border-border py-5" : "pb-5"}>
                    <dt className="font-sans font-semibold text-ink">{row.value}</dt>
                    <dd className="mt-1 font-sans text-body">{row.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <div className="flex flex-col gap-4">
            {c.psr.map((block, i) => (
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

      <Impact c={c} />

      {/* Context */}
      <Narrative id="context" label={c.context.label} title={c.context.title}>
        {c.context.paras.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Narrative>

      {/* Problem */}
      <Narrative label={c.problem.label} title={c.problem.title}>
        <p>{c.problem.intro}</p>
        <ul className="space-y-3">
          {c.problem.points.map((point, i) => (
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
      <Narrative label={c.goals.label} title={c.goals.title}>
        {c.goals.items.map((goal) => (
          <p key={goal.name}>
            <strong className="font-semibold text-ink">{goal.name}</strong>: {goal.text}
          </p>
        ))}
      </Narrative>

      {/* Process + Key Insights */}
      <Narrative label={c.process.label} title={c.process.title}>
        {c.process.insights.map((insight) => (
          <p key={insight.name}>
            <strong className="font-semibold text-ink">{insight.name}</strong> {insight.text}
          </p>
        ))}
      </Narrative>

      {/* Solution statement — wide serif line */}
      <section className="mx-auto max-w-page px-5 py-20 sm:px-8 sm:py-28">
        <SectionLabel>{c.solution.label}</SectionLabel>
        <Reveal>
          <h2
            className="max-w-4xl font-display font-light leading-snug text-muted"
            style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.7rem)" }}
          >
            <Em text={c.solution.title} />
          </h2>
        </Reveal>
      </section>

      {/* Design sections */}
      <div id="design">
        {c.design.map((d) => (
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
        <SectionLabel>{c.reflections.label}</SectionLabel>
        <div className="grid gap-10 md:grid-cols-3">
          {c.reflections.items.map((r, i) => (
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
        <SectionLabel>{c.next.label}</SectionLabel>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Headline text={`*${c.next.title}*`} />
          </Reveal>
          <Reveal delay={150}>
            <p className="font-sans text-lg leading-relaxed text-body">{c.next.text}</p>
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
            {c.finLine}
          </p>
          <p className="mt-6 font-display text-2xl italic">{c.fin}</p>
        </Reveal>
      </section>
    </main>
  );
}
