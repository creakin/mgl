import { ImageResponse } from "next/og";

export const runtime = "edge";

const ALLOWED_IMAGE_HOSTS = ["www.mglabs.se", "mglabs.se"];

const stripHtml = (html: string | null): string | null => {
  if (!html) return null;
  return html
    .replace(/(<\/p>|<br\/>|<br>)/g, " ")
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
};

function getSafeImageUrl(raw: string | null): string | null {
  if (!raw) return null;
  try {
    const url = new URL(raw);
    if (url.protocol !== "https:") return null;
    if (!ALLOWED_IMAGE_HOSTS.includes(url.hostname)) return null;
    return url.toString();
  } catch {
    return null;
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // Material image: fill the square (cover)
    const image = getSafeImageUrl(searchParams.get("image"));
    if (image) {
      return new ImageResponse(
        (
          <div style={{ display: "flex", width: "100%", height: "100%" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              width={630}
              height={630}
              style={{ objectFit: "cover" }}
              alt=""
            />
          </div>
        ),
        { width: 630, height: 630 },
      );
    }

    // Fallback: text card
    const rawTitle = searchParams.get("title");
    const title = rawTitle
      ? rawTitle.length > 50
        ? rawTitle.slice(0, 50) + "…"
        : rawTitle
      : "Materialist Game Labs";

    const descriptionRaw = stripHtml(searchParams.get("description"));
    const description =
      descriptionRaw && descriptionRaw.length > 260
        ? descriptionRaw.slice(0, 260) + "…"
        : descriptionRaw || null;

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            background: "#090909",
            color: "#ffffff",
            height: "100%",
            width: "100%",
            padding: "100px 100px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 72 }}>{title}</div>
            {description !== null && (
              <div
                style={{
                  fontSize: 24,
                  marginTop: 36,
                  color: "#737374",
                  lineHeight: "1.75",
                }}
              >
                {description}
              </div>
            )}
          </div>
        </div>
      ),
      { width: 630, height: 630 },
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}