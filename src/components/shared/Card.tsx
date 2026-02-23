interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
}

export function Card({
  children,
  className = "",
  as: Component = "div",
}: CardProps) {
  return (
    <Component
      className={`rounded-xl border border-border-dark/60 bg-surface shadow-card overflow-hidden transition-all duration-200 hover:border-accent/40 hover:shadow-glow-sm ${className}`}
    >
      {children}
    </Component>
  );
}
