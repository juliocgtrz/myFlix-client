import React, { useEffect, useState } from "react";
import { Button, Card, Container, Row, Col, InputGroup } from "react-bootstrap";
import { UserInfo } from "./user-info";
import { FavoriteMovies } from "./favorite-movies";
import { UpdateUser } from "./update-user";
import { useDispatch, useSelector } from "react-redux";
import { MovieCard } from "../movie-card/movie-card";
import { setUserData, clearUser } from "../../redux/reducers/user/user";

export const ProfileView = () => {
    const movies = useSelector((state) => state.movies.list);
    const user = useSelector((state) => state.user);
    const token = useSelector((state) => state.user.token);
    const dispatch = useDispatch();

    const [localUser, setLocalUser] = useState(user);
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordRepeat, setNewPasswordRepeat] = useState("");
    const [passwordShown, setPasswordShown] = useState(false);
    const [checkPhrase, setCheckPhrase] = useState(false);
    const UpdateUserDataURL = `https://my-movies-flix-db-60666e043a4b.herokuapp.com/users/${user.email}`;

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };

    function fetchRequest(data, type) {
        let fetchOptions = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Host: "https://my-movies-flix-db-60666e043a4b.herokuapp.com",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(data),
        };

        fetch(UpdateUserDataURL, fetchOptions)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Failed to update account.");
                }
            })
            .then(updateUser => {
                setNewPassword("");
                setNewPasswordRepeat("");
                dispatch(setUserData(updateUser));
            });
    }
    
    const handleUserUpdateSubmit = (event) => {
        event.preventDefault();
        
        const data = {
            firstname: localUser.firstname,
            lastname: localUser.lastname,
            email: localUser.email,
            birthday: localUser.birthday,
        };
        fetchRequest(data, "userData");
    };

    const handlePasswordChangeSubmit = (event) => {
        event.preventDefault();

        fetchRequest({ password: newPassword }, "password");
    };

    const handleDeleteAccount = () => {
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        };
            
        fetch(UpdateUserDataURL, {
            method: "DELETE",
            headers: headers,
        })
            .then (response => {
                if (response.ok) {
                    dispatch(clearUser());
                } else {
                    throw new Error("Failed to delete account.");
                }
            });
                
    };

    const StringToDeleteAccount = `Delete account ${user.email}`;

    let favoriteMovies = user && user.favoriteMovies ? movies.filter(m => user.favoriteMovies.includes(m.id)) : [];
    const favoriteMovieCards = favoriteMovies.map(movie => {
        return <MovieCard key={movie.id} movie={movie} />;
    });

    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <h2 className="mb-4">My Movies</h2>
                </Col>
            </Row>
            <Row className="g-4">
                {favoriteMovieCards.length > 0 ? favoriteMovieCards : <Col><p className="">Your list of favorite movies is still empty. :(</p></Col>}
            </Row>
            <hr></hr>
            <Row>
                <Col>
                    <Form className="form" onSubmit={handleUserUpdateSubmit}>
                        <h2 className="mb-4">Account Information</h2>
                        <Form.Group className="my-3">
                            <Form.Label htmlFor="Firstname">First Name</Form.Label>
                            <Form.Control
                                id="Firstname"
                                type="text"
                                value={localUser.firstname}
                                onChange={(e) =>
                                    setLocalUser((prevUser) => ({
                                        ...prevUser,
                                        firstname: e.target.value,
                                    }))
                                }
                            />
                        </Form.Group>
                        <Form.Group className="my-3">
                            <Form.Label htmlFor="Lastname">Last Name</Form.Label>
                            <Form.Control
                                id="Lastname"
                                type="text"
                                value={localUser.lastname}
                                onChange={(e) =>
                                    setLocalUser((prevUser) => ({
                                        ...prevUser,
                                        lastname: e.target.value,
                                    }))
                                }
                                required
                            />
                        </Form.Group>
                        <Form.Group className="my-3">
                            <Form.Label htmlFor="Email">Email</Form.Label>
                            <Form.Control
                                id="Email"
                                type="email"
                                value={localUser.email}
                                onChange={(e) =>
                                    setLocalUser((prevUser) => ({
                                        ...prevUser,
                                        email: e.target.value,
                                    }))
                                }
                            />
                        </Form.Group>
                        <Form.Group className="my-3">
                            <Form.Label htmlFor="Birthday">Birthday</Form.Label>
                            <Form.Control
                                id="Birthday"
                                type="date"
                                value={formatDateForInput(localUser.birthday)}
                                onChange={(e) => {
                                    setLocalUser((prevUser) => ({
                                        ...prevUser,
                                        birthday: e.target.value,
                                    }));
                                }}
                            />
                        </Form.Group>
                        <div className="d-grid d-md-flex">
                            <Button type="submit" className="mt-2">
                                Save
                            </Button>
                        </div>
                    </Form>
                    <Form
                        className="form"
                        onSubmit={(event) => {
                            event.preventDefault();
                        }}>
                        <h4 className="mt-4">Change password</h4>
                        <Form.Group className="">
                            <Form.Label htmlFor="Password">Password</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    id="Password"
                                    type={passwordShown ? "text" : "password"}
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    minLength="8"
                                    isInvalid={newPassword && newPasswordRepeat && newPassword !== newPasswordRepeat}
                                />
                                <Button variant="outline-secondary" onClick={togglePasswordVisibility}>
                                </Button>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="my-3">
                            <Form.Label htmlFor="newPasswordRepeat">Repeat Password</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    id="newPasswordRepeat"
                                    type={passwordShown ? "text" : "password"}
                                    value={newPasswordRepeat}
                                    onChange={(e) => setNewPasswordRepeat(e.target.value)}
                                    minLength="8"
                                    isInvalid={newPassword && newPasswordRepeat && newPassword !== newPasswordRepeat}
                                />
                                <Button variant="outline-secondary" onClick={togglePasswordVisibility}>
                                </Button>
                            </InputGroup>
                            <Form.Control.Feedback type="invalid">
                                Passwords must match.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <div className="d-grid d-md-flex">
                            <Button
                                type="submit"
                                className="mt-2"
                                disabled={!(newPassword && newPasswordRepeat && newPassword === newPasswordRepeat)}>
                                Change Password
                            </Button>
                        </div>
                    </Form>
                    <hr></hr>
                    <Form className="form" onSubmit={handleDeleteAccount}>
                        <h3>Delete Account</h3>
                        <Form.Label htmlFor="deleteAccountCheck">
                            <p className="fw-lighter">To confirm account deletion, type:</p>
                            <p className="unselectable">
                                {" " + StringToDeleteAccount + " "}
                            </p>
                            <p className="fw-lighter">into the box below.</p>
                        </Form.Label>
                        <Form.Control
                            className="mb-2"
                            type="text"
                            id="deleteAccountCheck"
                            onChange={(e) => {
                                e.target.value === StringToDeleteAccount ? setCheckPhrase(true) : setCheckPhrase(false);
                            }}
                        />
                        <div className="d-grid d-md-flex">
                            <Button variant="danger" onClick={() => setShowDel}
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};
