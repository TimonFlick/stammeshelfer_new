import * as React from "react"

type variant = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export function Text({ children, variant = "p" }: { children: React.ReactNode, variant?: variant }) {

  switch (variant) {
    case "p":
      return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
    case "h1":
      return <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">{children}</h1>;
    case "h2":
      return <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">{children}</h2>;
    case "h3":
      return <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{children}</h3>;
    }
  }