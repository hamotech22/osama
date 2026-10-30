import { useEffect } from "react";
import { Link } from "react-router-dom";
import useLanguage from "../../context/useLanguage";
import content, { getMediaUrl } from "../../data/content";

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff4d00]";

const pick = (item, field, lang) => (lang === "ar" && item[`${field}_ar`]) || item[field];

export default function Projects({ onLoadingChange }) {
  const { t, lang } = useLanguage();
  const projects = content.projects;

  useEffect(() => {
    onLoadingChange?.(false);
  }, [onLoadingChange]);

  return (
    <section id="projects" className="bg-white px-5 py-20 sm:py-28 md:px-10" data-motion="fade-up">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div
          className="mb-12 flex flex-col gap-6 sm:mb-16 md:flex-row md:items-end md:justify-between"
          data-motion="fade-up"
          data-motion-duration="700"
          data-motion-offset="30"
        >
          <div className="max-w-2xl" data-motion="fade-up" data-motion-duration="700" data-motion-offset="30">
            <h2 className="text-balance bg-linear-to-b from-zinc-950 to-zinc-600 bg-clip-text text-h2 font-semibold leading-[1.1] tracking-tight text-transparent">
              {t.projects.homeTitle}
            </h2>

            <p className="mt-5 max-w-xl text-pretty text-body leading-7 text-zinc-600">
              {t.projects.homeDescription}
            </p>
          </div>

          <Link
            to="/projects"
            className={`group inline-flex w-fit items-center gap-2.5 rounded-full border border-[#ff4d00]/40 px-5 py-2.5 text-small font-medium text-[#ff4d00] transition hover:border-[#ff4d00] hover:bg-[#ff4d00] hover:text-white ${focusRing}`}
          >
            {t.projects.viewAll}
            <svg
              viewBox="0 0 256 256"
              aria-hidden="true"
              className="size-4 fill-current transition duration-200 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
            >
              <path d="M221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z" />
            </svg>
          </Link>
        </div>

        {/* Project cards */}
        <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2">
          {/* [تعديل 2] نفس ترتيب العرض القديم (آخر 4 بالترتيب التصاعدي)،
              وبيشتغل صح حتى لو الـ endpoint تجاهل الباراميترات */}
          {[...projects].sort((a, b) => b.id - a.id).slice(0, 4).reverse().map((project) => (
            <Link key={project.id} to={`/projects/${project.id}`} className={`group block rounded-3xl ${focusRing}`} data-motion="fade-up">
              <div className="relative aspect-3/2 overflow-hidden rounded-3xl bg-zinc-100 shadow-lg shadow-zinc-900/5 ring-1 ring-zinc-900/5">
                <img
                  src={getMediaUrl(project.image)}
                  alt={pick(project, "title", lang)}
                  loading="lazy"
                  className="size-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-zinc-950/35 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Category chip */}
                <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1.5 text-small font-medium text-zinc-800 shadow-sm backdrop-blur-md rtl:left-auto rtl:right-4">
                  {pick(project, "category", lang)}
                </span>

                {/* Hover arrow */}
                <span
                  aria-hidden="true"
                  className="absolute right-4 top-4 grid size-10 translate-y-1 scale-90 place-items-center rounded-full bg-white text-zinc-950 opacity-0 shadow-md transition duration-300 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100"
                >
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" className="size-4">
                    <path d="M6 14 14 6M7 6h7v7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>

              <div className="mt-5 flex items-start justify-between gap-4 px-1">
                <div>
                  <h3 className="text-h3 font-semibold tracking-tight text-zinc-950 transition-colors group-hover:text-[#ff4d00]">
                    {pick(project, "title", lang)}
                  </h3>
                  <p className="mt-1 text-body text-zinc-500">{pick(project, "client", lang)}</p>
                </div>

                <span className="pt-1 text-small tabular-nums text-zinc-500">{project.year}</span>
              </div>

              <p className="mt-3 px-1 text-body leading-6 text-zinc-600">{pick(project, "description", lang)}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}