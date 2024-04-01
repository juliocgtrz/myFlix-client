import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Container, Col, Spinner } from "react-bootstrap";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../../redux/reducers/movies";
import { setUserData, setToken } from "../../redux/reducers/user/user";

//Components
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { ProfileView } from "../profile-view/profile-view";
import { useSelector, useDispatch } from "react-redux";
import { setMovies } from "../../redux/reducers/movies";
import { setUser } from "../../redux/reducers/user/user";
import { MoviesList } from "../movies-list";

export const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const movies = useSelector((state) => state.movies.list);
    const user = useSelector((state) => state.user);
    const [token, setToken] = useState(storedToken ? storedToken : null);
    const dispatch = useDispatch();

    //Load data from API
    useEffect(() => {
        if (!token) {
            return;
        }    

        fetch("https://my-movies-flix-db-60666e043a4b.herokuapp.com/movies", {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Movies data: ", data);
                const moviesFromApi = data.map((movie) => {
                    return {
                        id: movie._id,
                        image: movie.ImagePath,
                        title: movie.Title,
                        description: movie.Description,
                        genre: movie.Genre.Name,
                        director: movie.Director.Name,
                        featured: movie.featured,
                    };
                });
                localStorage.setItem("movies", JSON.stringify(moviesFromApi));
                dispatch(setMovies(moviesFromApi));
            });
    }, []);

    return (
        <BrowserRouter>
            <NavigationBar />
            <Row className="justify-content-md-center">
                <Routes>
                    <Route path="/signup" element={
                        user ?
                            (<Navigate to="/" />) : <SignupView />} />
                    <Route path="/login" element={
                        user ?
                            (<Navigate to="/" />) : <LoginView />} />
                    <Route
                        path="/movies"
                        element={
                            <>
                                {user ? (
                                    <Navigate to="/" />
                                ) : (
                                    <Col md={5}>
                                        <SignupView />
                                    </Col>
                                )}
                            </>
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <>
                                {user ? (
                                    <Navigate to="/" />
                                ) : (
                                    <Col md={5}>
                                        <LoginView />
                                    </Col>
                                )}
                            </>
                        }
                    />
                    <Route
                        path="/movies/:movieId"
                        element={
                            <>
                                {!user ? (
                                    <Navigate to="/login" replace />
                                ) : movies.length === 0 ? (
                                    <Col>The list is empty!</Col>
                                ) : (
                                    <Col md={8}>
                                        <MovieView />
                                    </Col>
                                )}
                            </>
                        }
                    />
                    <Route
                        path="/"
                        element={
                            <>
                                {!user ? <Navigate to="/login" replace /> : <MoviesList />}</>
                        }
                    />
                    <Route path="/profile"
                        element={
                            user ? <ProfileView /> : <Navigate to="/login" replace />
                        }
                    />
                </Routes>
            </Container>
        </BrowserRouter>
    );
};
