import { IndexLink } from "@/components/index-link";
import { getAllMaterials, getMaterialData } from "@/lib/md";
import Link from "next/link";
import type { Metadata } from "next";
import { MaterialsList } from "@/components/materials-list";
import TagList from "@/components/tag-list";
import Markdown from 'react-markdown'
import remarkGfm from "remark-gfm";
import { Button } from "@/components/ui/button";
import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";

export async function generateStaticParams() {
  const materials = await getAllMaterials();
  return materials.map((material) => ({
    id: material.id,
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
  const material = await getMaterialData((await params).id);
  const canonicalUrl = `https://www.mglabs.se/${material.id}`;
  const cleanDescription = material.summary ?? material.title;

  return {
    title: `${material.title} | mglabs.se`,
    description: cleanDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'article',
      publishedTime: material.date,
      authors: material.author,
      tags: material.tags,
      title: `${material.title} | mglabs.se`,
      description: cleanDescription,
      url: canonicalUrl,
      images: [
        {
          url: material.image ?? `https://www.mglabs.se/api/og?title=${encodeURIComponent(
            material.title,
          )}&description=${encodeURIComponent(cleanDescription)}`,
          width: 1200,
          height: 630,
          alt: cleanDescription.slice(0, 100),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${material.title} | mglabs.se`,
      description: cleanDescription,
      images: [
        material.image ?? `https://www.mglabs.se/api/og?title=${encodeURIComponent(material.title)}&description=${encodeURIComponent(cleanDescription)}`,
      ],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const material = await getMaterialData((await params).id);
  const allMaterials = await getAllMaterials();
  const relatedCandidates = allMaterials.filter((s) => s.id !== material.id);
  const sameAuthor = relatedCandidates.filter((s) => s.author === material.author);
  const related = (sameAuthor.length ? sameAuthor : relatedCandidates)
    .sort((a, b) => a.title.localeCompare(b.title))
    .slice(0, 4);
  const articleText = material.content
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const canonicalUrl = `https://www.mglabs.se/${material.id}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: material.title,
    author: {
      "@type": "Person",
      name: material.author,
    },
    inLanguage: "sv",
    url: canonicalUrl,
    articleBody: articleText,
  } as const;

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Materialist Game Labs",
        item: "https://www.mglabs.se/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: material.title,
        item: canonicalUrl,
      },
    ],
  } as const;

  return (
    <Suspense fallback={"Laddar..."}>
      <IndexLink />

      <article className="col-span-3 [&_p:not(:last-child)]:mb-6 [&_p]:text-pretty">
        {material.image &&
          <Image src={material.image} width={300} height={300} className="object-contain mb-4" alt={`Bild till ${material.title}`} />
        }
        <h1 className="mb-1 font-medium">{material.title}</h1>
        <p className="!mb-1 text-sm text-muted-foreground">{material.author}</p>
        <p className="!mb-12 text-sm text-muted-foreground">{material.date}</p>

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
          dangerouslySetInnerHTML={{
            __html:
              <Markdown remarkPlugins={[remarkGfm]}>{material.content}</Markdown>
          }}
        >
        </div>

        <Link href={material.link} target="_blank">
          <Button size="lg" className="mb-8" variant="outline" >
            Gå till material
            <SquareArrowOutUpRight />

          </Button>
        </Link>

        <TagList tags={material.tags} asLinks={true} />
        {related.length > 0 ? (
          <section className="mt-10 border-t pt-6">
            <h2 className="mb-12 font-medium">Relaterade material</h2>
            <MaterialsList materials={related} layout="rows" />
          </section>
        ) : null}
      </article>
      <div />
    </Suspense>
  );
}
