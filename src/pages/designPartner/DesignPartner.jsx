import useLanguage from "../../context/useLanguage";

export default function DesignPartner() {
  const { t } = useLanguage();
  return (
    <section className="bg-white px-5 py-20 sm:py-28 md:px-10" data-motion="fade-up">
      <div
        className="group relative isolate mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#111111] px-5 pt-14 text-center shadow-2xl shadow-zinc-900/30 ring-1 ring-white/10 sm:px-10 sm:pt-20"
        data-motion="fade-up"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 [background-image:linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-80 w-176 max-w-full -translate-x-1/2 rounded-full bg-[#ff4d00]/30 blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 left-1/2 -z-10 h-72 w-2/3 -translate-x-1/2 rounded-full bg-[#ff4d00]/25 blur-[100px]"
        />

        {/* Text */}
        <div className="mx-auto max-w-2xl">
          <span
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-small font-medium text-zinc-300 backdrop-blur"
            data-motion="fade-up"
          >
            <span className="size-1.5 rounded-full bg-[#ff4d00]" />
            {t.designPartner.badge}
          </span>

          <h2
            className="mt-6 text-balance bg-linear-to-b from-white to-zinc-400 bg-clip-text text-h2 font-semibold leading-[1.05] tracking-tight text-transparent"
            data-motion="fade-up"
          >
            {t.designPartner.title}
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-pretty text-body leading-7 text-zinc-400" data-motion="fade-up">
            {t.designPartner.description}
          </p>

          {/* Scroll to the FAQ without adding a hash to the URL */}
          <button
            type="button"
            onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })}
            className="group/cta mt-9 inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#ff4d00] px-8 text-small font-semibold text-white shadow-lg shadow-[#ff4d00]/30 transition hover:bg-[#e64305] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            data-motion="fade-up"
          >
            {t.designPartner.action}
            <svg
              viewBox="0 0 256 256"
              aria-hidden="true"
              className="size-4 fill-current transition duration-200 group-hover/cta:translate-x-1 rtl:rotate-180 rtl:group-hover/cta:-translate-x-1"
            >
              <path d="M221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z" />
            </svg>
          </button>
        </div>

        {/* Browser mockup */}
        <div className="relative mx-auto mt-14 max-w-4xl sm:mt-16" data-motion="fade-up">
          <div className="absolute -left-4 top-24 z-10 hidden items-center gap-2.5 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-small font-medium text-white shadow-xl backdrop-blur-xl sm:flex lg:-left-12">
            <span className="grid size-7 place-items-center rounded-full bg-[#ff4d00]">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="size-4">
                <path d="m5 10.5 3.2 3.2L15 6.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {t.designPartner.tailored}
          </div>

          <div className="absolute -right-4 top-48 z-10 hidden items-center gap-2.5 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-small font-medium text-white shadow-xl backdrop-blur-xl sm:flex lg:-right-12">
            <span className="grid size-7 place-items-center rounded-full bg-[#ff4d00]">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="size-4">
                <path d="M4 14 9 9l3 3 5-6M13 6h4v4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {t.designPartner.grows}
          </div>

          <div className="origin-bottom rounded-t-2xl border border-white/10 bg-zinc-900/80 p-2 pb-0 shadow-[0_-24px_80px_-24px_rgba(255,77,0,0.45)] backdrop-blur transition duration-700 ease-out [transform:perspective(1400px)_rotateX(7deg)] group-hover:[transform:perspective(1400px)_rotateX(0deg)]">
            <div className="flex items-center gap-1.5 px-2 pb-2 pt-1">
              <span className="size-2.5 rounded-full bg-white/20" />
              <span className="size-2.5 rounded-full bg-white/20" />
              <span className="size-2.5 rounded-full bg-white/20" />
              <span className="ml-3 h-5 w-40 rounded-full bg-white/5" />
            </div>

            <img
              src="https://framerusercontent.com/images/490ZoyFb3e8u4RIU1yfW4ywsWBc.webp"
              alt={t.designPartner.imageAlt}
              loading="lazy"
              className="aspect-16/9 w-full rounded-t-lg object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}