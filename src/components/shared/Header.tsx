import { LanguageToggle } from "@/components/shared/LanguageToggle";
import { HeaderTagline } from "@/components/shared/HeaderTagline";

export function Header() {
  return (
    <header className="border-b border-border-dark/80 bg-dark/95 backdrop-blur supports-[backdrop-filter]:bg-dark/80">
      <div className="container mx-auto px-4 py-4 md:py-5">
        <div className="flex flex-wrap items-baseline justify-between gap-3 gap-y-4">
          <div className="flex flex-wrap items-baseline gap-3 min-w-0">
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-primary">
              Lucas Gabriel Rodrigues
            </h1>
            <span className="hidden sm:inline text-muted">/</span>
            <HeaderTagline />
          </div>
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}

