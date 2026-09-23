import { IndexLink } from "@/components/index-link";
import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import Mgc26Logo from "@/assets/mgc26.jpg";
import Johanna from "@/assets/johanna.jpg";
import Oceania from "@/assets/oceania.jpg";

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

        <hr className="col-span-5" />

        <div className="italic text-center col-span-5 my-4">Programmet fylls på löpande...</div>
    
        <div className="col-span-5 md:grid grid-cols-6 gap-8">
          <h2 className="col-span-6 text-2xl font-bold underline text-center uppercase my-8">Lördag</h2>
          <div className="col-span-3">
            <div className="relative">
              <Image
                src={Johanna.src}
                width={600}
                height={600}
                alt="Johanna Koljonen"
                className="aspect-square flex-grow-0 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 border-l-2 border-[#CC1312] bg-background/80 p-4">
                <h5 className="text-md italic">
                  Lördag 10 oktober, 12:00
                </h5>
                <h3 className="text-xl font-bold uppercase">
                  Spelkonvent som motstånd och demokratisk infrastruktur
                </h3>
                <h4 className="text-lg">Johanna Koljonen</h4>
              </div>
            </div>

            <div className="border-l-2 border-[#CC1312] pl-4">
              <div className="prose text-foreground">
                <p className="font-bold">
                  Johanna Koljonen är doktorand i spelforskning på Tampere
                  University inom EU Horizon-projektet Larpocracy.
                </p>
                <p>
                  I denna halvtidsrapportering av gruppens opublicerade resultat
                  reder hon ut rollspelens totalt felaktiga historia, diskuterar
                  nordisk spelkultur som uttryck för nordiska demokratiformer
                  och samhällsstrukturer, och drar en lans för spelkonventens
                  och konventsforskningens politiska betydelse.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="relative">
              <Image
                src={Oceania.src}
                width={600}
                height={600}
                alt="Oceania 2084"
                className="aspect-square flex-grow-0 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 border-l-2 border-[#CC1312] bg-background/80 p-4">
                <h5 className="text-md italic">
                  Lördag 10 oktober, föredrag 13:00 & spel ca. 14:00
                </h5>
                <h3 className="text-xl font-bold uppercase">
                  Designing Opression: Politics and mechanics in Oceania 2084
                </h3>
                <h4 className="text-lg">Johan Eriksson</h4>
              </div>
            </div>
            <div className="border-l-2 border-[#CC1312] pl-4">
              <div className="prose text-foreground">
                <p className="font-bold">
                  Johan Eriksson, the designer of Oceania 2084 will give a talk
                  titled Designing Oppression: Politics and Mechanics in Oceania
                  2084. After the talk, you're invited to try the game.
                </p>
                <p>
                  This talk explores how Oceania 2084 uses its mechanics to
                  define and challenge authoritarianism through procedural
                  rhetoric. Released in late 2024 after six years of
                  development, the game quickly won the Italian RPG Magnifico
                  award and earned praise from reviewers for its bold
                  approach.{" "}
                </p>
                <p>
                  Oceania 2084 is both a creative experiment and a political
                  intervention, showing how TTRPGs can grapple with difficult
                  social and human questions. Earlier academic work, including a
                  master’s thesis, has examined how the game adapts Orwell’s
                  1984 into a playable and faithful role-playing experience.
                </p>
                <p>
                  Here, the focus shifts from adaptation to argument: how the
                  mechanics themselves express particular philosophical and
                  political stances through their design.
                </p>
                <p className="italic">
                  The talk will be in English or Swedish depending on attendee
                  preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="italic text-center col-span-5 my-4">Programmet fylls på löpande...</div>
      </article>
    </Suspense>
  );
}
