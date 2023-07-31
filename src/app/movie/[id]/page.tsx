import MoviePage from "@/components/MoviePage";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div id={params.id}>
      <MoviePage />
    </div>
  );
}
