import Image from "next/image";
import Header from "@/components/Header";
import MoviesList from "@/components/MoviesList";
import MovieCard from "@/components/MovieCard";
import Link from "next/link";
import MoviePage from "@/components/MoviePage";

export default function Page() {
  return (
    <div>
      <MoviesList />
    </div>
  );
}
