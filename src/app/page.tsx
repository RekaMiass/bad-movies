import Image from "next/image";
import Header from "@/components/Header";
import MoviesList from "@/components/MoviesList";
import MovieCard from "@/components/MovieCard";
import Link from "next/link";
import HomePage from "@/components/HomePage";
import MoviePage from "@/components/MoviePage";

export default function Home() {
  return (
    <ul>
      <li>
        {/* <Link href="/"> */}
          <HomePage />
        {/* </Link> */}
      </li>
      <li>
        {/* <Link href="/movie/:id">
          <MoviePage />
        </Link> */}
      </li>
    </ul>
  );
}

