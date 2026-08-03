import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Ícone da aba — monograma LG na identidade cyan. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0c1222",
          borderRadius: 8,
          border: "1.5px solid rgba(34,184,207,0.55)",
        }}
      >
        <span
          style={{
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            color: "#22b8cf",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          LG
        </span>
      </div>
    ),
    { ...size }
  );
}
