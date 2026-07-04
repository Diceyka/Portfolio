import { cn } from "../lib/utils";

interface Props {
  caption?: string;
  className?: string;
  ratio?: string;
  dark?: boolean;
}

/**
 * Placeholder for case screenshots.
 * Replace with <img src="/images/..." /> — drop files into portfolio/public/images/.
 */
export default function ImagePlaceholder({ caption, className, ratio = "aspect-video", dark }: Props) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl",
        dark ? "bg-white/10" : "bg-card-media",
        ratio,
        className
      )}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={cn("font-sans text-sm", dark ? "text-white/50" : "text-muted")}>
          {caption ?? "image"}
        </span>
      </div>
    </div>
  );
}
