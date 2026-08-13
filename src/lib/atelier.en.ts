import type { AtelierPiece } from "@/types";

export const atelierListEn: AtelierPiece[] = [
  {
    id: "sneakers-reflexao-3-pontos",
    slug: "sneakers-reflexao-3-pontos",
    title: "Reflection study — Sneakers",
    kicker: "Light · Reflection · Product",
    summary:
      "Practice in light reflection and product presentation with three-point lighting, while refining the scene development process — from composition to the artistic mood of the render.",
    description: [
      "This study began as product-presentation practice: a dark sneaker pair on a black surface, with three-point lighting and a deliberate focus on light reflection.",
      "In the creation process, the scene was built in Blender from camera and light setup (key, fill, and rim), tuning materials and roughness until leather and shoe details read clearly without losing the contrast of the background.",
      "Composition places the product on the main axis, with generous negative space around it. The mirror/reflection at the base elongates the silhouette and reinforces depth without competing with the sneaker’s volume — the eye enters through edge highlights and settles into the mirror.",
      "The visual theme is deliberately sober: dark product, near-absorptive surface, few light points. Material read (controlled sheen, micro-details, stitching) depends on that low contrast and the precision of the highlights.",
      "Artistically, the render aims for a cinematic language — the mood of a premium product still, controlled contrast, and a clean silhouette. Less “bright catalog,” more atmosphere: darkness wraps, reflection anchors, and the sneakers remain the only protagonist.",
      "More than a final frame, the exercise consolidated a scene workflow: intent → light → material → composition → mood review. Each iteration moved the result toward an image that communicates process and sensibility, not technique alone.",
    ],
    tags: ["Reflection", "3-point", "Product", "Scene"],
    tools: ["Blender"],
    image: {
      src: "/atelie/Shoe_Render_Water_JPG.jpg",
      alt: "3D render of a dark sneaker pair with reflection on a black surface",
    },
    immersiveTheme: {
      background: "#000000",
      wash: "#0a0c10",
    },
  },
];
