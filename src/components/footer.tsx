import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";
import { ModeToggle } from "./mode-toggle";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/creakin/mgl",
    label: "Built on a ",
    ariaLabel: "Built on a fork",
    text: "fork",
  },
  {
    href: "https://github.com/davidpaulsson/barnvisor",
    ariaLabel: "from davidpaulsson@GitHub",
    label: "from ",
    text: "davidpaulsson@GitHub",
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
          <ul>
            {SOCIAL_LINKS.map((link) => (
              <li key={link.href}>
                <FooterLink {...link} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};
