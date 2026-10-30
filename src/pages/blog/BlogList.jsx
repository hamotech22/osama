import { useEffect, useRef } from "react";
// [تعديل 1] useSearchParams لحفظ رقم الصفحة في الرابط + react-paginate
import { Link, useSearchParams } from "react-router-dom";
import ReactPaginateModule from "react-paginate";
import useLanguage from "../../context/useLanguage";
import content, { getMediaUrl } from "../../data/content";

// [تعديل 2] حل مشكلة الـ default export مع Vite
const ReactPaginate = ReactPaginateModule.default ?? ReactPaginateModule;

// [تعديل 3] عدد المقالات في الصفحة + ستايل أزرار الـ pagination
const PAGE_SIZE = 6;

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff4d00]";
const pageBase =
  "cursor-pointer grid h-10 min-w-10 place-items-center rounded-full bg-white px-3 text-small font-medium tabular-nums text-zinc-700 ring-1 ring-zinc-900/10 transition hover:text-[#ff4d00]";

const pick = (item, field, lang) => (lang === "ar" && item[`${field}_ar`]) || item[field];

const formatDate = (date, lang) =>
  date
    ? new Date(date).toLocaleDateString(lang === "ar" ? "ar" : "en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";

export default function BlogList() {
  const { t, lang } = useLanguage();
  const posts = content.blogs;

  // [تعديل 4] رقم الصفحة من الرابط (?page=2): الـ Back من المقال بيرجعك لنفس الصفحة
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Math.max(1, parseInt(searchParams.get("page"), 10) || 1);

  const pageCount = Math.max(1, Math.ceil(posts.length / PAGE_SIZE));
  const visiblePosts = posts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const listRef = useRef(null);

  useEffect(() => {
    if (page > pageCount) {
      setSearchParams({ page: String(pageCount) }, { replace: true });
    }
  }, [page, pageCount, setSearchParams]);

  const handlePageChange = ({ selected }) => {
    setSearchParams({ page: selected + 1 });
    listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      className="w-full bg-white px-5 py-20 sm:py-28 md:px-10 lg:px-16"
      data-motion="fade-up"
      data-motion-duration="700"
      data-motion-offset="30"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 max-w-2xl sm:mb-16" data-motion="fade-up" data-motion-duration="700" data-motion-offset="30">
          <h1 className="text-balance bg-linear-to-b from-zinc-950 to-zinc-600 bg-clip-text text-display font-semibold leading-[1.1] tracking-tight text-transparent">
            {t.blog.listTitle}
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-body leading-7 text-zinc-600">{t.blog.listDescription}</p>
        </div>

        {/* Posts grid */}
        <div
          ref={listRef}
          className="grid scroll-mt-24 grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visiblePosts.map((post) => {
            const author = post.authors?.[0] ?? post.author;
            return (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className={`group flex flex-col rounded-2xl ${focusRing}`}
                data-motion="fade-up"
                data-motion-duration="700"
                data-motion-offset="30"
              >
                <div className="aspect-5/4 overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-zinc-900/5">
                  <img
                    src={getMediaUrl(post.image)}
                    alt={pick(post, "title", lang)}
                    loading="lazy"
                    className="size-full object-cover transition duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <h2 className="mt-5 text-h3 font-semibold leading-snug tracking-tight text-zinc-950 transition-colors group-hover:text-[#ff4d00]">
                  {pick(post, "title", lang)}
                </h2>

                <p className="mt-2 line-clamp-3 text-body leading-6 text-zinc-600">{pick(post, "excerpt", lang)}</p>

                <time dateTime={post.date} className="mt-auto pt-5 text-small text-zinc-500">
                  {formatDate(post.date, lang)}
                </time>

                {author && (
                  <div className="mt-3 flex items-center gap-2">
                    <img
                      src={getMediaUrl(author.avatar) || "/images/about.webp"}
                      alt={pick(author, "name", lang)}
                      loading="lazy"
                      className="size-7 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-body font-medium text-zinc-800">{pick(author, "name", lang)}</p>
                      {(author.role || author.description || author.description_ar) && (
                        <p className="text-body text-zinc-500">
                          {pick(author, "role", lang) || pick(author, "description", lang)}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </Link>
            );
          })}
        </div>

        {pageCount > 1 && (
          <ReactPaginate
            forcePage={Math.min(page, pageCount) - 1}
            pageCount={pageCount}
            onPageChange={handlePageChange}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            previousLabel={t.blog.prev}
            nextLabel={t.blog.next}
            breakLabel="…"
            renderOnZeroPageCount={null}
            ariaLabelBuilder={(n) => `${t.blog.page} ${n}`}
            previousAriaLabel={t.blog.prev}
            nextAriaLabel={t.blog.next}
            containerClassName="mt-16 flex flex-wrap items-center justify-center gap-2"
            pageLinkClassName={`${pageBase} ${focusRing}`}
            activeLinkClassName="bg-[#ff4d00]! text-white! ring-[#ff4d00]!"
            previousLinkClassName={`${pageBase} px-5 ${focusRing}`}
            nextLinkClassName={`${pageBase} px-5 ${focusRing}`}
            breakClassName="px-1 text-zinc-400"
            disabledClassName="opacity-40 pointer-events-none"
          />
        )}
      </div>
    </section>
  );
}