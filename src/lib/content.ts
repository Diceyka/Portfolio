export type Lang = "en" | "ru";

/** Strings may contain *emphasis* — rendered as black italic serif via <Em/>. */
export interface HomeProject {
  headline: string;
  tags: string[];
  cta: string;
  href?: string;
  color: "green" | "peach" | "periwinkle" | "sand";
  caption: string;
}

export interface Content {
  nav: { work: string; story: string; resume: string };
  home: {
    ticker: string[];
    heroTitle: string;
    heroScript: string;
  };
  projects: HomeProject[];
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
  footer: { links: { label: string; href: string }[]; copyright: string };
}

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
        cta: "coming soon",
        color: "periwinkle",
        caption: "VS Robotics — RockUP CRM",
      },
      {
        headline: "I created a premium digital concept that lifted visits by 76% for the high-end travel segment.",
        tags: ["Premium Concept", "Visual System", "+76% visits", "Shipped"],
        cta: "coming soon",
        color: "sand",
        caption: "Coral Travel — Villas & Suites",
      },
      {
        headline: "I built a reusable landing system for three global brands, lifting conversion by 6–12%.",
        tags: ["Oral-B · Gillette · Braun", "Design System", "E-commerce", "Shipped"],
        cta: "coming soon",
        color: "peach",
        caption: "P&G — brand platforms",
      },
    ],
    hero: {
      tags: ["End-to-end Redesign", "Design Lead", "Team of 5", "Shipped"],
      title: "Redesigning how millions plan and book their vacations",
      caption: "Coral Travel — website and mobile app",
    },
    product: {
      label: "Product",
      name: "Coral Travel",
      text: "One of the largest tour operators on the market. I led the complete redesign of its digital ecosystem — website and mobile app — from UX audit to production launch, managing a team of 5 designers.",
    },
    details: {
      heading: "Details",
      rows: [
        { value: "Website + mobile app", label: "surface" },
        { value: "Design Lead (team of 5 designers)", label: "role" },
        { value: "UX audit · Redesign · Design system · Launch", label: "scope" },
        { value: "2022 – 2025", label: "timeline" },
      ],
    },
    psr: [
      {
        label: "Problem",
        title: "A Leaking Funnel",
        text: "The legacy site and app hadn't kept up with how people book trips. Fragmented flows, inconsistent UI between platforms and an overloaded search meant users dropped off before reaching payment.",
      },
      {
        label: "Solution",
        title: "One Unified System",
        text: "I led the team through a full cycle: UX audit, new information architecture, a rebuilt booking funnel and a shared design system that unified the website and the mobile app.",
      },
      {
        label: "Result",
        title: "Conversion Doubled",
        text: "After launch: +181% sessions, +87% users, +113% conversion to booking. The premium Villas & Suites concept added +76% visits and +30% average time on site.",
      },
    ],
    impact: {
      heading: "Impact",
      stats: [
        { value: "+113%", title: "Conversion to Booking", note: "After the funnel redesign" },
        { value: "+181%", title: "Sessions", note: "Post-launch vs. pre-redesign" },
        { value: "+87%", title: "Users", note: "Audience growth after launch" },
      ],
    },
    context: {
      label: "Context",
      title: "Coral Travel sells *packaged tours* to millions of travelers.",
      paras: [
        "The business depends on one thing: how easily a person goes from “I want a vacation” to a paid booking. Every extra step in that path costs real money.",
        "By 2022 the digital products had accumulated years of patchwork changes. The web and mobile experiences had drifted apart, and each new feature made the system harder to maintain.",
      ],
    },
    problem: {
      label: "Problem",
      title: "Users were dropping off before booking. The interface was *slowing the business down, losing revenue.*",
      intro: "This is what the audit made concrete,",
      points: [
        "Search and filtering overloaded users with choices before showing anything relevant",
        "Web and app used different patterns for the same tasks — users relearned the product on every platform",
        "No design system: every screen was hand-assembled, slowing both design and development",
      ],
    },
    goals: {
      label: "Goals + North Star",
      title: "To rebuild the *entire booking experience*, from first search to payment, as *one coherent system*.",
      items: [
        { name: "Rebuild the Funnel", text: "Redesign the search-to-payment path to remove drop-off points and make booking feel effortless." },
        { name: "Unify Platforms", text: "Bring the website and mobile app to a single visual and behavioral language." },
        { name: "Build the System", text: "Create a design system so a team of 5 designers and the dev team ship consistently and fast." },
        { name: "Open the Premium Segment", text: "Design a distinct digital concept for Villas & Suites — high-end properties need a different way of presenting." },
      ],
    },
    process: {
      label: "Process + Key Insights",
      title: "I started with a *full UX audit*: analytics, session recordings, competitor benchmarks and *interviews with the sales team* who talk to travelers every day.",
      insights: [
        { name: "Key Insight 1: Choice Overload", text: "people don't browse tours — they narrow down. The old search asked for 10+ parameters upfront; users wanted a fast first result they could refine." },
        { name: "Key Insight 2: Trust Is Visual", text: "a trip is an expensive, emotional purchase. Poor photos, cramped layouts and inconsistent UI read as “unreliable company” long before the price is seen." },
        { name: "Key Insight 3: One Product, Two Bodies", text: "users switch between web and app during a single purchase. Any mismatch between the two costs conversion at the most expensive moment — checkout." },
      ],
    },
    solution: {
      label: "Solution",
      title: "A *rebuilt booking experience* — faster search, honest product pages and *one design language* across web and app.",
    },
    design: [
      {
        label: "Design 1/3",
        name: "The Smart Search",
        sub: "from 10 fields to one smart entry",
        text: "The new search starts from what the user knows — destination and dates — and progressively reveals filters as results appear. Every step of the funnel shows progress and never loses entered data. This is where most of the +113% conversion gain came from.",
        imageCaption: "New search flow and booking funnel",
      },
      {
        label: "Design 2/3",
        name: "The Product Pages",
        sub: "built to answer, not to decorate",
        text: "Hotel and tour pages were restructured around the questions users actually ask: what does the room look like, what's included, what will the total cost be. Photos first, transparent pricing, reviews near the decision point.",
        imageCaption: "Redesigned hotel and tour pages",
      },
      {
        label: "Design 3/3",
        name: "Villas & Suites",
        sub: "a premium concept inside a mass product",
        text: "For the high-end segment I designed a separate visual system: restrained typography, full-bleed photography and an object-first presentation. The concept brought +76% visits and +30% average time on site.",
        imageCaption: "Villas & Suites premium concept",
      },
    ],
    reflections: {
      label: "Reflections",
      items: [
        { name: "Leading Is Designing the Team", text: "With 5 designers on one product, my main interface became the process: critique rituals, clear areas of ownership and a system that let everyone ship independently without breaking consistency." },
        { name: "Metrics Are the Strongest Argument", text: "Tying every major decision to funnel analytics changed conversations with stakeholders — debates about taste became discussions about numbers." },
        { name: "A Design System Is a Product", text: "Treating developers and designers as the system's users — with docs, naming and release discipline — is what made it actually get adopted." },
      ],
    },
    next: {
      label: "What I would do next..",
      title: "Personalized trip planning",
      text: "The next leap isn't in the interface — it's in relevance. I'd design an assistant-driven entry point that turns “somewhere warm in May, two kids” into three concrete, bookable options.",
    },
    finLine: "Millions of travelers booked their vacations a little happier ever after",
    fin: "fin.",
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
        cta: "скоро",
        color: "periwinkle",
        caption: "VS Robotics — RockUP CRM",
      },
      {
        headline: "Я создал премиальную digital-концепцию, которая подняла визиты на 76% в высоком сегменте travel.",
        tags: ["Премиум-концепция", "Визуальная система", "+76% визитов", "Запущено"],
        cta: "скоро",
        color: "sand",
        caption: "Coral Travel — Villas & Suites",
      },
      {
        headline: "Я построил переиспользуемую систему лендингов для трёх глобальных брендов: +6–12% к конверсии.",
        tags: ["Oral-B · Gillette · Braun", "Дизайн-система", "E-commerce", "Запущено"],
        cta: "скоро",
        color: "peach",
        caption: "P&G — платформы брендов",
      },
    ],
    hero: {
      tags: ["Полный редизайн", "Design Lead", "Команда из 5", "Запущено"],
      title: "Редизайн того, как миллионы планируют и бронируют отпуск",
      caption: "Coral Travel — сайт и мобильное приложение",
    },
    product: {
      label: "Продукт",
      name: "Coral Travel",
      text: "Один из крупнейших туроператоров на рынке. Я вёл полный редизайн цифровой экосистемы — сайта и мобильного приложения — от UX-аудита до запуска в продакшн, управляя командой из 5 дизайнеров.",
    },
    details: {
      heading: "Детали",
      rows: [
        { value: "Сайт + мобильное приложение", label: "платформы" },
        { value: "Design Lead (команда из 5 дизайнеров)", label: "роль" },
        { value: "UX-аудит · Редизайн · Дизайн-система · Запуск", label: "объём" },
        { value: "2022 – 2025", label: "сроки" },
      ],
    },
    psr: [
      {
        label: "Проблема",
        title: "Дырявая воронка",
        text: "Сайт и приложение не успевали за тем, как люди покупают туры. Разрозненные сценарии, разный UI на платформах и перегруженный поиск — пользователи уходили, не дойдя до оплаты.",
      },
      {
        label: "Решение",
        title: "Единая система",
        text: "Я провёл команду через полный цикл: UX-аудит, новая информационная архитектура, перестроенная воронка бронирования и общая дизайн-система для веба и приложения.",
      },
      {
        label: "Результат",
        title: "Конверсия удвоилась",
        text: "После запуска: +181% сессий, +87% пользователей, +113% конверсия в бронирование. Премиальная концепция Villas & Suites добавила +76% визитов и +30% ко времени на сайте.",
      },
    ],
    impact: {
      heading: "Эффект",
      stats: [
        { value: "+113%", title: "Конверсия в бронирование", note: "После редизайна воронки" },
        { value: "+181%", title: "Сессий", note: "После запуска vs. до редизайна" },
        { value: "+87%", title: "Пользователей", note: "Рост аудитории после запуска" },
      ],
    },
    context: {
      label: "Контекст",
      title: "Coral Travel продаёт *пакетные туры* миллионам путешественников.",
      paras: [
        "Бизнес зависит от одного: насколько легко человек проходит путь от «хочу в отпуск» до оплаченного бронирования. Каждый лишний шаг на этом пути стоит реальных денег.",
        "К 2022 году продукты накопили годы точечных доработок. Веб и мобайл разошлись по паттернам, а каждая новая фича делала систему тяжелее в поддержке.",
      ],
    },
    problem: {
      label: "Проблема",
      title: "Пользователи уходили до бронирования. Интерфейс *тормозил бизнес и терял выручку.*",
      intro: "Вот что аудит сделал конкретным,",
      points: [
        "Поиск и фильтры заваливали пользователя выбором до того, как показать хоть что-то релевантное",
        "Веб и приложение решали одни задачи разными паттернами — продукт приходилось осваивать заново на каждой платформе",
        "Дизайн-системы не было: каждый экран собирался вручную, что тормозило и дизайн, и разработку",
      ],
    },
    goals: {
      label: "Цели + North Star",
      title: "Перестроить *весь опыт бронирования*, от первого поиска до оплаты, как *единую систему*.",
      items: [
        { name: "Перестроить воронку", text: "Переделать путь от поиска до оплаты: убрать точки отвала и сделать бронирование лёгким." },
        { name: "Объединить платформы", text: "Привести сайт и приложение к единому визуальному и поведенческому языку." },
        { name: "Построить систему", text: "Создать дизайн-систему, чтобы команда из 5 дизайнеров и разработка выпускали фичи быстро и консистентно." },
        { name: "Открыть премиум-сегмент", text: "Спроектировать отдельную digital-концепцию для Villas & Suites — дорогим объектам нужна другая подача." },
      ],
    },
    process: {
      label: "Процесс + Ключевые инсайты",
      title: "Я начал с *полного UX-аудита*: аналитика, записи сессий, бенчмарки конкурентов и *интервью с отделом продаж*, который говорит с туристами каждый день.",
      insights: [
        { name: "Инсайт 1: Перегруз выбором", text: "люди не листают туры — они сужают выбор. Старый поиск требовал 10+ параметров на входе; пользователям нужен был быстрый первый результат, который можно уточнять." },
        { name: "Инсайт 2: Доверие — это визуал", text: "тур — дорогая эмоциональная покупка. Плохие фото, тесная вёрстка и разнобой в UI читаются как «ненадёжная компания» задолго до того, как человек увидит цену." },
        { name: "Инсайт 3: Один продукт, два тела", text: "пользователи переключаются между вебом и приложением в рамках одной покупки. Любое расхождение стоит конверсии в самый дорогой момент — на оплате." },
      ],
    },
    solution: {
      label: "Решение",
      title: "*Перестроенный опыт бронирования* — быстрый поиск, честные страницы продукта и *один дизайн-язык* для веба и приложения.",
    },
    design: [
      {
        label: "Дизайн 1/3",
        name: "Умный поиск",
        sub: "от 10 полей к одному умному входу",
        text: "Новый поиск начинается с того, что пользователь знает — направление и даты, — а фильтры раскрываются по мере появления результатов. Каждый шаг воронки показывает прогресс и не теряет введённые данные. Отсюда — основная часть роста конверсии на +113%.",
        imageCaption: "Новый поиск и воронка бронирования",
      },
      {
        label: "Дизайн 2/3",
        name: "Страницы продукта",
        sub: "отвечают на вопросы, а не украшают",
        text: "Страницы отелей и туров перестроены вокруг реальных вопросов: как выглядит номер, что включено, сколько выйдет итоговая цена. Фото — первыми, цена — прозрачно, отзывы — рядом с точкой решения.",
        imageCaption: "Обновлённые страницы отелей и туров",
      },
      {
        label: "Дизайн 3/3",
        name: "Villas & Suites",
        sub: "премиум-концепция внутри массового продукта",
        text: "Для высокого сегмента я спроектировал отдельную визуальную систему: сдержанная типографика, полноэкранная фотография, подача от объекта. Концепция дала +76% визитов и +30% ко времени на сайте.",
        imageCaption: "Премиальная концепция Villas & Suites",
      },
    ],
    reflections: {
      label: "Выводы",
      items: [
        { name: "Лидить — значит проектировать команду", text: "С 5 дизайнерами на одном продукте моим главным интерфейсом стал процесс: ритуалы критики, зоны ответственности и система, в которой каждый выпускает работу сам, не ломая консистентность." },
        { name: "Метрики — самый сильный аргумент", text: "Привязка каждого крупного решения к аналитике воронки поменяла разговор со стейкхолдерами: споры о вкусе стали обсуждением цифр." },
        { name: "Дизайн-система — это продукт", text: "Система прижилась, потому что я относился к дизайнерам и разработчикам как к её пользователям: документация, нейминг, дисциплина релизов." },
      ],
    },
    next: {
      label: "Что бы я сделал дальше..",
      title: "Персонализированное планирование поездок",
      text: "Следующий скачок — не в интерфейсе, а в релевантности. Я бы спроектировал вход через ассистента, который превращает «куда-то в тепло в мае, двое детей» в три конкретных варианта с кнопкой «забронировать».",
    },
    finLine: "Миллионы туристов стали бронировать отпуск чуть счастливее",
    fin: "fin.",
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
