import type { AtelierPiece } from "@/types";

export const atelierList: AtelierPiece[] = [
  {
    id: "sneakers-reflexao-3-pontos",
    slug: "sneakers-reflexao-3-pontos",
    title: "Estudo de reflexão — Sneakers",
    kicker: "Luz · Reflexão · Produto",
    summary:
      "Prática de reflexão de luz e apresentação de produto com técnica de 3 pontos, enquanto aprimoro o processo de desenvolvimento de cena — da composição ao clima artístico do render.",
    description: [
      "Este estudo nasceu como prática de apresentação de produto: um par de sneakers escuros sobre superfície negra, com técnica de iluminação em 3 pontos e foco deliberado na reflexão de luz.",
      "No processo de criação, a cena foi montada no Blender a partir do setup de câmera e luzes (key, fill e rim), ajustando materiais e rugosidade até o couro e os detalhes do calçado lerem com clareza sem perder o contraste do fundo.",
      "A composição coloca o produto no eixo principal, com espaço negativo generoso ao redor. O espelho/reflexo na base alonga a silhueta e reforça profundidade, sem competir com o volume do tênis — o olho entra pelo destaque das arestas e desce até o espelho.",
      "O tema visual é deliberadamente sóbrio: produto escuro, superfície quase absorta, poucos pontos de luz. A leitura de material (brilho controlado, microdetalhes, costuras) depende desse contraste baixo e da precisão dos highlights.",
      "Artísticamente, o render busca uma linguagem cinematográfica — clima de still de produto premium, contraste controlado e silhueta limpa. Menos “catálogo iluminado”, mais atmosfera: a escuridão envolve, a reflexão ancora, e o tênis permanece o único protagonista.",
      "Mais do que um frame final, o exercício serviu para consolidar um fluxo de cena: intenção → luz → material → composição → revisão do clima. Cada iteração aproximou o resultado de uma imagem que comunica processo e sensibilidade, não só técnica.",
    ],
    tags: ["Reflexão", "3 pontos", "Produto", "Cena"],
    tools: ["Blender"],
    image: {
      src: "/atelie/Shoe_Render_Water_JPG.jpg",
      alt: "Render 3D de um par de sneakers escuros com reflexão em superfície negra",
    },
    immersiveTheme: {
      background: "#000000",
      wash: "#0a0c10",
    },
  },
];
