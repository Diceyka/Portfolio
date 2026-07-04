# Портфолио — кейс Coral Travel

Одностраничный кейс в структуре детального case study: hero → детали → problem/solution/result → impact → context → goals → process → design 1/3–3/3 → reflections → footer. Переключатель EN/RU в навбаре.

## Запуск

```bash
cd portfolio
npm install
npm run dev      # localhost:5173
npm run build    # прод-сборка в dist/
```

## Где что менять

- **Тексты (оба языка)** — `src/lib/content.ts`, один файл со всем контентом
- **Цвета** — CSS-токены в `src/index.css` (`--background`, `--accent` и т.д.)
- **Картинки** — сейчас стоят плейсхолдеры (`src/components/ImagePlaceholder.tsx`). Положи скриншоты в `public/images/` и замени `<ImagePlaceholder />` на `<img src="/images/..." />` в `App.tsx` и `Hero.tsx`

## Стек

React 19 · TypeScript · Vite 6 · Tailwind CSS v3 (токены через `hsl(var(--...))`, `cn()` из `src/lib/utils.ts`)

Шрифты: Prata (display) + Manrope (текст) + JetBrains Mono (лейблы) — все с кириллицей.
