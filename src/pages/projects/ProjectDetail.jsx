import { Link, useParams, Navigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import useLanguage from "../../context/useLanguage";
import content, { getMediaUrl } from "../../data/content";

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff4d00]";

const pick = (item, field, lang) => (lang === "ar" && item[`${field}_ar`]) || item[field];

export default function ProjectDetail() {
  const { t, lang } = useLanguage();
  const { id } = useParams();
  const projects = content.projects;

  const project = projects.find((p) => String(p.id) === String(id) || p.slug === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const related = projects.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <article
      className="w-full bg-white px-5 py-20 sm:py-28 md:px-10 lg:px-16"
      data-motion="fade-up"
      data-motion-duration="700"
      data-motion-offset="30"
    >
      <div className="mx-auto max-w-4xl">
        {/* Back to all projects */}
        <Link
          to="/projects"
          data-motion="fade-up"
          data-motion-duration="700"
          data-motion-offset="30"
          className={`inline-flex items-center gap-1.5 text-small font-medium text-zinc-500 transition-colors hover:text-[#ff4d00] ${focusRing} rounded-md`}
        >
          <span aria-hidden="true" className="rtl:rotate-180">
            ←
          </span>
          {t.projects.back}
        </Link>

        {/* Header */}
        <span
          className="mt-8 inline-flex rounded-full bg-[#ff4d00]/10 px-3 py-1.5 text-small font-medium text-[#ff4d00]"
          data-motion="fade-up"
          data-motion-duration="700"
          data-motion-offset="30"
        >
          {pick(project, "category", lang)}
        </span>

        <h1
          className="mt-4 text-balance bg-linear-to-b from-zinc-950 to-zinc-600 bg-clip-text text-display font-semibold leading-[1.15] tracking-tight text-transparent"
          data-motion="fade-up"
          data-motion-duration="700"
          data-motion-offset="30"
        >
          {pick(project, "title", lang)}
        </h1>

        <p className="mt-2 text-body text-zinc-500" data-motion="fade-up" data-motion-duration="700" data-motion-offset="30">
          {pick(project, "client", lang)} · {project.year}
        </p>

        {/* Main image */}
        <div
          className="mt-10 aspect-3/2 overflow-hidden rounded-3xl bg-zinc-100 shadow-lg shadow-zinc-900/5 ring-1 ring-zinc-900/5"
          data-motion="fade-up"
          data-motion-duration="700"
          data-motion-offset="30"
        >
          <img
            src={getMediaUrl(project.image)}
            alt={pick(project, "title", lang)}
            className="size-full object-cover"
          />
        </div>

        <p
          className="mt-8 max-w-2xl text-pretty text-body leading-7 text-zinc-600"
          data-motion="fade-up"
          data-motion-duration="700"
          data-motion-offset="30"
        >
          {pick(project, "description", lang)}
        </p>

        {/* More projects */}
        {related.length > 0 && (
          <div className="mt-20 border-t border-zinc-100 pt-12" data-motion="fade-up" data-motion-duration="700" data-motion-offset="30">
            <h2 className="text-h2 font-semibold tracking-tight text-zinc-950">{t.projects.more}</h2>

            <div className="mt-6 grid gap-x-6 gap-y-14 sm:grid-cols-2">
              {related.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}