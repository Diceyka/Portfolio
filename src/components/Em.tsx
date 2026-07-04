/**
 * Renders a string where *marked* fragments become black italic emphasis —
 * the reference styles serif headlines as gray with black italic accents.
 */
export default function Em({ text }: { text: string }) {
  const parts = text.split(/\*([^*]+)\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <em key={i} className="italic font-normal text-ink">
            {part}
          </em>
        ) : (
          part
        )
      )}
    </>
  );
}
