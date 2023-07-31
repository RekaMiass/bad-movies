import Link from "next/link";
import MoviePage from "@/components/MoviePage";
import MovieCard from "@/components/MovieCard";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div id={params.id}>
      <MoviePage />
    </div>
  );
}
