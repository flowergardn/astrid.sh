export default function ExperienceEntry(props: {
  image: string;
  name: string;
  description: string;
}) {
  return (
    <div className="flex flex-col p-4 bg-surface rounded-lg shadow-md">
      <img
        src={props.image}
        alt={props.name}
        className="w-24 h-24 object-cover rounded-lg"
      />
      <h2 className="text-text">{props.name}</h2>
      <p className="text-subtext">{props.description}</p>
    </div>
  );
}
