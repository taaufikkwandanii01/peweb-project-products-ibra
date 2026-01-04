import "animate.css";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  onClick?: () => void;
  className?: string;
}

const Button = ({ children, variant = "primary", onClick }: ButtonProps) => {
  const baseStyles =
    "px-6 py-3 font-bold uppercase transition-all duration-300 rounded-sm hover:scale-105";
  const variants = {
    primary: "bg-yellow-400 text-black hover:bg-yellow-500",
    outline: "border-2 border-white text-white hover:bg-white hover:text-black",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
