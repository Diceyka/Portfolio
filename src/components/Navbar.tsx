import { cn } from "../lib/utils";
import type { Lang, Content } from "../lib/content";

interface Props {
  lang: Lang;
  onLangChange: (l: Lang) => void;
  t: Content;
}

/** Floating pill nav: logo pill left, pill group right — as in the reference. */
export default function Navbar({ lang, onLangChange, t }: Props) {
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <nav className="mx-auto flex max-w-page items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="rounded-full border border-border bg-white px-5 py-2 font-display text-base shadow-sm transition-transform hover:scale-105"
        >
          dmitry
        </a>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-full border border-border bg-white p-1 shadow-sm">
            <a
              href="#design"
              className="rounded-full bg-nav-active px-4 py-1.5 font-display text-base text-white"
            >
              {t.nav.work}
            </a>
            <a
              href="#context"
              className="hidden rounded-full px-4 py-1.5 font-display text-base text-body transition-colors hover:bg-card sm:block"
            >
              {t.nav.story}
            </a>
            <a
              href="mailto:diceygimmik91@gmail.com?subject=CV"
              className="hidden rounded-full px-4 py-1.5 font-display text-base text-body transition-colors hover:bg-card sm:block"
            >
              {t.nav.resume}
            </a>
          </div>

          <div
            className="flex items-center rounded-full border border-border bg-white p-1 shadow-sm"
            role="group"
            aria-label="Language"
          >
            {(["en", "ru"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => onLangChange(l)}
                className={cn(
                  "rounded-full px-3 py-1.5 font-display text-sm transition-colors",
                  lang === l ? "bg-ink text-white" : "text-muted hover:text-ink"
                )}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
