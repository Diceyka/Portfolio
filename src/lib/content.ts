export type Lang = "en" | "ru";

export interface Content {
  nav: { work: string; story: string; resume: string };
  hero: {
    tags: string[];
    title: string;
    caption: string;
  };
  product: {
    label: string;
    name: string;
    text: string;
  };
  details: {
    heading: string;
    rows: { value: string; label: string }[];
  };
  psr: { label: string; title: string; text: string }[];
  impact: {
    heading: string;
    stats: { value: string; title: string; note: string }[];
  };
  context: { label: string; title: string; paras: string[] };
  problem: { label: string; title: string; intro: string; points: string[] };
  goals: { label: string; title: string; items: { name: string; text: string }[] };
  process: { label: string; title: string; insights: { name: string; text: string }[] };
  solution: { label: string; title: string };
  design: {
    label: string;
    title: string;
    text: string;
    imageCaption: string;
  }[];
  reflections: { label: string; items: { name: string; text: string }[] };
  next: { label: string; title: string; text: string };
  fin: string;
  footer: {
    note: string;
    links: { label: string; href: string }[];
    copyright: string;
  };
}

export const content: Record<Lang, Content> = {
  en: {
    nav: { work: "work", story: "story", resume: "résumé" },
    hero: {
      tags: ["End-to-end Redesign", "Design Lead", "Team of 5", "2022–2025", "Shipped"],
      title: "Redesigning how millions plan and book their vacations",
      caption: "Coral Travel — full redesign of the website and mobile app",
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
        { value: "Design Lead — team of 5 designers", label: "role" },
        { value: "UX audit · Redesign · Design system · Launch", label: "scope" },
        { value: "2022 – 2025", label: "timeline" },
      ],
    },
    psr: [
      {
        label: "Problem",
        title: "A legacy interface losing bookings",
        text: "The old site and app hadn't kept up with how people actually book trips. Fragmented flows, inconsistent UI between platforms and an overloaded search meant users dropped off before reaching payment.",
      },
      {
        label: "Solution",
        title: "One system across web and app",
        text: "I led the team through a full cycle: UX audit, new information architecture, a rebuilt booking funnel and a shared design system that unified the website and the mobile app.",
      },
      {
        label: "Result",
        title: "Conversion more than doubled",
        text: "After launch: +181% sessions, +87% users, +113% conversion to booking. The premium Villas & Suites concept added +76% visits and +30% average time on site.",
      },
    ],
    impact: {
      heading: "Impact",
      stats: [
        { value: "+113%", title: "Conversion to booking", note: "After the funnel redesign" },
        { value: "+181%", title: "Sessions", note: "Post-launch vs. pre-redesign" },
        { value: "+87%", title: "Users", note: "Audience growth after launch" },
      ],
    },
    context: {
      label: "Context",
      title: "Coral Travel sells packaged tours to millions of travelers.",
      paras: [
        "The business depends on one thing: how easily a person goes from “I want a vacation” to a paid booking. Every extra step in that path costs real money.",
        "By 2022 the digital products had accumulated years of patchwork changes. The web and mobile experiences had drifted apart, and each new feature made the system harder to maintain.",
      ],
    },
    problem: {
      label: "Problem",
      title: "Users were dropping off before booking. The interface was working against the business.",
      intro: "The audit made the pain points concrete:",
      points: [
        "Search and filtering overloaded users with choices before showing anything relevant",
        "Web and app had different patterns for the same tasks — users had to relearn the product on every platform",
        "No design system: every screen was hand-assembled, slowing both design and development",
      ],
    },
    goals: {
      label: "Goals + North Star",
      title: "Rebuild the entire booking experience — from first search to payment — as one coherent system.",
      items: [
        { name: "Rebuild the funnel", text: "Redesign the search-to-payment path to remove drop-off points and make booking feel effortless." },
        { name: "Unify platforms", text: "Bring the website and mobile app to a single visual and behavioral language." },
        { name: "Build the system", text: "Create a design system so a team of 5 designers and the dev team ship consistently and fast." },
        { name: "Open the premium segment", text: "Design a distinct digital concept for Villas & Suites — high-end properties need a different way of presenting." },
      ],
    },
    process: {
      label: "Process + Key Insights",
      title: "I started with a full UX audit: analytics, session recordings, competitor benchmarks and interviews with the sales team who talk to travelers every day.",
      insights: [
        { name: "Insight 1: Choice overload", text: "People don't browse tours — they narrow down. The old search asked for 10+ parameters upfront; users wanted a fast first result they could refine." },
        { name: "Insight 2: Trust is visual", text: "A trip is an expensive, emotional purchase. Poor photos, cramped layouts and inconsistent UI read as “unreliable company” long before the price is seen." },
        { name: "Insight 3: One product, two bodies", text: "Users switch between web and app during a single purchase. Any mismatch between the two costs conversion at the most expensive moment — checkout." },
      ],
    },
    solution: {
      label: "Solution",
      title: "A rebuilt booking experience: faster search, honest product pages and one design language across web and app.",
    },
    design: [
      {
        label: "Design 1/3",
        title: "Search & funnel — from 10 fields to one smart entry",
        text: "The new search starts from what the user knows — destination and dates — and progressively reveals filters as results appear. Every step of the funnel was redesigned to show progress and never lose entered data. This is where most of the +113% conversion gain came from.",
        imageCaption: "New search flow and booking funnel",
      },
      {
        label: "Design 2/3",
        title: "Hotel & tour pages — built to answer, not to decorate",
        text: "Product pages were restructured around the questions users actually ask: what does the room look like, what's included, what will the total cost be. Photos first, transparent pricing, reviews near the decision point.",
        imageCaption: "Redesigned hotel and tour pages",
      },
      {
        label: "Design 3/3",
        title: "Villas & Suites — a premium concept inside a mass product",
        text: "For the high-end segment I designed a separate visual system: restrained typography, full-bleed photography and an object-first presentation. The concept brought +76% visits and +30% average time on site.",
        imageCaption: "Villas & Suites premium concept",
      },
    ],
    reflections: {
      label: "Reflections",
      items: [
        { name: "Leading is designing the team, not just the screens", text: "With 5 designers on one product, my main interface became the process: critique rituals, clear areas of ownership and a system that let everyone ship independently without breaking consistency." },
        { name: "Metrics are the strongest design argument", text: "Tying every major decision to funnel analytics changed conversations with stakeholders — debates about taste became discussions about numbers." },
        { name: "A design system is a product with its own users", text: "Treating developers and designers as the system's users — with docs, naming and release discipline — is what made it actually get adopted." },
      ],
    },
    next: {
      label: "What I would do next..",
      title: "Personalized trip planning",
      text: "The next leap isn't in the interface — it's in relevance. I'd design an assistant-driven entry point that turns “somewhere warm in May, two kids” into three concrete, bookable options.",
    },
    fin: "fin.",
    footer: {
      note: "Thanks for scrolling this far. I design enterprise and consumer products where the interface has to carry real business numbers. If that's the kind of problem you have — let's talk.",
      links: [
        { label: "email", href: "mailto:diceygimmik91@gmail.com" },
        { label: "telegram", href: "https://t.me/DimaDicey" },
        { label: "behance", href: "https://behance.net/DimaDicey" },
        { label: "figma portfolio", href: "https://www.figma.com/proto/J6ovWyQNMaJEUICWMms7Ie/Portfolio-Product-Designer?node-id=0-10" },
      ],
      copyright: "© Dmitry Spiridonov 2026 · human-made work · Moscow",
    },
  },

  ru: {
    nav: { work: "работы", story: "обо мне", resume: "резюме" },
    hero: {
      tags: ["Полный редизайн", "Design Lead", "Команда из 5", "2022–2025", "Запущено"],
      title: "Редизайн того, как миллионы планируют и бронируют отпуск",
      caption: "Coral Travel — полный редизайн сайта и мобильного приложения",
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
        { value: "Design Lead — команда из 5 дизайнеров", label: "роль" },
        { value: "UX-аудит · Редизайн · Дизайн-система · Запуск", label: "объём работ" },
        { value: "2022 – 2025", label: "сроки" },
      ],
    },
    psr: [
      {
        label: "Проблема",
        title: "Устаревший интерфейс терял бронирования",
        text: "Сайт и приложение не успевали за тем, как люди реально покупают туры. Разрозненные сценарии, разный UI на платформах и перегруженный поиск — пользователи уходили, не дойдя до оплаты.",
      },
      {
        label: "Решение",
        title: "Единая система для сайта и приложения",
        text: "Я провёл команду через полный цикл: UX-аудит, новая информационная архитектура, перестроенная воронка бронирования и общая дизайн-система для веба и приложения.",
      },
      {
        label: "Результат",
        title: "Конверсия выросла вдвое",
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
      title: "Coral Travel продаёт пакетные туры миллионам путешественников.",
      paras: [
        "Бизнес зависит от одного: насколько легко человек проходит путь от «хочу в отпуск» до оплаченного бронирования. Каждый лишний шаг на этом пути стоит реальных денег.",
        "К 2022 году продукты накопили годы точечных доработок. Веб и мобайл разошлись по паттернам, а каждая новая фича делала систему тяжелее в поддержке.",
      ],
    },
    problem: {
      label: "Проблема",
      title: "Пользователи уходили до бронирования. Интерфейс работал против бизнеса.",
      intro: "Аудит сделал боли конкретными:",
      points: [
        "Поиск и фильтры заваливали пользователя выбором до того, как показать хоть что-то релевантное",
        "Веб и приложение решали одни задачи разными паттернами — продукт приходилось осваивать заново на каждой платформе",
        "Дизайн-системы не было: каждый экран собирался вручную, что тормозило и дизайн, и разработку",
      ],
    },
    goals: {
      label: "Цели + North Star",
      title: "Перестроить весь опыт бронирования — от первого поиска до оплаты — как единую систему.",
      items: [
        { name: "Перестроить воронку", text: "Переделать путь от поиска до оплаты: убрать точки отвала и сделать бронирование лёгким." },
        { name: "Объединить платформы", text: "Привести сайт и приложение к единому визуальному и поведенческому языку." },
        { name: "Построить систему", text: "Создать дизайн-систему, чтобы команда из 5 дизайнеров и разработка выпускали фичи быстро и консистентно." },
        { name: "Открыть премиум-сегмент", text: "Спроектировать отдельную digital-концепцию для Villas & Suites — дорогим объектам нужна другая подача." },
      ],
    },
    process: {
      label: "Процесс + Ключевые инсайты",
      title: "Я начал с полного UX-аудита: аналитика, записи сессий, бенчмарки конкурентов и интервью с отделом продаж, который говорит с туристами каждый день.",
      insights: [
        { name: "Инсайт 1: Перегруз выбором", text: "Люди не листают туры — они сужают выбор. Старый поиск требовал 10+ параметров на входе; пользователям нужен был быстрый первый результат, который можно уточнять." },
        { name: "Инсайт 2: Доверие — это визуал", text: "Тур — дорогая эмоциональная покупка. Плохие фото, тесная вёрстка и разнобой в UI читаются как «ненадёжная компания» задолго до того, как человек увидит цену." },
        { name: "Инсайт 3: Один продукт, два тела", text: "Пользователи переключаются между вебом и приложением в рамках одной покупки. Любое расхождение между ними стоит конверсии в самый дорогой момент — на оплате." },
      ],
    },
    solution: {
      label: "Решение",
      title: "Перестроенный опыт бронирования: быстрый поиск, честные страницы продукта и один дизайн-язык для веба и приложения.",
    },
    design: [
      {
        label: "Дизайн 1/3",
        title: "Поиск и воронка — от 10 полей к одному умному входу",
        text: "Новый поиск начинается с того, что пользователь знает — направление и даты, — а фильтры раскрываются по мере появления результатов. Каждый шаг воронки показывает прогресс и не теряет введённые данные. Отсюда — основная часть роста конверсии на +113%.",
        imageCaption: "Новый поиск и воронка бронирования",
      },
      {
        label: "Дизайн 2/3",
        title: "Страницы отелей и туров — отвечают на вопросы, а не украшают",
        text: "Страницы продукта перестроены вокруг реальных вопросов: как выглядит номер, что включено, сколько выйдет итоговая цена. Фото — первыми, цена — прозрачно, отзывы — рядом с точкой решения.",
        imageCaption: "Обновлённые страницы отелей и туров",
      },
      {
        label: "Дизайн 3/3",
        title: "Villas & Suites — премиум-концепция внутри массового продукта",
        text: "Для высокого сегмента я спроектировал отдельную визуальную систему: сдержанная типографика, полноэкранная фотография, подача от объекта. Концепция дала +76% визитов и +30% ко времени на сайте.",
        imageCaption: "Премиальная концепция Villas & Suites",
      },
    ],
    reflections: {
      label: "Выводы",
      items: [
        { name: "Лидить — значит проектировать команду, а не только экраны", text: "С 5 дизайнерами на одном продукте моим главным интерфейсом стал процесс: ритуалы критики, зоны ответственности и система, в которой каждый выпускает работу сам, не ломая консистентность." },
        { name: "Метрики — самый сильный аргумент дизайнера", text: "Привязка каждого крупного решения к аналитике воронки поменяла разговор со стейкхолдерами: споры о вкусе стали обсуждением цифр." },
        { name: "Дизайн-система — это продукт со своими пользователями", text: "Система прижилась, потому что я относился к дизайнерам и разработчикам как к её пользователям: документация, нейминг, дисциплина релизов." },
      ],
    },
    next: {
      label: "Что бы я сделал дальше..",
      title: "Персонализированное планирование поездок",
      text: "Следующий скачок — не в интерфейсе, а в релевантности. Я бы спроектировал вход через ассистента, который превращает «куда-то в тепло в мае, двое детей» в три конкретных варианта с кнопкой «забронировать».",
    },
    fin: "fin.",
    footer: {
      note: "Спасибо, что долистали. Я проектирую enterprise- и consumer-продукты, где интерфейс отвечает за реальные бизнес-показатели. Если у вас такая задача — напишите.",
      links: [
        { label: "email", href: "mailto:diceygimmik91@gmail.com" },
        { label: "telegram", href: "https://t.me/DimaDicey" },
        { label: "behance", href: "https://behance.net/DimaDicey" },
        { label: "портфолио в figma", href: "https://www.figma.com/proto/J6ovWyQNMaJEUICWMms7Ie/Portfolio-Product-Designer?node-id=0-10" },
      ],
      copyright: "© Дмитрий Спиридонов, 2026 · сделано человеком · Москва",
    },
  },
};
