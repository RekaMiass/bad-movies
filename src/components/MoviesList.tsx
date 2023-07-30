"use client";

import React, { useState, useEffect } from "react";
import MovieItem, { MovieItemProps } from "./MovieItem";
import Filters from "./Filters";

export default function MoviesList() {
  const [movies, setMovies] = useState<MovieItemProps[]>([]);
  const [selectedType, setSelectedType] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const [selectedYear, setSelectedYear] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const [filteredMovies, setFilteredMovies] = useState<MovieItemProps[]>([]);

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

  useEffect(() => {
    const filtered = movies.filter(
      (movie) =>
        (!selectedType || movie.type === selectedType.value) &&
        (!selectedYear || movie.date === selectedYear.value)
    );
    setFilteredMovies(filtered);
  }, [movies, selectedType, selectedYear]);

  const typeOptions = [
    { value: "movie", label: "Фильмы" },
    { value: "series", label: "Сериалы" },
  ];

  const yearOptions = Array.from(
    new Set(movies.map((movie) => movie.date))
  ).sort().map((year) => ({
    value: year,
    label: year,
  }));

  const resetFilters = () => {
    setSelectedType(null);
    setSelectedYear(null);
  };

  return (
    <div className="flex flex-col mt-5">
      <div className="flex ml-[13%] gap-x-5">
        <Filters
          options={typeOptions}
          selectedOption={selectedType}
          setSelectedOption={setSelectedType}
          label="Выбрать тип"
        />
        <Filters
          options={yearOptions}
          selectedOption={selectedYear}
          setSelectedOption={setSelectedYear}
          label="Выбрать год"
        />
        <button className="w-20 text-sm leading-4 border-2 rounded-md" onClick={resetFilters}>Сбросить фильтры</button>
      </div>
      <div className="flex flex-col items-center">
        {filteredMovies.map((movie) => (
          <MovieItem
            key={movie.id}
            cover={movie.cover}
            name={movie.name}
            date={movie.date}
            shortDescription={movie.shortDescription}
            type={""}
            id={""}
          />
        ))}
      </div>
    </div>
  );
}
