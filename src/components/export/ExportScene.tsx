import { useId } from "react";
import type { DeliveryType } from "@/types";

export type ExportSceneId =
  | "cover"
  | "challenge"
  | "step"
  | "product-hub"
  | "product-flow"
  | "product-trust"
  | "solution"
  | "result"
  | "cta";

type ExportSceneProps = {
  id: ExportSceneId;
  deliveryType?: DeliveryType;
  /** 0–2 para variar o cenário do passo */
  stepIndex?: number;
  className?: string;
  title?: string;
};

const C = {
  accent: "#22b8cf",
  accentSoft: "#5ecfe0",
  accentDim: "rgba(34,184,207,0.22)",
  ink: "#e8eef5",
  inkMuted: "#8fa0b5",
  panel: "#122033",
  panelAlt: "#0e1a2a",
  stroke: "rgba(148,163,184,0.28)",
  glow: "rgba(34,184,207,0.35)",
};

type Ids = {
  bg: string;
  glow: string;
  bar: string;
  soft: string;
};

function SceneFrame({
  children,
  className = "",
  ids,
}: {
  children: (ids: Ids) => React.ReactNode;
  className?: string;
  ids: Ids;
}) {
  return (
    <div
      className={`export-scene relative w-full overflow-hidden rounded-xl border border-accent/20 bg-[#071018] ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 640 360"
        className="block h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        role="presentation"
      >
        <defs>
          <linearGradient id={ids.bg} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0b1826" />
            <stop offset="55%" stopColor="#071018" />
            <stop offset="100%" stopColor="#0a1c28" />
          </linearGradient>
          <radialGradient id={ids.glow} cx="78%" cy="18%" r="45%">
            <stop offset="0%" stopColor={C.glow} />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <linearGradient id={ids.bar} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={C.accentSoft} />
            <stop offset="100%" stopColor={C.accent} />
          </linearGradient>
          <filter id={ids.soft} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>
        <rect width="640" height="360" fill={`url(#${ids.bg})`} />
        <rect width="640" height="360" fill={`url(#${ids.glow})`} />
        {children(ids)}
      </svg>
    </div>
  );
}

function WindowChrome({
  x,
  y,
  w,
  h,
  title,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  title?: string;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="14"
        fill={C.panelAlt}
        stroke={C.stroke}
        strokeWidth="1.2"
      />
      <rect x={x} y={y} width={w} height="28" rx="14" fill={C.panel} />
      <rect x={x} y={y + 14} width={w} height="14" fill={C.panel} />
      <circle cx={x + 16} cy={y + 14} r="3.5" fill="#f87171" opacity="0.7" />
      <circle cx={x + 28} cy={y + 14} r="3.5" fill="#fbbf24" opacity="0.7" />
      <circle cx={x + 40} cy={y + 14} r="3.5" fill="#34d399" opacity="0.7" />
      {title ? (
        <text
          x={x + w / 2}
          y={y + 18}
          textAnchor="middle"
          fill={C.inkMuted}
          fontSize="10"
          fontFamily="system-ui, sans-serif"
        >
          {title}
        </text>
      ) : null}
    </g>
  );
}

function CoverSystem({ label }: { label?: string }) {
  return (
    <>
      <WindowChrome x={48} y={42} w={544} h={276} title={label ?? "Product hub"} />
      {/* sidebar */}
      <rect x="60" y="82" width="96" height="222" rx="8" fill="#0b1522" stroke={C.stroke} />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x="72"
          y={98 + i * 36}
          width="72"
          height="12"
          rx="4"
          fill={i === 0 ? C.accentDim : "rgba(148,163,184,0.12)"}
        />
      ))}
      <rect x="72" y="98" width="4" height="12" rx="2" fill={C.accent} />
      {/* main cards */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect
            x={176 + i * 128}
            y="96"
            width="116"
            height="88"
            rx="10"
            fill={C.panel}
            stroke={C.stroke}
          />
          <circle cx={198 + i * 128} cy="118" r="10" fill={C.accentDim} />
          <circle cx={198 + i * 128} cy="118" r="5" fill={C.accent} />
          <rect
            x={216 + i * 128}
            y="112"
            width="58"
            height="8"
            rx="3"
            fill="rgba(241,245,249,0.55)"
          />
          <rect
            x={188 + i * 128}
            y="140"
            width="92"
            height="6"
            rx="3"
            fill="rgba(148,163,184,0.25)"
          />
          <rect
            x={188 + i * 128}
            y="154"
            width="68"
            height="6"
            rx="3"
            fill="rgba(148,163,184,0.18)"
          />
        </g>
      ))}
      {/* chart */}
      <rect
        x="176"
        y="200"
        width="244"
        height="90"
        rx="10"
        fill={C.panel}
        stroke={C.stroke}
      />
      <polyline
        points="196,268 230,248 264,254 298,228 332,236 366,214 400,220"
        fill="none"
        stroke={C.accent}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="400" cy="220" r="4" fill={C.accentSoft} />
      {/* side list */}
      <rect
        x="436"
        y="200"
        width="140"
        height="90"
        rx="10"
        fill={C.panel}
        stroke={C.stroke}
      />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect
            x="450"
            y={216 + i * 22}
            width="112"
            height="10"
            rx="3"
            fill="rgba(148,163,184,0.16)"
          />
          <rect
            x="450"
            y={216 + i * 22}
            width={40 + i * 18}
            height="10"
            rx="3"
            fill={C.accentDim}
          />
        </g>
      ))}
    </>
  );
}

function CoverLanding({ label, ids }: { label?: string; ids: Ids }) {
  return (
    <>
      <WindowChrome x={70} y={36} w={500} h={288} title={label ?? "Landing"} />
      <rect x="86" y="78" width="468" height="48" rx="8" fill="#0b1522" />
      <rect x="102" y="94" width="72" height="10" rx="3" fill={C.accent} opacity="0.85" />
      <rect x="390" y="90" width="64" height="18" rx="9" fill={C.accent} />
      <rect x="462" y="90" width="64" height="18" rx="9" fill="rgba(148,163,184,0.2)" />
      <rect x="102" y="150" width="210" height="18" rx="4" fill="rgba(241,245,249,0.7)" />
      <rect x="102" y="178" width="180" height="10" rx="3" fill="rgba(148,163,184,0.35)" />
      <rect x="102" y="196" width="150" height="10" rx="3" fill="rgba(148,163,184,0.22)" />
      <rect x="102" y="226" width="100" height="28" rx="8" fill={C.accent} />
      <rect
        x="340"
        y="146"
        width="198"
        height="150"
        rx="12"
        fill={C.panel}
        stroke={C.stroke}
      />
      <circle cx="439" cy="210" r="46" fill={C.accentDim} filter={`url(#${ids.soft})`} />
      <circle cx="439" cy="210" r="28" fill="none" stroke={C.accent} strokeWidth="2" />
      <path
        d="M428 210h22M439 199v22"
        stroke={C.accentSoft}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </>
  );
}

function ChallengeScene() {
  return (
    <>
      {/* scattered cards = fragmentation */}
      {[
        { x: 70, y: 70, r: -8 },
        { x: 250, y: 50, r: 6 },
        { x: 420, y: 80, r: -4 },
        { x: 140, y: 190, r: 5 },
        { x: 340, y: 200, r: -7 },
      ].map((c, i) => (
        <g key={i} transform={`translate(${c.x} ${c.y}) rotate(${c.r})`}>
          <rect
            width="140"
            height="90"
            rx="10"
            fill={C.panel}
            stroke={C.stroke}
            opacity={0.85}
          />
          <rect x="14" y="18" width="70" height="8" rx="3" fill="rgba(148,163,184,0.35)" />
          <rect x="14" y="36" width="100" height="6" rx="3" fill="rgba(148,163,184,0.2)" />
          <rect x="14" y="50" width="88" height="6" rx="3" fill="rgba(148,163,184,0.15)" />
          <circle cx="118" cy="22" r="6" fill="#f87171" opacity="0.55" />
        </g>
      ))}
      {/* broken links */}
      <path
        d="M180 120 C220 100, 260 140, 300 110"
        fill="none"
        stroke={C.inkMuted}
        strokeWidth="1.5"
        strokeDasharray="6 6"
        opacity="0.5"
      />
      <path
        d="M360 140 C400 160, 430 120, 470 150"
        fill="none"
        stroke={C.inkMuted}
        strokeWidth="1.5"
        strokeDasharray="6 6"
        opacity="0.5"
      />
    </>
  );
}

function StepScene({ stepIndex = 0, ids }: { stepIndex?: number; ids: Ids }) {
  const variant = stepIndex % 3;
  if (variant === 0) {
    return (
      <>
        <WindowChrome x={80} y={50} w={480} h={260} title="Structure" />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect
              x={110 + i * 140}
              y="100"
              width="120"
              height="170"
              rx="12"
              fill={C.panel}
              stroke={i === 1 ? C.accent : C.stroke}
              strokeWidth={i === 1 ? 2 : 1}
            />
            <circle
              cx={170 + i * 140}
              cy="140"
              r="18"
              fill={C.accentDim}
              stroke={C.accent}
              strokeWidth="1.5"
            />
            <text
              x={170 + i * 140}
              y="146"
              textAnchor="middle"
              fill={C.accentSoft}
              fontSize="14"
              fontFamily="system-ui, sans-serif"
              fontWeight="700"
            >
              {i + 1}
            </text>
            <rect
              x={128 + i * 140}
              y="178"
              width="84"
              height="8"
              rx="3"
              fill="rgba(241,245,249,0.45)"
            />
            <rect
              x={128 + i * 140}
              y="196"
              width="70"
              height="6"
              rx="3"
              fill="rgba(148,163,184,0.25)"
            />
            <rect
              x={128 + i * 140}
              y="212"
              width="78"
              height="6"
              rx="3"
              fill="rgba(148,163,184,0.18)"
            />
          </g>
        ))}
      </>
    );
  }
  if (variant === 1) {
    return (
      <>
        <circle cx="320" cy="180" r="48" fill={C.accentDim} stroke={C.accent} strokeWidth="2" />
        <circle cx="320" cy="180" r="18" fill={C.accent} opacity="0.9" />
        {[0, 1, 2, 3, 4].map((i) => {
          const a = (i / 5) * Math.PI * 2 - Math.PI / 2;
          const x = 320 + Math.cos(a) * 110;
          const y = 180 + Math.sin(a) * 90;
          return (
            <g key={i}>
              <line
                x1="320"
                y1="180"
                x2={x}
                y2={y}
                stroke={C.accent}
                strokeWidth="1.5"
                opacity="0.45"
              />
              <rect
                x={x - 36}
                y={y - 22}
                width="72"
                height="44"
                rx="10"
                fill={C.panel}
                stroke={C.stroke}
              />
              <rect
                x={x - 20}
                y={y - 4}
                width="40"
                height="6"
                rx="3"
                fill={C.accentDim}
              />
            </g>
          );
        })}
      </>
    );
  }
  return (
    <>
      <WindowChrome x={90} y={55} w={460} h={250} title="Flow" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect
            x={120 + i * 100}
            y="140"
            width="72"
            height="72"
            rx="12"
            fill={C.panel}
            stroke={i < 3 ? C.accent : C.stroke}
            strokeWidth={i < 3 ? 1.6 : 1}
          />
          <text
            x={156 + i * 100}
            y="182"
            textAnchor="middle"
            fill={C.ink}
            fontSize="16"
            fontFamily="system-ui, sans-serif"
            fontWeight="700"
          >
            {String.fromCharCode(65 + i)}
          </text>
          {i < 3 ? (
            <path
              d={`M${192 + i * 100} 176 H${212 + i * 100}`}
              stroke={C.accentSoft}
              strokeWidth="2"
              markerEnd="none"
            />
          ) : null}
          {i < 3 ? (
            <polygon
              points={`${218 + i * 100},176 ${210 + i * 100},171 ${210 + i * 100},181`}
              fill={C.accentSoft}
            />
          ) : null}
        </g>
      ))}
      <rect x="120" y="250" width="400" height="10" rx="5" fill="rgba(148,163,184,0.15)" />
      <rect x="120" y="250" width="280" height="10" rx="5" fill={`url(#${ids.bar})`} />
    </>
  );
}

function ProductHub() {
  return <CoverSystem label="Dashboard" />;
}

function ProductFlow() {
  return (
    <>
      <WindowChrome x={60} y={48} w={520} h={264} title="Modules" />
      {[
        [0, 0],
        [1, 0],
        [2, 0],
        [0, 1],
        [1, 1],
        [2, 1],
      ].map(([col, row], i) => (
        <g key={i}>
          <rect
            x={88 + col * 160}
            y={90 + row * 100}
            width="140"
            height="80"
            rx="12"
            fill={C.panel}
            stroke={i === 1 ? C.accent : C.stroke}
            strokeWidth={i === 1 ? 1.8 : 1}
          />
          <rect
            x={104 + col * 160}
            y={108 + row * 100}
            width="28"
            height="28"
            rx="8"
            fill={C.accentDim}
          />
          <rect
            x={104 + col * 160}
            y={108 + row * 100}
            width="28"
            height="28"
            rx="8"
            fill="none"
            stroke={C.accent}
            strokeWidth="1"
            opacity="0.6"
          />
          <rect
            x={142 + col * 160}
            y={112 + row * 100}
            width="68"
            height="8"
            rx="3"
            fill="rgba(241,245,249,0.5)"
          />
          <rect
            x={142 + col * 160}
            y={128 + row * 100}
            width="52"
            height="6"
            rx="3"
            fill="rgba(148,163,184,0.25)"
          />
        </g>
      ))}
    </>
  );
}

function ProductTrust() {
  return (
    <>
      <WindowChrome x={100} y={40} w={440} h={280} title="Traceability" />
      <rect x="124" y="86" width="180" height="210" rx="10" fill={C.panel} stroke={C.stroke} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={i}>
          <rect
            x="140"
            y={104 + i * 28}
            width="148"
            height="18"
            rx="5"
            fill={i === 2 ? C.accentDim : "rgba(148,163,184,0.1)"}
          />
          <circle
            cx="152"
            cy={113 + i * 28}
            r="4"
            fill={i <= 2 ? C.accent : C.inkMuted}
            opacity={i <= 2 ? 1 : 0.4}
          />
        </g>
      ))}
      <rect x="328" y="86" width="188" height="100" rx="10" fill={C.panel} stroke={C.stroke} />
      <path
        d="M360 130 l18 18 36-40"
        fill="none"
        stroke={C.accent}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="328" y="204" width="188" height="92" rx="10" fill={C.panel} stroke={C.stroke} />
      <rect x="348" y="228" width="60" height="44" rx="8" fill={C.accentDim} />
      <rect x="420" y="228" width="76" height="12" rx="3" fill="rgba(241,245,249,0.45)" />
      <rect x="420" y="248" width="60" height="8" rx="3" fill="rgba(148,163,184,0.25)" />
    </>
  );
}

function SolutionScene({
  deliveryType,
  ids,
}: {
  deliveryType?: DeliveryType;
  ids: Ids;
}) {
  if (deliveryType === "lp-institucional") {
    return (
      <>
        <CoverLanding label="Aligned experience" ids={ids} />
        <path
          d="M120 320 H520"
          stroke={C.accent}
          strokeWidth="2"
          opacity="0.4"
          strokeLinecap="round"
        />
      </>
    );
  }
  return (
    <>
      <circle
        cx="320"
        cy="180"
        r="70"
        fill={C.accentDim}
        filter={`url(#${ids.soft})`}
      />
      <circle cx="320" cy="180" r="42" fill={C.panel} stroke={C.accent} strokeWidth="2.5" />
      <text
        x="320"
        y="186"
        textAnchor="middle"
        fill={C.accentSoft}
        fontSize="18"
        fontFamily="system-ui, sans-serif"
        fontWeight="700"
      >
        UX
      </text>
      {["UI", "IA", "DEV", "QA"].map((label, i) => {
        const a = (i / 4) * Math.PI * 2 - Math.PI / 2;
        const x = 320 + Math.cos(a) * 130;
        const y = 180 + Math.sin(a) * 100;
        return (
          <g key={label}>
            <line
              x1="320"
              y1="180"
              x2={x}
              y2={y}
              stroke={C.accent}
              strokeWidth="2"
              opacity="0.55"
            />
            <rect
              x={x - 32}
              y={y - 18}
              width="64"
              height="36"
              rx="10"
              fill={C.panel}
              stroke={C.accent}
              strokeWidth="1.4"
            />
            <text
              x={x}
              y={y + 5}
              textAnchor="middle"
              fill={C.ink}
              fontSize="12"
              fontFamily="system-ui, sans-serif"
              fontWeight="600"
            >
              {label}
            </text>
          </g>
        );
      })}
    </>
  );
}

function ResultScene({ ids }: { ids: Ids }) {
  const heights = [48, 72, 96];
  return (
    <>
      <WindowChrome x={80} y={50} w={480} h={260} title="Outcomes" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect
            x={110 + i * 150}
            y={110}
            width={130}
            height={150}
            rx={14}
            fill={C.panel}
            stroke={C.stroke}
          />
          <rect
            x={128 + i * 150}
            y={128}
            width={94}
            height={8}
            rx={3}
            fill="rgba(241,245,249,0.45)"
          />
          <rect
            x={130 + i * 150}
            y={250 - heights[i]}
            width={28}
            height={heights[i]}
            rx={4}
            fill={`url(#${ids.bar})`}
          />
          <rect
            x={168 + i * 150}
            y={250 - (heights[i] - 12)}
            width={28}
            height={heights[i] - 12}
            rx={4}
            fill={C.accentDim}
          />
          <rect
            x={206 + i * 150}
            y={250 - (heights[i] - 28)}
            width={18}
            height={heights[i] - 28}
            rx={4}
            fill="rgba(148,163,184,0.35)"
          />
        </g>
      ))}
    </>
  );
}

function CtaScene({ ids }: { ids: Ids }) {
  return (
    <>
      <circle
        cx="320"
        cy="170"
        r="90"
        fill={C.accentDim}
        filter={`url(#${ids.soft})`}
      />
      <circle cx="320" cy="170" r="58" fill={C.panel} stroke={C.accent} strokeWidth="2.5" />
      <text
        x="320"
        y="178"
        textAnchor="middle"
        fill={C.accentSoft}
        fontSize="28"
        fontFamily="system-ui, sans-serif"
        fontWeight="700"
      >
        LG
      </text>
      <rect x="200" y="260" width="240" height="36" rx="18" fill={C.accent} opacity="0.9" />
      <rect x="240" y="272" width="160" height="12" rx="4" fill="#0a1520" opacity="0.35" />
    </>
  );
}

/** Ilustração SVG de cenário para o carrossel LinkedIn (sem prints). */
export function ExportScene({
  id,
  deliveryType = "sistema",
  stepIndex = 0,
  className = "",
  title,
}: ExportSceneProps) {
  const uid = useId().replace(/:/g, "");
  const ids: Ids = {
    bg: `es-bg-${uid}`,
    glow: `es-glow-${uid}`,
    bar: `es-bar-${uid}`,
    soft: `es-soft-${uid}`,
  };

  return (
    <SceneFrame className={className} ids={ids}>
      {(sceneIds) => {
        switch (id) {
          case "cover":
            return deliveryType === "lp-institucional" ? (
              <CoverLanding label={title} ids={sceneIds} />
            ) : (
              <CoverSystem label={title} />
            );
          case "challenge":
            return <ChallengeScene />;
          case "step":
            return <StepScene stepIndex={stepIndex} ids={sceneIds} />;
          case "product-hub":
            return <ProductHub />;
          case "product-flow":
            return <ProductFlow />;
          case "product-trust":
            return deliveryType === "lp-institucional" ? (
              <CoverLanding label={title} ids={sceneIds} />
            ) : (
              <ProductTrust />
            );
          case "solution":
            return <SolutionScene deliveryType={deliveryType} ids={sceneIds} />;
          case "result":
            return <ResultScene ids={sceneIds} />;
          case "cta":
            return <CtaScene ids={sceneIds} />;
          default:
            return <CoverSystem />;
        }
      }}
    </SceneFrame>
  );
}

export const PRODUCT_SCENE_IDS: ExportSceneId[] = [
  "product-hub",
  "product-flow",
  "product-trust",
];
