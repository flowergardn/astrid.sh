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
    imageURL: "/buttons/lumie-badge.png",
  },
  {
    siteURL: "https://aroze.me/",
    imageURL: "/buttons/aroze-badge.png",
  },
  {
    siteURL: "https://lily.pet/",
    imageURL: "/buttons/lily-badge.gif",
  },
  {
    siteURL: "https://eva.ac/",
    imageURL: "/buttons/eva-badge.png",
  },
  {
    siteURL: "https://jos.gg/",
    imageURL: "/buttons/jos-badge.gif",
  },
  {
    siteURL: "https://jamie.rs/",
    imageURL: "/buttons/jamie-badge.png",
  },
  {
    siteURL: "https://santio.me/",
    imageURL: "/buttons/santio-badge.webp",
  },
  {
    siteURL: "https://ollie.lol/",
    imageURL: "/buttons/ollie-badge.png",
  },
];

function DisplayBtnInfo({ btn }: { btn: Button }) {
  let title = btn.name;

  if (!title) {
    title = btn.siteURL ? new URL(btn.siteURL).hostname : "Unknown";
  }

  return (
    <div className="w-[440px] min-h-36 border border-border bg-background/50 p-4">
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
