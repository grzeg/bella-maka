import { Fragment } from "react";
import { cn } from "cn";
import { tokenizePlainText } from "@/lib/blog-text";

/**
 * Renders Facebook-style plain text: blank lines split paragraphs, single line
 * breaks are kept, bare URLs become links. Nothing is parsed as Markdown/MDX.
 */
export function PlainTextBody({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const paragraphs = tokenizePlainText(text);

  return (
    <div className={cn("space-y-4", className)}>
      {paragraphs.map((lines, p) => (
        <p key={p}>
          {lines.map((segments, l) => (
            <Fragment key={l}>
              {l > 0 && <br />}
              {segments.map((segment, s) =>
                segment.type === "link" ? (
                  <a
                    key={s}
                    href={segment.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary focus-visible:ring-ring/50 rounded-sm break-all underline underline-offset-4 focus-visible:ring-[3px] focus-visible:outline-none"
                  >
                    {segment.value}
                  </a>
                ) : (
                  <Fragment key={s}>{segment.value}</Fragment>
                ),
              )}
            </Fragment>
          ))}
        </p>
      ))}
    </div>
  );
}
