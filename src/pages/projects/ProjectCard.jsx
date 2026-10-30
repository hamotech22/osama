import { Link } from "react-router-dom";
import useLanguage from "../../context/useLanguage";
import { getMediaUrl } from "../../data/content";

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff4d00]";

const pick = (item, field, lang) => (lang === "ar" && item[`${field}_ar`]) || item[field];

export default function ProjectCard({ project }) {
  const { lang } = useLanguage();

  return (
    <Link to={`/projects/${project.id}`} className={`group block rounded-3xl ${focusRing}`}>
      <div className="relative aspect-3/2 overflow-hidden rounded-3xl bg-zinc-100 shadow-lg shadow-zinc-900/5 ring-1 ring-zinc-900/5">
        <img
          src={getMediaUrl(project.image)}
          alt={pick(project, "title", lang)}
          loading="lazy"
          className="size-full object-cover transition duration-700 ease-out group-hover:scale-105"
        />

        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-zinc-950/35 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

        <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1.5 text-small font-medium text-zinc-800 shadow-sm backdrop-blur-md rtl:left-auto rtl:right-4">
          {pick(project, "category", lang)}
        </span>

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
  );
}
