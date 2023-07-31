"use client";

import MovieCard from "./MovieCard";
import { useContext } from "react";
import { MoviesContext } from "@/components/MoviesContext";
import { useParams } from "next/navigation";

export default function MoviePage() {
  const { movies } = useContext(MoviesContext) || { movies: [] };
  const params = useParams();
  const id = params ? params.id : null;
  const movieId = parseInt(id as string, 10);
  const movie = movies[movieId];

  return (
    <div className="w-3/4 mx-auto mt-10">
      <MovieCard
        id={movie.id}
        cover={movie.cover}
        name={movie.name}
        director={movie.director}
        scenario={movie.scenario}
        producer={movie.producer}
        actors={movie.actors}
        fullDescription={movie.fullDescription}
        screens={movie.screens}
      />
    </div>
  );
}
