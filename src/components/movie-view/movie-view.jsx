import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import "./movie-view.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/reducers/user/user";

export const MovieView = () => {
    const movies = useSelector((state) => state.movies.data);
    const dispatch = useDispatch();
    const { movieId } = useParams();
    const movie = movies.find(movie => movie.title === movieId);
    const isFavorite = useSelector((state) => state.user.userData.favoriteMovies.includes(movie.id));

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
        <Container className="col-xl-10 xol-l-11">
            <Row>
                <Col md={6} className="p-3">
                    <h1>{movie.title}</h1>
                    <Container>
                        <Row className="d-sm-flex flex-sm-row flex-column justify-content-between align-items-end p-0 mb-2">
                            <Col className="p-0">
                                <h4 className="mb-0">{movie.director}</h4>
                            </Col>
                            <Col className="p-0 text-nowrap text-sm-end">
                                <p className="mb-0">{combineGenreNames(movie.genre)}</p>
                            </Col>
                        </Row>
                    </Container>
                    <hr className="my-0"></hr>
                    <p className="my-sm-2">{movie.description}</p>
                </Col>
                <Col md={6} className="p-3 d-flex justify-content-center justify-content-md-end align-items-center">
                    <div style={{ position: "relative" }}>
                        <Image className="rounded movie-poster" src={movie.image} alt={`Poster of the movie ${movie.title}`} />
                    </div>
                </Col>
            </Row>
            <hr></hr>
        </Container>
    );
};
