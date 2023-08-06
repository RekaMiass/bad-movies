import Image from "next/image";
import Carousel from "./Slider/Slider";
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
  screens: string[];
}

export default function MovieCard({
  cover,
  name,
  director,
  scenario,
  producer,
  actors,
  fullDescription,
  screens,
}: MovieCardProps) {
  const { movies } = useContext(MoviesContext) || { movies: [] };
  return (
    <div className="flex flex-col">
      <div className="sm:flex sm:gap-x-5">
        <Image
          className="mx-auto sm:mx-0 h-70 w-40 sm:h-100 sm:w-60"
          src={cover}
          width={300}
          height={300}
          alt={""}
        />
        <div>
          <h1 className="text-center sm:text-start text-2xl sm:text-4xl font-bold uppercase mb-5">
            {name}
          </h1>
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
