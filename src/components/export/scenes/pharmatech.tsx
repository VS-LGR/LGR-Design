import {
  AppShell,
  C,
  LpNav,
  SceneCta,
  type ExportSceneId,
  type ScenePack,
  type SceneRenderCtx,
} from "./shared";

function Cover() {
  return (
    <AppShell title="Pharmatech · Inovação Farmacêutica">
      <LpNav brand="Pharmatech" links={["Início", "Sobre", "Especializações", "Contato"]} />
      <text x="48" y="160" fill={C.ink} fontSize="20" fontFamily="system-ui,sans-serif" fontWeight="700">
        Inovação Farmacêutica
      </text>
      <text x="48" y="186" fill={C.ink} fontSize="20" fontFamily="system-ui,sans-serif" fontWeight="700">
        Brasileira
      </text>
      <rect x="48" y="206" width="260" height="8" rx="3" fill="rgba(148,163,184,0.25)" />
      <rect x="48" y="236" width="150" height="34" rx="10" fill={C.accent} />
      <text x="123" y="258" textAnchor="middle" fill="#061018" fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="700">
        Entre em Contato
      </text>
      <rect x="360" y="130" width="220" height="210" rx="14" fill={C.panel} stroke={C.stroke} />
      <circle cx="470" cy="220" r="48" fill={C.dim} />
      <text x="470" y="226" textAnchor="middle" fill={C.soft} fontSize="12" fontFamily="system-ui,sans-serif" fontWeight="700">
        P&D
      </text>
    </AppShell>
  );
}

function Challenge() {
  return (
    <AppShell title="Pharmatech · Desafio">
      <text x="40" y="100" fill={C.ink} fontSize="15" fontFamily="system-ui,sans-serif" fontWeight="700">
        Confiança no setor farma exige estrutura
      </text>
      {["Site genérico", "Pouca prova", "CTA fraco", "Sem narrativa"].map((t, i) => (
        <g key={t}>
          <rect x={40 + (i % 2) * 290} y={140 + Math.floor(i / 2) * 110} width="270" height="90" rx="12" fill={C.panel} stroke={C.stroke} />
          <circle cx={70 + (i % 2) * 290} cy={185 + Math.floor(i / 2) * 110} r="10" fill={C.danger} opacity="0.5" />
          <text x={96 + (i % 2) * 290} y={190 + Math.floor(i / 2) * 110} fill={C.ink} fontSize="13" fontFamily="system-ui,sans-serif" fontWeight="600">
            {t}
          </text>
        </g>
      ))}
    </AppShell>
  );
}

function Pillars() {
  const items = [
    ["Tecnologia", "Equipamentos"],
    ["Equipe", "Especialistas"],
    ["P&D", "Inovação"],
    ["Qualidade", "Controle"],
  ];
  return (
    <AppShell title="Pharmatech · Pilares">
      <text x="40" y="86" fill={C.ink} fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">
        Sobre a Pharmatech — credibilidade escaneável
      </text>
      {items.map(([a, b], i) => {
        const x = 40 + (i % 2) * 290;
        const y = 120 + Math.floor(i / 2) * 120;
        return (
          <g key={a}>
            <rect x={x} y={y} width="270" height="100" rx="14" fill={C.panel} stroke={C.stroke} />
            <circle cx={x + 36} cy={y + 40} r="18" fill={C.dim} stroke={C.accent} />
            <text x={x + 68} y={y + 38} fill={C.ink} fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">
              {a}
            </text>
            <text x={x + 68} y={y + 58} fill={C.muted} fontSize="11" fontFamily="system-ui,sans-serif">
              {b}
            </text>
          </g>
        );
      })}
    </AppShell>
  );
}

function Specialties() {
  const items = [
    "Oncológicos",
    "Cardiovasculares",
    "Doenças raras",
    "Genéricos",
    "Nutracêuticos",
    "Pesquisa clínica",
  ];
  return (
    <AppShell title="Pharmatech · Especializações">
      <text x="40" y="86" fill={C.ink} fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">
        Segmentação por área terapêutica
      </text>
      {items.map((t, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 40 + col * 190;
        const y = 110 + row * 120;
        return (
          <g key={t}>
            <rect x={x} y={y} width="174" height="100" rx="14" fill={C.panel} stroke={C.stroke} />
            <text x={x + 16} y={y + 48} fill={C.ink} fontSize="12" fontFamily="system-ui,sans-serif" fontWeight="700">
              {t}
            </text>
            <rect x={x + 16} y={y + 68} width="110" height="7" rx="3" fill="rgba(148,163,184,0.2)" />
          </g>
        );
      })}
    </AppShell>
  );
}

function Partners() {
  const partners = ["USP", "Butantan", "Fiocruz", "ANVISA", "Labs Int.", "Biotec"];
  return (
    <AppShell title="Pharmatech · Parceiros">
      <text x="40" y="86" fill={C.ink} fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">
        Parcerias que sustentam credibilidade
      </text>
      {partners.map((p, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 40 + col * 190;
        const y = 120 + row * 110;
        return (
          <g key={p}>
            <rect x={x} y={y} width="174" height="90" rx="14" fill={C.panel} stroke={i === 3 ? C.accent : C.stroke} />
            <text x={x + 87} y={y + 52} textAnchor="middle" fill={C.soft} fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">
              {p}
            </text>
          </g>
        );
      })}
    </AppShell>
  );
}

function Step({ stepIndex }: { stepIndex: number }) {
  if (stepIndex % 3 === 0) return <Pillars />;
  if (stepIndex % 3 === 1) return <Specialties />;
  return (
    <AppShell title="Pharmatech · Conversão">
      <text x="40" y="100" fill={C.ink} fontSize="15" fontFamily="system-ui,sans-serif" fontWeight="700">
        Contato comercial estruturado
      </text>
      <rect x="80" y="140" width="320" height="200" rx="14" fill={C.panel} stroke={C.stroke} />
      {["Nome", "Email", "Assunto", "Mensagem"].map((f, i) => (
        <rect key={f} x="100" y={160 + i * 40} width="280" height="28" rx="6" fill="rgba(148,163,184,0.1)" />
      ))}
      <rect x="430" y="180" width="150" height="120" rx="14" fill={C.accent} opacity="0.2" stroke={C.accent} />
      <text x="505" y="245" textAnchor="middle" fill={C.soft} fontSize="12" fontFamily="system-ui,sans-serif" fontWeight="700">
        Enviar
      </text>
    </AppShell>
  );
}

function Solution() {
  return (
    <AppShell title="Pharmatech · Solução">
      <text x="40" y="90" fill={C.ink} fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">
        Narrativa institucional progressiva
      </text>
      {["Hero", "Sobre", "Fundador", "Especializações", "Parceiros", "Contato"].map((s, i) => (
        <g key={s}>
          <rect x={40 + i * 95} y="180" width="85" height="100" rx="12" fill={C.panel} stroke={i < 5 ? C.accent : C.stroke} />
          <text x={82 + i * 95} y="235" textAnchor="middle" fill={C.ink} fontSize="10" fontFamily="system-ui,sans-serif" fontWeight="600">
            {s}
          </text>
          {i < 5 ? (
            <polygon
              points={`${125 + i * 95},230 ${133 + i * 95},226 ${133 + i * 95},234`}
              fill={C.soft}
            />
          ) : null}
        </g>
      ))}
    </AppShell>
  );
}

function Result({ barId }: { barId: string }) {
  return (
    <AppShell title="Pharmatech · Resultado">
      <text x="40" y="86" fill={C.ink} fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">
        Presença digital mais robusta
      </text>
      {[
        ["Posicionamento", "Institucional", 0.88],
        ["Especializações", "6 áreas", 0.75],
        ["Parceiros", "Credibilidade", 0.8],
        ["Contato", "Formulário", 0.7],
      ].map(([a, b, w], i) => {
        const x = 40 + (i % 2) * 290;
        const y = 120 + Math.floor(i / 2) * 120;
        return (
          <g key={a as string}>
            <rect x={x} y={y} width="270" height="100" rx="14" fill={C.panel} stroke={C.stroke} />
            <text x={x + 20} y={y + 40} fill={C.ink} fontSize="15" fontFamily="system-ui,sans-serif" fontWeight="700">
              {a}
            </text>
            <text x={x + 20} y={y + 62} fill={C.muted} fontSize="11" fontFamily="system-ui,sans-serif">
              {b}
            </text>
            <rect x={x + 20} y={y + 76} width="220" height="8" rx="4" fill="rgba(148,163,184,0.15)" />
            <rect x={x + 20} y={y + 76} width={220 * Number(w)} height="8" rx="4" fill={`url(#${barId})`} />
          </g>
        );
      })}
    </AppShell>
  );
}

export const pharmatechPack: ScenePack = {
  captions: {
    hub: { pt: "Especializações farmacêuticas", en: "Pharmaceutical specialties" },
    flow: { pt: "Pilares de tecnologia, equipe e qualidade", en: "Tech, team and quality pillars" },
    trust: { pt: "Parceiros e regulamentação", en: "Partners and regulation" },
  },
  render(id: ExportSceneId, ctx: SceneRenderCtx) {
    switch (id) {
      case "cover":
        return <Cover />;
      case "challenge":
        return <Challenge />;
      case "step":
        return <Step stepIndex={ctx.stepIndex} />;
      case "product-hub":
        return <Specialties />;
      case "product-flow":
        return <Pillars />;
      case "product-trust":
        return <Partners />;
      case "solution":
        return <Solution />;
      case "result":
        return <Result barId={ctx.ids.bar} />;
      case "cta":
        return <SceneCta ids={ctx.ids} />;
      default:
        return <Cover />;
    }
  },
};
