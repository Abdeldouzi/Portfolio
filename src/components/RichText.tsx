import type { ElementType } from "react";

/** Renders a string with **bold** segments as <strong>. */
export function RichText({
  text,
  as: Tag = "span",
  className,
}: {
  text: string;
  as?: ElementType;
  className?: string;
}) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <Tag className={className}>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        return <span key={i}>{part}</span>;
      })}
    </Tag>
  );
}
