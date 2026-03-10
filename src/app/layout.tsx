import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { AnimatedBackground } from "@/components/shared/AnimatedBackground";
import { IntroOverlay } from "@/components/shared/IntroOverlay";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Lucas Gabriel Rodrigues | UX & Web Designer para Produtos Digitais",
  description:
    "Portfólio de Lucas Gabriel Rodrigues — UX & Web Designer focado em produtos digitais, landing pages e sites institucionais, unindo estratégia de negócio, experiência do usuário e implementação web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={plusJakarta.variable}>
      <body className="min-h-screen flex flex-col font-sans relative">
        <AnimatedBackground />
        <IntroOverlay />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-dark focus:rounded-md"
        >
          Pular para o conteúdo principal
        </a>
        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
