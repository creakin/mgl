import { getAllSongs } from "@/lib/md";
import type { Metadata } from "next";
import Image from "next/image";

import { ViewToggle } from "@/components/view-toggle";
import { SongsList } from "@/components/songs-list";
import TagList from "@/components/tag-list";

import Logo from "@/assets/logo.jpg"
import { Sorting } from "@/components/sorting";
import { useQueryState } from "nuqs";

export const dynamic = "force-static";
export const revalidate = false;

const metadata: Metadata = {
  title: "mglabs.se - texter till svenska barnvisor och vaggvisor",
  description:
    "Här hittar du texter till klassiska och nya svenska barnvisor och vaggvisor. Perfekt för föräldrar, pedagoger och barn i alla åldrar.",
  openGraph: {
    images: [
      {
        url: "https://www.mglabs.se/api/og?title=Barnvisor&description=Sångtexter till svenska barnvisor och vaggvisor",
        width: 1200,
        height: 630,
        alt: "Sångtexter till svenska barnvisor och vaggvisor",
      },
    ],
  },
};

export { metadata };

export default async function Home() {
  const songs = await getAllSongs();

  // songs.sort((a, b) => {
  //   return new Date(a.date) - new Date(b.date);
  // });

  // songs.sort((a, b) => {
  //   if (a.title < b.title) return -1;
  //   if (a.title > b.title) return 1;
  //   return 0;
  // });
  const tags = [... new Set(songs.flatMap(s => s.tags))];

  return (
    <>
      <div className="col-start-2 col-end-5">
        <Image src={Logo.src} width={300} height={300} alt="Materialist Game Labs logo" />
        <h1 className="mb-1 font-medium">
          Materialist Game Labs arkiv
        </h1>
        <p className="mb-12 text-muted-foreground">
          Välkommen till mglabs.se! Här finns texter till alla dina
          favoritbarnvisor och vaggvisor, från klassiker till moderna sånger.
        </p>

        <div className="border-b border-muted-foreground/50 pb-4 mb-4">
          <h2 className="text-sm font-medium mb-2">Filtrera på taggar</h2>
          <TagList tags={tags} />
        </div>

        <div className="mb-4 flex gap-4 justify-end text-sm font-medium">
          <ViewToggle />
          <Sorting />
        </div>

        <SongsList songs={songs} />
      </div>
      <div />
    </>
  );
}
