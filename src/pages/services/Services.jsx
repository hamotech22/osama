
import useLanguage from "../../context/useLanguage";
import CTA from "../cta/CTA";

const services = [
  {
    iconPaths: ["M12 2.5 19 6v6c0 4.5-2.8 8.5-7 10.5C7.8 20.5 5 16.5 5 12V6l7-3.5Z", "M9.5 9.5h5M9.5 12.5h5M9.5 15.5h3"],
  },
  {
    iconPaths: [
      "M4 6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5v11A1.5 1.5 0 0 1 18.5 19h-13A1.5 1.5 0 0 1 4 17.5v-11Z",
      "M4 9.5h16M9 19v-9.5h6V19",
    ],
  },
  {
    iconPaths: [
      "M16 20v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2",
      "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
      "M20 20v-2a4 4 0 0 0-3-3.87M16 4.5a4 4 0 0 1 0 7.5",
    ],
  },
  {
    iconPaths: ["M8 8 4 12l4 4M16 8l4 4-4 4M13 5l-2 14"],
  },
];


export default function Services() {
  const { t } = useLanguage();

  return (
    <section className="bg-white px-5 py-20 sm:py-28 md:px-10">
      <div
        className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16"
        data-motion="fade-up"
      >
        <div className="md:sticky md:top-28 md:self-start">
          <h2 className="max-w-md text-balance bg-linear-to-b from-zinc-950 to-zinc-600 bg-clip-text text-h2 font-semibold leading-[1.1] tracking-tight text-transparent">
            {t.services.title}
          </h2>

          <div className="mt-6 max-w-md space-y-4 text-pretty text-body leading-7 text-zinc-600">
            <p>{t.services.intro1}</p>
            <p>{t.services.intro2}</p>
          </div>
        </div>

        {/* Service cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={t.services.items[index][0]}
              className="rounded-3xl border border-zinc-200/70 bg-zinc-50 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-zinc-900/5"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-[#ff4d00]/10 text-[#ff4d00]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="size-5"
                >
                  {service.iconPaths.map((d) => (
                    <path key={d} d={d} />
                  ))}
                </svg>
              </span>

              <h3 className="mt-6 text-h3 font-semibold tracking-tight text-zinc-950">{t.services.items[index][0]}</h3>

              <p className="mt-3 text-body leading-6 text-zinc-600">{t.services.items[index][1]}</p>
            </div>
          ))}
        </div>
      </div>
      <CTA variant="services" />
    </section>
  );
}
