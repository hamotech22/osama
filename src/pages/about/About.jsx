// مكتبة العد التصاعدي للأرقام
import CountUpModule from "react-countup";
// هوك اللغة (الترجمات)
import useLanguage from "../../context/useLanguage";

const CountUp = CountUpModule.default;

// قيم الإحصائيات: الرقم و الرمز (+) منفصلين عشان العد يشتغل على الرقم بس
const stats = [
  { value: 500, suffix: "+" },
  { value: 200, suffix: "+" },
  { value: 12, suffix: "" },
];

// إعدادات الحركة المشتركة بين العناصر
const modern = {
  "data-motion": "fade-up",
  "data-motion-duration": "900",
  "data-motion-offset": "60",
};

export default function About() {
  // t = كل النصوص المترجمة حسب اللغة الحالية
  const { t } = useLanguage();

  return (
    <div className="relative isolate bg-[#111111]">
      {/* ===== Hero: العنوان الرئيسي والمقدمة ===== */}
      <section className="relative isolate overflow-hidden px-5 pb-16 pt-24 sm:px-6 sm:pt-32">
        {/* دائرة برتقالية مضيئة في الخلفية (ديكور فقط) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 -z-10 size-112 rounded-full bg-[#ff4d00]/10 blur-3xl"
        />

        <div className="mx-auto max-w-4xl text-center">
          {/* العنوان بتدرج لوني */}
          <h1
            {...modern}
            className="bg-linear-to-b from-white to-zinc-400 bg-clip-text text-display font-semibold leading-[1.05] tracking-tight text-transparent"
          >
            {t.about.title}
          </h1>

          {/* فقرة المقدمة */}
          <p {...modern} className="mx-auto mt-6 max-w-2xl text-pretty text-body leading-8 text-zinc-400">
            {t.about.intro}
          </p>
        </div>
      </section>

      {/* ===== Story: الصورة + القصة ===== */}
      <section className="px-5 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16">
          {/* الصورة */}
          <div {...modern} className="overflow-hidden rounded-3xl ring-1 ring-white/10">
            <img
              src="https://framerusercontent.com/images/ObEFqtxxeCEXbYIqoHXoq1ez8TM.webp"
              alt={t.about.imageAlt}
              loading="lazy"
              className="h-96 w-full object-cover"
            />
          </div>

          {/* نص القصة */}
          <div {...modern} className="flex flex-col justify-center space-y-5">
            <h2 className="text-h2 font-semibold tracking-tight text-white">{t.about.storyTitle}</h2>

            <p className="text-pretty text-body leading-7 text-zinc-400">{t.about.story1}</p>

            <p className="text-pretty text-body leading-7 text-zinc-400">{t.about.story2}</p>
          </div>
        </div>
      </section>

      {/* ===== Values: القيم ===== */}
      <section className="px-5 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 {...modern} className="max-w-md text-h2 font-semibold tracking-tight text-white">
            {t.about.valuesTitle}
          </h2>

          {/* قائمة القيم: كل قيمة عنوان + وصف */}
          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {t.about.values.map(([label, text]) => (
              <div key={label} {...modern} className="grid gap-2 py-7 sm:grid-cols-[240px_1fr] sm:gap-8">
                <h3 className="text-h3 font-medium text-white">{label}</h3>

                <p className="text-pretty text-body leading-7 text-zinc-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Stats: الإحصائيات بعد عد الأرقام ===== */}
      <section className="px-5 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-3">
          {stats.map((s, i) => (
            <div key={t.about.stats[i]} {...modern}>
              <div className="text-display font-semibold text-white">
                {/* العد من 0 للرقم النهائي لما العنصر يظهر في الشاشة (مرة واحدة) */}
                <CountUp end={s.value} suffix={s.suffix} duration={2.5} enableScrollSpy scrollSpyOnce />
              </div>

              {/* اسم الإحصائية */}
              <div className="mt-2 text-small text-zinc-500">{t.about.stats[i]}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
