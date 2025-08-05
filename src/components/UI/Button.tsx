import clsx from "clsx";
import { ButtonProps } from "@/types/component";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  onClick,
  className,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-2xl focus:outline-none transition-colors duration-200";

  const sizeStyles = {
    sm: "text-sm px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-5 py-3",
  };

  const variantStyles = {
    primary: "bg-[#4B8B9F] text-black",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800",
  };

  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        disabledStyles,
        fullWidth && "w-full",
        className
      )}
    >
      {children}
    </button>
  );
}
