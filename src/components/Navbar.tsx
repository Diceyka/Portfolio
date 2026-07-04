import { cn } from "../lib/utils";
import type { Lang, Content } from "../lib/content";

interface Props {
  lang: Lang;
  onLangChange: (l: Lang) => void;
  t: Content;
}

export default function Navbar({ lang, onLangChange, t }: Props) {
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="rounded-full border border-border bg-background/80 px-4 py-2 font-mono text-xs tracking-wide backdrop-blur transition-colors hover:border-accent hover:text-accent"
        >
          ds./
        </a>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 rounded-full border border-border bg-background/80 px-2 py-1 backdrop-blur sm:flex">
            {[
              { label: t.nav.work, href: "#design" },
              { label: t.nav.story, href: "#context" },
              { label: t.nav.resume, href: "mailto:diceygimmik91@gmail.com?subject=CV" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div
            className="flex items-center rounded-full border border-border bg-background/80 p-1 backdrop-blur"
            role="group"
            aria-label="Language"
          >
            {(["en", "ru"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => onLangChange(l)}
                className={cn(
                  "rounded-full px-3 py-1 font-mono text-xs uppercase transition-colors",
                  lang === l
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
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
