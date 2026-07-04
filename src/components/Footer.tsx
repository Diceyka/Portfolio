import type { Content } from "../lib/content";

export default function Footer({ t }: { t: Content }) {
  return (
    <footer className="dark-section bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p
          className="max-w-2xl font-display leading-snug"
          style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)" }}
        >
          {t.footer.note}
        </p>

        <div className="mt-12 flex flex-wrap gap-3">
          {t.footer.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="rounded-full border border-border px-5 py-2.5 font-mono text-sm text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {link.label} ↗
            </a>
          ))}
        </div>

        <p className="mt-16 border-t border-border pt-8 font-mono text-xs text-muted-foreground">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
