import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";
import { ModeToggle } from "./mode-toggle";

const SOCIAL_LINKS = [
  {
    href: "http://discord.gg/VNFmncR6KT",
    label: "",
    ariaLabel: "Discord",
    text: "Discord",
  },
  {
    href: "http://bsky.app/profile/materialist-games.bsky.social",
    ariaLabel: "BlueSky",
    label: "",
    text: "BlueSky",
  },
  {
    href: "https://soundcloud.com/materialistgamelabs",
    ariaLabel: "SoundCloud",
    label: "",
    text: "SoundCloud",
  }
] as const;

interface FooterLinkProps {
  href: string;
  label: string;
  ariaLabel: string;
  text: string;
}

const FooterLink = ({ href, label, ariaLabel, text }: FooterLinkProps) => (
  <div>
    { label }
    <a
      href={href}
      aria-label={ariaLabel}
      className="underline transition-colors hover:text-foreground"
      target="_blank"
    >
      {text}
    </a>
  </div>
);

export const Footer = ({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) => {
  return (
    <footer
      className={cn(
        "mb-12 mt-24 text-sm text-muted-foreground/75 md:grid md:grid-cols-5 md:gap-4",
        className,
      )}
      {...props}
    >
      <div className="col-start-2 col-end-5 space-y-4">
        <ModeToggle />

        <nav aria-label="Social links" className="border-t border-muted-foreground/25 py-4">
          <ul className="flex gap-2">
            {SOCIAL_LINKS.map((link, i) => (
              <li key={link.href} className="flex gap-2 items-center">
                <FooterLink {...link} />

                { i < SOCIAL_LINKS.length - 1 && <span className="text-lg">★</span> }
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};
