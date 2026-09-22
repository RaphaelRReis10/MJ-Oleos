import type { ReactNode } from "react";

/**
 * Container padrão do site (PRD §60): 1200–1280px com respiro lateral
 * que nunca deixa o conteúdo encostar na borda no mobile.
 */
export default function Container({
  children,
  className = "",
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow";
}) {
  const max = size === "narrow" ? "max-w-[960px]" : "max-w-[1280px]";
  return (
    <div className={`mx-auto w-full ${max} px-5 sm:px-6 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}
