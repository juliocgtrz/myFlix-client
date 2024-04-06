import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { MovieCard } from "./movie-card/movie-card";
import { MoviesFilter } from "./movies-filter/movies-filter";
import Row from "react-bootstrap/Row";

export const MoviesList = () => {
    const movies = useSelector((state) => state.movies.list);
    const filter = useSelector((state) => state.movies.filter).trim().toLowerCase();

    let filteredMovies = movies?.filter((movie) => {
        return movie.title.toLowerCase().includes(filter);
    });

    useEffect(() => {
        if (filteredMovies === null) {
            console.log("inside if in useEffect in MovieList");
            filteredMovies = movies.filter((movie) => {
                return movie.title.toLowerCase().includes(filter);
            });
        }
    }, [filter]);

    const movieCards = filteredMovies?.map(movie => {
        return <MovieCard key={movie.id} movie={movie} />;
    });

    return (
        <Row className="g-4">
            <MoviesFilter />
            <hr></hr>
            {movieCards}
        </Row>
    );
};
