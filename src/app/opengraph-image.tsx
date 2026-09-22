import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

/**
 * Imagem de compartilhamento social (PRD §68), gerada no build.
 *
 * Usa a identidade do projeto em vez de uma foto de banco, porque nenhuma
 * foto real da empresa foi fornecida (§107). Ao receber o material oficial,
 * troque este arquivo por um `opengraph-image.jpg` estático.
 */
export const alt = site.seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(120deg, #0B243D 0%, #123B63 100%)",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 20,
              background: "#E35030",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 46,
              fontWeight: 700,
              color: "#FFFFFF",
            }}
          >
            MJ
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 40, fontWeight: 700, color: "#FFFFFF" }}>
              MJ ÓLEOS
            </span>
            <span
              style={{
                fontSize: 19,
                letterSpacing: 6,
                color: "rgba(255,255,255,0.6)",
              }}
            >
              LUBRIFICANTES
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{ width: 72, height: 5, background: "#E35030", marginBottom: 30 }}
          />
          <span
            style={{
              fontSize: 62,
              fontWeight: 700,
              lineHeight: 1.12,
              color: "#FFFFFF",
              maxWidth: 940,
            }}
          >
            Troca de óleo e manutenção automotiva em Belo Horizonte
          </span>
          <span
            style={{
              marginTop: 26,
              fontSize: 28,
              color: "rgba(255,255,255,0.72)",
            }}
          >
            Veículos de linha leve · Sarandi, BH · {site.phone.display}
          </span>
        </div>
      </div>
    ),
    size,
  );
}
