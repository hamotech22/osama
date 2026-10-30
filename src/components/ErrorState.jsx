import useLanguage from "../context/useLanguage";

export default function ErrorState({ type, onRetry }) {
  const { t } = useLanguage();
  const error = t.errors[type] ?? t.errors.unknown;

  return (
    <div role="alert" className="mx-auto max-w-md rounded-3xl bg-zinc-50 px-6 py-12 text-center ring-1 ring-zinc-900/5">
      <span className={`mx-auto mb-4 grid size-12 place-items-center rounded-full ${type === "offline" ? "bg-amber-100 text-amber-600" : "bg-red-100 text-red-600"}`}>
        {type === "offline" ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-6">
            <path d="m2 2 20 20M8.5 8.5a5 5 0 0 1 7 7M5 5a12 12 0 0 1 14 14M2 9a16 16 0 0 1 5-5M12 20h.01" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-6">
            <path d="M8 10h.01M16 10h.01M9 16c1.8-1.3 4.2-1.3 6 0M12 2a9 9 0 0 0-9 9v3a3 3 0 0 0 3 3h1v-6H6a6 6 0 1 1 12 0h-1v6h1a3 3 0 0 0 3-3v-3a9 9 0 0 0-9-9Z" />
          </svg>
        )}
      </span>
      <h2 className="text-h3 font-semibold text-zinc-950">{error.title}</h2>
      <p className="mt-3 text-body leading-6 text-zinc-600">{error.description}</p>
      {type !== "offline" && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-6 rounded-full bg-[#ff4d00] px-6 py-3 text-small font-semibold text-white transition hover:bg-[#e64500] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4d00]"
        >
          {t.errors.retry}
        </button>
      )}
    </div>
  );
}
