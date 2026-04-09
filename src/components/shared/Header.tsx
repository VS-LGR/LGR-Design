import { LanguageToggle } from "@/components/shared/LanguageToggle";
import { HeaderTagline } from "@/components/shared/HeaderTagline";
import { MainNav } from "@/components/shared/MainNav";

export function Header() {
  return (
    <header className="border-b border-border-dark/80 bg-dark/95 backdrop-blur supports-[backdrop-filter]:bg-dark/80 z-50 relative">
      <div className="container mx-auto px-4 py-4 md:py-5">
        <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:items-start md:justify-between md:gap-x-4 md:gap-y-3">
          <div className="flex flex-wrap items-baseline gap-3 min-w-0 justify-between gap-y-2 md:justify-start md:min-w-[200px]">
            <div className="flex flex-wrap items-baseline gap-3 min-w-0">
              <p className="text-xl md:text-2xl font-bold tracking-tight text-primary">
                Lucas Gabriel Rodrigues
              </p>
              <span className="hidden sm:inline text-muted">/</span>
              <HeaderTagline />
            </div>
            <div className="flex shrink-0 items-center gap-2 md:hidden">
              <LanguageToggle />
            </div>
          </div>
          <div className="flex w-full flex-col gap-0 md:w-auto md:flex-row md:items-center md:justify-end md:gap-6">
            <div className="hidden md:block shrink-0">
              <LanguageToggle />
            </div>
            <MainNav />
          </div>
        </div>
      </div>
    </header>
  );
}

