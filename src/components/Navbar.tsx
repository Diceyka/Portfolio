import { cn } from "../lib/utils";
import { Link } from "../lib/router";
import { useTheme } from "../lib/theme";
import type { Lang, Content } from "../lib/content";

interface Props {
  lang: Lang;
  onLangChange: (l: Lang) => void;
  t: Content;
  isHome?: boolean;
}

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
    </svg>
  );
}

/** Icon pill that flips the site's light/dark theme; persists to localStorage. */
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-ink shadow-sm transition-transform hover:scale-105"
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

/** Floating pill nav: logo pill left, pill group right. */
export default function Navbar({ lang, onLangChange, t, isHome }: Props) {
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <nav className="mx-auto flex max-w-page items-center justify-between px-5 py-4 sm:px-8">
        <Link
          to="/"
          className="rounded-full border border-border bg-card px-5 py-2 font-display text-base shadow-sm transition-transform hover:scale-105"
        >
          dmitry
        </Link>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-full border border-border bg-card p-1 shadow-sm">
            <Link
              to="/"
              className="rounded-full bg-nav-active px-4 py-1.5 font-display text-base text-white"
            >
              {t.nav.work}
            </Link>
            <a
              href="#contact"
              className="hidden rounded-full px-4 py-1.5 font-display text-base text-body transition-colors hover:bg-page sm:block"
            >
              {t.nav.story}
            </a>
            <a
              href="mailto:diceygimmik91@gmail.com?subject=CV"
              className="hidden rounded-full px-4 py-1.5 font-display text-base text-body transition-colors hover:bg-page sm:block"
            >
              {t.nav.resume}
            </a>
          </div>

          <div
            className="flex items-center rounded-full border border-border bg-card p-1 shadow-sm"
            role="group"
            aria-label="Language"
          >
            {(["en", "ru"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => onLangChange(l)}
                className={cn(
                  "rounded-full px-3 py-1.5 font-display text-sm transition-colors",
                  lang === l ? "bg-invert text-invert-foreground" : "text-muted hover:text-ink"
                )}
              >
                {l}
              </button>
            ))}
          </div>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
