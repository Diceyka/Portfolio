import { useState } from "react";
import { cn } from "../lib/utils";

interface Props {
  caption?: string;
  className?: string;
  ratio?: string;
  dark?: boolean;
  /** Path under /public, e.g. "/images/coral-travel-hero.jpg". Drop the file into portfolio/public/images/ — filename must match exactly. */
  src?: string;
}

/**
 * Real screenshot when `src` is given and loads; falls back to the caption
 * placeholder automatically if the file is missing or still not dropped in.
 */
export default function ImagePlaceholder({ caption, className, ratio = "aspect-video", dark, src }: Props) {
  const [failed, setFailed] = useState(false);

  if (src && !failed) {
    return (
      <div className={cn("relative w-full overflow-hidden rounded-2xl", ratio, className)}>
        <img
          src={src}
          alt={caption ?? ""}
          loading="lazy"
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

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
