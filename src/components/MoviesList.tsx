"use client";

import { useState, useEffect } from "react";
import MovieItem, { MovieItemProps } from "./MovieItem";

export default function MoviesList() {
  const [movies, setMovies] = useState<MovieItemProps[]>([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const response = await fetch("http://localhost:3001/movies");
        const data = await response.json();
        setMovies(data);
        // console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    getMovies();
  }, []);

  return (
    <div className="flex flex-col items-center">
      {movies.map((movie, id) => (
        <MovieItem
          key={id}
          cover={movie.cover}
          name={movie.name}
          date={movie.date}
          shortDescription={movie.shortDescription}
        />
      ))}
    </div>
  );
}
