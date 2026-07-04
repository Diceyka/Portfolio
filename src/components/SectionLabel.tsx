import { cn } from "../lib/utils";

interface Props {
  children: string;
  className?: string;
}

/** Small caps sans label above each narrative section, as in the reference. */
export default function SectionLabel({ children, className }: Props) {
  return (
    <p
      className={cn(
        "mb-10 font-sans text-sm font-semibold uppercase tracking-[0.08em] text-label",
        className
      )}
    >
      {children}
    </p>
  );
}
