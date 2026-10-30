import useLanguage from "../../context/useLanguage";
import content, { getMediaUrl } from "../../data/content";

// ✏️ تعديل: يختار العربي لو موجود، وإلا الإنجليزي
const pick = (item, field, lang) => (lang === "ar" && item[`${field}_ar`]) || item[field];

function Stars({ rating, label }) {
  return (
    <div role="img" aria-label={label} className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          viewBox="0 0 20 20"
          aria-hidden="true"
          className={`size-5 fill-current ${star <= rating ? "text-[#ff4d00]" : "text-zinc-200"}`}
        >
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { t, lang } = useLanguage();
  const testimonials = content.testimonials;

  if (testimonials.length === 0) return null;

  return (
    <section className="bg-zinc-100 px-5 py-20 sm:py-28 md:px-10" data-motion="fade-up">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 max-w-2xl sm:mb-16" data-motion="fade-up">
          <h2 className="text-balance bg-linear-to-b from-zinc-950 to-zinc-600 bg-clip-text text-h2 font-semibold leading-[1.1] tracking-tight text-transparent">
            {t.testimonials.title}
          </h2>

          <p className="mt-5 max-w-xl text-pretty text-body leading-7 text-zinc-600">
            {t.testimonials.description}
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              // ✏️ تعديل: key بقى id
              key={item.id}
              className="group flex flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-zinc-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-900/5"
              data-motion="fade-up"
            >
              <Stars rating={item.rating ?? 5} label={t.testimonials.rating(item.rating ?? 5)} />

              <blockquote className="mb-8 mt-6 text-pretty text-body leading-7 text-zinc-800">
                “{pick(item, "comment", lang)}”
              </blockquote>

              <footer className="mt-auto flex items-center gap-3 border-t border-zinc-100 pt-6">
                <img
                  src={getMediaUrl(item.avatar) || "/images/about.webp"}
                  alt={pick(item, "name", lang)}
                  loading="lazy"
                  className="size-11 rounded-full object-cover ring-2 ring-white grayscale transition duration-300 group-hover:grayscale-0"
                />

                <div>
                  <p className="text-body font-semibold text-zinc-950">{pick(item, "name", lang)}</p>
                  <p className="mt-0.5 text-body text-zinc-500">{pick(item, "role", lang)}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
