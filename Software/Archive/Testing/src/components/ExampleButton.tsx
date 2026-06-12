import type { ButtonHTMLAttributes } from "react";

type ExampleButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
};

export function ExampleButton({ label, ...props }: ExampleButtonProps) {
  return (
    <button type="button" {...props}>
      {label}
    </button>
  );
}