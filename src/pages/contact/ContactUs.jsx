import { useRef } from "react";
import toast from "react-hot-toast";
import BTN from "../../components/button/BTN";
import useLanguage from "../../context/useLanguage";
import content from "../../data/content";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LIMITS = {
  nameMin: 2,
  nameMax: 100,
  emailMax: 150,
  messageMin: 10,
  messageMax: 2000,
};
const inputClasses =
  "w-full rounded-2xl border border-zinc-200 bg-white/70 px-4 py-3 text-body text-zinc-900 shadow-sm outline-none focus:border-[#ff4d00] focus:ring-2 focus:ring-[#ff4d00]/20";

export default function ContactUs() {
  const { t } = useLanguage();
  const { email: contactEmail, whatsapp } = content.contact;

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const formRef = useRef(null);
  const honeypotRef = useRef(null);

  const validate = ({ name, email, message }) => {
    if (!name || !message) return t.contact.requiredFields;

    if (name.length < LIMITS.nameMin) return t.contact.nameTooShort;
    if (name.length > LIMITS.nameMax) return t.contact.tooLong;

    if (email && !EMAIL_REGEX.test(email)) return t.contact.invalidEmail;
    if (email.length > LIMITS.emailMax) return t.contact.tooLong;

    if (message.length < LIMITS.messageMin) return t.contact.messageTooShort;
    if (message.length > LIMITS.messageMax) return t.contact.tooLong;

    return null;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (honeypotRef.current?.value) {
      formRef.current?.reset();
      return;
    }

    if (!contactEmail || contactEmail === "hello@example.com") {
      toast.error(t.contact.emailNotConfigured);
      return;
    }

    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const message = messageRef.current.value.trim();

    const validationError = validate({ name, email, message });
    if (validationError) {
      toast.error(validationError);
      return;
    }

    const subject = encodeURIComponent(`رسالة جديدة من الموقع: ${name}`);
    const body = encodeURIComponent(
      `${t.contact.name}: ${name}\n${t.contact.email}: ${emailRef.current.value.trim()}\n\n${message}`,
    );
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    toast(t.contact.emailClientNotice);
  };

  return (
    <section id="contact" className="mx-auto w-full max-w-360 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-h2 font-semibold text-zinc-950">{t.contact.title}</h2>

        <p className="mx-auto mt-5 max-w-xl text-body text-zinc-600">{t.contact.description}</p>
      </div>

      <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-5">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-4 rounded-3xl bg-zinc-100 p-6 shadow-lg sm:col-span-3 sm:p-8"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              name="name"
              ref={nameRef}
              placeholder={t.contact.name}
              aria-label={t.contact.name}
              className={inputClasses}
              minLength={LIMITS.nameMin}
              maxLength={LIMITS.nameMax}
              required
            />

            <input
              name="email"
              type="email"
              ref={emailRef}
              placeholder={t.contact.email}
              aria-label={t.contact.email}
              className={inputClasses}
              maxLength={LIMITS.emailMax}
            />
          </div>

          <textarea
            name="message"
            ref={messageRef}
            placeholder={t.contact.message}
            aria-label={t.contact.message}
            rows={5}
            className={`${inputClasses} resize-none`}
            minLength={LIMITS.messageMin}
            maxLength={LIMITS.messageMax}
            required
          />

          <input
            type="text"
            name="website"
            ref={honeypotRef}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute -left-2499.75 h-0 w-0 opacity-0"
          />

          <div className="mt-2 flex items-center gap-4">
            <BTN type="submit">{t.contact.send}</BTN>
          </div>
        </form>

        <div className="flex flex-col gap-4 sm:col-span-2">
          <a
            href={`https://wa.me/${String(whatsapp ?? "").replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl bg-zinc-100 p-6 shadow-lg transition hover:bg-white"
          >
            <span className="block text-small font-medium text-zinc-900">{t.contact.whatsappLabel}</span>

            <span className="block text-small text-zinc-500">{whatsapp ?? t.contact.whatsapp}</span>
          </a>

          <a
            href={
              contactEmail && contactEmail !== "hello@example.com"
                ? `mailto:${contactEmail}`
                : undefined
            }
            className="rounded-3xl bg-zinc-100 p-6 shadow-lg transition hover:bg-white"
          >
            <span className="block text-small font-medium text-zinc-900">{t.contact.emailLabel}</span>

            <span className="block truncate text-small text-zinc-500">
              {contactEmail && contactEmail !== "hello@example.com" ? contactEmail : "—"}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}