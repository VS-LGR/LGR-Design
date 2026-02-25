import { aboutContent } from "@/lib/about";

export function ContactBlock() {
  const { contact } = aboutContent;
  const whatsappUrl = `https://wa.me/55${contact.phone.replace(/\D/g, "")}`;

  return (
    <section className="space-y-4" aria-labelledby="contact-heading">
      <h2
        id="contact-heading"
        className="text-lg font-semibold text-primary accent-underline pb-1"
      >
        Contato
      </h2>
      <p className="text-muted leading-relaxed">{contact.message}</p>
      <div className="flex flex-wrap gap-4 pt-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium bg-accent text-dark hover:bg-accent-soft transition-colors focus-ring"
        >
          📱 WhatsApp: {contact.phone}
        </a>
        <a
          href={`mailto:${contact.email}`}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium bg-surface border border-accent/30 text-accent hover:border-accent/50 transition-colors focus-ring"
        >
          📩 Email: {contact.email}
        </a>
      </div>
    </section>
  );
}
