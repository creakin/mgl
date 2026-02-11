import { IndexLink } from "@/components/index-link";
import { getAllSongs, getSongData } from "@/lib/md";
import Link from "next/link";
import type { Metadata } from "next";
import { SongsList } from "@/components/songs-list";
import TagList from "@/components/tag-list";
import Markdown from 'react-markdown'
import remarkGfm from "remark-gfm";
import { Button } from "@/components/ui/button";
import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";

export async function generateStaticParams() {
  const songs = await getAllSongs();
  return songs.map((song) => ({
    id: song.id,
  }));
}

function truncateText(text: string, length = 150) {
  if (text.length <= length) return text;
  return text.slice(0, length).replace(/\s+\S*$/, "") + "…";
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const song = await getSongData((await params).id);
  const canonicalUrl = `https://www.mglabs.se/${song.id}`;
  const cleanDescription = song.content
    ? truncateText(song.content.replace(/\n/g, " "))
    : `Text till barnvisa "${song.title}"`;

  return {
    title: `${song.title} - Text till barnvisa | mglabs.se`,
    description: cleanDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "music.song",
      title: `${song.title} – Text till barnvisa | mglabs.se`,
      description: cleanDescription,
      url: canonicalUrl,
      images: [
        {
          url: `https://www.mglabs.se/api/og?title=${encodeURIComponent(
            song.title,
          )}&description=${encodeURIComponent(cleanDescription)}`,
          width: 1200,
          height: 630,
          alt: cleanDescription.slice(0, 100),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${song.title} – Text till barnvisa | mglabs.se`,
      description: cleanDescription,
      images: [
        `https://www.mglabs.se/api/og?title=${encodeURIComponent(song.title)}&description=${encodeURIComponent(cleanDescription)}`,
      ],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const song = await getSongData((await params).id);
  const allSongs = await getAllSongs();
  const relatedCandidates = allSongs.filter((s) => s.id !== song.id);
  const sameAuthor = relatedCandidates.filter((s) => s.author === song.author);
  const related = (sameAuthor.length ? sameAuthor : relatedCandidates)
    .sort((a, b) => a.title.localeCompare(b.title))
    .slice(0, 4);
  const lyricsText = song.content
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const canonicalUrl = `https://www.mglabs.se/${song.id}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MusicComposition",
    name: song.title,
    composer: {
      "@type": "Person",
      name: song.author,
    },
    inLanguage: "sv",
    url: canonicalUrl,
    lyrics: {
      "@type": "CreativeWork",
      text: lyricsText,
    },
  } as const;

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Barnvisor",
        item: "https://www.mglabs.se/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: song.title,
        item: canonicalUrl,
      },
    ],
  } as const;

  return (
    <>
      <IndexLink />

      <article className="col-span-3 [&_p:not(:last-child)]:mb-6 [&_p]:text-pretty">
        { song.image && 
          <Image src={song.image} width={300} height={300} className="object-contain mb-4" alt={`Bild till ${song.title}`}/ >
        }
        <h1 className="mb-1 font-medium">{song.title}</h1>
        <p className="!mb-1 text-sm text-muted-foreground">{song.author}</p>
        <p className="!mb-12 text-sm text-muted-foreground">{song.date}</p>

        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
        />
        <div
          className="text-muted-foreground mb-8"
          dangerouslySetInnerHTML={{ __html: 
            <Markdown remarkPlugins={[remarkGfm]}>{ song.content }</Markdown>
          }}
        >
        </div>

        <Link href={ song.link } target="_blank">
          <Button size="lg" className="mb-8" variant="outline" >
            Gå till material
            <SquareArrowOutUpRight />

          </Button>
        </Link>

        <TagList tags={song.tags} asLinks={true} />
        {related.length > 0 ? (
          <section className="mt-10 border-t pt-6">
            <h2 className="mb-12 font-medium">Relaterade visor</h2>
            <SongsList songs={related} layout="rows" />
          </section>
        ) : null}
      </article>
      <div />
    </>
  );
}
