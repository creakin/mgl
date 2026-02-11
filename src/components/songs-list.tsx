"use client";

import Link from "next/link";
import { Song } from "@/lib/md";
import { cn } from "@/lib/utils";
import { useQueryState } from "nuqs";
import TagList from "./tag-list";
import Image from "next/image";

interface SongsListProps {
  songs: Song[];
  layout?: "grid" | "rows";
}

function SongsListContent({
  songs,
  layout,
}: {
  songs: Song[];
  layout: "grid" | "rows";
}) {
  var [queryTags, _] = useQueryState("tags");
  const [sortingQuery, __] = useQueryState("sorting");


  
  if (sortingQuery === "date-asc") {
    songs.sort((b, a) => b.date.localeCompare(a.date));
  } else if (sortingQuery === "alpha-asc") {
    songs.sort((a, b) => {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    });
  } else if (sortingQuery === "alpha-desc") {
    songs.sort((b, a) => {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    });
  } else if (sortingQuery === "shuffle") {
    songs = songs
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

  } else {
    songs.sort((a, b) => b.date.localeCompare(a.date));
  }

  return (
    <ul
      className={cn("gap-4", {
        "grid grid-cols-2": layout === "grid",
        "divide-y": layout === "rows",
      })}
    >
      {songs.filter(s => queryTags === null || s.tags?.some(tag => queryTags?.includes(tag))).map((song) => (
        <li
          key={song.id}
          className={cn({ "py-4 first:pt-0": layout === "rows" })}
        >
          <Link href={`/${song.id}`} className="group block mb-2">
            <span className="flex items-start gap-4">
              { song.image &&
                <Image src={song.image} width={100} height={100} alt="poop" className="object-contain" />
              }

              <span>

              <span className="underline decoration-muted-foreground/50 underline-offset-4 transition-colors group-hover:decoration-foreground block">
                {song.title}
              </span>

              <span className="text-xs text-muted-foreground block mb-2">
                {song.date}
              </span>

              { song.summary &&
                <span className="text-sm text-muted-foreground block py-2">
                  {song.summary}
                </span>
              }


              <span className="text-sm text-muted-foreground block">
                Skapare: {song.author}
              </span>
              </span>
            </span>
          </Link>

          <span className="text-sm text-muted-foreground flex flex-wrap gap-2">
            <TagList tags={song.tags} asLinks={true} />
          </span>
        </li>
      ))}
    </ul>
  );
}

function SongsListWithQuery({ songs }: { songs: Song[] }) {
  const [queryLayout] = useQueryState("layout", {
    defaultValue: "rows" as const,
    parse: (value): "grid" | "rows" => (value === "grid" ? "grid" : "rows"),
  });

  return <SongsListContent songs={songs} layout={queryLayout as "grid" | "rows"} />;
}

export function SongsList({ songs, layout: layoutProp }: SongsListProps) {
  if (layoutProp) {
    return <SongsListContent songs={songs} layout={layoutProp} />;
  }

  return <SongsListWithQuery songs={songs} />;
}
