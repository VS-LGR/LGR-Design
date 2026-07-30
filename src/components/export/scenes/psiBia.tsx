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
    <AppShell title="Beatriz Favinchi Rossi · Psicologia">
      <LpNav brand="Bia Rossi" links={["Sobre", "Serviços", "Gamificação", "Contato"]} />
      <text x="48" y="150" fill={C.muted} fontSize="10" fontFamily="system-ui,sans-serif">
        Psicanálise · 14+ e adultos
      </text>
      <text x="48" y="180" fill={C.ink} fontSize="20" fontFamily="system-ui,sans-serif" fontWeight="700">
        Cuidar da saúde mental
      </text>
      <text x="48" y="208" fill={C.soft} fontSize="20" fontFamily="system-ui,sans-serif" fontWeight="700">
        pode ser leve.
      </text>
      <rect x="48" y="236" width="170" height="34" rx="10" fill={C.accent} />
      <text x="133" y="258" textAnchor="middle" fill="#061018" fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="700">
        Agendar 1ª consulta
      </text>
      <rect x="360" y="130" width="220" height="210" rx="14" fill={C.panel} stroke={C.stroke} />
      <circle cx="470" cy="210" r="50" fill={C.dim} />
      <text x="470" y="216" textAnchor="middle" fill={C.soft} fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="700">
        CRP SP
      </text>
      <text x="470" y="300" textAnchor="middle" fill={C.muted} fontSize="10" fontFamily="system-ui,sans-serif">
        Escuta acolhedora
      </text>
    </AppShell>
  );
}

function Challenge() {
  return (
    <AppShell title="Psi Bia · Desafio">
      <text x="40" y="100" fill={C.ink} fontSize="15" fontFamily="system-ui,sans-serif" fontWeight="700">
        Clareza e confiança no primeiro contato
      </text>
      {["Mensagem difusa", "Barreira de agendamento", "Pouco diferencial", "Tom genérico"].map((t, i) => (
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

function Services() {
  const items = [
    "Psicanálise individual",
    "Gamificação",
    "14+ anos",
    "Adultos",
    "Avaliação",
    "Teleatendimento",
  ];
  return (
    <AppShell title="Psi Bia · Serviços">
      <text x="40" y="86" fill={C.ink} fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">
        Serviços alinhados à prática clínica
      </text>
      {items.map((t, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 40 + col * 190;
        const y = 110 + row * 120;
        return (
          <g key={t}>
            <rect x={x} y={y} width="174" height="100" rx="14" fill={C.panel} stroke={C.stroke} />
            <circle cx={x + 28} cy={y + 36} r="12" fill={C.dim} stroke={C.accent} />
            <text x={x + 50} y={y + 42} fill={C.ink} fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="600">
              {t}
            </text>
          </g>
        );
      })}
    </AppShell>
  );
}

function Gamification() {
  const steps = [
    ["1", "Seleção do jogo"],
    ["2", "Processo lúdico"],
    ["3", "Reflexão"],
    ["4", "Aplicação"],
  ];
  return (
    <AppShell title="Psi Bia · Gamificação">
      <text x="40" y="86" fill={C.ink} fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">
        Jogos de tabuleiro como recurso clínico
      </text>
      {steps.map(([n, t], i) => (
        <g key={t}>
          <rect x={40 + i * 145} y="140" width="130" height="180" rx="14" fill={C.panel} stroke={C.accent} />
          <circle cx={105 + i * 145} cy="190" r="22" fill={C.dim} stroke={C.accent} />
          <text x={105 + i * 145} y="196" textAnchor="middle" fill={C.soft} fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">
            {n}
          </text>
          <text x={105 + i * 145} y="250" textAnchor="middle" fill={C.ink} fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="600">
            {t}
          </text>
        </g>
      ))}
    </AppShell>
  );
}

function Trust() {
  return (
    <AppShell title="Psi Bia · Confiança">
      <text x="40" y="90" fill={C.ink} fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">
        Depoimentos e contato direto
      </text>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="40" y={120 + i * 70} width="360" height="58" rx="12" fill={C.panel} stroke={C.stroke} />
          <text x="58" y={154 + i * 70} fill={C.muted} fontSize="11" fontFamily="system-ui,sans-serif">
            “Atendimento acolhedor e atencioso.”
          </text>
        </g>
      ))}
      <rect x="420" y="120" width="180" height="200" rx="14" fill={C.accent} opacity="0.15" stroke={C.accent} />
      <text x="510" y="200" textAnchor="middle" fill={C.soft} fontSize="12" fontFamily="system-ui,sans-serif" fontWeight="700">
        WhatsApp
      </text>
      <text x="510" y="230" textAnchor="middle" fill={C.ink} fontSize="11" fontFamily="system-ui,sans-serif">
        1ª consulta
      </text>
    </AppShell>
  );
}

function Step({ stepIndex }: { stepIndex: number }) {
  if (stepIndex % 3 === 0) {
    return (
      <AppShell title="Psi Bia · Mensagem">
        <text x="40" y="120" fill={C.ink} fontSize="16" fontFamily="system-ui,sans-serif" fontWeight="700">
          Diagnóstico de mensagem
        </text>
        <text x="40" y="150" fill={C.muted} fontSize="12" fontFamily="system-ui,sans-serif">
          Tom leve · escuta · sem pressão
        </text>
        <rect x="40" y="190" width="540" height="140" rx="14" fill={C.panel} stroke={C.stroke} />
        <text x="60" y="250" fill={C.soft} fontSize="18" fontFamily="system-ui,sans-serif" fontWeight="700">
          Cuidar da saúde mental pode ser leve.
        </text>
      </AppShell>
    );
  }
  if (stepIndex % 3 === 1) return <Services />;
  return (
    <AppShell title="Psi Bia · CTA">
      <text x="40" y="120" fill={C.ink} fontSize="15" fontFamily="system-ui,sans-serif" fontWeight="700">
        Contato orientado a ação
      </text>
      <rect x="120" y="180" width="400" height="120" rx="16" fill={C.accent} />
      <text x="320" y="230" textAnchor="middle" fill="#061018" fontSize="16" fontFamily="system-ui,sans-serif" fontWeight="700">
        WhatsApp direto
      </text>
      <text x="320" y="260" textAnchor="middle" fill="#061018" fontSize="12" fontFamily="system-ui,sans-serif">
        1ª consulta gratuita mediante CPF
      </text>
    </AppShell>
  );
}

function Solution() {
  return (
    <AppShell title="Psi Bia · Solução">
      <text x="40" y="90" fill={C.ink} fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">
        Estrutura orientada à confiança
      </text>
      {["Hero leve", "Sobre CRP", "Serviços", "Gamificação", "Depoimentos", "WhatsApp"].map((s, i) => (
        <g key={s}>
          <rect x={40 + (i % 3) * 190} y={130 + Math.floor(i / 3) * 110} width="174" height="90" rx="12" fill={C.panel} stroke={C.stroke} />
          <text x={127 + (i % 3) * 190} y={180 + Math.floor(i / 3) * 110} textAnchor="middle" fill={C.ink} fontSize="12" fontFamily="system-ui,sans-serif" fontWeight="600">
            {s}
          </text>
        </g>
      ))}
    </AppShell>
  );
}

function Result({ barId }: { barId: string }) {
  return (
    <AppShell title="Psi Bia · Resultado">
      <text x="40" y="86" fill={C.ink} fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">
        Base mais forte para posicionamento
      </text>
      {[
        ["Tom", "Acolhedor", 0.9],
        ["Diferencial", "Gamificação", 0.8],
        ["Conversão", "WhatsApp", 0.85],
        ["Credibilidade", "CRP + depoimentos", 0.75],
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

export const psiBiaPack: ScenePack = {
  captions: {
    hub: { pt: "Serviços de psicanálise e terapia", en: "Psychoanalysis and therapy services" },
    flow: { pt: "Gamificação terapêutica em 4 passos", en: "Therapeutic gamification in 4 steps" },
    trust: { pt: "Depoimentos e WhatsApp direto", en: "Testimonials and direct WhatsApp" },
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
        return <Services />;
      case "product-flow":
        return <Gamification />;
      case "product-trust":
        return <Trust />;
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
