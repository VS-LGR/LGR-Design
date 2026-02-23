import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className = "", children, ...props }, ref) => {
    const base =
      "px-4 py-2 rounded-md font-medium transition-all duration-200 focus-ring disabled:opacity-50";
    const variants = {
      primary: "bg-ash-brown text-pale-sky hover:bg-ash-brown/90",
      secondary: "bg-cool-steel text-ash-brown hover:bg-cool-steel-2",
      ghost: "bg-transparent text-ash-brown hover:bg-dim-grey/10",
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
