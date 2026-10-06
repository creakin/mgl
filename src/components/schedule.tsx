import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";

export function ScheduleDay({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="col-span-5 grid-cols-6 gap-8 md:grid">
      <h2 className="col-span-6 my-8 text-center text-2xl font-bold uppercase underline">
        {title}
      </h2>
      {children}
    </div>
  );
}

type ScheduleItemProps = {
  time?: string;
  title?: string;
  subtitle?: string;
  image?: StaticImageData;
  imageAlt?: string;
  children?: ReactNode;
};

export function ScheduleItem({
  time,
  title,
  subtitle,
  image,
  imageAlt,
  children,
}: ScheduleItemProps) {
  const header = (
    <div
      className={`bottom-0 left-0 right-0 border-l-2 border-[#CC1312] bg-background/80 p-4 ${
        image ? "sm:absolute" : ""
      }`}
    >
      <h5 className="text-md italic">{time}</h5>
      <h3 className="text-xl font-bold uppercase">{title}</h3>
      {subtitle && <h4 className="text-lg">{subtitle}</h4>}
    </div>
  );

  return (
    <div className="col-span-3 mb-8 md:mb-0">
      {image ? (
        <div className="relative">
          <Image
            src={image.src}
            width={600}
            height={600}
            alt={imageAlt ?? title ?? ""}
            className="aspect-square flex-grow-0 object-cover"
          />
          {header}
        </div>
      ) : (
        header
      )}

      {children && (
        <div className="border-l-2 border-[#CC1312] pl-4">
          <div className="prose text-foreground">{children}</div>
        </div>
      )}
    </div>
  );
}

export function SplitSection({
  title,
  image,
  imageAlt,
  imageFirst = false,
  children,
}: {
  title: string;
  image: StaticImageData;
  imageAlt: string;
  imageFirst?: boolean;
  children: ReactNode;
}) {
  const imageBlock = (
    <div className="col-span-2 mb-8 text-center">
      <Image src={image.src} width={600} height={300} alt={imageAlt} />
    </div>
  );

  return (
    <>
      {imageFirst && imageBlock}
      <div className="col-span-3">
        <h2 className="mb-4 text-2xl font-bold md:text-4xl">{title}</h2>
        <div className="prose mb-8 text-xl text-foreground md:text-2xl">
          {children}
        </div>
      </div>
      {!imageFirst && imageBlock}
    </>
  );
}

export function InfoItem({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <h3 className="text-lg font-bold text-foreground">{title}</h3>
      <p>{children}</p>
    </>
  );
}