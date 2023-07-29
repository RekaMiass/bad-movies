export interface MovieItemProps {
  // id: string,
  cover: string,
  name: string,
  date: string,
  shortDescription: string,
}

export default function MovieItem({cover, name, date, shortDescription}: MovieItemProps) {
  return <div>
    <img src={cover} alt="" />
    <h2>{name}</h2>
    <p>{date}</p>
    <p>{shortDescription}</p>
  </div>;
}
