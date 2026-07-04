import { cn } from "../lib/utils";

interface Props {
  caption?: string;
  className?: string;
  ratio?: string; // tailwind aspect class
}

/**
 * Placeholder for case screenshots.
 * Replace with <img src="/images/..." /> — drop files into portfolio/public/images/.
 */
export default function ImagePlaceholder({ caption, className, ratio = "aspect-video" }: Props) {
  return (
    <figure className={cn("w-full", className)}>
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-2xl border border-border bg-card",
          ratio
        )}
      >
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, hsl(var(--border)) 0, hsl(var(--border)) 1px, transparent 1px, transparent 14px)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {caption ?? "image"}
          </span>
        </div>
      </div>
      {caption && (
        <figcaption className="mt-3 font-mono text-xs text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
