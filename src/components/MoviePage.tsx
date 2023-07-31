import Header from "./Header";
import MovieCard from "./MovieCard";
// import { useRouter } from "next/router";

export default function MoviePage() {
// const router = useRouter();
// const { id } = router.query;

    return (
        <div>
            <Header />
            {/* <MovieCard 
                id={id}
                cover={cover}
                name={name}
                director={director}
                scenario={scenario}
                producer={producer}
                actors={actors}
                fullDescription={fullDescription}
                // screens={screens}
            /> */}
        </div>
    )
}