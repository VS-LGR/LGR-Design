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
    <AppShell title="OFAG · Technical Printing">
      <LpNav brand="OFAG" links={["A OFAG", "Serviços", "Qualidade", "Contato"]} />
      <text x="48" y="150" fill={C.ink} fontSize="16" fontFamily="system-ui,sans-serif" fontWeight="700">
        Technical Printing Solutions
      </text>
      <text x="48" y="174" fill={C.ink} fontSize="16" fontFamily="system-ui,sans-serif" fontWeight="700">
        for Regulated Industries
      </text>
      <text x="48" y="200" fill={C.muted} fontSize="10" fontFamily="system-ui,sans-serif">
        Bulas e embalagens · 57+ anos · 80+ países
      </text>
      <rect x="48" y="224" width="150" height="32" rx="10" fill={C.accent} />
      <text x="123" y="245" textAnchor="middle" fill="#061018" fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="700">
        Solicitar orçamento
      </text>
      {[
        ["57+", "Anos"],
        ["80+", "Países"],
        ["40+", "Pharma"],
      ].map(([n, l], i) => (
        <g key={l}>
          <rect x={360 + i * 80} y="140" width="72" height="80" rx="10" fill={C.panel} stroke={C.stroke} />
          <text x={396 + i * 80} y="178" textAnchor="middle" fill={C.soft} fontSize="16" fontFamily="system-ui,sans-serif" fontWeight="700">
            {n}
          </text>
          <text x={396 + i * 80} y="198" textAnchor="middle" fill={C.muted} fontSize="9" fontFamily="system-ui,sans-serif">
            {l}
          </text>
        </g>
      ))}
      <rect x="360" y="240" width="232" height="100" rx="12" fill={C.panel} stroke={C.stroke} />
      <text x="476" y="295" textAnchor="middle" fill={C.muted} fontSize="10" fontFamily="system-ui,sans-serif">
        Pharma · Healthcare · Regulated
      </text>
    </AppShell>
  );
}

function Challenge() {
  return (
    <AppShell title="OFAG · Desafio">
      <text x="40" y="100" fill={C.ink} fontSize="15" fontFamily="system-ui,sans-serif" fontWeight="700">
        Capacidade alta, percepção digital aquém
      </text>
      {["Sem narrativa regulada", "Conteúdo técnico denso", "Multilíngue necessário", "Conversão B2B fraca"].map((t, i) => (
        <g key={t}>
          <rect x={40 + (i % 2) * 290} y={140 + Math.floor(i / 2) * 110} width="270" height="90" rx="12" fill={C.panel} stroke={C.stroke} />
          <text x={60 + (i % 2) * 290} y={190 + Math.floor(i / 2) * 110} fill={C.ink} fontSize="13" fontFamily="system-ui,sans-serif" fontWeight="600">
            {t}
          </text>
        </g>
      ))}
    </AppShell>
  );
}

function Process() {
  const steps = [
    ["1", "Especificação"],
    ["2", "Produção"],
    ["3", "Qualidade"],
    ["4", "Rastreabilidade"],
  ];
  return (
    <AppShell title="OFAG · Processo">
      <text x="40" y="86" fill={C.ink} fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">
        Tecnologia e processo validado
      </text>
      {steps.map(([n, t], i) => (
        <g key={t}>
          <rect x={40 + i * 145} y="140" width="130" height="180" rx="14" fill={C.panel} stroke={C.accent} />
          <circle cx={105 + i * 145} cy="190" r="24" fill={C.dim} stroke={C.accent} />
          <text x={105 + i * 145} y="196" textAnchor="middle" fill={C.soft} fontSize="16" fontFamily="system-ui,sans-serif" fontWeight="700">
            {n}
          </text>
          <text x={105 + i * 145} y="250" textAnchor="middle" fill={C.ink} fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="600">
            {t}
          </text>
          <text x={105 + i * 145} y="275" textAnchor="middle" fill={C.muted} fontSize="9" fontFamily="system-ui,sans-serif">
            GMP
          </text>
        </g>
      ))}
    </AppShell>
  );
}

function Segments() {
  const segs = [
    ["Farmacêutico", "Bulas e embalagens"],
    ["Saúde", "Dispositivos"],
    ["Regulados", "Conformidade"],
    ["Industrial", "Rotulagem"],
  ];
  return (
    <AppShell title="OFAG · Segmentos">
      <text x="40" y="86" fill={C.ink} fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">
        Indústrias atendidas
      </text>
      {segs.map(([a, b], i) => {
        const x = 40 + (i % 2) * 290;
        const y = 120 + Math.floor(i / 2) * 120;
        return (
          <g key={a}>
            <rect x={x} y={y} width="270" height="100" rx="14" fill={C.panel} stroke={C.stroke} />
            <text x={x + 20} y={y + 42} fill={C.ink} fontSize="15" fontFamily="system-ui,sans-serif" fontWeight="700">
              {a}
            </text>
            <text x={x + 20} y={y + 66} fill={C.muted} fontSize="11" fontFamily="system-ui,sans-serif">
              {b}
            </text>
          </g>
        );
      })}
    </AppShell>
  );
}

function Certs() {
  const items = ["GMP", "ISO 9000", "Validação", "Rastreabilidade"];
  return (
    <AppShell title="OFAG · Qualidade">
      <text x="40" y="90" fill={C.ink} fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">
        Compromisso com regulamentação
      </text>
      {items.map((c, i) => (
        <g key={c}>
          <rect x={40 + (i % 2) * 290} y={130 + Math.floor(i / 2) * 110} width="270" height="90" rx="14" fill={C.panel} stroke={C.accent} />
          <path
            d={`M${70 + (i % 2) * 290} ${175 + Math.floor(i / 2) * 110} l10 10 20-22`}
            fill="none"
            stroke={C.accent}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <text x={120 + (i % 2) * 290} y={180 + Math.floor(i / 2) * 110} fill={C.ink} fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">
            {c}
          </text>
        </g>
      ))}
    </AppShell>
  );
}

function Step({ stepIndex }: { stepIndex: number }) {
  if (stepIndex % 3 === 0) {
    return (
      <AppShell title="OFAG · Multilíngue">
        <text x="40" y="100" fill={C.ink} fontSize="15" fontFamily="system-ui,sans-serif" fontWeight="700">
          Arquitetura PT / EN / ES
        </text>
        {["PT", "EN", "ES"].map((l, i) => (
          <g key={l}>
            <rect x={80 + i * 170} y="160" width="150" height="160" rx="14" fill={C.panel} stroke={i === 0 ? C.accent : C.stroke} strokeWidth={i === 0 ? 2 : 1} />
            <text x={155 + i * 170} y="245" textAnchor="middle" fill={C.soft} fontSize="28" fontFamily="system-ui,sans-serif" fontWeight="700">
              {l}
            </text>
          </g>
        ))}
      </AppShell>
    );
  }
  if (stepIndex % 3 === 1) return <Process />;
  return <Certs />;
}

function Solution() {
  return (
    <AppShell title="OFAG · Solução">
      <text x="40" y="90" fill={C.ink} fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">
        Arquitetura orientada a autoridade
      </text>
      {["Hero + métricas", "Processo GMP", "Segmentos", "Certificações", "Orçamento"].map((s, i) => (
        <g key={s}>
          <rect x={40 + i * 112} y="180" width="100" height="120" rx="12" fill={C.panel} stroke={C.stroke} />
          <text x={90 + i * 112} y="200" textAnchor="middle" fill={C.soft} fontSize="12" fontFamily="system-ui,sans-serif" fontWeight="700">
            {String(i + 1).padStart(2, "0")}
          </text>
          <text x={90 + i * 112} y="250" textAnchor="middle" fill={C.ink} fontSize="10" fontFamily="system-ui,sans-serif" fontWeight="600">
            {s}
          </text>
        </g>
      ))}
    </AppShell>
  );
}

function Result({ barId }: { barId: string }) {
  return (
    <AppShell title="OFAG · Resultado">
      <text x="40" y="86" fill={C.ink} fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">
        Imagem alinhada ao nível técnico
      </text>
      {[
        ["Presença", "Multilíngue", 0.9],
        ["Processo", "4 etapas", 0.8],
        ["Mercados", "80+ países", 0.85],
        ["Qualidade", "GMP / ISO", 0.75],
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

export const ofagPack: ScenePack = {
  captions: {
    hub: { pt: "Processo produtivo em 4 etapas", en: "4-step production process" },
    flow: { pt: "Segmentos regulados atendidos", en: "Regulated industry segments" },
    trust: { pt: "GMP, ISO e rastreabilidade", en: "GMP, ISO and traceability" },
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
        return <Process />;
      case "product-flow":
        return <Segments />;
      case "product-trust":
        return <Certs />;
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
