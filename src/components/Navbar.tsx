import { cn } from "~/lib/utils.ts";

const pages = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "experience",
    href: "/experience",
  },
  {
    name: "Contact / Links",
    href: "/links",
  },
];

export default function Navbar(props: { currentPage: string }) {
  return (
    <div
      className="py-4 text-subtext px-4 flex justify-start space-x-4 bg-background/50"
      id="navbar"
    >
      {pages.map((page, index) => {
        return (
          <a
            key={index}
            className={cn(
              `hover:text-pink`,
              page.href === props.currentPage ? "text-pink" : "text-subtext",
            )}
            href={page.href}
          >
            {page.name.toLowerCase()}
          </a>
        );
      })}
    </div>
  );
}
