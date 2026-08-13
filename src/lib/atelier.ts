import type { AtelierPiece } from "@/types";

export const atelierList: AtelierPiece[] = [
  {
    id: "sneakers-reflexao-3-pontos",
    slug: "sneakers-reflexao-3-pontos",
    title: "Estudo de reflexão — Sneakers",
    kicker: "Luz · Reflexão · Produto",
    summary:
      "Prática de reflexão de luz e apresentação de produto com técnica de 3 pontos, enquanto aprimoro o processo de desenvolvimento de cena.",
    description: [
      "Este estudo focou em praticar a reflexão de luz sobre uma superfície escura e a construção de uma apresentação de produto com técnica de iluminação em 3 pontos.",
      "Além do resultado visual, o objetivo foi melhorar o processo de desenvolvimento de cena — do setup de luz e materiais à composição final com leitura clara do produto.",
      "O render busca uma linguagem cinematográfica: contraste controlado, destaques nas arestas e um espelho que reforça profundidade sem roubar atenção do tênis.",
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
