import React from "react";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./movie-view.scss";

export const MovieView = ({ movies }) => {
    const { movieId } = useParams();
    const movie = movies.find((m) => m.id === movieId);
    return (
        <div>
            <div>
                <img src={movie.image} className="justify-content-md-center" />
            </div>
            <div>
                <span>Title: </span>
                <span>{movie.title}</span>
            </div>
            <div>
                <span>Description: </span>
                <span>{movie.description}</span>
            </div>
            <div>
                <span>Genre: </span>
                <span>{movie.genre}</span>
            </div>
            <div>
                <span>Director: </span>
                <span>{movie.director}</span>
            </div>
            <div>
                <span>Featured: </span>
                <span>{movie.featured ? "True" : "False"}</span>
            </div>
            <Link to={`/`}>
                <Button className="back-button" style={{ cursor: "pointer" }}>Back</Button>
            </Link>
        </div>
    );
};

MovieView.PropTypes = {
    movies: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        genre: PropTypes.string,
        director: PropTypes.string,
    }).isRequired,
};