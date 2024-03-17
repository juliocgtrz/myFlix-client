import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [user, setUser] = useState(storedUser? storedUser : null);
    const [token, setToken] = useState(storedToken? storedToken : null); 
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        if (!token) {
            return;
        }    

        fetch("https://my-movies-flix-db-60666e043a4b.herokuapp.com/movies", {
            headers: { Authorization: 'Bearer ${token}' }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(token);
                const moviesFromApi = data.map((movie) => {
                    return {
                        id: movie._id,
                        image: movie.ImagePath,
                        title: movie.Title,
                        description: movie.Description,
                        genre: movie.Genre.Name,
                        director: movie.Director.Name,
                    };
                });
                localStorage.setItem("movies", JSON.stringify(moviesFromApi));
                setMovies(moviesFromApi);
            });
    }, [token]);

    return (
        <Row className="justify-content-md-center">
            {!user ? (
                <Col md={5}>
                    <LoginView onLoggedIn={(user, token) => { setUser(user); setToken(token); }} />
                    or
                    <SignupView />
                </Col>
            ) : selectedMovie ? (
                <>
                    <Button onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>
                    Logout
                    </Button>
                    <Col md={8}>
                        <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
                    </Col>
                </>
            ) : movies.length === 0 ? (
                <>
                    <Button onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>
                        Logout
                    </Button>
                    <div>The list is empty!</div>;
                </>
            ) : (
                <>
                    <Button onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>
                        Logout
                    </Button>
                    {movies.map((movie) => (
                        <Col className="mb-5" key={movie.id} md={3}>
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                                onMovieClick={(newSelectedMovie) => {
                                    setSelectedMovie(newSelectedMovie);
                                }}
                            />
                        </Col>    
                    ))}
                </>
            )}
        </Row>
    );
};
