import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { AnimatedBackground } from "@/components/shared/AnimatedBackground";
import { IntroOverlay } from "@/components/shared/IntroOverlay";
import { Providers } from "@/components/shared/Providers";
import { SkipLink } from "@/components/shared/SkipLink";
import { Analytics } from "@vercel/analytics/next";

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
    <html lang="pt-BR" suppressHydrationWarning className={plusJakarta.variable}>
      <body className="min-h-screen flex flex-col font-sans relative">
        <Providers>
          <AnimatedBackground />
          <IntroOverlay />
          <SkipLink />
          <Header />
          <main id="main-content" className="flex-1" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
