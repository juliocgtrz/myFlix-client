import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MovieCard } from "../movie-card/movie-card";
import { Link } from "react-router-dom";

export const FavoriteMovies = ({user, favoriteMovies}) => {

    const storedUser = JSON.parse(localStorage.getItem("user"));

    return (
        <Row>
            <Col md={12} >
                <h3>My Movies</h3>
            </Col>
            <Row>
                {favoriteMovies.map((movie) => {
                    return (
                        <Col className="mb-5" key={movie.id} md={4}>
                            <Link to={`/movies/${movie.id}`} />
                            <MovieCard
                                movie={movie}
                                isFavorite={storedUser.FavoriteMovies.includes(movie.id)}
                            />
                        </Col>
                    );
                })}
            </Row>
        </Row>
    );
};

FavoriteMovies.propTypes = {
    favoriteMovies: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired
};