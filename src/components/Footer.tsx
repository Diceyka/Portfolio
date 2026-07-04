import type { Content } from "../lib/content";
import Reveal from "./Reveal";

/** Centered footer: pill contact buttons, oversized wordmark, small copyright. */
export default function Footer({ t }: { t: Content }) {
  return (
    <footer id="contact" className="mx-auto max-w-page px-5 pb-10 pt-24 text-center sm:px-8">
      <Reveal>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {t.footer.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="rounded-full border border-border bg-white px-6 py-2.5 font-display text-base text-body shadow-sm transition-all hover:scale-105 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal delay={150}>
        <p
          aria-hidden
          className="mt-10 select-none bg-gradient-to-b from-nav-active via-nav-active/50 to-transparent bg-clip-text font-display font-bold italic leading-none text-transparent"
          style={{ fontSize: "clamp(5rem, 18vw, 15rem)", filter: "blur(1.5px)" }}
        >
          dmitry
        </p>
      </Reveal>

      <p className="mt-8 font-sans text-sm text-muted">{t.footer.copyright}</p>
    </footer>
  );
}
