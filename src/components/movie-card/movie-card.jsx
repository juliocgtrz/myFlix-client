import React from "react";
import PropTypes from "prop-types";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./movie-card.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/reducers/user/user";

export const MovieCard = ({ movie }) => {
    const isFavorite = useSelector((state) => state.user.userData.favoriteMovies.includes(movie.id));
    const dispatch = useDispatch();

    const toggle = () => {
        dispatch(toggleFavorite({
            movieId: movie.id,
            isFavorite
        }));
    }
    function combineGenreNames(genres) {
        return genres.map((genre) => genre.name).join(", ");
    }
    return (
        <Col lg={4} md={6} className="mb-3">
            <Card className="p-0 card text-start">
                <div style={{ position: "relative" }}>
                    <Link to={`/movies/${encodeURIComponent(movie.title)}`}>
                        <Card.Img
                            src={movie.ImagePath}
                            alt={`Movie poster of ${movie.title}`}
                            variant="top"
                        />
                    </Link>
                </div>
                <Card.Body className="p-2">
                    <Card.Title className="mb-1">
                        <Link to={`/movies/${encodeURIComponent(movie.id)}`} className="link">
                            {movie.title}
                        </Link>
                    </Card.Title>
                    <Card.Text className="card-text">
                        {movie.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-end p-2">
                    <small className="text-muted">
                        {combineGenreNames(movie.genre)}
                    </small>
                </Card.Footer>
            </Card>
        </Col>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
    }).isRequired,
};
