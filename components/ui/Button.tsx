import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "text";
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  href,
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles = "font-medium transition-colors capitalize";
  const variants = {
    primary: "px-6 py-2 bg-[#F15A24] text-white hover:bg-[#d14414] disabled:opacity-50 text-sm",
    secondary: "px-6 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:opacity-50 text-sm",
    text: "p-0 flex items-center gap-2 text-[#F15A24] hover:text-[#d14414] text-sm",
  };

  const buttonStyles = `${baseStyles} ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {variant === "text" && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transform transition-transform group-hover:translate-x-1"
        >
          <path
            d="M13.5 19L20.5 12L13.5 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`group ${buttonStyles}`}>
        {content}
      </Link>
    );
  }

  return (
    <button 
      type={type}
      className={`group ${buttonStyles}`} 
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
