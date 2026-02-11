"use client";

import Link from "next/link";
import { Material } from "@/lib/md";
import { cn } from "@/lib/utils";
import { useQueryState } from "nuqs";
import TagList from "./tag-list";
import Image from "next/image";

interface MaterialsListProps {
  materials: Material[];
  layout?: "grid" | "rows";
}

function MaterialsListContent({
  materials,
  layout,
}: {
  materials: Material[];
  layout: "grid" | "rows";
}) {
  var [queryTags, _] = useQueryState("tags");
  const [sortingQuery, __] = useQueryState("sorting");



  if (sortingQuery === "date-asc") {
    materials.sort((b, a) => b.date.localeCompare(a.date));
  } else if (sortingQuery === "alpha-asc") {
    materials.sort((a, b) => {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    });
  } else if (sortingQuery === "alpha-desc") {
    materials.sort((b, a) => {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    });
  } else if (sortingQuery === "shuffle") {
    materials = materials
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
  } else {
    materials.sort((a, b) => b.date.localeCompare(a.date));
  }

  return (
    <ul
      className={cn("gap-4", {
        "grid grid-cols-2": layout === "grid",
        "divide-y": layout === "rows",
      })}
    >
      {materials.filter(s => queryTags === null || s.tags?.some(tag => queryTags?.includes(tag))).map((material) => (
        <li
          key={material.id}
          className={cn({ "py-4 first:pt-0": layout === "rows" })}
        >
          <Link href={`/${material.id}`} className="group block mb-2">
            <span className="flex items-start gap-4">
              {material.image &&
                <Image src={material.image} width={100} height={100} alt="poop" className="object-contain" />
              }

              <span>

                <span className="underline decoration-muted-foreground/50 underline-offset-4 transition-colors group-hover:decoration-foreground block">
                  {material.title}
                </span>

                <span className="text-xs text-muted-foreground block mb-2">
                  {material.date}
                </span>

                {material.summary &&
                  <span className="text-sm text-muted-foreground block py-2">
                    {material.summary}
                  </span>
                }


                <span className="text-sm text-muted-foreground block">
                  Skapare: {material.author}
                </span>
              </span>
            </span>
          </Link>

          <span className="text-sm text-muted-foreground flex flex-wrap gap-2">
            <TagList tags={material.tags} asLinks={true} />
          </span>
        </li>
      ))}
    </ul>
  );
}

function MaterialsListWithQuery({ materials }: { materials: Material[] }) {
  const [queryLayout] = useQueryState("layout", {
    defaultValue: "rows" as const,
    parse: (value): "grid" | "rows" => (value === "grid" ? "grid" : "rows"),
  });

  return <MaterialsListContent materials={materials} layout={queryLayout as "grid" | "rows"} />;
}

export function MaterialsList({ materials, layout: layoutProp }: MaterialsListProps) {
  if (layoutProp) {
    return <MaterialsListContent materials={materials} layout={layoutProp} />;
  }

  return <MaterialsListWithQuery materials={materials} />;
}
