export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-dark/80 bg-dark/95 backdrop-blur supports-[backdrop-filter]:bg-dark/80">
      <div className="container mx-auto px-4 py-4 md:py-5">
        <div className="flex items-baseline gap-3">
          <h1 className="text-xl md:text-2xl font-bold tracking-tight text-primary">
            Lucas Gabriel Rodrigues
          </h1>
          <span className="hidden sm:inline text-muted">/</span>
          <p className="text-sm md:text-base text-accent font-medium">
            UX Design &amp; Web Design
          </p>
        </div>
      </div>
    </header>
  );
}
