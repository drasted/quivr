import {
  ButtonHTMLAttributes,
  FC,
  LegacyRef,
  MutableRefObject,
  forwardRef,
} from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { FaSpinner } from "react-icons/fa";

const ButtonVariants = cva(
  "px-8 py-3 text-sm disabled:opacity-80 text-center font-medium rounded-md focus:ring ring-primary/10 outline-none flex items-center justify-center gap-2 transition-opacity",
  {
    variants: {
      variant: {
        primary:
          "bg-black border border-black dark:border-white disabled:bg-gray-500 disabled:hover:bg-gray-500 text-white dark:bg-white dark:text-black hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors",
        tertiary: "text-black dark:text-white bg-transparent py-2 px-4",
        secondary:
          "border border-black dark:border-white bg-white dark:bg-black text-black dark:text-white focus:bg-black dark:focus:bg-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black focus:text-white dark:focus:text-black transition-colors py-2 px-4 shadow-none",
        danger:
          "border border-red-500 hover:bg-red-500 hover:text-white transition-colors",
      },
      brightness: {
        dim: "",
        default: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      brightness: "default",
    },
  }
);
export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = forwardRef(
  (
    { className, children, variant, brightness, isLoading, ...props },
    forwardedRef
  ) => {
    return (
      <button
        className={cn(ButtonVariants({ variant, brightness, className }))}
        disabled={isLoading}
        {...props}
        ref={forwardedRef as LegacyRef<HTMLButtonElement>}
      >
        {children} {isLoading && <FaSpinner className="animate-spin" />}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
