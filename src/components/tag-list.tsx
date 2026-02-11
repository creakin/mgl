'use client'

import { useQueryState } from "nuqs"
import { Badge } from "./ui/badge"
import Link from "next/link";

export default function TagList({
  tags,
  asLinks = false,
}: {
  tags: string[],
  asLinks?: boolean
}) {
  const [queryTags, setQueryTags] = useQueryState("tags");

  const tagOnClick = (value: string) => {
    if (queryTags == null) {
      setQueryTags(value);
      return;
    }

    const activeTags = queryTags.split(',');
    const existsIndex = activeTags.indexOf(value);

    if (existsIndex >= 0) {
      activeTags.splice(existsIndex, 1);
    } else {
      activeTags.push(value);
    }

    setQueryTags(activeTags.length > 0 ? activeTags.join(',') : null);
  }

  return tags && (
    <ul className="flex flex-wrap gap-2 leading-[0]">
      {tags.map(t => (
        <li key={t} className="cursor-pointer">
          {asLinks ?
            (
              <Link href={`/?tags=${t}`}>
                <Badge
                  variant="outline">
                  {t}
                </Badge>
              </Link>

            ) :
            (
              <Badge
                variant={queryTags?.split(',').includes(t) ? "default" : "outline"}
                onClick={() => tagOnClick(t)}>
                {t}
              </Badge>
            )
          }
        </li>
      ))}
      { !asLinks &&
        <li className="cursor-pointer">
          <Badge
            variant="outline"
            onClick={() => setQueryTags(null)}>
            Rensa taggar
          </Badge>
        </li>
      }

    </ul>
  )
}
