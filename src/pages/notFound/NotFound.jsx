import { ArrowLeft, Compass, House } from "lucide-react";
import { Link } from "react-router-dom";
import useLanguage from "../../context/useLanguage";

export default function NotFound() {
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  return (
    <main className="relative isolate flex min-h-[70vh] items-center justify-center overflow-hidden px-5 py-20 sm:px-8">
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -start-32 top-8 size-72 rounded-full bg-orange-100/70 blur-3xl sm:size-96" />
        <div className="absolute -end-32 bottom-0 size-72 rounded-full bg-zinc-200/70 blur-3xl sm:size-96" />
      </div>

      <section
        aria-labelledby="not-found-title"
        className="w-full max-w-3xl text-center"
      >
        <div className="mx-auto mb-7 grid size-16 place-items-center rounded-2xl border border-orange-200/80 bg-white/80 text-[#FF4D0A] shadow-lg shadow-orange-950/5 backdrop-blur sm:size-20">
          <Compass aria-hidden="true" className="size-8 sm:size-9" strokeWidth={1.5} />
        </div>

        <p className="text-small font-semibold uppercase tracking-[0.24em] text-[#FF4D0A]">
          {isArabic ? "خطأ في المسار" : "Wrong turn"}
        </p>
        <p aria-hidden="true" className="mt-4 text-7xl font-semibold tracking-[-0.08em] text-zinc-950 sm:text-9xl">
          404
        </p>
        <h1
          id="not-found-title"
          className="mt-3 text-h2 font-semibold tracking-tight text-zinc-950"
        >
          {isArabic ? "عذرًا، الصفحة غير موجودة" : "Sorry, this page can't be found"}
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-body leading-7 text-zinc-600">
          {isArabic
            ? "يبدو أن الرابط غير صحيح أو أن الصفحة التي تبحث عنها قد نُقلت."
            : "The link may be incorrect, or the page you’re looking for may have moved."}
        </p>

        <Link
          to="/"
          className="group mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#FF4D0A] px-6 py-3 text-small font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-[#e64305] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF4D0A]"
        >
          <House aria-hidden="true" className="size-4" />
          {isArabic ? "العودة إلى الرئيسية" : "Back to homepage"}
          <ArrowLeft
            aria-hidden="true"
            className={`size-4 transition-transform group-hover:-translate-x-1 ${isArabic ? "rotate-180" : ""}`}
          />
        </Link>

        <p className="mt-8 text-small text-zinc-400">
          {isArabic ? "رمز الحالة" : "Error code"} <span className="mx-1">·</span> 404
        </p>
      </section>
    </main>
  );
}
