export interface MovieItemProps {
  // id: string,
  cover: string;
  name: string;
  date: string;
  shortDescription: string;
}

export default function MovieItem({
  cover,
  name,
  date,
  shortDescription,
}: MovieItemProps) {
  return (
    <div className="container w-3/4 flex items-start gap-x-5 py-7 border-b-2">
      <img className="h-70 w-40" src={cover} alt="" loading="lazy" />
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p>{date}</p>
        <p className="my-5">{shortDescription}</p>
      </div>
    </div>
  );
}
