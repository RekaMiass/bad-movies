interface MovieCardProps {
  id: string;
  cover: string;
  name: string;
  director: string;
  scenario: string;
  producer: string;
  actors: string[];
  fullDescription: string;
  // screens: string[]
}

export default function MovieCard({
  cover,
  name,
  director,
  scenario,
  producer,
  actors,
  fullDescription,
}: MovieCardProps) {
  // export default function MovieCard () {
  return (
    <div>
      <img src={cover} alt="" />
      <h1>{name}</h1>
      <p>{director}</p>
      <p>{scenario}</p>
      <p>{producer}</p>
      <p>{actors}</p>
      <p>{fullDescription}</p>
    </div>
  );
}
