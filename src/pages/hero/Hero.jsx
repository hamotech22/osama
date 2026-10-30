import BTN from "../../components/button/BTN";
import useLanguage from "../../context/useLanguage";
import content, { getMediaUrl } from "../../data/content";

const columns = [
  {
    offset: "",
    items: [
      { index: 0, ratio: "aspect-4/5" },
      { index: 4, ratio: "aspect-4/3" },
    ],
  },
  {
    offset: "sm:pt-12",
    items: [
      { index: 1, ratio: "aspect-4/3" },
      { index: 5, ratio: "aspect-3/4" },
    ],
  },
  {
    offset: "sm:pt-24",
    items: [
      { index: 2, ratio: "aspect-square" },
      { index: 6, ratio: "aspect-3/4" },
    ],
  },
  {
    offset: "sm:pt-8",
    items: [
      { index: 3, ratio: "aspect-4/5" },
      { index: 7, ratio: "aspect-3/4" },
    ],
  },
];

function Card({ src, alt, ratio }) {
  return (
    <figure
      className={`group relative overflow-hidden rounded-3xl bg-zinc-100 shadow-lg shadow-zinc-900/5 ring-1 ring-zinc-900/5 ${ratio}`}
      data-motion="fade-up"
    >
      <img src={src} alt={alt} loading="lazy" className="size-full object-cover transition duration-700 ease-out group-hover:scale-105" />

      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-zinc-950/25 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
    </figure>
  );
}

export default function Hero() {
  const { t } = useLanguage();
  const gallery = content.gallery;

  return (
    <div className="relative isolate mx-auto w-full max-w-360 overflow-hidden pb-16 cursor-pointer">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 [background-image:linear-gradient(to_right,#0000000d_1px,transparent_1px),linear-gradient(to_bottom,#0000000d_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,black,transparent)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-160 max-w-full -translate-x-1/2 -translate-y-1/3 rounded-full bg-blue-400/20 blur-3xl"
      />

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-5 pt-14 text-center sm:pt-20" data-motion="fade-up">
        <span
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3.5 py-1.5 text-small font-medium text-zinc-600 shadow-sm backdrop-blur"
          data-motion="fade-up"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>

          {t.hero.badge}
        </span>

        <h1
          className="mt-6 text-balance bg-linear-to-b from-zinc-950 to-zinc-600 bg-clip-text text-display font-semibold leading-[1.05] tracking-tight text-transparent"
          data-motion="fade-up"
        >
          {t.hero.title1}
          <br className="hidden sm:block" /> {t.hero.title2}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-body leading-7 text-zinc-600" data-motion="fade-up">
          {t.hero.desc}
        </p>

        <div className="mt-9 flex justify-center" data-motion="fade-up">
          <a href="#projects">
            <BTN>{t.hero.button}</BTN>
          </a>
        </div>
      </section>

      {/* Gallery */}
      <section
        id="portfolio"
        className="mx-auto mt-14 grid w-full max-w-6xl grid-cols-2 gap-3 px-5 sm:mt-20 sm:grid-cols-4 sm:gap-5 sm:px-8"
        data-motion="fade-up"
        data-motion-delay="120"
      >
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className={`flex flex-col gap-3 sm:gap-5 ${column.offset}`}>
            {column.items.map(({ index, ratio }) => (
              <div key={index}>
                {gallery[index] && (
                  <Card src={getMediaUrl(gallery[index])} alt={t.hero.galleryAlt(index + 1)} ratio={ratio} />
                )}
              </div>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
}
