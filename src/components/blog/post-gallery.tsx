import Image from "next/image";
import { cn } from "cn";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import type { PostImage } from "@/lib/blog";

/** Photo grid for multi-photo (e.g. Facebook album) posts. */
export function PostGallery({
  images,
  locale,
}: {
  images: PostImage[];
  locale: Locale;
}) {
  if (images.length === 0) return null;
  const dict = getDictionary(locale);
  const single = images.length === 1;

  return (
    <section aria-labelledby="post-gallery-title" className="mt-10">
      <h2
        id="post-gallery-title"
        className="font-heading text-foreground text-xl font-semibold"
      >
        {dict.blog.galleryTitle}
      </h2>
      <ul
        className={cn(
          "mt-4 grid gap-3",
          single ? "grid-cols-1" : "grid-cols-2 sm:grid-cols-3",
        )}
      >
        {images.map((image) => (
          <li key={image.src}>
            <a
              href={image.src}
              target="_blank"
              rel="noopener"
              className={cn(
                "ring-foreground/10 focus-visible:ring-ring/50 relative block overflow-hidden rounded-lg ring-1 focus-visible:ring-[3px] focus-visible:outline-none",
                single ? "aspect-[4/3]" : "aspect-square",
              )}
            >
              <span className="sr-only">{dict.blog.openImage} </span>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={
                  single
                    ? "(min-width: 768px) 768px, 100vw"
                    : "(min-width: 640px) 256px, 50vw"
                }
                className="object-cover transition-transform duration-300 hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100"
              />
              <span className="sr-only"> {dict.blog.opensInNewTab}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
