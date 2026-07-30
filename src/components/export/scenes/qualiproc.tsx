import {
  AppShell,
  C,
  SceneCta,
  Sidebar,
  type ExportSceneId,
  type ScenePack,
  type SceneRenderCtx,
} from "./shared";

const NAV = [
  "Requisitos",
  "Documentos",
  "Coleta",
  "Certificados",
  "Pessoal",
  "Comercial",
];

function Dashboard({ title }: { title?: string }) {
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
      <Sidebar brand="SGQ" items={NAV} active={0} />
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
          </g>
        );
      })}
      <rect x="168" y="302" width="412" height="50" rx="10" fill={C.panel} stroke={C.stroke} />
      <text x="184" y="322" fill={C.muted} fontSize="9" fontFamily="system-ui,sans-serif">
        Indicadores · avisos de vencimento
      </text>
      {[0.55, 0.78, 0.42, 0.9].map((w, i) => (
        <g key={i}>
          <rect x={184 + i * 95} y="332" width={80} height="8" rx="4" fill="rgba(148,163,184,0.12)" />
          <rect x={184 + i * 95} y="332" width={80 * w} height="8" rx="4" fill={C.accent} opacity="0.85" />
        </g>
      ))}
    </AppShell>
  );
}

function Modules() {
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
      {mods.map((m, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 40 + col * 190;
        const y = 114 + row * 120;
        return (
          <g key={m.t}>
            <rect x={x} y={y} width="174" height="104" rx="14" fill={C.panel} stroke={i === 0 ? C.accent : C.stroke} strokeWidth={i === 0 ? 1.8 : 1} />
            <text x={x + 62} y={y + 40} fill={C.ink} fontSize="13" fontFamily="system-ui,sans-serif" fontWeight="700">
              {m.t}
            </text>
            <text x={x + 62} y={y + 58} fill={C.muted} fontSize="10" fontFamily="system-ui,sans-serif">
              {m.s}
            </text>
            <rect x={x + 14} y={y + 18} width="36" height="36" rx="10" fill={C.dim} />
            <text x={x + 32} y={y + 42} textAnchor="middle" fill={C.soft} fontSize="12" fontFamily="system-ui,sans-serif" fontWeight="700">
              {String(i + 1).padStart(2, "0")}
            </text>
          </g>
        );
      })}
    </AppShell>
  );
}

function ListaMestra() {
  const rows = [
    { d: "PO-01", a: "v3", s: "Ativo" },
    { d: "IT-17", a: "v2", s: "Revisão" },
    { d: "FO-09", a: "v5", s: "Ativo" },
    { d: "MC-03", a: "v1", s: "Novo" },
    { d: "RG-12", a: "v4", s: "Ativo" },
  ];
  return (
    <AppShell title="QualiProc · Lista Mestra">
      <Sidebar brand="SGQ" items={["Requisitos", "Documentos", "Alterações", "Lembretes"]} active={1} />
      <text x="168" y="86" fill={C.ink} fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">
        Documentos controlados
      </text>
      <rect x="168" y="108" width="260" height="240" rx="12" fill={C.panel} stroke={C.stroke} />
      {rows.map((r, i) => (
        <g key={r.d}>
          <rect x="180" y={128 + i * 38} width="236" height="30" rx="6" fill={i === 2 ? C.dim : "rgba(148,163,184,0.06)"} />
          <text x="192" y={148 + i * 38} fill={C.ink} fontSize="10" fontFamily="system-ui,sans-serif">{r.d}</text>
          <text x="270" y={148 + i * 38} fill={C.soft} fontSize="10" fontFamily="system-ui,sans-serif">{r.a}</text>
          <text x="340" y={148 + i * 38} fill={C.muted} fontSize="10" fontFamily="system-ui,sans-serif">{r.s}</text>
        </g>
      ))}
      <rect x="444" y="108" width="160" height="110" rx="12" fill={C.panel} stroke={C.accent} />
      <path d="M492 158 l16 16 32-36" fill="none" stroke={C.accent} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <text x="524" y="200" textAnchor="middle" fill={C.ink} fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="600">
        Rastreável
      </text>
      <rect x="444" y="234" width="160" height="114" rx="12" fill={C.panel} stroke={C.stroke} />
      <text x="460" y="260" fill={C.muted} fontSize="9" fontFamily="system-ui,sans-serif">Últimas alterações</text>
      {[0, 1, 2].map((i) => (
        <rect key={i} x="460" y={278 + i * 20} width={120 - i * 20} height="8" rx="3" fill={i === 0 ? C.dim : "rgba(148,163,184,0.15)"} />
      ))}
    </AppShell>
  );
}

function Tenants() {
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
      {tenants.map((t, i) => (
        <g key={t.n}>
          <rect x={40 + i * 190} y="120" width="174" height="210" rx="14" fill={C.panel} stroke={i === 1 ? C.accent : C.stroke} strokeWidth={i === 1 ? 1.8 : 1} />
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
        </g>
      ))}
    </AppShell>
  );
}

function Challenge() {
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
        </g>
      ))}
    </>
  );
}

function Step({ stepIndex }: { stepIndex: number }) {
  if (stepIndex % 3 === 0) return <Dashboard title="Passo · SGQ centralizado" />;
  if (stepIndex % 3 === 1) return <Tenants />;
  return (
    <AppShell title="QualiProc · Continuidade">
      <Sidebar brand="SGQ" items={NAV} active={0} />
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
        </g>
      ))}
      <rect x="168" y="230" width="412" height="122" rx="12" fill={C.panel} stroke={C.stroke} />
      <text x="184" y="258" fill={C.ink} fontSize="12" fontFamily="system-ui,sans-serif" fontWeight="600">
        Avisos de padrões e instrumentos
      </text>
      {[0, 1, 2].map((i) => (
        <rect key={i} x="184" y={274 + i * 24} width="380" height="18" rx="5" fill="rgba(148,163,184,0.08)" />
      ))}
    </AppShell>
  );
}

function Solution() {
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
    </AppShell>
  );
}

function Result({ barId }: { barId: string }) {
  return (
    <AppShell title="QualiProc · Em operação">
      <text x="40" y="78" fill={C.ink} fontSize="13" fontFamily="system-ui,sans-serif" fontWeight="700">
        Do hub à rastreabilidade — no mesmo ambiente
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
        const y = 108 + row * 118;
        return (
          <g key={a as string}>
            <rect x={x} y={y} width={174} height={104} rx={14} fill={C.panel} stroke={C.stroke} />
            <text x={x + 62} y={y + 40} fill={C.ink} fontSize="13" fontFamily="system-ui,sans-serif" fontWeight="700">
              {a}
            </text>
            <text x={x + 62} y={y + 58} fill={C.muted} fontSize="10" fontFamily="system-ui,sans-serif">
              {b}
            </text>
            <rect x={x + 14} y={y + 18} width={36} height={36} rx={10} fill={C.dim} stroke={C.accent} />
            <text x={x + 32} y={y + 42} textAnchor="middle" fill={C.soft} fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="700">
              {String(i + 1).padStart(2, "0")}
            </text>
            <rect x={x + 14} y={y + 74} width={146} height={8} rx={4} fill="rgba(148,163,184,0.15)" />
            <rect x={x + 14} y={y + 74} width={146 * Number(w)} height={8} rx={4} fill={`url(#${barId})`} />
          </g>
        );
      })}
    </AppShell>
  );
}

export const qualiprocPack: ScenePack = {
  captions: {
    hub: {
      pt: "Dashboard e hub de atalhos do SGQ",
      en: "SGQ dashboard and shortcuts hub",
    },
    flow: {
      pt: "Módulos: documentos, coleta, certificados, comercial",
      en: "Modules: documents, field, certificates, sales",
    },
    trust: {
      pt: "Lista Mestra e rastreabilidade documental",
      en: "Master list and document traceability",
    },
  },
  render(id: ExportSceneId, ctx: SceneRenderCtx) {
    switch (id) {
      case "cover":
      case "product-hub":
        return <Dashboard title={ctx.title} />;
      case "challenge":
        return <Challenge />;
      case "step":
        return <Step stepIndex={ctx.stepIndex} />;
      case "product-flow":
        return <Modules />;
      case "product-trust":
        return <ListaMestra />;
      case "solution":
        return <Solution />;
      case "result":
        return <Result barId={ctx.ids.bar} />;
      case "cta":
        return <SceneCta ids={ctx.ids} />;
      default:
        return <Dashboard title={ctx.title} />;
    }
  },
};
