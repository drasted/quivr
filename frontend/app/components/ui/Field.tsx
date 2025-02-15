import { cn } from "@/lib/utils";
import {
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
  RefObject,
  forwardRef,
} from "react";

interface FieldProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  name: string;
}

const Field = forwardRef(
  ({ label, className, name, id, ...props }: FieldProps, forwardedRef) => {
    return (
      <fieldset className={cn("flex flex-col w-full", className)} name={name}>
        {label && (
          <label htmlFor={name} className="text-sm">
            {label}
          </label>
        )}
        <input
          ref={forwardedRef as RefObject<HTMLInputElement>}
          className="w-full bg-gray-50 dark:bg-gray-900 px-4 py-2 border rounded-md border-black/10 dark:border-white/25"
          name={name}
          id={name}
          {...props}
        />
      </fieldset>
    );
  }
);
Field.displayName = "Field";

export default Field;
