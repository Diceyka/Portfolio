import type { Content, Lang } from "./types";
import { casesEn } from "./cases.en";
import { casesRu } from "./cases.ru";

export type { Lang, Content, CaseContent, HomeProject } from "./types";

export const content: Record<Lang, Content> = {
  en: {
    nav: { work: "work", story: "story", resume: "résumé" },
    home: {
      ticker: ["who i am", "what i care about", "what i believe in", "what i ship"],
      heroTitle: "Designer who turns complex products into interfaces that move business numbers.",
      heroScript: "that's me",
    },
    projects: [
      {
        headline: "I led the redesign of a travel platform that doubled conversion to booking for millions of travelers.",
        tags: ["End-to-end Redesign", "Design Lead", "Web + App", "Shipped"],
        cta: "view case study",
        href: "/coral-travel",
        color: "green",
        caption: "Coral Travel — website & mobile app",
      },
      {
        headline: "I design a data-heavy enterprise CRM, where a 128-token design system runs light & dark themes without duplication.",
        tags: ["Enterprise / SaaS", "Design Systems", "CRM", "Ongoing"],
        cta: "view case study",
        href: "/rockup-crm",
        color: "periwinkle",
        caption: "VS Robotics — RockUP CRM",
      },
      {
        headline: "I created a premium digital concept that lifted visits by 76% for the high-end travel segment.",
        tags: ["Premium Concept", "Visual System", "+76% visits", "Shipped"],
        cta: "view case study",
        href: "/villas-suites",
        color: "sand",
        caption: "Coral Travel — Villas & Suites",
      },
      {
        headline: "I built a reusable landing system for three global brands, lifting conversion by 6–12%.",
        tags: ["Oral-B · Gillette · Braun", "Design System", "E-commerce", "Shipped"],
        cta: "view case study",
        href: "/pg-brands",
        color: "peach",
        caption: "P&G — brand platforms",
      },
    ],
    cases: casesEn,
    footer: {
      links: [
        { label: "email", href: "mailto:diceygimmik91@gmail.com" },
        { label: "résumé", href: "mailto:diceygimmik91@gmail.com?subject=CV" },
        { label: "telegram", href: "https://t.me/DimaDicey" },
        { label: "behance", href: "https://behance.net/DimaDicey" },
      ],
      copyright: "© dmitry spiridonov 2026. all rights (and wrongs) reserved ✦ human-generated work ✦ created in moscow",
    },
  },

  ru: {
    nav: { work: "работы", story: "обо мне", resume: "резюме" },
    home: {
      ticker: ["кто я", "что мне важно", "во что я верю", "что я делаю"],
      heroTitle: "Дизайнер, который превращает сложные продукты в интерфейсы, двигающие бизнес-показатели.",
      heroScript: "это я",
    },
    projects: [
      {
        headline: "Я вёл редизайн travel-платформы, который удвоил конверсию в бронирование для миллионов путешественников.",
        tags: ["Полный редизайн", "Design Lead", "Веб + приложение", "Запущено"],
        cta: "смотреть кейс",
        href: "/coral-travel",
        color: "green",
        caption: "Coral Travel — сайт и приложение",
      },
      {
        headline: "Я проектирую data-heavy enterprise CRM, где дизайн-система на 128 токенов ведёт светлую и тёмную темы без дублирования.",
        tags: ["Enterprise / SaaS", "Дизайн-системы", "CRM", "В работе"],
        cta: "смотреть кейс",
        href: "/rockup-crm",
        color: "periwinkle",
        caption: "VS Robotics — RockUP CRM",
      },
      {
        headline: "Я создал премиальную digital-концепцию, которая подняла визиты на 76% в высоком сегменте travel.",
        tags: ["Премиум-концепция", "Визуальная система", "+76% визитов", "Запущено"],
        cta: "смотреть кейс",
        href: "/villas-suites",
        color: "sand",
        caption: "Coral Travel — Villas & Suites",
      },
      {
        headline: "Я построил переиспользуемую систему лендингов для трёх глобальных брендов: +6–12% к конверсии.",
        tags: ["Oral-B · Gillette · Braun", "Дизайн-система", "E-commerce", "Запущено"],
        cta: "смотреть кейс",
        href: "/pg-brands",
        color: "peach",
        caption: "P&G — платформы брендов",
      },
    ],
    cases: casesRu,
    footer: {
      links: [
        { label: "email", href: "mailto:diceygimmik91@gmail.com" },
        { label: "резюме", href: "mailto:diceygimmik91@gmail.com?subject=CV" },
        { label: "telegram", href: "https://t.me/DimaDicey" },
        { label: "behance", href: "https://behance.net/DimaDicey" },
      ],
      copyright: "© дмитрий спиридонов 2026. all rights (and wrongs) reserved ✦ сделано человеком ✦ москва",
    },
  },
};
