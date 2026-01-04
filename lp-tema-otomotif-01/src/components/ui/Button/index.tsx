import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
}

const Button = ({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "px-6 py-3 rounded-full font-semibold transition-all duration-300 active:scale-95";
  const variants = {
    primary:
      "bg-orange-600 text-white hover:bg-orange-700 shadow-lg shadow-orange-200",
    secondary: "bg-zinc-900 text-white hover:bg-black",
    outline: "border-2 border-orange-600 text-orange-600 hover:bg-orange-50",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
