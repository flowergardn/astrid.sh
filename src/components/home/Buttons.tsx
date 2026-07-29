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
    siteURL: "https://astrid.sh/",
    imageURL: "/buttons/astrid-badge.png",
    description: "you are here!",
  },
  {
    name: "lumie",
    imageURL: "/buttons/lumie-badge.png",
    description:
      "cool british girl & femtanyl enjoyer - she's also a gamedev student!",
  },
  {
    siteURL: "https://aroze.me/",
    imageURL: "/buttons/aroze-badge.png",
    description:
      "one of the people i've known for the longest time, she's my best friend and you should check out her stuff.",
  },
  {
    siteURL: "https://lily.pet/",
    imageURL: "/buttons/lily-badge.gif",
    description:
      "lily is my favorite blahaj haver, i love every one of our conversations",
  },
  {
    siteURL: "https://eva.ac/",
    imageURL: "/buttons/eva-badge.png",
    description:
      "eva is most known for getting up to shenanigans, but she's genuinely an amazing friend too",
  },
  {
    siteURL: "https://jos.gg/",
    imageURL: "/buttons/jos-badge.gif",
    description:
      "jos is a great guy that is literally everywhere, he's super smart & also a fellow cookies enjoyer that has a cute cat",
  },
  {
    siteURL: "https://jamie.rs/",
    imageURL: "/buttons/jamie-badge.png",
    description: "me & jamie don't talk much anymore, but she's still cool 🤍",
  },
  {
    siteURL: "https://santio.me/",
    imageURL: "/buttons/santio-badge.webp",
    description:
      "you know how they say, if you're the smartest in the room, leave the room? santio's knowledge in software development is 100x mine.",
  },
  {
    siteURL: "https://ollie.lol/",
    imageURL: "/buttons/ollie-badge.png",
    description:
      "Ollie is solely responsible for nearly every friend i have, thanks to starting a Minecraft SMP in 2022 <3",
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
        <button onClick={() => setEnabled(!enabled)}>
          Picker {enabled ? "enabled" : "disabled"}
        </button>
        {activeButton && <DisplayBtnInfo btn={activeButton} />}
      </div>
    </div>
  );
}
