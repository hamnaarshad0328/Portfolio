import { ImageResponse } from "next/og";

export const shareSize = { width: 1200, height: 630 };

export function shareImage(title: string, subtitle: string) {
  const heading = title.length > 72 ? `${title.slice(0, 69)}...` : title;
  const line = subtitle.length > 180 ? `${subtitle.slice(0, 177)}...` : subtitle;
  const titleSize = heading.length > 42 ? 52 : 64;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0B1120",
          color: "#E8EDF7",
        }}
      >
        <div
          style={{
            width: 12,
            height: "100%",
            background: "#668BFF",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "68px 72px",
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 20,
              letterSpacing: 4,
              color: "#8B78EB",
            }}
          >
            HAMNA ARSHAD
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: titleSize,
                lineHeight: 1.08,
                letterSpacing: -1.5,
                maxWidth: 980,
              }}
            >
              {heading}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 28,
                fontSize: 26,
                lineHeight: 1.4,
                color: "#94A3B8",
                maxWidth: 900,
              }}
            >
              {line}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...shareSize },
  );
}
