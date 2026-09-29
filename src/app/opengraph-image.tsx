import { ImageResponse } from "next/og";
import { initials, profile } from "@/data/portfolio";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${profile.name} — ${profile.role}`;
export const dynamic = "force-static";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0f141c",
          color: "#e3e8ef",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 96,
            height: 96,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 24,
            background: "#8fb4ee",
            color: "#0f141c",
            fontSize: 40,
            fontWeight: 700,
          }}
        >
          {initials}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 28, color: "#e0b060", letterSpacing: 4, textTransform: "uppercase" }}>
            {profile.role}
          </div>
          <div style={{ fontSize: 76, fontWeight: 700, marginTop: 12 }}>{profile.name}</div>
          <div style={{ fontSize: 32, color: "#9aa6b8", marginTop: 20, maxWidth: 900 }}>
            {profile.tagline}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
