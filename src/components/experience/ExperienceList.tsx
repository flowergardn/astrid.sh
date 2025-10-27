import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const professional = [
  {
    name: "Waypoint Studios - Software Engineer (current)",
    image: "/assets/waypoint.webp",
    description: (
      <>
        <p>
          Waypoint Studios is a leading Minecraft Marketplace publisher helping
          creators publish their work to the official Minecraft Marketplace.
        </p>
        <br />
        <p>
          I work on developing a platform for tracking Minecraft analytics,
          providing valuable insights into the work of Minecraft content
          creators.
        </p>
      </>
    ),
  },
  {
    name: "Starfury Studios - Software Engineer",
    image: "/assets/starfury.png",
    description: (
      <>
        <p>
          Starfury Studios was a UGC creation studio that created content for
          UGC platforms, most noteably Minecraft. The company collaborated with
          various other companies to bring experiences to massive userbases.
        </p>
        <br />
        <p>
          I worked alongside the team primairly focusing on frontend
          development, but my role often consisted of full-stack depending on
          what was required for the task at hand.
        </p>
      </>
    ),
  },
  {
    name: "Hideaway - Web Developer",
    image: "/assets/hideaway.png",
    description: (
      <>
        <p>
          Hideaway is a Minecraft network owned by the influencers{" "}
          <a href="https://www.youtube.com/@Graser">Graser</a> and{" "}
          <a href="https://www.youtube.com/@Kiingtong">kiingtong</a>. I assisted
          in improving and mantaining our website,{" "}
          <a href="https://hideaway.gg">hideaway.gg</a>
        </p>
      </>
    ),
  },
  {
    name: "Ingot - Web Developer",
    image: "/assets/ingot.svg",
    description: (
      <>
        <p>
          Ingot is a server hosting platform, making scaling for Minecraft
          servers generally accessible. Up until it being sold, I was
          responsible for Anvil alongside another person, our custom frontend
          that interacted with our APIs to provide a smooth user experience.
        </p>
      </>
    ),
  },
];

const voluntary = [
  {
    name: "Minehut (2023 - 2024)",
    image: "/assets/minehut.png",
    description: (
      <>
        <p>
          Minehut is a network for users to create, manage, and share their own
          Minecraft servers. During my time at Minehut, I was responsible for
          keeping services relating to Minehut moderated, alongside directly
          communicating with employees when required, to ensure we run a smooth
          ship. Moderation included the thousands of players that play the
          in-game service everyday and the 120,000 members of the Minehut
          Discord. Alongside moderation, I worked on hobbyist tools to improve
          the experience for us moderators.
        </p>
      </>
    ),
  },
  {
    name: "upload.systems (2022 - 2023)",
    image: "/assets/upload_systems.png",
    description: (
      <>
        <p>
          upload.systems was a company that provided an easy to use platform for
          uploading and managing files. Users could integrate our API into their
          screenshot tools to have their media automatically uploaded to the
          platform, with links they could customize and share where ever.
          Alongisde images, it also supported practically any type of media.
        </p>
        <br />
        <p>
          Up until its shutdown in late 2023, I was in charge of reviewing user
          reports for images, managing domain donations, and keeping the service
          nice and clean; as well as handling user support requests and fixing
          problems for them.
        </p>
      </>
    ),
  },
];

export default function ExperienceList(props: {
  type: "professional" | "voluntary";
}) {
  return (
    <Accordion type="single" collapsible>
      {(props.type === "professional" ? professional : voluntary).map((exp) => {
        return (
          <AccordionItem value={exp.name} className="min-h-14">
            <AccordionTrigger className="flex justify-start items-center gap-4">
              <img
                src={exp.image}
                alt={exp.name}
                className="w-12 h-12 object-cover rounded-lg"
              />
              <span>{exp.name}</span>
            </AccordionTrigger>
            <AccordionContent>{exp.description}</AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
