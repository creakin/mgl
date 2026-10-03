import { IndexLink } from "@/components/index-link";
import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import Mgc26Logo from "@/assets/mgc26.jpg";
import Johanna from "@/assets/johanna.jpg";
import Oceania from "@/assets/oceania.jpg";
import Deserters from "@/assets/deserters.jpg";
import Muterad from "@/assets/muterad.jpg";
import F28 from "@/assets/f28.jpg";
import Trans from "@/assets/trans.jpg";
import Hobbyn from "@/assets/hobbyn.jpg";
import India from "@/assets/india.png";
import Kitbash from "@/assets/kitbash.jpg";
import Human from "@/assets/human.jpg";
import Battletech from "@/assets/battletech.jpg";
import Quiz from "@/assets/quiz.jpg";
import Spanska from "@/assets/spanska.jpg";
import Loppis from "@/assets/loppis.jpg";
import Forgetful from "@/assets/forgetful.jpg";
import Link from "next/link";

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
            alt="Materialist Game Con logo"
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
          <div className="prose text-xl text-foreground md:text-2xl">
            <p>
              Detta är ett konvent för människor som vill utforska spel ur ett
              socialistiskt DIY-perspektiv. Vi söker spelkonstruktörer,
              spelledare, figurspelare, brädspelsnördar, rollspelare,
              aktivister, tänkare, konstnärer, hackers, gruntar och nyfikna
              kamrater.
            </p>

            <p>
              Det kan fortfarande finnas plats i programmet! Hör av dig om du
              vill hjälpa till eller arrangera något:
            </p>

            <p>
              <a
                href="mailto:materialistgamelabs@protonmail.com"
                target="_blank"
                className="text-foreground underline"
              >
                materialistgamelabs@proton.me
              </a>
            </p>
          </div>
        </div>

        <hr className="col-span-5 my-8" />

        <div className="col-span-3">
          <h2 className="mb-4 text-2xl font-bold md:text-4xl">
            Den Onda Hobbyn, volym 2
          </h2>
          <div className="prose mb-8 text-xl text-foreground md:text-2xl">
            <p>
              Under konventet släpps andra numret av vårt zine{" "}
              <strong className="font-bold text-foreground">
                Den Onda Hobbyn
              </strong>
              , så se till att vara där för att haffa ett exemplar!
            </p>

            <p>
              Om du missade vårt första nummer kan du läsa det i digitalt format
              här:{" "}
              <Link href="/den-onda-hobbyn-1" className="text-foreground">
                Den Onda Hobbyn, volym 1
              </Link>
            </p>
          </div>
        </div>

        <div className="col-span-2 mb-8 text-center">
          <Image
            src={Hobbyn.src}
            width={600}
            height={300}
            alt="Den Onda Hobbyn, volym 2"
          />
        </div>

        <hr className="col-span-5 my-8" />

        <div className="col-span-2 mb-8 text-center">
          <Image
            src={India.src}
            width={600}
            height={300}
            alt="India Däck Logotyp"
          />
        </div>

        <div className="col-span-3">
          <h2 className="mb-4 text-2xl font-bold md:text-4xl">India Däck</h2>
          <div className="prose mb-8 text-xl text-foreground md:text-2xl">
            <p className="font-bold">
              Inget konvent utan kaffe.
              <br />
              Ingen organisering utan studier.
            </p>
            <p>
              India Däck kommer att vara på plats och erbjuda kaffe, te, snacks,
              bokbord, och säkert en pamflett eller coolt klistermärke.
            </p>

            <p>
              Utan hjälp från rutinerade kamrater från Lunds socialistiska
              bokcafé skulle det här bli ett sämre event, så vi är glada att de
              är med!
            </p>
          </div>
        </div>

        <hr className="col-span-5" />

        <div className="prose col-span-3 col-start-2 text-center text-foreground">
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-4xl">
            Schema
          </h2>
          <p>
            <Link
              href="https://mglabs.se/media/MGC2026-Schema.pdf"
              className="font-bold text-foreground underline"
            >
              {" "}
              Klicka här för att ladda ner hela schemat som PDF.
            </Link>
            <br />
            Eller scrolla vidare...
          </p>
        </div>

        <div className="col-span-5 grid-cols-6 gap-8 md:grid">
          <h2 className="col-span-6 my-8 text-center text-2xl font-bold uppercase underline">
            Fredag
          </h2>

          <div className="col-span-3 mb-8 md:mb-0">
            <div className="bottom-0 left-0 right-0 border-l-2 border-[#CC1312] bg-background/80 p-4">
              <h5 className="text-md italic"></h5>
              <h3 className="text-xl font-bold uppercase">
                Invigning, Zine, Quiz
              </h3>
            </div>
          </div>

          <div className="col-span-3 mb-8 md:mb-0">
            <div className="relative">
              <Image
                src={Quiz.src}
                width={600}
                height={600}
                alt="Quiz master"
                className="aspect-square flex-grow-0 object-cover"
              />
              <div className="bottom-0 left-0 right-0 border-l-2 border-[#CC1312] bg-background/80 p-4 sm:absolute">
                <h5 className="text-md italic">
                  Fredag 9 oktober, 18:00 - 21:00
                </h5>
                <h3 className="text-xl font-bold uppercase">
                  Invigning, Zine, Quiz
                </h3>
                {/* <h4 className="text-lg">Johanna Koljonen</h4> */}
              </div>
            </div>

            <div className="border-l-2 border-[#CC1312] pl-4">
              <div className="prose text-foreground">
                <p className="">
                  Tom (poddpratare i Spel eller Barbari och Märklighetstroget)
                  är quiz-master. Spela med folk du inte redan känner, ge oss
                  dina bästa gissningar och se om just ditt lag vinner ett dumt,
                  dumt pris. Det blir kul!
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-3 mb-8 md:mb-0">
            <div className="bottom-0 left-0 right-0 border-l-2 border-[#CC1312] bg-background/80 p-4">
              <h5 className="text-md italic">
                Fredag 9 oktober, 21:00 - 02:00
              </h5>
              <h3 className="text-xl font-bold uppercase">
                Spel & mingla fritt
              </h3>
            </div>
          </div>
        </div>

        <div className="col-span-5 grid-cols-6 gap-8 md:grid">
          <h2 className="col-span-6 my-8 text-center text-2xl font-bold uppercase underline">
            Lördag
          </h2>

          <div className="col-span-3 mb-8 md:mb-0">
            <div className="relative">
              <Image
                src={Loppis.src}
                width={600}
                height={600}
                alt="Nördloppis"
                className="aspect-square flex-grow-0 object-cover"
              />
              <div className="bottom-0 left-0 right-0 border-l-2 border-[#CC1312] bg-background/80 p-4 sm:absolute">
                <h5 className="text-md italic">
                  Lördag 10 oktober, 10:00 - 12:00
                </h5>
                <h3 className="text-xl font-bold uppercase">Nördloppis</h3>
                {/* <h4 className="text-lg">Johanna Koljonen</h4> */}
              </div>
            </div>

            <div className="border-l-2 border-[#CC1312] pl-4">
              <div className="prose text-foreground">
                <p className="font-bold">
                  På nördloppisen och hittar den där grejen du inte visste att
                  du villhövde. Byt, sälj, ge bort och fynda! Ta med spel som
                  aldrig spelas och ge dem ett nytt hem. Ingen föranmälan, drop
                  in och först till kvarn gäller.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-3 mb-8 md:mb-0">
            <div className="bottom-0 left-0 right-0 border-l-2 border-[#CC1312] bg-background/80 p-4">
              <h5 className="text-md italic">
                Lördag 10 oktober, 10:00 - 12:00
              </h5>
              <h3 className="text-xl font-bold uppercase">RatSnake</h3>
            </div>
          </div>

          <div className="col-span-3 mb-8 md:mb-0">
            <div className="relative">
              <Image
                src={Forgetful.src}
                width={600}
                height={600}
                alt="The Forgetful Kindred"
                className="aspect-square flex-grow-0 object-cover"
              />
              <div className="bottom-0 left-0 right-0 border-l-2 border-[#CC1312] bg-background/80 p-4 sm:absolute">
                <h5 className="text-md italic">
                  Lördag 10 oktober, 10:00 - 14:00
                </h5>
                <h3 className="text-xl font-bold uppercase">
                  The Forgetful Kindred
                </h3>
                <h4 className="text-lg">
                  Poetic storytelling game about forgetting and community
                </h4>
              </div>
            </div>

            <div className="border-l-2 border-[#CC1312] pl-4">
              <div className="prose text-foreground">
                <p>
                  The Forgetful Kindred is a storytelling and symbol drawing
                  role playing game where players write down the history of
                  their own group of forgetful utopians. You create your own
                  symbols and stories that add to the history book but slowly
                  over time the pages are forgotten or altered by time.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-3 mb-8 md:mb-0">
            <div className="relative">
              <Image
                src={Muterad.src}
                width={600}
                height={600}
                alt="Muterad Medeltid"
                className="aspect-square flex-grow-0 object-cover"
              />
              <div className="bottom-0 left-0 right-0 border-l-2 border-[#CC1312] bg-background/80 p-4 sm:absolute">
                <h5 className="text-md italic">
                  Drop-in, lördag 10 oktober, 10:00 - 18:00
                </h5>
                <h3 className="text-xl font-bold uppercase">
                  Muterad Medeltid
                </h3>
                {/* <h4 className="text-lg">Johanna Koljonen</h4> */}
              </div>
            </div>

            <div className="border-l-2 border-[#CC1312] pl-4">
              <div className="prose text-foreground">
                <p className="font-bold">
                  Europa är en gammal kvinna, ett sprucket kärl, en klanglös
                  malm. Hennes hav är förgiftade, hennes skogar nerbrända,
                  hennes städer raserade i grus.
                </p>
                <p>
                  Men i ruinerna dröjer sig livet kvar. Muterade riddare
                  bekämpar varandra med bredsvärd och handgranater, de slåss på
                  den Uråldrige Kardinalens befallning, de slåss i Teloputinas
                  namn.
                </p>
                <p>
                  När bensinen är slut får Storhästar draga pansarvagnarna genom
                  leran, när den Färska Ammunitionen ruttnar fortsätter kretiner
                  och pestpilgrimer att slåss med rostiga knivar och klumpar av
                  uran. Blått Fett... alla vill äga det!
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-3 mb-8 md:mb-0">
            <div className="relative">
              <Image
                src={F28.src}
                width={600}
                height={600}
                alt="F28"
                className="aspect-square flex-grow-0 object-cover"
              />
              <div className="bottom-0 left-0 right-0 border-l-2 border-[#CC1312] bg-background/80 p-4 sm:absolute">
                <h5 className="text-md italic">
                  Drop-in, lördag 10 oktober, från 10:00
                </h5>
                <h3 className="text-xl font-bold uppercase">
                  F28: War always changes
                </h3>
                {/* <h4 className="text-lg">Johanna Koljonen</h4> */}
              </div>
            </div>

            <div className="border-l-2 border-[#CC1312] pl-4">
              <div className="prose text-foreground">
                <p className="font-bold">
                  Testa narrativt figurspelande med F28: War Always Changes!
                  Utrusta en liten grupp &quot;äventyrare&quot;, hugg tag i en
                  kompis, och bege dig ut på halsbrytande äventyr. Råna bank
                  eller tåg, utforska underjorden, och mycket mer! Inga
                  förkunskaper krävs, och vi har alla figurer som behövs.
                </p>
                <p>
                  Vill man ta med egna figurer så går det också bra (4+
                  28mm-figurer med &quot;grimdark investigators&quot;-känsla).
                  90-120 minuter/spel.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-3 mb-8 md:mb-0">
            <div className="relative">
              <Image
                src={Johanna.src}
                width={600}
                height={600}
                alt="Johanna Koljonen"
                className="aspect-square flex-grow-0 object-cover"
              />
              <div className="bottom-0 left-0 right-0 border-l-2 border-[#CC1312] bg-background/80 p-4 sm:absolute">
                <h5 className="text-md italic">Lördag 10 oktober, 12:00</h5>
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
                  och konventsforskningens politiska betydelse.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-3 mb-8 md:mb-0">
            <div className="relative">
              <Image
                src={Oceania.src}
                width={600}
                height={600}
                alt="Oceania 2084"
                className="aspect-square flex-grow-0 object-cover"
              />
              <div className="bottom-0 left-0 right-0 border-l-2 border-[#CC1312] bg-background/80 p-4 sm:absolute">
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

          <div className="col-span-3 mb-8 md:mb-0">
            <div className="relative">
              <Image
                src={Battletech.src}
                width={600}
                height={600}
                alt="Battletech"
                className="aspect-square flex-grow-0 object-cover"
              />
              <div className="bottom-0 left-0 right-0 border-l-2 border-[#CC1312] bg-background/80 p-4 sm:absolute">
                <h5 className="text-md italic">
                  Lördag 10 oktober, 14:00 - 18:00
                </h5>
                <h3 className="text-xl font-bold uppercase">
                  Battletech: Operation Drakdräparen
                </h3>
                <h4 className="text-lg">
                  Intro till figurspelet och en kampanjs hybris
                </h4>
              </div>
            </div>
            <div className="border-l-2 border-[#CC1312] pl-4">
              <div className="prose text-foreground">
                <p className="font-bold">
                  Välkommen till BattleTech intro! Kom för de jättestora
                  robotarna och stanna för en episk rymdopera-setting vi spelar
                  i en enorm strategisk kampanj! Rent konkret erbjuder detta
                  event att ta del av kampanjen genom att testa flera olika av
                  BattleTech systemen med olika grad av komplexitet.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-3 mb-8 md:mb-0">
            <div className="relative">
              <Image
                src={Human.src}
                width={600}
                height={600}
                alt="Human & Envrionment"
                className="aspect-square flex-grow-0 object-cover"
              />
              <div className="bottom-0 left-0 right-0 border-l-2 border-[#CC1312] bg-background/80 p-4 sm:absolute">
                <h5 className="text-md italic">
                  Lördag 10 oktober, 14:00 - 18:00 och 22:00 - 00:00
                </h5>
                <h3 className="text-xl font-bold uppercase">
                  Human & Envrionment
                </h3>
                <h4 className="text-lg">Speltest!</h4>
              </div>
            </div>
            <div className="border-l-2 border-[#CC1312] pl-4">
              <div className="prose text-foreground">
                <p className="">
                  Spelet skildrar världshistoria från jordbruket till den
                  industriella revolutionen på en strukturell nivå. Kärnorna i
                  spelet är domesticering av grödor och djur, handel,
                  teknologisk utveckling och civilisationers spridning över
                  världskartan. Hög spelarinteraktion, något komplext, 3-4
                  timmar speltid.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-3 mb-8 md:mb-0">
            <div className="relative">
              <Image
                src={Deserters.src}
                width={600}
                height={600}
                alt="Deserters"
                className="aspect-square flex-grow-0 object-cover"
              />
              <div className="bottom-0 left-0 right-0 border-l-2 border-[#CC1312] bg-background/80 p-4 sm:absolute">
                <h5 className="text-md italic">
                  Lördag 10 oktober, 14:00 - 18:00
                </h5>
                <h3 className="text-xl font-bold uppercase">
                  Deserters: An outdoor roleplaying game
                </h3>
                <h4 className="text-lg">(OBS! Spelas utomhus)</h4>
              </div>
            </div>
            <div className="border-l-2 border-[#CC1312] pl-4">
              <div className="prose text-foreground">
                <p className="">
                  Desertörer är ett kortleksbaserat rollspel som spelas utomhus.
                  Det följder de 50 000 man som deserterade under Napoleons
                  fälttåg i Ryssland och deras svåra resa hem. Ett rollspel som
                  är lika simpelt, strategiskt och oförlåtligt som att ta sig
                  hem från ett krig.
                </p>
                <p>
                  Kolla in spelet och följ skaparen på:{" "}
                  <Link
                    href="https://swedishgm.itch.io/deserters"
                    target="_blank"
                    className="text-foreground"
                  >
                    swedishgm.itch.io/deserters
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-3 mb-8 md:mb-0">
            <div className="relative">
              <Image
                src={Trans.src}
                width={600}
                height={600}
                alt="Deserters"
                className="aspect-square flex-grow-0 object-cover"
              />
              <div className="bottom-0 left-0 right-0 border-l-2 border-[#CC1312] bg-background/80 p-4 sm:absolute">
                <h5 className="text-md italic">
                  Lördag 10 oktober, 18:00 - 22:00
                </h5>
                <h3 className="text-xl font-bold uppercase">
                  Transchronologicum
                </h3>
                <h4 className="text-lg">
                  Rollspel för 3 grupper som spelar samtidigt!
                </h4>
              </div>
            </div>
            <div className="border-l-2 border-[#CC1312] pl-4">
              <div className="prose text-foreground">
                <p className="">
                  En uråldrig, nyss framsprungen och ännu inte påkommen ondska
                  hotar att ha fått fotfäste, återvända och göra sig tillkänna.
                  Svåröverskådliga ödestrådar vävs samman av en osedd kraft för
                  att sätta en liten grupp hjältar i dess väg.
                </p>
                <p>
                  Har ni, kommer ni ha, eller har ni haft det som krävs för att
                  avstyra den katastrof som redan skett, pågår just nu, eller
                  ännu inte har fullbordats?
                </p>
                <p>
                  Transchronologicum är ett rollspelsscenario utöver det vanliga
                  med upp till 12 spelare, 3 spelledare och en hissnande färd
                  genom tid och rum.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-3 mb-8 md:mb-0">
            <div className="bottom-0 left-0 right-0 border-l-2 border-[#CC1312] bg-background/80 p-4">
              <h5 className="text-md italic">
                Lördag 10 oktober, 22:00 - 02:00
              </h5>
              <h3 className="text-xl font-bold uppercase">Wyrms & Warrens</h3>
            </div>
          </div>

          <div className="col-span-3 mb-8 md:mb-0">
            <div className="relative">
              <Image
                src={Kitbash.src}
                width={600}
                height={600}
                alt="Kitbash"
                className="aspect-square flex-grow-0 object-cover"
              />
              <div className="bottom-0 left-0 right-0 border-l-2 border-[#CC1312] bg-background/80 p-4 sm:absolute">
                <h5 className="text-md italic">
                  Lördag 10 oktober, Hela dagen
                </h5>
                <h3 className="text-xl font-bold uppercase">
                  Spelbar, Kitbash-hörna, café
                </h3>
              </div>
            </div>
            <div className="border-l-2 border-[#CC1312] pl-4">
              <div className="prose text-foreground">
                <p className="">
                  Bortom plastmånglare som Games Workshop, bortom deras idéer om
                  hur figurer ska se ut existerar en vild värld av freaks,
                  monster och förryckta skapelser. Dessa frammanas genom
                  kitbashing. På Materialist Game Con kommer du kunna tvinga
                  ihop plast till nya oheliga skapelser.
                </p>
                <p>
                  Har du plast över att donera till kitbash-hörnan? Hör av dig!
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-3 mb-8 md:mb-0">
            <div className="bottom-0 left-0 right-0 border-l-2 border-[#CC1312] bg-background/80 p-4">
              <h5 className="text-md italic">Lördag 10 oktober, Kväll/natt</h5>
              <h3 className="text-xl font-bold uppercase">
                Spela & mingla fritt
              </h3>
            </div>
          </div>
        </div>

        <div className="col-span-5 grid-cols-6 gap-8 md:grid">
          <h2 className="col-span-6 my-8 text-center text-2xl font-bold uppercase underline">
            Söndag
          </h2>

          <div className="col-span-3 mb-8 md:mb-0">
            <div className="relative">
              <Image
                src={Spanska.src}
                width={600}
                height={600}
                alt="Spanska Inbördeskriget"
                className="aspect-square flex-grow-0 object-cover"
              />
              <div className="bottom-0 left-0 right-0 border-l-2 border-[#CC1312] bg-background/80 p-4 sm:absolute">
                <h5 className="text-md italic">
                  Söndag 11 oktober, 10:00 - 14:00
                </h5>
                <h3 className="text-xl font-bold uppercase">
                  Spanska inbördeskriget
                </h3>
                <h4 className="text-lg">Unikt megagame för 15 personer</h4>
              </div>
            </div>

            <div className="border-l-2 border-[#CC1312] pl-4">
              <div className="prose text-foreground">
                <p className="">
                  Delta i spanska inbördeskriget som aldrig förr. Med lite tur
                  så är dina värsta fiender på andra sidan linjen och inte din
                  granne. Inga förkunskaper krävs. Ca 4 timmar.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-3 mb-8 md:mb-0">
            <div className="relative">
              <Image
                src={Muterad.src}
                width={600}
                height={600}
                alt="Muterad Medeltid"
                className="aspect-square flex-grow-0 object-cover"
              />
              <div className="bottom-0 left-0 right-0 border-l-2 border-[#CC1312] bg-background/80 p-4 sm:absolute">
                <h5 className="text-md italic">
                  Drop-in, söndag 11 oktober, 14:00 - 17:00
                </h5>
                <h3 className="text-xl font-bold uppercase">
                  Muterad Medeltid
                </h3>
                {/* <h4 className="text-lg">Johanna Koljonen</h4> */}
              </div>
            </div>

            <div className="border-l-2 border-[#CC1312] pl-4">
              <div className="prose text-foreground">
                <p className="font-bold">
                  Europa är en gammal kvinna, ett sprucket kärl, en klanglös
                  malm. Hennes hav är förgiftade, hennes skogar nerbrända,
                  hennes städer raserade i grus.
                </p>
                <p>
                  Men i ruinerna dröjer sig livet kvar. Muterade riddare
                  bekämpar varandra med bredsvärd och handgranater, de slåss på
                  den Uråldrige Kardinalens befallning, de slåss i Teloputinas
                  namn.
                </p>
                <p>
                  När bensinen är slut får Storhästar draga pansarvagnarna genom
                  leran, när den Färska Ammunitionen ruttnar fortsätter kretiner
                  och pestpilgrimer att slåss med rostiga knivar och klumpar av
                  uran. Blått Fett... alla vill äga det!
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-3 mb-8 md:mb-0">
            <div className="bottom-0 left-0 right-0 border-l-2 border-[#CC1312] bg-background/80 p-4">
              <h5 className="text-md italic">
                Söndag 11 oktober, 14:30 - 17:00
              </h5>
              <h3 className="text-xl font-bold uppercase">Spelverkstad</h3>
            </div>
          </div>
        </div>

        <hr className="col-span-5 my-8" />

        <div className="col-span-3 col-start-2">
          <h2 className="mb-4 text-2xl font-bold md:text-4xl">
            Övrig information om konventet
          </h2>
          <div className="text-md prose mb-8 text-foreground">
            <h3 className="text-lg font-bold text-foreground">INTRÄDE</h3>
            <p>
              Konventet är gratis, men eftersom du såklart vill köpa vårt zine
              uppmanar vi alla att passa på att donera extra efter förmåga när
              ni ändå swishar.
            </p>

            <h3 className="text-lg font-bold text-foreground">SOVPLATSER</h3>
            <p>
              Vi får inte sova i lokalerna, men vi försöker hitta sovplats åt de
              som behöver. Om du kan erbjuda sovplats till någon kamrat, maila
              till: materialistgamelabs@proton.me
            </p>

            <h3 className="text-lg font-bold text-foreground">STÄD</h3>
            <p>
              Detta är ett konvent vi skapar tillsammans. Vi har alla ett ansvar
              att hålla rent och ta hand om lokalerna som Kvarnby Folkhögskola
              lånar ut till oss. Den som hjälper till att städa förtjänar tumme
              upp och glada tillrop.
            </p>

            <h3 className="text-lg font-bold text-foreground">UPPFÖRANDE</h3>
            <p>
              Vi i arrangörsgruppen förbehåller oss rätten att avvisa folk som
              inte kan bete sig. Diskriminering, kränkningar och slemmigt
              beteende hör inte hemma på våra event.
            </p>
          </div>
        </div>
      </article>
    </Suspense>
  );
}
