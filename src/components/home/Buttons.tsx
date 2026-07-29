import { useState } from "react";
import { cn } from "~/lib/utils";

type Button = {
  imageURL: string;
  siteURL?: string;
  name?: string;
  description?: string;
};

const buttons: Button[] = [
  {
    name: "Astrid",
    siteURL: "https://astrid.sh/",
    imageURL: "/buttons/astrid-badge.png",
    description: "You are here! Thanks for stopping by",
  },
  {
    name: "Aroze",
    siteURL: "https://aroze.me/",
    imageURL: "/buttons/aroze-badge.png",
    description:
      "I've known Aroze for several years, she's my best friend and you should check out her stuff. She might also be the funniest person I've ever known.",
  },
  {
    name: "Lily",
    siteURL: "https://lily.pet/",
    imageURL: "/buttons/lily-badge.gif",
    description:
      "Lily is my favorite blahaj haver, there's not enough words to describe how much I appreciate my friendship with her",
  },
  {
    name: "Eva",
    siteURL: "https://eva.ac/",
    imageURL: "/buttons/eva-badge.png",
    description:
      "Eva is mostly known for getting up to shenanigans, but she's genuinely an amazing friend too",
  },
  {
    name: "Jos",
    siteURL: "https://jos.gg/",
    imageURL: "/buttons/jos-badge.gif",
    description:
      "He's super smart and is obsessed with cookies, we even met over cookies",
  },
  {
    name: "Santio",
    siteURL: "https://santio.me/",
    imageURL: "/buttons/santio-badge.webp",
    description:
      "You know how they say, if you're the smartest in the room, leave the room? If Santio's in the room, I don't have to leave. Santio's knowledge in software development is 100x mine, you can hire this guy for anything",
  },
  {
    name: "Ollie",
    siteURL: "https://ollie.lol/",
    imageURL: "/buttons/ollie-badge.png",
    description:
      "Ollie is solely responsible for nearly every friend I have, thanks for starting an smp in 2022 <3",
  },
  {
    name: "Lumie",
    imageURL: "/buttons/lumie-badge.png",
    description:
      "She listens to femtanyl which means she's up there on the list of people I like",
  },
  {
    name: "Jamie",
    siteURL: "https://jamie.rs/",
    imageURL: "/buttons/jamie-badge.png",
    description: "Me & Jamie don't talk much anymore, but she's friends with a lot of my friends 💜",
  },
];

function DisplayBtnInfo({ btn }: { btn: Button }) {
  let title = btn.name;

  if (!title) {
    title = btn.siteURL ? new URL(btn.siteURL).hostname : "Unknown";
  }

  return (
    <div className="w-[440px] min-h-36 border border-border border-pink bg-background/50 p-4">
      <div className="flex items-center gap-3">
        <img src={btn.imageURL} alt={title} />
        <h3>{title}</h3>
      </div>

      {btn.description && (
        <p className="mt-3 text-sm leading-relaxed ">{btn.description}</p>
      )}
    </div>
  );
}

export default function Buttons() {
  const [enabled, setEnabled] = useState(false);
  const [activeButton, setActiveButton] = useState<Button | null>(null);

  return (
    <div>
      <div className="flex justify-start items-center mt-[2rem]">
        <div className="grid grid-cols-5 w-fit">
          {buttons.map((btn) => {
            const className = cn(
              "inline-flex sm:mb-0",
              enabled && "hover:scale-110 transition-all duration-200",
            );
            const img = <img src={btn.imageURL} alt={btn.siteURL} />;

            if (enabled) {
              return (
                <button
                  key={btn.imageURL}
                  type="button"
                  className={className}
                  onClick={() => {
                    setActiveButton(btn);
                    setEnabled(false);
                  }}
                >
                  {img}
                </button>
              );
            }

            return (
              <a
                key={btn.imageURL}
                className={className}
                href={btn.siteURL ?? "#"}
              >
                {img}
              </a>
            );
          })}
        </div>
      </div>
      <div className="m-2">
        <button onClick={() => setEnabled(!enabled)} className={cn(enabled && "text-pink underline")}>
          Picker {enabled ? "enabled" : "disabled"}
        </button>
        {activeButton && <DisplayBtnInfo btn={activeButton} />}
      </div>
    </div>
  );
}
