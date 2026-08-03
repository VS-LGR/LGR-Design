import type { SVGProps, ReactElement } from "react";

type IconProps = SVGProps<SVGSVGElement> & { title?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** QualiProc — sistema / módulos / qualidade */
export function IconQualiProc({ title, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" role={title ? "img" : "presentation"} aria-hidden={title ? undefined : true} {...props}>
      {title ? <title>{title}</title> : null}
      <rect x="18" y="22" width="84" height="76" rx="8" {...base} opacity="0.9" />
      <path d="M18 42h84" {...base} opacity="0.55" />
      <rect x="28" y="52" width="28" height="18" rx="3" {...base} />
      <rect x="64" y="52" width="28" height="18" rx="3" {...base} />
      <rect x="28" y="78" width="28" height="12" rx="3" {...base} />
      <rect x="64" y="78" width="28" height="12" rx="3" {...base} />
      <path d="M78 30l4 4 8-8" {...base} strokeWidth="2" />
    </svg>
  );
}

/** Clínica DVERSO — cuidado / múltiplas especialidades */
export function IconDverso({ title, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" role={title ? "img" : "presentation"} aria-hidden={title ? undefined : true} {...props}>
      {title ? <title>{title}</title> : null}
      <circle cx="60" cy="48" r="22" {...base} />
      <path d="M36 92c6-16 18-24 24-24s18 8 24 24" {...base} />
      <path d="M60 40v16M52 48h16" {...base} strokeWidth="2" />
      <circle cx="28" cy="70" r="8" {...base} opacity="0.55" />
      <circle cx="92" cy="70" r="8" {...base} opacity="0.55" />
    </svg>
  );
}

/** Grimório — livro / ficha RPG */
export function IconGrimorio({ title, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" role={title ? "img" : "presentation"} aria-hidden={title ? undefined : true} {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M28 28h50a8 8 0 018 8v60a6 6 0 00-6-6H28a6 6 0 01-6-6V34a6 6 0 016-6z" {...base} />
      <path d="M86 36h6a6 6 0 016 6v50a6 6 0 01-6 6H36" {...base} opacity="0.7" />
      <path d="M40 48h36M40 60h28M40 72h32" {...base} opacity="0.65" />
      <circle cx="78" cy="84" r="10" {...base} />
      <path d="M78 79v10M73 84h10" {...base} strokeWidth="1.75" />
    </svg>
  );
}

/** OFAG — impressão / camadas técnicas */
export function IconOfag({ title, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" role={title ? "img" : "presentation"} aria-hidden={title ? undefined : true} {...props}>
      {title ? <title>{title}</title> : null}
      <rect x="26" y="24" width="68" height="18" rx="3" {...base} />
      <rect x="22" y="48" width="76" height="22" rx="3" {...base} />
      <rect x="30" y="78" width="60" height="18" rx="3" {...base} />
      <path d="M40 34h40M34 59h52M42 87h36" {...base} opacity="0.5" />
      <circle cx="86" cy="59" r="4" fill="currentColor" stroke="none" opacity="0.85" />
    </svg>
  );
}

/** Psi Bia — confiança / tabuleiro lúdico suave */
export function IconPsiBia({ title, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" role={title ? "img" : "presentation"} aria-hidden={title ? undefined : true} {...props}>
      {title ? <title>{title}</title> : null}
      <rect x="28" y="28" width="64" height="64" rx="10" {...base} />
      <path d="M28 60h64M60 28v64" {...base} opacity="0.45" />
      <circle cx="44" cy="44" r="7" {...base} />
      <circle cx="76" cy="76" r="7" {...base} />
      <path d="M70 42c6 4 10 10 6 16" {...base} />
      <path d="M44 72c4 6 12 8 18 4" {...base} opacity="0.75" />
    </svg>
  );
}

/** Hirely — matching / IA apoiando humanos */
export function IconHirely({ title, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" role={title ? "img" : "presentation"} aria-hidden={title ? undefined : true} {...props}>
      {title ? <title>{title}</title> : null}
      <circle cx="36" cy="44" r="14" {...base} />
      <circle cx="84" cy="44" r="14" {...base} />
      <path d="M22 78c4-12 12-18 14-18s10 6 14 18" {...base} />
      <path d="M70 78c4-12 12-18 14-18s10 6 14 18" {...base} />
      <path d="M50 44h20" {...base} strokeWidth="2" />
      <path d="M60 28v10M55 33l5-5 5 5" {...base} opacity="0.85" />
      <rect x="48" y="88" width="24" height="10" rx="3" {...base} opacity="0.7" />
    </svg>
  );
}

/** Pharmatech / farma — molécula / tech institucional */
export function IconPharmatech({ title, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" role={title ? "img" : "presentation"} aria-hidden={title ? undefined : true} {...props}>
      {title ? <title>{title}</title> : null}
      <circle cx="60" cy="60" r="10" {...base} />
      <circle cx="32" cy="40" r="8" {...base} />
      <circle cx="88" cy="40" r="8" {...base} />
      <circle cx="32" cy="80" r="8" {...base} />
      <circle cx="88" cy="80" r="8" {...base} />
      <path d="M40 44l12 10M68 50l12-10M40 76l12-10M68 70l12 10" {...base} />
    </svg>
  );
}

/** Fallback genérico */
export function IconProjectDefault({ title, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" role={title ? "img" : "presentation"} aria-hidden={title ? undefined : true} {...props}>
      {title ? <title>{title}</title> : null}
      <rect x="24" y="30" width="72" height="60" rx="8" {...base} />
      <path d="M40 70l14-16 12 10 10-14 14 20H40z" {...base} />
      <circle cx="46" cy="46" r="5" {...base} />
    </svg>
  );
}

export const PROJECT_COVER_ICONS: Record<
  string,
  (props: IconProps) => ReactElement
> = {
  "qualiproc-ctli": IconQualiProc,
  "clinica-dverso": IconDverso,
  "grimorio-aventureiro": IconGrimorio,
  "ofag-revamp": IconOfag,
  "psi-bia-rossi": IconPsiBia,
  hirely: IconHirely,
  "lp-farma-com": IconPharmatech,
};
