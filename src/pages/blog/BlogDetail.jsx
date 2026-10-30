import { Link, useParams, Navigate } from "react-router-dom";
import useLanguage from "../../context/useLanguage";
import content, { getMediaUrl } from "../../data/content";

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff4d00]";

const pick = (item, field, lang) => (lang === "ar" && item[`${field}_ar`]) || item[field];

const formatDate = (date, lang) =>
  date
    ? new Date(date).toLocaleDateString(lang === "ar" ? "ar" : "en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";

export default function BlogPost() {
  const { t, lang } = useLanguage();
  const { id } = useParams();
  const posts = content.blogs;

  const post = posts.find((p) => String(p.id) === String(id));

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const author = post.authors?.[0] ?? post.author;

  return (
    <article
      className="w-full bg-white px-5 py-20 sm:py-28 md:px-10 lg:px-16"
      data-motion="fade-up"
      data-motion-duration="700"
      data-motion-offset="30"
    >
      <div className="mx-auto max-w-3xl">
        <Link
          to="/blog"
          data-motion="fade-up"
          data-motion-duration="700"
          data-motion-offset="30"
          className={`inline-flex items-center gap-1.5 text-small font-medium text-zinc-500 transition-colors hover:text-[#ff4d00] ${focusRing} rounded-md`}
        >
          <span aria-hidden="true" className="rtl:rotate-180">
            ←
          </span>
          {t.blog.back}
        </Link>

        <div className="mt-8" data-motion="fade-up" data-motion-duration="700" data-motion-offset="30">
          <time dateTime={post.date} className="text-small text-zinc-500">
            {formatDate(post.date, lang)}
          </time>

          <h1 className="mt-3 text-balance bg-linear-to-b from-zinc-950 to-zinc-600 bg-clip-text text-display font-semibold leading-[1.15] tracking-tight text-transparent">
            {pick(post, "title", lang)}
          </h1>

          <p className="mt-5 max-w-2xl text-pretty text-body leading-7 text-zinc-600">
            {pick(post, "excerpt", lang)}
          </p>

          {author && (
            <div className="mt-6 flex items-center gap-3">
              <img
                src={getMediaUrl(author.avatar) || "/images/about.webp"}
                alt={pick(author, "name", lang)}
                className="size-10 rounded-full object-cover ring-2 ring-white"
              />
              <div>
                <p className="text-body font-medium text-zinc-950">{pick(author, "name", lang)}</p>
                <p className="text-body text-zinc-500">{pick(author, "role", lang) || pick(author, "description", lang)}</p>
              </div>
            </div>
          )}
        </div>

        <div
          className="mt-10 aspect-5/3 overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-zinc-900/5"
          data-motion="fade-up"
          data-motion-duration="700"
          data-motion-offset="30"
        >
          <img src={getMediaUrl(post.image)} alt={pick(post, "title", lang)} className="size-full object-cover" />
        </div>

        <div
          className="prose prose-zinc mt-10 max-w-none text-body leading-7 text-zinc-700 [&_p]:mb-5 [&_h2]:mt-10 [&_h2]:text-h2 [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-zinc-950"
          data-motion="fade-up"
          data-motion-duration="700"
          data-motion-offset="30"
          dangerouslySetInnerHTML={{ __html: pick(post, "content", lang) }}
        />
      </div>
    </article>
  );
}