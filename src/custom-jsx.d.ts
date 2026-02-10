import type React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      select: React.DetailedHTMLProps<
        React.SelectHTMLAttributes<HTMLSelectElement>,
        HTMLSelectElement
      > & { myCustomProp?: string };
    }
  }
}

export {};