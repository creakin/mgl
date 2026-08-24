import { IndexLink } from "@/components/index-link";
import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import Mgc26Logo from "@/assets/mgc26.jpg";

const metadata: Metadata = {
  title: "Materialist Game Con 2026 - Spel, politik, gemenskap",
  description:
    "MGL presenterar: Materialist Game Con 2026, 9-11 oktober i Malmö",
  openGraph: {
    images: [
      {
        url: `https://mglabs.se/${Mgc26Logo.src}`,
        width: 1200,
        height: 1200,
        alt: "Materialist Game Con 2026",
      },
    ],
  },
};

export { metadata };

export default async function Page() {
  return (
    <Suspense fallback={"Laddar..."}>
      <IndexLink />
      <article className="col-span-5 grid-cols-5 gap-8 md:grid">
        <div className="col-span-2 mb-8 text-center">
          <Image
            src={Mgc26Logo.src}
            width={600}
            height={300}
            alt="Materialist Game Labs logo"
          />
          <h2 className="text-4xl font-bold">9 - 11 oktober</h2>
          <h3 className="font-bold">
            Kvarnby Folkhögskola - Scheelegatan 7, Malmö{" "}
          </h3>
        </div>

        <div className="col-span-3">
          <p className="text-lg text-muted-foreground">MGL presenterar:</p>
          <h1 className="mb-4 text-2xl font-bold md:text-4xl">
            Materialist Game Con 2026
          </h1>
          <div className="text-xl md:text-2xl">
            <p className="mb-4">
              Detta är ett konvent för människor som vill utforska spel ur ett
              socialistiskt DIY-perspektiv. Vi söker spelkonstruktörer,
              spelledare, figurspelare, brädspelsnördar, rollspelare,
              aktivister, tänkare, konstnärer, hackers, gruntar och nyfikna
              kamrater.
            </p>

            <p className="mb-4">
              Det kan fortfarande finnas plats i programmet! Hör av dig om du
              vill hjälpa till eller arrangera något:
            </p>

            <p className="mb-4">
              <a
                href="mailto:materialistgamelabs@protonmail.com"
                target="_blank"
                className="underline"
              >
                materialistgamelabs@proton.me
              </a>
            </p>
          </div>
        </div>

        <hr className="col-span-5"/>

        <div className="col-span-5 col-start-2 italic">
          Mer info och programpunkter kommer snart...
          
        </div>
      </article>
    </Suspense>
  );
}
