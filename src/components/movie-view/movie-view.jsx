import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./movie-view.scss";
import { useDispatch, useSelector } from "react-redux";

export const MovieView = ({ movies }) => {
    const { movieId } = useParams();
    const movie = movies.find((movie) => movie.id === movieId);
    const movies = useSelector((state) => state.movies.list);
    const dispatch = useDispatch();

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
