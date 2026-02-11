import { getAllMaterials } from "@/lib/md";
import type { MetadataRoute } from "next";

const siteUrl = "https://www.mglabs.se";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const materials = await getAllMaterials();

  return [
    {
      url: siteUrl,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...materials.map((material) => ({
      url: `${siteUrl}/${material.id}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
