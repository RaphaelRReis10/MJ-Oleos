import Image from "next/image";
import { site } from "@/lib/site";

/**
 * Logotipo oficial da MJ (PRD §77).
 *
 * O arquivo enviado pela empresa é branco sobre fundo transparente, então
 * serve os fundos azuis do header, do menu mobile e do footer. A variante
 * `dark` é a mesma arte repintada no azul institucional, para quando o logo
 * precisar aparecer sobre fundo claro.
 *
 * As duas versões saem do mesmo PNG, já recortado e reduzido (660 × 262,
 * proporção 2,52). Controle o tamanho apenas pela altura no `className` — a
 * largura acompanha sozinha e a proporção nunca distorce.
 */
export default function Logo({
  className = "h-9 w-auto",
  tone = "light",
  priority = false,
}: {
  className?: string;
  /** light: para uso sobre fundo azul. dark: para uso sobre fundo claro. */
  tone?: "light" | "dark";
  /** Marque no logo do header: ele aparece acima da dobra e pesa no LCP. */
  priority?: boolean;
}) {
  return (
    <Image
      src={tone === "light" ? "/images/logo-mj.png" : "/images/logo-mj-dark.png"}
      alt={site.name}
      width={660}
      height={262}
      priority={priority}
      sizes="220px"
      className={className}
    />
  );
}
