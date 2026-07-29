import { cn } from "~/lib/utils.ts";

const pages = [
  {
    name: "Home",
    href: "/",
  },
  // {
  //   name: "Blog",
  //   href: "/blog",
  // },
  {
    name: "experience",
    href: "/experience",
  },
  {
    name: "contact / links",
    href: "/links",
  },
];

export default function Navbar(props: { currentPage: string }) {
  return (
    <div className="py-4 text-subtext px-4 flex justify-start space-x-4 bg-background/50">
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
            {page.name}
          </a>
        );
      })}
    </div>
  );
}
