import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className = "", children, ...props }, ref) => {
    const base =
      "px-4 py-2.5 rounded-lg font-medium transition-all duration-200 focus-ring disabled:opacity-50";
    const variants = {
      primary: "bg-accent text-dark hover:bg-accent-soft",
      secondary: "bg-surface text-primary border border-border-dark hover:border-accent/40",
      ghost: "bg-transparent text-muted hover:text-primary hover:bg-surface",
    };
    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
