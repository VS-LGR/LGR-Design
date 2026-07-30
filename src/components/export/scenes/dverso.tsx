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
    <AppShell title="Clínica DVERSO · Sorocaba">
      <LpNav brand="DVERSO" links={["Início", "Sobre", "Especialidades", "Espaços"]} />
      <text x="48" y="150" fill={C.muted} fontSize="10" fontFamily="system-ui,sans-serif">
        Sobre a clínica
      </text>
      <text x="48" y="178" fill={C.ink} fontSize="18" fontFamily="system-ui,sans-serif" fontWeight="700">
        Cuidado integrado que respeita
      </text>
      <text x="48" y="202" fill={C.ink} fontSize="18" fontFamily="system-ui,sans-serif" fontWeight="700">
        a neurodiversidade
      </text>
      <rect x="48" y="224" width="220" height="8" rx="3" fill="rgba(148,163,184,0.25)" />
      <rect x="48" y="248" width="140" height="32" rx="10" fill={C.accent} />
      <text x="118" y="269" textAnchor="middle" fill="#061018" fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="700">
        Agendar visita
      </text>
      <rect x="340" y="128" width="240" height="200" rx="14" fill={C.panel} stroke={C.stroke} />
      <rect x="360" y="148" width="90" height="70" rx="10" fill={C.dim} />
      <rect x="460" y="148" width="100" height="70" rx="10" fill="rgba(148,163,184,0.12)" />
      <rect x="360" y="232" width="200" height="70" rx="10" fill="rgba(148,163,184,0.1)" />
      <text x="460" y="272" textAnchor="middle" fill={C.muted} fontSize="10" fontFamily="system-ui,sans-serif">
        Espaços acolhedores
      </text>
    </AppShell>
  );
}

function Challenge() {
  return (
    <AppShell title="DVERSO · Desafio">
      <text x="40" y="90" fill={C.ink} fontSize="15" fontFamily="system-ui,sans-serif" fontWeight="700">
        Muitas linhas de cuidado, risco de mensagem genérica
      </text>
      {["Psicologia", "Fono", "TO", "ABA", "TAA", "Família"].map((t, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        return (
          <g key={t} transform={`translate(${48 + col * 185} ${130 + row * 110}) rotate(${(i % 2 === 0 ? -3 : 4)})`}>
            <rect width="160" height="88" rx="12" fill={C.panel} stroke={C.stroke} opacity="0.9" />
            <circle cx="140" cy="20" r="6" fill={C.warn} opacity="0.5" />
            <text x="16" y="36" fill={C.ink} fontSize="12" fontFamily="system-ui,sans-serif" fontWeight="600">
              {t}
            </text>
            <rect x="16" y="52" width="100" height="7" rx="3" fill="rgba(148,163,184,0.2)" />
          </g>
        );
      })}
    </AppShell>
  );
}

function Specialties() {
  const items = ["Psicologia", "Fonoaudiologia", "T. Ocupacional", "Avaliação Neuro", "Terapia Alimentar", "AT"];
  return (
    <AppShell title="DVERSO · Especialidades">
      <text x="40" y="86" fill={C.ink} fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">
        Terapia integrada multidisciplinar
      </text>
      {items.map((t, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 40 + col * 190;
        const y = 110 + row * 120;
        return (
          <g key={t}>
            <rect x={x} y={y} width="174" height="100" rx="14" fill={C.panel} stroke={C.stroke} />
            <circle cx={x + 32} cy={y + 36} r="14" fill={C.dim} stroke={C.accent} />
            <text x={x + 58} y={y + 42} fill={C.ink} fontSize="12" fontFamily="system-ui,sans-serif" fontWeight="600">
              {t}
            </text>
            <rect x={x + 18} y={y + 68} width="120" height="7" rx="3" fill="rgba(148,163,184,0.2)" />
          </g>
        );
      })}
    </AppShell>
  );
}

function Spaces() {
  const spaces = ["Brinquedoteca", "Conforto", "Horta", "Sensorial", "Gameterapia", "TAA"];
  return (
    <AppShell title="DVERSO · Espaços">
      <text x="40" y="86" fill={C.ink} fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">
        Ambientes pensados para acolher
      </text>
      {spaces.map((s, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 40 + col * 190;
        const y = 110 + row * 120;
        return (
          <g key={s}>
            <rect x={x} y={y} width="174" height="100" rx="14" fill={C.panel} stroke={C.stroke} />
            <rect x={x + 14} y={y + 14} width="146" height="50" rx="8" fill={C.dim} />
            <text x={x + 87} y={y + 86} textAnchor="middle" fill={C.ink} fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="600">
              {s}
            </text>
          </g>
        );
      })}
    </AppShell>
  );
}

function Taa() {
  return (
    <AppShell title="DVERSO · TAA">
      <text x="40" y="90" fill={C.ink} fontSize="15" fontFamily="system-ui,sans-serif" fontWeight="700">
        Terapia Assistida por Animais
      </text>
      <text x="40" y="112" fill={C.muted} fontSize="10" fontFamily="system-ui,sans-serif">
        Anakin — cão de terapia integrado ao plano individualizado
      </text>
      <circle cx="180" cy="240" r="70" fill={C.dim} stroke={C.accent} strokeWidth="2" />
      <text x="180" y="246" textAnchor="middle" fill={C.soft} fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">
        Anakin
      </text>
      <rect x="300" y="170" width="280" height="160" rx="14" fill={C.panel} stroke={C.stroke} />
      {["Vínculo", "Engajamento", "Regulação", "Ética clínica"].map((t, i) => (
        <g key={t}>
          <rect x="320" y={190 + i * 32} width="240" height="24" rx="6" fill="rgba(148,163,184,0.08)" />
          <circle cx="336" cy={202 + i * 32} r="5" fill={C.accent} />
          <text x="352" y={206 + i * 32} fill={C.ink} fontSize="11" fontFamily="system-ui,sans-serif">
            {t}
          </text>
        </g>
      ))}
    </AppShell>
  );
}

function Step({ stepIndex }: { stepIndex: number }) {
  if (stepIndex % 3 === 0) {
    return (
      <AppShell title="DVERSO · Conversão">
        <LpNav brand="DVERSO" links={["Início", "Sobre", "CTA"]} />
        <text x="48" y="160" fill={C.ink} fontSize="16" fontFamily="system-ui,sans-serif" fontWeight="700">
          Narrativa acolhedora → contato
        </text>
        <rect x="48" y="190" width="160" height="40" rx="12" fill={C.accent} />
        <text x="128" y="215" textAnchor="middle" fill="#061018" fontSize="12" fontFamily="system-ui,sans-serif" fontWeight="700">
          Agendar visita
        </text>
        <rect x="48" y="250" width="140" height="36" rx="12" fill="rgba(148,163,184,0.2)" />
        <text x="118" y="273" textAnchor="middle" fill={C.ink} fontSize="11" fontFamily="system-ui,sans-serif">
          WhatsApp
        </text>
        <rect x="340" y="140" width="240" height="200" rx="14" fill={C.panel} stroke={C.stroke} />
        <text x="460" y="240" textAnchor="middle" fill={C.muted} fontSize="11" fontFamily="system-ui,sans-serif">
          CTAs nos pontos de decisão
        </text>
      </AppShell>
    );
  }
  if (stepIndex % 3 === 1) {
    return (
      <AppShell title="DVERSO · Microinterações">
        <text x="40" y="90" fill={C.ink} fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">
          Lottie leve para humanizar a leitura
        </text>
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x={48 + i * 185} y="130" width="170" height="200" rx="14" fill={C.panel} stroke={C.stroke} />
            <circle cx={133 + i * 185} cy="210" r="36" fill={C.dim} stroke={C.accent} />
            <text x={133 + i * 185} y="280" textAnchor="middle" fill={C.muted} fontSize="10" fontFamily="system-ui,sans-serif">
              Seção {i + 1}
            </text>
          </g>
        ))}
      </AppShell>
    );
  }
  return (
    <AppShell title="DVERSO · VLibras">
      <text x="40" y="100" fill={C.ink} fontSize="15" fontFamily="system-ui,sans-serif" fontWeight="700">
        Inclusão com VLibras na jornada
      </text>
      <rect x="80" y="140" width="360" height="200" rx="14" fill={C.panel} stroke={C.stroke} />
      <rect x="100" y="170" width="200" height="12" rx="4" fill="rgba(241,245,249,0.4)" />
      <rect x="100" y="200" width="280" height="8" rx="3" fill="rgba(148,163,184,0.25)" />
      <rect x="100" y="220" width="240" height="8" rx="3" fill="rgba(148,163,184,0.15)" />
      <rect x="470" y="240" width="90" height="90" rx="16" fill={C.accent} opacity="0.85" />
      <text x="515" y="292" textAnchor="middle" fill="#061018" fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="700">
        VLibras
      </text>
    </AppShell>
  );
}

function Solution() {
  return (
    <AppShell title="DVERSO · Solução">
      <text x="40" y="90" fill={C.ink} fontSize="15" fontFamily="system-ui,sans-serif" fontWeight="700">
        Experiência acolhedora, inclusiva e conversível
      </text>
      {[
        ["Narrativa", "Neuroafirmativa"],
        ["Especialidades", "Multidisciplinar"],
        ["Espaços", "Previsíveis"],
        ["TAA", "Quando indicado"],
        ["VLibras", "Inclusão"],
        ["CTA", "Visita / WhatsApp"],
      ].map(([a, b], i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 40 + col * 190;
        const y = 120 + row * 110;
        return (
          <g key={a}>
            <rect x={x} y={y} width="174" height="90" rx="12" fill={C.panel} stroke={C.stroke} />
            <text x={x + 16} y={y + 36} fill={C.ink} fontSize="13" fontFamily="system-ui,sans-serif" fontWeight="700">
              {a}
            </text>
            <text x={x + 16} y={y + 58} fill={C.muted} fontSize="10" fontFamily="system-ui,sans-serif">
              {b}
            </text>
          </g>
        );
      })}
    </AppShell>
  );
}

function Result({ barId }: { barId: string }) {
  return (
    <AppShell title="DVERSO · Resultado">
      <text x="40" y="86" fill={C.ink} fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">
        Cuidado traduzido em clareza e conversão
      </text>
      {[
        ["Landing", "Acolhedora", 0.9],
        ["Micro UX", "Lottie", 0.7],
        ["Acesso", "VLibras", 0.85],
        ["CTA", "Visita", 0.75],
      ].map(([a, b, w], i) => {
        const x = 40 + (i % 2) * 290;
        const y = 120 + Math.floor(i / 2) * 120;
        return (
          <g key={a as string}>
            <rect x={x} y={y} width="270" height="100" rx="14" fill={C.panel} stroke={C.stroke} />
            <text x={x + 20} y={y + 40} fill={C.ink} fontSize="16" fontFamily="system-ui,sans-serif" fontWeight="700">
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

export const dversoPack: ScenePack = {
  captions: {
    hub: { pt: "Especialidades multidisciplinares", en: "Multidisciplinary specialties" },
    flow: { pt: "Espaços terapêuticos acolhedores", en: "Welcoming therapy spaces" },
    trust: { pt: "TAA com cão de terapia integrado", en: "Animal-assisted therapy integrated" },
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
        return <Spaces />;
      case "product-trust":
        return <Taa />;
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
