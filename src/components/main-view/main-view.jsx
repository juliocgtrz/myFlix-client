import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: "The Sandlot",
            image: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6C12E7878CF4642CE13C3DF5E64D6584802F1363ABE86BCBEFCA297B239B2E24/scale?width=1200&aspectRatio=1.78&format=jpeg",
            description: "Scotty Smalls moves to a new neighborhood with his mom and stepfather and wants to learn to play baseball. Benny Rodriguez, the neighborhood baseball guru, takes him under his wing and he soon becomes part of the local baseball buddies.",
            genre: "Comedy",
            director: "David Mickey Evans"
        },
        {
            id: 2,
            title: "A League of Their Own",
            image: "https://m.media-amazon.com/images/M/MV5BNjQ1NTQyYjktZDc5My00NDA1LWI1NmItY2ViNjQ0NDk4NmRjXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
            description: "Two sisters join the first female professional baseball league and struggle to help it succeed amid their own growing rivalry.",
            genre: "Comedy",
            director: "Penny Marshall"
        },
        {
            id: 3,
            title: "Bull Durham",
            image: "https://m.media-amazon.com/images/M/MV5BMzMxMDEzMWUtZDk3NS00MWRiLWJjOGMtN2Q0ZjVhZjU3ODhkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
            description: "A fan who has an affair with one minor-league baseball player each season meets an up-and-coming pitcher and the experienced catcher assigned to him.",
            genre: "Comedy",
            director: "Ron Shelton"
        },
    ]);

    const [selectedMovie, setSelectedMovie] = useState(null);

    if (selectedMovie) {
        return (
            <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
        );
    }

    if (movies.length === 0) {
        return <div>The list is empty!</div>;
    }

    return (
        <div>
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    onMovieClick={(newSelectedMovie) => {
                        setSelectedMovie(newSelectedMovie);
                    }}
                />    
            ))}
        </div>
    );
};
