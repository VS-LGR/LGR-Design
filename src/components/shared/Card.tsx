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
      className={`bg-white/90 rounded-lg border border-cool-steel-2/30 shadow-sm overflow-hidden transition-shadow duration-200 hover:shadow-md ${className}`}
    >
      {children}
    </Component>
  );
}
