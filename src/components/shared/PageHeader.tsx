type PageHeaderProps = {
  kicker: string;
  title: string;
  lead?: string;
  titleId?: string;
  className?: string;
  /** Título um pouco maior (ex.: Contratar) */
  prominent?: boolean;
};

/** Cabeçalho de página unificado — kicker / H1 / lead. */
export function PageHeader({
  kicker,
  title,
  lead,
  titleId,
  className = "",
  prominent = false,
}: PageHeaderProps) {
  return (
    <header
      className={`max-w-3xl space-y-3 ${className}`}
    >
      <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.16em] text-accent">
        {kicker}
      </p>
      <h1
        id={titleId}
        className={`font-bold text-primary tracking-tight text-balance leading-tight ${
          prominent
            ? "text-2xl md:text-[2.15rem]"
            : "text-2xl md:text-3xl"
        }`}
      >
        {title}
      </h1>
      {lead ? (
        <p className="text-sm md:text-base text-muted leading-relaxed max-w-2xl">
          {lead}
        </p>
      ) : null}
    </header>
  );
}
