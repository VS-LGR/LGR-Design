"use client";

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
  stepIndex?: number;
  className?: string;
  title?: string;
};

const C = {
  accent: "#22b8cf",
  soft: "#5ecfe0",
  dim: "rgba(34,184,207,0.2)",
  ink: "#e8eef5",
  muted: "#94a3b8",
  panel: "#142336",
  deep: "#0b1522",
  stroke: "rgba(148,163,184,0.28)",
  danger: "#f87171",
  warn: "#fbbf24",
  ok: "#34d399",
};

type Ids = { bg: string; glow: string; bar: string; soft: string };

function Frame({
  className,
  ids,
  children,
}: {
  className?: string;
  ids: Ids;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`export-scene relative h-full w-full min-h-0 overflow-hidden rounded-xl border border-accent/25 bg-[#071018] ${className ?? ""}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 640 400"
        className="block h-full w-full"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        role="presentation"
      >
        <defs>
          <linearGradient id={ids.bg} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0c1a28" />
            <stop offset="100%" stopColor="#060e16" />
          </linearGradient>
          <radialGradient id={ids.glow} cx="85%" cy="10%" r="50%">
            <stop offset="0%" stopColor="rgba(34,184,207,0.28)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <linearGradient id={ids.bar} x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor={C.accent} />
            <stop offset="100%" stopColor={C.soft} />
          </linearGradient>
          <filter id={ids.soft}>
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>
        <rect width="640" height="400" fill={`url(#${ids.bg})`} />
        <rect width="640" height="400" fill={`url(#${ids.glow})`} />
        {children}
      </svg>
    </div>
  );
}

function AppShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <g>
      <rect
        x="20"
        y="16"
        width="600"
        height="368"
        rx="16"
        fill={C.deep}
        stroke={C.stroke}
      />
      <rect x="20" y="16" width="600" height="36" rx="16" fill={C.panel} />
      <rect x="20" y="36" width="600" height="16" fill={C.panel} />
      <circle cx="42" cy="34" r="4" fill={C.danger} opacity="0.75" />
      <circle cx="56" cy="34" r="4" fill={C.warn} opacity="0.75" />
      <circle cx="70" cy="34" r="4" fill={C.ok} opacity="0.75" />
      <text
        x="320"
        y="38"
        textAnchor="middle"
        fill={C.muted}
        fontSize="11"
        fontFamily="system-ui,sans-serif"
      >
        {title}
      </text>
      {children}
    </g>
  );
}

function Sidebar({ items, active = 0 }: { items: string[]; active?: number }) {
  return (
    <g>
      <rect x="32" y="64" width="118" height="304" rx="10" fill="#09131e" stroke={C.stroke} />
      <rect x="44" y="78" width="94" height="22" rx="6" fill={C.dim} />
      <text x="52" y="93" fill={C.soft} fontSize="9" fontFamily="system-ui,sans-serif" fontWeight="700">
        SGQ
      </text>
      {items.map((label, i) => (
        <g key={label}>
          <rect
            x="44"
            y={114 + i * 36}
            width="94"
            height="26"
            rx="6"
            fill={i === active ? C.dim : "transparent"}
            stroke={i === active ? C.accent : "transparent"}
          />
          {i === active ? (
            <rect x="44" y={114 + i * 36} width="3" height="26" rx="1.5" fill={C.accent} />
          ) : null}
          <text
            x="56"
            y={131 + i * 36}
            fill={i === active ? C.ink : C.muted}
            fontSize="9"
            fontFamily="system-ui,sans-serif"
          >
            {label}
          </text>
        </g>
      ))}
    </g>
  );
}

const NAV = ["Requisitos", "Documentos", "Coleta", "Certificados", "Pessoal", "Comercial"];

/** Dashboard QualiProc: sidebar + hub de atalhos + indicadores */
function SceneDashboard({ title }: { title?: string }) {
  const tiles = [
    ["Comercial", "Propostas"],
    ["Coleta", "Campo"],
    ["Certificados", "Emissão"],
    ["Pessoal", "Competência"],
    ["Cadastros", "Base"],
    ["Backup", "Tenant"],
  ];
  return (
    <AppShell title={title ?? "QualiProc · Dashboard"}>
      <Sidebar items={NAV} active={0} />
      <text x="168" y="86" fill={C.ink} fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">
        Hub operacional
      </text>
      <text x="168" y="104" fill={C.muted} fontSize="9" fontFamily="system-ui,sans-serif">
        Atalhos por módulo · ambiente isolado
      </text>
      {tiles.map(([a, b], i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 168 + col * 142;
        const y = 118 + row * 88;
        return (
          <g key={a}>
            <rect x={x} y={y} width="130" height="76" rx="12" fill={C.panel} stroke={C.stroke} />
            <rect x={x + 12} y={y + 14} width="28" height="28" rx="8" fill={C.dim} stroke={C.accent} />
            <circle cx={x + 26} cy={y + 28} r="4" fill={C.accent} />
            <text x={x + 50} y={y + 28} fill={C.ink} fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="600">
              {a}
            </text>
            <text x={x + 50} y={y + 44} fill={C.muted} fontSize="9" fontFamily="system-ui,sans-serif">
              {b}
            </text>
            <rect x={x + 12} y={y + 54} width="70" height="6" rx="3" fill="rgba(148,163,184,0.2)" />
          </g>
        );
      })}
      <rect x="168" y="302" width="412" height="50" rx="10" fill={C.panel} stroke={C.stroke} />
      <text x="184" y="322" fill={C.muted} fontSize="9" fontFamily="system-ui,sans-serif">
        Indicadores · avisos de vencimento
      </text>
      {[0.55, 0.78, 0.42, 0.9].map((w, i) => (
        <rect
          key={i}
          x={184 + i * 95}
          y="332"
          width={80}
          height="8"
          rx="4"
          fill="rgba(148,163,184,0.12)"
        />
      ))}
      {[0.55, 0.78, 0.42, 0.9].map((w, i) => (
        <rect
          key={`f-${i}`}
          x={184 + i * 95}
          y="332"
          width={80 * w}
          height="8"
          rx="4"
          fill={C.accent}
          opacity={0.85}
        />
      ))}
    </AppShell>
  );
}

/** Módulos conectados do SGQ */
function SceneModules() {
  const mods = [
    { t: "Documentos", s: "Lista Mestra" },
    { t: "Coleta", s: "Campo" },
    { t: "Certificados", s: "ISO 17025" },
    { t: "Pessoal", s: "Competência" },
    { t: "Comercial", s: "Pedidos" },
    { t: "Admin", s: "Tenants" },
  ];
  return (
    <AppShell title="QualiProc · Módulos">
      <text x="40" y="86" fill={C.ink} fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">
        Um SGQ modular no mesmo ambiente
      </text>
      <text x="40" y="104" fill={C.muted} fontSize="9" fontFamily="system-ui,sans-serif">
        Documentos · coleta · certificados · pessoal · comercial · governança
      </text>
      {mods.map((m, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 40 + col * 190;
        const y = 124 + row * 120;
        return (
          <g key={m.t}>
            <rect x={x} y={y} width="174" height="104" rx="14" fill={C.panel} stroke={i === 0 ? C.accent : C.stroke} strokeWidth={i === 0 ? 1.8 : 1} />
            <rect x={x + 14} y={y + 16} width="36" height="36" rx="10" fill={C.dim} />
            <text x={x + 32} y={y + 40} textAnchor="middle" fill={C.soft} fontSize="12" fontFamily="system-ui,sans-serif" fontWeight="700">
              {String(i + 1).padStart(2, "0")}
            </text>
            <text x={x + 62} y={y + 34} fill={C.ink} fontSize="13" fontFamily="system-ui,sans-serif" fontWeight="700">
              {m.t}
            </text>
            <text x={x + 62} y={y + 52} fill={C.muted} fontSize="10" fontFamily="system-ui,sans-serif">
              {m.s}
            </text>
            <rect x={x + 14} y={y + 72} width="146" height="8" rx="4" fill="rgba(148,163,184,0.15)" />
            <rect x={x + 14} y={y + 72} width={60 + i * 12} height="8" rx="4" fill={C.accent} opacity="0.7" />
          </g>
        );
      })}
    </AppShell>
  );
}

/** Lista Mestra + rastreabilidade */
function SceneListaMestra() {
  const rows = [
    { d: "PO-01", a: "v3", s: "Ativo" },
    { d: "IT-17", a: "v2", s: "Revisão" },
    { d: "FO-09", a: "v5", s: "Ativo" },
    { d: "MC-03", a: "v1", s: "Novo" },
    { d: "RG-12", a: "v4", s: "Ativo" },
  ];
  return (
    <AppShell title="QualiProc · Lista Mestra">
      <Sidebar items={["Requisitos", "Documentos", "Alterações", "Lembretes"]} active={1} />
      <text x="168" y="86" fill={C.ink} fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">
        Documentos controlados
      </text>
      <text x="168" y="104" fill={C.muted} fontSize="9" fontFamily="system-ui,sans-serif">
        Versionamento · rastreabilidade · auditoria
      </text>
      <rect x="168" y="118" width="260" height="234" rx="12" fill={C.panel} stroke={C.stroke} />
      <rect x="168" y="118" width="260" height="32" rx="12" fill="#101c2c" />
      <rect x="168" y="134" width="260" height="16" fill="#101c2c" />
      {["Cód.", "Ver.", "Status"].map((h, i) => (
        <text key={h} x={184 + i * 78} y="140" fill={C.muted} fontSize="9" fontFamily="system-ui,sans-serif">
          {h}
        </text>
      ))}
      {rows.map((r, i) => (
        <g key={r.d}>
          <rect x="180" y={162 + i * 34} width="236" height="28" rx="6" fill={i === 2 ? C.dim : "rgba(148,163,184,0.06)"} />
          <text x="192" y={180 + i * 34} fill={C.ink} fontSize="10" fontFamily="system-ui,sans-serif">{r.d}</text>
          <text x="270" y={180 + i * 34} fill={C.soft} fontSize="10" fontFamily="system-ui,sans-serif">{r.a}</text>
          <text x="340" y={180 + i * 34} fill={C.muted} fontSize="10" fontFamily="system-ui,sans-serif">{r.s}</text>
        </g>
      ))}
      <rect x="444" y="118" width="160" height="110" rx="12" fill={C.panel} stroke={C.accent} />
      <path d="M492 168 l16 16 32-36" fill="none" stroke={C.accent} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <text x="524" y="210" textAnchor="middle" fill={C.ink} fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="600">
        Rastreável
      </text>
      <rect x="444" y="242" width="160" height="110" rx="12" fill={C.panel} stroke={C.stroke} />
      <text x="460" y="268" fill={C.muted} fontSize="9" fontFamily="system-ui,sans-serif">Últimas alterações</text>
      {[0, 1, 2].map((i) => (
        <rect key={i} x="460" y={282 + i * 18} width={120 - i * 20} height="8" rx="3" fill={i === 0 ? C.dim : "rgba(148,163,184,0.15)"} />
      ))}
    </AppShell>
  );
}

/** Multi-tenant / ambientes */
function SceneTenants() {
  const tenants = [
    { n: "Lab Alpha", u: "12 users" },
    { n: "Lab Beta", u: "8 users" },
    { n: "Lab Gama", u: "21 users" },
  ];
  return (
    <AppShell title="QualiProc · Ambientes (CTLI)">
      <text x="40" y="86" fill={C.ink} fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">
        Multi-tenant com isolamento por cliente
      </text>
      <text x="40" y="104" fill={C.muted} fontSize="9" fontFamily="system-ui,sans-serif">
        Dados · branding · papéis — separados por ambiente
      </text>
      {tenants.map((t, i) => (
        <g key={t.n}>
          <rect x={40 + i * 190} y="128" width="174" height="200" rx="14" fill={C.panel} stroke={i === 1 ? C.accent : C.stroke} strokeWidth={i === 1 ? 1.8 : 1} />
          <circle cx={127 + i * 190} cy="178" r="28" fill={C.dim} stroke={C.accent} />
          <text x={127 + i * 190} y="183" textAnchor="middle" fill={C.soft} fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="700">
            T{i + 1}
          </text>
          <text x={127 + i * 190} y="230" textAnchor="middle" fill={C.ink} fontSize="12" fontFamily="system-ui,sans-serif" fontWeight="600">
            {t.n}
          </text>
          <text x={127 + i * 190} y="250" textAnchor="middle" fill={C.muted} fontSize="10" fontFamily="system-ui,sans-serif">
            {t.u}
          </text>
          <rect x={58 + i * 190} y="270" width="138" height="8" rx="4" fill="rgba(148,163,184,0.15)" />
          <rect x={58 + i * 190} y="270" width={70 + i * 20} height="8" rx="4" fill={C.accent} opacity="0.8" />
          <rect x={58 + i * 190} y="290" width="100" height="8" rx="4" fill="rgba(148,163,184,0.12)" />
        </g>
      ))}
    </AppShell>
  );
}

/** Fragmentação do desafio */
function SceneChallenge() {
  const scraps = [
    { x: 40, y: 50, r: -6, t: "Planilha" },
    { x: 240, y: 40, r: 5, t: "Drive" },
    { x: 430, y: 60, r: -4, t: "E-mail" },
    { x: 90, y: 200, r: 4, t: "PDF" },
    { x: 300, y: 210, r: -7, t: "WhatsApp" },
    { x: 470, y: 190, r: 3, t: "Pasta" },
  ];
  return (
    <>
      <text x="320" y="36" textAnchor="middle" fill={C.muted} fontSize="11" fontFamily="system-ui,sans-serif">
        Evidências espalhadas · difícil de auditar
      </text>
      {scraps.map((s) => (
        <g key={s.t} transform={`translate(${s.x} ${s.y}) rotate(${s.r})`}>
          <rect width="150" height="100" rx="12" fill={C.panel} stroke={C.stroke} opacity="0.92" />
          <circle cx="128" cy="22" r="7" fill={C.danger} opacity="0.55" />
          <text x="16" y="28" fill={C.ink} fontSize="12" fontFamily="system-ui,sans-serif" fontWeight="600">
            {s.t}
          </text>
          <rect x="16" y="44" width="100" height="7" rx="3" fill="rgba(148,163,184,0.25)" />
          <rect x="16" y="60" width="80" height="7" rx="3" fill="rgba(148,163,184,0.15)" />
          <rect x="16" y="76" width="90" height="7" rx="3" fill="rgba(148,163,184,0.1)" />
        </g>
      ))}
    </>
  );
}

function SceneStep({ stepIndex = 0 }: { stepIndex?: number }) {
  if (stepIndex % 3 === 0) return <SceneDashboard title="Passo · SGQ centralizado" />;
  if (stepIndex % 3 === 1) return <SceneTenants />;
  return (
    <AppShell title="QualiProc · Continuidade">
      <Sidebar items={NAV} active={0} />
      <text x="168" y="86" fill={C.ink} fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">
        Indicadores e vencimentos
      </text>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={168 + i * 140} y="110" width="128" height="100" rx="12" fill={C.panel} stroke={C.stroke} />
          <text x={184 + i * 140} y="136" fill={C.muted} fontSize="9" fontFamily="system-ui,sans-serif">
            KPI {i + 1}
          </text>
          <text x={184 + i * 140} y="168" fill={C.soft} fontSize="22" fontFamily="system-ui,sans-serif" fontWeight="700">
            {[92, 14, 7][i]}
          </text>
          <rect x={184 + i * 140} y="184" width="96" height="8" rx="4" fill="rgba(148,163,184,0.15)" />
          <rect x={184 + i * 140} y="184" width={[80, 40, 55][i]} height="8" rx="4" fill={C.accent} />
        </g>
      ))}
      <rect x="168" y="230" width="412" height="122" rx="12" fill={C.panel} stroke={C.stroke} />
      <text x="184" y="258" fill={C.ink} fontSize="12" fontFamily="system-ui,sans-serif" fontWeight="600">
        Avisos de padrões e instrumentos
      </text>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="184" y={274 + i * 24} width="380" height="18" rx="5" fill="rgba(148,163,184,0.08)" />
          <circle cx="198" cy={283 + i * 24} r="4" fill={i === 0 ? C.warn : C.accent} />
          <rect x="214" y={277 + i * 24} width={200 - i * 30} height="8" rx="3" fill="rgba(148,163,184,0.25)" />
        </g>
      ))}
    </AppShell>
  );
}

function SceneSolution() {
  const nodes = ["Docs", "Coleta", "Cert.", "Pessoal", "Comercial", "Admin"];
  return (
    <AppShell title="QualiProc · Solução unificada">
      <circle cx="320" cy="210" r="52" fill={C.panel} stroke={C.accent} strokeWidth="2.5" />
      <text x="320" y="206" textAnchor="middle" fill={C.soft} fontSize="13" fontFamily="system-ui,sans-serif" fontWeight="700">
        QualiProc
      </text>
      <text x="320" y="224" textAnchor="middle" fill={C.muted} fontSize="9" fontFamily="system-ui,sans-serif">
        SGQ · SaaS
      </text>
      {nodes.map((label, i) => {
        const a = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
        const x = 320 + Math.cos(a) * 145;
        const y = 210 + Math.sin(a) * 115;
        return (
          <g key={label}>
            <line x1="320" y1="210" x2={x} y2={y} stroke={C.accent} strokeWidth="1.6" opacity="0.5" />
            <rect x={x - 42} y={y - 20} width="84" height="40" rx="10" fill={C.panel} stroke={C.accent} />
            <text x={x} y={y + 5} textAnchor="middle" fill={C.ink} fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="600">
              {label}
            </text>
          </g>
        );
      })}
      <text x="40" y="70" fill={C.muted} fontSize="10" fontFamily="system-ui,sans-serif">
        ISO/IEC 17025 · multi-tenant · rastreável
      </text>
    </AppShell>
  );
}

/** Resultado: visão operacional densa (métricas ficam nos cards HTML do slide) */
function SceneResult({ ids }: { ids: Ids }) {
  return (
    <AppShell title="QualiProc · Em operação">
      <text x="40" y="78" fill={C.ink} fontSize="13" fontFamily="system-ui,sans-serif" fontWeight="700">
        Do hub à rastreabilidade — no mesmo ambiente
      </text>
      <text x="40" y="96" fill={C.muted} fontSize="9" fontFamily="system-ui,sans-serif">
        Dashboard · módulos · Lista Mestra · multi-tenant
      </text>

      {[
        ["Hub", "Atalhos SGQ", 0.85],
        ["Docs", "Lista Mestra", 0.7],
        ["Campo", "Coleta", 0.55],
        ["Cert.", "Emissão", 0.75],
        ["Pessoal", "Competência", 0.6],
        ["Admin", "Tenants", 0.9],
      ].map(([a, b, w], i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 40 + col * 190;
        const y = 118 + row * 118;
        return (
          <g key={a as string}>
            <rect
              x={x}
              y={y}
              width={174}
              height={104}
              rx={14}
              fill={C.panel}
              stroke={C.stroke}
            />
            <rect
              x={x + 14}
              y={y + 18}
              width={36}
              height={36}
              rx={10}
              fill={C.dim}
              stroke={C.accent}
            />
            <text
              x={x + 32}
              y={y + 42}
              textAnchor="middle"
              fill={C.soft}
              fontSize="11"
              fontFamily="system-ui,sans-serif"
              fontWeight="700"
            >
              {String(i + 1).padStart(2, "0")}
            </text>
            <text
              x={x + 62}
              y={y + 36}
              fill={C.ink}
              fontSize="13"
              fontFamily="system-ui,sans-serif"
              fontWeight="700"
            >
              {a}
            </text>
            <text
              x={x + 62}
              y={y + 54}
              fill={C.muted}
              fontSize="10"
              fontFamily="system-ui,sans-serif"
            >
              {b}
            </text>
            <rect
              x={x + 14}
              y={y + 74}
              width={146}
              height={8}
              rx={4}
              fill="rgba(148,163,184,0.15)"
            />
            <rect
              x={x + 14}
              y={y + 74}
              width={146 * Number(w)}
              height={8}
              rx={4}
              fill={`url(#${ids.bar})`}
            />
          </g>
        );
      })}
    </AppShell>
  );
}

function SceneLanding({ title }: { title?: string }) {
  return (
    <AppShell title={title ?? "Landing · Conversão"}>
      <rect x="40" y="70" width="560" height="48" rx="10" fill={C.panel} />
      <rect x="56" y="86" width="80" height="14" rx="4" fill={C.accent} opacity="0.85" />
      <rect x="420" y="82" width="72" height="24" rx="12" fill={C.accent} />
      <rect x="504" y="82" width="72" height="24" rx="12" fill="rgba(148,163,184,0.2)" />
      <text x="56" y="160" fill={C.ink} fontSize="22" fontFamily="system-ui,sans-serif" fontWeight="700">
        Mensagem clara
      </text>
      <rect x="56" y="180" width="220" height="10" rx="4" fill="rgba(148,163,184,0.3)" />
      <rect x="56" y="200" width="180" height="10" rx="4" fill="rgba(148,163,184,0.18)" />
      <rect x="56" y="232" width="120" height="36" rx="10" fill={C.accent} />
      <rect x="340" y="148" width="240" height="200" rx="16" fill={C.panel} stroke={C.stroke} />
      <circle cx="460" cy="230" r="50" fill={C.dim} />
      <circle cx="460" cy="230" r="28" fill="none" stroke={C.accent} strokeWidth="2" />
    </AppShell>
  );
}

function SceneCta({ ids }: { ids: Ids }) {
  return (
    <>
      <circle cx="320" cy="150" r="70" fill={C.dim} filter={`url(#${ids.soft})`} />
      <circle cx="320" cy="150" r="48" fill={C.panel} stroke={C.accent} strokeWidth="2.5" />
      <text x="320" y="158" textAnchor="middle" fill={C.soft} fontSize="22" fontFamily="system-ui,sans-serif" fontWeight="700">
        LG
      </text>
      <rect x="180" y="250" width="280" height="48" rx="14" fill={C.accent} />
      <text x="320" y="280" textAnchor="middle" fill="#061018" fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">
        Vamos conversar
      </text>
      <text x="320" y="330" textAnchor="middle" fill={C.muted} fontSize="11" fontFamily="system-ui,sans-serif">
        UX · Web · Sistemas empresariais
      </text>
    </>
  );
}

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

  const isLp = deliveryType === "lp-institucional";

  let body: React.ReactNode;
  switch (id) {
    case "cover":
      body = isLp ? <SceneLanding title={title} /> : <SceneDashboard title={title} />;
      break;
    case "challenge":
      body = <SceneChallenge />;
      break;
    case "step":
      body = isLp ? <SceneLanding title={title} /> : <SceneStep stepIndex={stepIndex} />;
      break;
    case "product-hub":
      body = isLp ? <SceneLanding title={title} /> : <SceneDashboard title={title} />;
      break;
    case "product-flow":
      body = isLp ? <SceneLanding /> : <SceneModules />;
      break;
    case "product-trust":
      body = isLp ? <SceneLanding /> : <SceneListaMestra />;
      break;
    case "solution":
      body = isLp ? <SceneLanding /> : <SceneSolution />;
      break;
    case "result":
      body = isLp ? <SceneLanding /> : <SceneResult ids={ids} />;
      break;
    case "cta":
      body = <SceneCta ids={ids} />;
      break;
    default:
      body = <SceneDashboard title={title} />;
  }

  return (
    <Frame className={className} ids={ids}>
      {body}
    </Frame>
  );
}

export const PRODUCT_SCENE_IDS: ExportSceneId[] = [
  "product-hub",
  "product-flow",
  "product-trust",
];
