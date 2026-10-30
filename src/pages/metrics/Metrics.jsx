import { Link } from "react-router-dom";
import useLanguage from "../../context/useLanguage";

const metrics = [
  { number: "200+" },
  { number: "10+" },
  { number: "20+" },
  { number: "98%" },
];

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff4d00]";

export default function Metrics() {
  const { t } = useLanguage();
  return (
    <section className="bg-white px-5 py-20 sm:py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 sm:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-balance bg-linear-to-b from-zinc-950 to-zinc-600 bg-clip-text text-h2 font-semibold leading-[1.1] tracking-tight text-transparent">
              {t.metrics.title}
            </h2>

            <p className="mt-5 max-w-xl text-pretty text-body leading-7 text-zinc-600">
              {t.metrics.description}
            </p>
          </div>

          <Link
            to="/about"
            className={`group inline-flex w-fit items-center gap-2.5 rounded-full border border-[#ff4d00]/40 px-5 py-2.5 text-small font-medium text-[#ff4d00] transition hover:border-[#ff4d00] hover:bg-[#ff4d00] hover:text-white ${focusRing}`}
          >
            {t.metrics.action}
            <svg viewBox="0 0 256 256" aria-hidden="true" className="size-4 fill-current transition duration-200 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1">
              <path d="M221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z" />
            </svg>
          </Link>
        </div>

        {/* Stats panel: one dark block, hairline dividers made with gap-px over a lighter background */}
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-zinc-800 shadow-2xl shadow-zinc-900/15 ring-1 ring-zinc-900/10 md:grid-cols-4">
          {metrics.map((metric, index) => (
            <div
              key={t.metrics.labels[index]}
              className="flex flex-col-reverse justify-between gap-10 bg-zinc-950 p-6 transition-colors duration-300 hover:bg-zinc-900 md:gap-16 md:p-8"
            >
              <dt className="text-small leading-5 text-zinc-400">{t.metrics.labels[index]}</dt>
              <dd className="text-display font-semibold tabular-nums tracking-tight text-white">{metric.number}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
