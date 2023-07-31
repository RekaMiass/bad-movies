"use client";

import { createContext, useState, useEffect, ReactNode } from "react";

interface Movie {
  id: string;
  type: string;
  cover: string;
  name: string;
  date: string;
  shortDescription: string;
  director: string;
  scenario: string;
  producer: string;
  actors: string[];
  fullDescription: string;
  screens: string[];
}

interface MoviesContextType {
  movies: Movie[];
}

interface MoviesProviderProps {
  children: ReactNode;
}

const MoviesContext = createContext<MoviesContextType | null>(null);

export const MoviesProvider = ({ children }: MoviesProviderProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const response = await fetch("http://localhost:3001/movies");
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    }

    getMovies();
  }, []);

  return (
    <MoviesContext.Provider value={{ movies }}>
      {children}
    </MoviesContext.Provider>
  );
};

export { MoviesContext };
