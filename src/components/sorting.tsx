"use client";

import { cn } from "@/lib/utils";
import { ArrowDownAZ, ArrowDownZA, CalendarArrowDown, CalendarArrowUp, Dices } from "lucide-react";
import { useQueryState } from "nuqs";

export const Sorting = () => {
  const [sorting, setSorting] = useQueryState("sorting");

  return (
    <div className="flex gap-2">
      <span>Sortera: </span>
      <button
        onClick={() => setSorting("alpha-asc")}
        aria-label="Alfabetisk stigande"
        className={cn("transition-colors", {
          "text-muted-foreground": sorting !== "alpha-asc",
        })}
      >
        <ArrowDownAZ className="h-5 w-5" />
      </button>

      <button
        onClick={() => setSorting("alpha-desc")}
        aria-label="Alfabetisk fallande"
        className={cn("transition-colors", {
          "text-muted-foreground": sorting !== "alpha-desc",
        })}
      >
        <ArrowDownZA className="h-5 w-5" />
      </button>

      <button
        onClick={() => setSorting("date-desc")}
        aria-label="Datum fallande"
        className={cn("transition-colors", {
          "text-muted-foreground": sorting !== "date-desc",
        })}
      >
        <CalendarArrowDown className="h-5 w-5" />
      </button>

      <button
        onClick={() => setSorting("date-asc")}
        aria-label="Datum stigande"
        className={cn("transition-colors", {
          "text-muted-foreground": sorting !== "date-asc",
        })}
      >
        <CalendarArrowUp className="h-5 w-5" />
      </button>

      <button
        onClick={() => setSorting("shuffle")}
        aria-label="Blanda"
        className={cn("transition-colors", {
          "text-muted-foreground": sorting !== "shuffle",
        })}
      >
        <Dices className="h-5 w-5" />
      </button>
    </div>
  );
};
