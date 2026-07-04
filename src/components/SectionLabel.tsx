import { cn } from "../lib/utils";

interface Props {
  children: string;
  className?: string;
}

export default function SectionLabel({ children, className }: Props) {
  return (
    <p
      className={cn(
        "font-mono text-xs uppercase tracking-[0.25em] text-accent mb-6 flex items-center gap-3",
        className
      )}
    >
      <span className="inline-block h-px w-8 bg-accent" aria-hidden />
      {children}
    </p>
  );
}
