export type Lang = "en" | "ru";

export interface HomeProject {
  headline: string;
  tags: string[];
  cta: string;
  href?: string;
  color: "green" | "peach" | "periwinkle" | "sand";
  caption: string;
}

/** Strings may contain *emphasis* — rendered as black italic serif via <Em/>. */
export interface CaseContent {
  hero: { tags: string[]; title: string; caption: string };
  product: { label: string; name: string; text: string };
  details: { heading: string; rows: { value: string; label: string }[] };
  psr: { label: string; title: string; text: string }[];
  impact: { heading: string; stats: { value: string; title: string; note: string }[] };
  context: { label: string; title: string; paras: string[] };
  problem: { label: string; title: string; intro: string; points: string[] };
  goals: { label: string; title: string; items: { name: string; text: string }[] };
  process: { label: string; title: string; insights: { name: string; text: string }[] };
  solution: { label: string; title: string };
  design: { label: string; name: string; sub: string; text: string; imageCaption: string }[];
  reflections: { label: string; items: { name: string; text: string }[] };
  next: { label: string; title: string; text: string };
  finLine: string;
  fin: string;
}

export interface Content {
  nav: { work: string; story: string; resume: string };
  home: { ticker: string[]; heroTitle: string; heroScript: string };
  projects: HomeProject[];
  cases: Record<string, CaseContent>;
  footer: { links: { label: string; href: string }[]; copyright: string };
}
