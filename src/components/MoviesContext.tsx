"use client"

import { createContext, useState, useEffect, ReactNode } from 'react';

interface Movie {
    id: string;
    type: string;
    cover: string;
    name: string;
    date: string;
    shortDescription: string;
    director: string,
    scenario: string,
    producer: string,
    actors: string[],
    fullDescription: string,
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
        const response = await fetch('http://localhost:3001/movies');
        const data = await response.json();
        console.log(data)
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


// MoviesList.js

// import React, { useContext } from 'react';
// import MoviesContext from './MoviesContext';
// import MovieItem from './MovieItem';

// const MoviesList = () => {
//   const movies = useContext(MoviesContext);

//   return (
//     <div className="flex flex-col items-center">
//       <h1>Movie List</h1>
//       {movies.map((movie, id) => (
//         <MovieItem
//           key={id}
//           cover={movie.cover}
//           name={movie.name}
//           date={movie.date}
//           shortDescription={movie.shortDescription}
//         />
//       ))}
//     </div>
//   );
// };

// export default MoviesList;
