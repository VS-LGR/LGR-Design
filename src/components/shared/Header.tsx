import { LanguageToggle } from "@/components/shared/LanguageToggle";
import { HeaderTagline } from "@/components/shared/HeaderTagline";
import { MainNav } from "@/components/shared/MainNav";

export function Header() {
  return (
    <header
      className="border-b border-border-dark/60 bg-dark/92 backdrop-blur-md supports-[backdrop-filter]:bg-dark/78 z-50 relative"
      data-site-chrome="header"
    >
      <div className="container mx-auto px-4 py-3 md:py-5">
        <div className="flex flex-col gap-2.5 md:gap-3 md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-x-4 md:gap-y-3">
          <div className="flex items-start justify-between gap-3 min-w-0 md:items-baseline md:min-w-[200px] md:gap-4 md:flex-1 md:justify-start">
            <div className="min-w-0 flex-1 md:flex md:flex-wrap md:items-baseline md:gap-3">
              <p className="text-base sm:text-lg md:text-2xl font-bold tracking-tight text-primary leading-snug">
                Lucas Gabriel Rodrigues
              </p>
              <p className="mt-0.5 md:hidden">
                <HeaderTagline compact />
              </p>
              <span className="hidden md:inline text-muted/70" aria-hidden>
                /
              </span>
              <span className="hidden md:inline">
                <HeaderTagline />
              </span>
            </div>
            <div className="shrink-0 pt-0.5 md:hidden">
              <LanguageToggle compact />
            </div>
          </div>

          <div className="flex w-full min-w-0 flex-col gap-0 md:w-auto md:flex-row md:items-center md:justify-end md:gap-6 md:shrink-0">
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
