import { getAllMaterials } from "@/lib/md";
import type { Metadata } from "next";
import Image from "next/image";

import { ViewToggle } from "@/components/view-toggle";
import { MaterialsList } from "@/components/materials-list";
import TagList from "@/components/tag-list";

import Logo from "@/assets/logo.jpg"
import { Sorting } from "@/components/sorting";

export const dynamic = "force-static";
export const revalidate = false;

const metadata: Metadata = {
  title: "mglabs.se - Materialist Game Labs",
  description:
    "Här hittar du material skapat av Materialist Game Labs.",
  openGraph: {
    images: [
      {
        url: `https://mglabs.se/${Logo.src}`,
        width: 1200,
        height: 630,
        alt: "Materialist Game Labs",
      },
    ],
  },
};

export { metadata };

export default async function Home() {
  const materials = await getAllMaterials();
  const tags = [... new Set(materials.flatMap(s => s.tags))];

  return (
    <>
      <div className="col-start-2 col-end-5">
        <Image src={Logo.src} width={300} height={300} alt="Materialist Game Labs logo" />
        <h1 className="mb-1 font-medium">
          Materialist Game Labs arkiv
        </h1>
        <p className="mb-12 text-muted-foreground">
          Välkommen till mglabs.se! Här finner du material skapat av medlemar i skaparkollektivet
          Materialist Game Labs.
        </p>

        <div className="border-b border-muted-foreground/50 pb-4 mb-4">
          <h2 className="text-sm font-medium mb-2">Filtrera på taggar</h2>
          <TagList tags={tags} />
        </div>

        <div className="mb-4 flex gap-4 justify-end text-sm font-medium">
          <ViewToggle />
          <Sorting />
        </div>

        <MaterialsList materials={materials} />
      </div>
      <div />
    </>
  );
}
