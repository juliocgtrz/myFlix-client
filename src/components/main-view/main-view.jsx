import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../../redux/reducers/movies";
import { setUserData, setToken } from "../../redux/reducers/user/user";

//Components
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { ProfileView } from "../profile-view/profile-view";
import { MoviesList } from "../movies-list";


export const MainView = () => {
    //Redux
    const movies = useSelector((state) => state.movies.list);
    const user = useSelector((state) => state.user);
    const token = useSelector((state) => state.user.token);
    const dispatch = useDispatch();

    const safelyParseJSON = (json) => {
        try {
            return JSON.parse(json);
        } catch (error) {
            console.error("Parsing error on ", json, error);
            return null;
        }
    };

    //Load data from API
    useEffect(() => {
        //If user and token are saved in local storage the user does not have to login again
        const savedUser = safelyParseJSON(localStorage.getItem("user"));
        const savedToken = localStorage.getItem("token");

        if (!user && savedUser) {
            dispatch(setUserData(savedUser));
        }
        if (!token && savedToken) {
            dispatch(setToken(savedToken));
        }
        if (savedToken && !movies.length) {
            dispatch(fetchMovies(savedToken));
        }
    }, [user, token, movies.length, dispatch]);

    return (
        <BrowserRouter>
            <NavigationBar />
            <Container className="mt-5">
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
                            !user ? <Navigate to="/login" replace /> :
                                movies.length === 0 ?
                                    <Col><h2 classname="my-4">No movies to display.</h2></Col> :
                                    <MoviesList />
                        }
                    />
                <Route
                    path="/movies/:movieId"
                    element={!user ? <Navigate to="/login" replace /> : movies.length === 0 ?
                        <Col>No movies to display.</Col> :
                        <MovieView />}
                />
                <Route
                    path="/"
                    element={user ? <Navigate to="/movies" replace /> :
                        <Navigate to="/login" replace />}
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
