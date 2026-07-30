import {
  AppShell,
  C,
  SceneCta,
  Sidebar,
  type ExportSceneId,
  type ScenePack,
  type SceneRenderCtx,
} from "./shared";

const NAV = ["Personagens", "Criar", "Magias", "Itens", "Forja", "Regras"];

function Cover({ title }: { title?: string }) {
  return (
    <AppShell title={title ?? "Grimório do Aventureiro · DnD 5e PT"}>
      <Sidebar brand="Grimório" items={NAV} active={1} />
      <text x="168" y="90" fill={C.muted} fontSize="10" fontFamily="system-ui,sans-serif">
        Ferramenta de RPG · DnD 5e
      </text>
      <text x="168" y="120" fill={C.ink} fontSize="18" fontFamily="system-ui,sans-serif" fontWeight="700">
        Crie fichas em português
      </text>
      <text x="168" y="146" fill={C.soft} fontSize="13" fontFamily="system-ui,sans-serif">
        Cálculos automáticos · mesa brasileira
      </text>
      <rect x="168" y="170" width="160" height="36" rx="10" fill={C.accent} />
      <text x="248" y="193" textAnchor="middle" fill="#061018" fontSize="12" fontFamily="system-ui,sans-serif" fontWeight="700">
        Criar personagem
      </text>
      <rect x="340" y="170" width="140" height="36" rx="10" fill="rgba(148,163,184,0.2)" />
      <text x="410" y="193" textAnchor="middle" fill={C.ink} fontSize="11" fontFamily="system-ui,sans-serif">
        Meus personagens
      </text>
      <rect x="168" y="230" width="412" height="120" rx="12" fill={C.panel} stroke={C.stroke} />
      {["Raça", "Classe", "Atributos", "Equipamento"].map((s, i) => (
        <g key={s}>
          <rect x={184 + i * 95} y="255" width="85" height="70" rx="10" fill={C.deep} stroke={C.stroke} />
          <text x={226 + i * 95} y="295" textAnchor="middle" fill={C.muted} fontSize="10" fontFamily="system-ui,sans-serif">
            {s}
          </text>
        </g>
      ))}
    </AppShell>
  );
}

function Challenge() {
  return (
    <AppShell title="Grimório · Desafio">
      <text x="40" y="90" fill={C.ink} fontSize="15" fontFamily="system-ui,sans-serif" fontWeight="700">
        Fichas em inglês, cálculos manuais, pouca UX BR
      </text>
      {[
        ["PDF EN", "Difícil na mesa"],
        ["Contas", "Erro humano"],
        ["Magias", "Sem tradução"],
        ["Itens", "Sem balanço"],
      ].map(([a, b], i) => {
        const x = 40 + (i % 2) * 290;
        const y = 130 + Math.floor(i / 2) * 110;
        return (
          <g key={a}>
            <rect x={x} y={y} width="270" height="90" rx="12" fill={C.panel} stroke={C.stroke} />
            <circle cx={x + 28} cy={y + 45} r="10" fill={C.danger} opacity="0.5" />
            <text x={x + 52} y={y + 40} fill={C.ink} fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">
              {a}
            </text>
            <text x={x + 52} y={y + 62} fill={C.muted} fontSize="11" fontFamily="system-ui,sans-serif">
              {b}
            </text>
          </g>
        );
      })}
    </AppShell>
  );
}

function SheetLive() {
  return (
    <AppShell title="Grimório · Ficha viva">
      <Sidebar brand="Grimório" items={NAV} active={0} />
      <text x="168" y="86" fill={C.ink} fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">
        HP, CA, perícias e slots calculados
      </text>
      {[
        ["HP", "42"],
        ["CA", "16"],
        ["Iniciativa", "+3"],
        ["Prof.", "+3"],
      ].map(([l, v], i) => (
        <g key={l}>
          <rect x={168 + i * 105} y="110" width="95" height="70" rx="10" fill={C.panel} stroke={C.stroke} />
          <text x={215 + i * 105} y="140" textAnchor="middle" fill={C.muted} fontSize="10" fontFamily="system-ui,sans-serif">
            {l}
          </text>
          <text x={215 + i * 105} y="164" textAnchor="middle" fill={C.soft} fontSize="18" fontFamily="system-ui,sans-serif" fontWeight="700">
            {v}
          </text>
        </g>
      ))}
      <rect x="168" y="200" width="412" height="150" rx="12" fill={C.panel} stroke={C.stroke} />
      <text x="184" y="230" fill={C.ink} fontSize="12" fontFamily="system-ui,sans-serif" fontWeight="600">
        Atributos
      </text>
      {["FOR", "DES", "CON", "INT", "SAB", "CAR"].map((a, i) => (
        <g key={a}>
          <rect x={184 + i * 64} y="250" width="56" height="70" rx="8" fill={C.deep} stroke={C.stroke} />
          <text x={212 + i * 64} y="278" textAnchor="middle" fill={C.muted} fontSize="9" fontFamily="system-ui,sans-serif">
            {a}
          </text>
          <text x={212 + i * 64} y="300" textAnchor="middle" fill={C.ink} fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">
            {[16, 14, 15, 10, 12, 8][i]}
          </text>
        </g>
      ))}
    </AppShell>
  );
}

function SpellsWild() {
  return (
    <AppShell title="Grimório · Magias & Formas">
      <Sidebar brand="Grimório" items={NAV} active={2} />
      <text x="168" y="86" fill={C.ink} fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">
        Magias e formas selvagens em português
      </text>
      <rect x="168" y="110" width="200" height="240" rx="12" fill={C.panel} stroke={C.stroke} />
      <text x="184" y="138" fill={C.soft} fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="700">
        Magias
      </text>
      {["Bola de Fogo", "Cura Ferimentos", "Escudo", "Luz"].map((m, i) => (
        <rect key={m} x="184" y={155 + i * 42} width="168" height="32" rx="6" fill={i === 0 ? C.dim : "rgba(148,163,184,0.08)"} />
      ))}
      {["Bola de Fogo", "Cura Ferimentos", "Escudo", "Luz"].map((m, i) => (
        <text key={`t-${m}`} x="196" y={176 + i * 42} fill={C.ink} fontSize="11" fontFamily="system-ui,sans-serif">
          {m}
        </text>
      ))}
      <rect x="388" y="110" width="192" height="240" rx="12" fill={C.panel} stroke={C.stroke} />
      <text x="404" y="138" fill={C.soft} fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="700">
        Formas selvagens
      </text>
      {["Lobo", "Urso", "Águia", "Pantera"].map((f, i) => (
        <g key={f}>
          <rect x="404" y={155 + i * 42} width="160" height="32" rx="6" fill="rgba(148,163,184,0.08)" />
          <text x="416" y={176 + i * 42} fill={C.ink} fontSize="11" fontFamily="system-ui,sans-serif">
            {f}
          </text>
        </g>
      ))}
    </AppShell>
  );
}

function Forge() {
  return (
    <AppShell title="Grimório · Forja de Itens">
      <Sidebar brand="Grimório" items={NAV} active={4} />
      <text x="168" y="86" fill={C.ink} fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">
        Itens mágicos com scores de balanceamento
      </text>
      <rect x="168" y="110" width="250" height="240" rx="12" fill={C.panel} stroke={C.stroke} />
      <text x="184" y="140" fill={C.ink} fontSize="12" fontFamily="system-ui,sans-serif" fontWeight="600">
        Espada Flamejante
      </text>
      <text x="184" y="162" fill={C.muted} fontSize="10" fontFamily="system-ui,sans-serif">
        Raridade: Raro
      </text>
      {["Dano", "Bônus ATQ", "Orçamento"].map((l, i) => (
        <g key={l}>
          <text x="184" y={200 + i * 40} fill={C.muted} fontSize="10" fontFamily="system-ui,sans-serif">
            {l}
          </text>
          <rect x="184" y={208 + i * 40} width="200" height="10" rx="4" fill="rgba(148,163,184,0.15)" />
          <rect x="184" y={208 + i * 40} width={[160, 120, 90][i]} height="10" rx="4" fill={C.accent} />
        </g>
      ))}
      <rect x="438" y="110" width="142" height="240" rx="12" fill={C.panel} stroke={C.accent} />
      <text x="509" y="180" textAnchor="middle" fill={C.muted} fontSize="10" fontFamily="system-ui,sans-serif">
        Score
      </text>
      <text x="509" y="230" textAnchor="middle" fill={C.soft} fontSize="36" fontFamily="system-ui,sans-serif" fontWeight="700">
        78
      </text>
      <text x="509" y="270" textAnchor="middle" fill={C.ink} fontSize="11" fontFamily="system-ui,sans-serif">
        Balanceado
      </text>
    </AppShell>
  );
}

function Step({ stepIndex }: { stepIndex: number }) {
  if (stepIndex % 3 === 0) {
    return (
      <AppShell title="Grimório · Criação guiada">
        <text x="40" y="90" fill={C.ink} fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">
          Capítulo 1: raça → classe → atributos
        </text>
        {["Raça", "Classe", "Atributos", "Antecedente", "Equipamento"].map((s, i) => (
          <g key={s}>
            <rect x={40 + i * 112} y="150" width="100" height="160" rx="12" fill={C.panel} stroke={i === 1 ? C.accent : C.stroke} strokeWidth={i === 1 ? 2 : 1} />
            <text x={90 + i * 112} y="180" textAnchor="middle" fill={C.soft} fontSize="12" fontFamily="system-ui,sans-serif" fontWeight="700">
              {String(i + 1).padStart(2, "0")}
            </text>
            <text x={90 + i * 112} y="240" textAnchor="middle" fill={C.ink} fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="600">
              {s}
            </text>
          </g>
        ))}
      </AppShell>
    );
  }
  if (stepIndex % 3 === 1) return <SheetLive />;
  return <Forge />;
}

function Solution() {
  const nodes = ["Ficha", "Magias", "Formas", "Itens", "Forja", "Regras"];
  return (
    <AppShell title="Grimório · Solução">
      <circle cx="320" cy="210" r="48" fill={C.panel} stroke={C.accent} strokeWidth="2.5" />
      <text x="320" y="216" textAnchor="middle" fill={C.soft} fontSize="12" fontFamily="system-ui,sans-serif" fontWeight="700">
        Grimório
      </text>
      {nodes.map((label, i) => {
        const a = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
        const x = 320 + Math.cos(a) * 140;
        const y = 210 + Math.sin(a) * 110;
        return (
          <g key={label}>
            <line x1="320" y1="210" x2={x} y2={y} stroke={C.accent} strokeWidth="1.5" opacity="0.5" />
            <rect x={x - 38} y={y - 18} width="76" height="36" rx="10" fill={C.panel} stroke={C.accent} />
            <text x={x} y={y + 5} textAnchor="middle" fill={C.ink} fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="600">
              {label}
            </text>
          </g>
        );
      })}
      <text x="40" y="60" fill={C.muted} fontSize="10" fontFamily="system-ui,sans-serif">
        Compatível com DnD 5e · conteúdo SRD · feito para a mesa BR
      </text>
    </AppShell>
  );
}

function Result({ barId }: { barId: string }) {
  return (
    <AppShell title="Grimório · Resultado">
      <text x="40" y="86" fill={C.ink} fontSize="14" fontFamily="system-ui,sans-serif" fontWeight="700">
        Fichas rápidas, conteúdo PT, forja balanceada
      </text>
      {[
        ["Ficha viva", "Cálculos auto", 0.9],
        ["Magias PT", "Traduzidas", 0.85],
        ["Formas", "Selvagens PT", 0.8],
        ["Forja", "Score balance", 0.75],
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

export const grimorioPack: ScenePack = {
  captions: {
    hub: { pt: "Ficha viva com cálculos automáticos", en: "Living sheet with auto calculations" },
    flow: { pt: "Magias e formas selvagens em português", en: "Spells and wild shapes in Portuguese" },
    trust: { pt: "Forja de itens com score de balanceamento", en: "Item forge with balance scores" },
  },
  render(id: ExportSceneId, ctx: SceneRenderCtx) {
    switch (id) {
      case "cover":
        return <Cover title={ctx.title} />;
      case "challenge":
        return <Challenge />;
      case "step":
        return <Step stepIndex={ctx.stepIndex} />;
      case "product-hub":
        return <SheetLive />;
      case "product-flow":
        return <SpellsWild />;
      case "product-trust":
        return <Forge />;
      case "solution":
        return <Solution />;
      case "result":
        return <Result barId={ctx.ids.bar} />;
      case "cta":
        return <SceneCta ids={ctx.ids} />;
      default:
        return <Cover title={ctx.title} />;
    }
  },
};
