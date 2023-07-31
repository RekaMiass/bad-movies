import Carousel from "./Slider";
import { useContext } from "react";
import { MoviesContext } from "./MoviesContext";

interface MovieCardProps {
  id: string;
  cover: string;
  name: string;
  director: string;
  scenario: string;
  producer: string;
  actors: string[];
  fullDescription: string;
  screens: string[]
}

export default function MovieCard({
  cover,
  name,
  director,
  scenario,
  producer,
  actors,
  fullDescription,
  screens
}: MovieCardProps) {
  const { movies } = useContext(MoviesContext) || { movies: [] };
  return (
    <div className="flex flex-col">
      <div className="flex gap-x-5">
        <img className="h-100 w-60" src={cover} alt="" />
        <div>
          <h1 className="text-4xl font-bold uppercase mb-5">{name}</h1>
          <p>
            <span className="text-orange-800">Режиссёр: </span>
            {director}
          </p>
          <p>
            <span className="text-orange-800">Сценарист: </span>
            {scenario}
          </p>
          <p>
            <span className="text-orange-800">Продюсер: </span>
            {producer}
          </p>
          <p>
            <span className="text-orange-800">Актёры: </span>
            {actors.join(", ")}
          </p>
        </div>
      </div>
      <p className="mt-5">{fullDescription}</p>
      <Carousel screens={screens} />
    </div>
  );
}
