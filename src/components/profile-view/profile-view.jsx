import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button, Card, Container } from "react-bootstrap";
import { UserInfo } from "./user-info";
import { FavoriteMovies } from "./favorite-movies";
import { UpdateUser } from "./update-user";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const ProfileView = ({localUser, movies, token }) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    const [username, setUsername]= useState(storedUser.Username);
    const [password, setPassword]= useState(storedUser.Password);
    const [email,setEmail]= useState(storedUser.Email);
    const [birthday, setBirthday]= useState(storedUser.Birthday);
    const [user, setUser]= useState();
    
    const favoriteMovies = localUser === undefined ? [] : movies.filter(m => localUser.FavoriteMovies?.includes(m.id));
console.log(favoriteMovies)
    const formData = {
        Username: username,
        Password: password,
        Email: email,
        Birthday: birthday
    };
    const handleSubmit = (event) => {
        event.preventDefault(event);
        fetch(`https://my-movies-flix-db-60666e043a4b.herokuapp.com/users/${user.Username}`, {
            method: "PUT",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}` }
            }
        )
        .then((response) => {
            if (response.ok) {
                alert("Update successful");
                window.location.reload();

                return response.json()
            }
            alert("Update failed");
        })
        .then((user) => {
            if (user) {
                localStorage.setItem("user", JSON.stringify(user));
                setUser(user)
            }
        })
        .catch((error) => {
            console.error(error);
        });
    };

    const handleUpdate = (e) => {
        switch(e.target.type) {
            case "text":
                setUsername(e.target.value);
                break;
            case "password":
                setPassword(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
                break;
            case "date":
                setBirthday(e.target.value);
                default:
        }
    }

    const handleDeleteAccount = () => {
        fetch (`https://my-movies-flix-db-60666e043a4b.herokuapp.com/users/${storedUser.Username}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
            }
        }).then ((response) => {
            if (response.ok) {
                alert("Account deleted successfully");
                localStorage.clear();
                window.location.reload();
            } else {
                alert("Something went wrong");
                }
        });
    };

    useEffect(() => {
        if (!token) {
            return;
        }

        fetch("https://my-movies-flix-db-60666e043a4b.herokuapp.com/users", {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Users data: ", data);
            const usersFromApi = data.map((resultUser) => {
                return {
                    id: resultUser._id,
                    username: resultUser.username,
                    password: resultUser.password,
                    email: resultUser.email,
                    birthday: resultUser.birthday,
                    favoriteMovies: resultUser.favoriteMovies
                };
            });
            setUser(usersFromApi.find((u) => u.username === localUser.Username));
            console.log("Profile Saved User: " + JSON.stringify(user));
        })
        .catch((error) => {
            console.error(error);
        });
    }, [token]);

    return (
        <Container>
            <Row>
                <Card className="mb-5">
                    <Card.Body>
                        <Card.Title>My Profile</Card.Title>
                        <Card.Text>
                            {
                                user && (<UserInfo name={user.Username} email={user.Email} />)
                            }
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="mb-5">
                    <Card.Body>
                        <UpdateUser
                            formData={formData}
                            handleUpdate={handleUpdate}
                            handleSubmit={handleSubmit}
                            handleDeleteAccount={handleDeleteAccount}
                        />
                    </Card.Body>
                </Card>
            </Row>
            <Row>
                <Col className="mb-5" xs={12} md={12}>
                    {
                        favoriteMovies && (<FavoriteMovies user={user} favoriteMovies={favoriteMovies} />)
                    }
                </Col>
            </Row>
        </Container>
    );
};

ProfileView.propTypes = {
    localUser: PropTypes.object.isRequired,
    movies: PropTypes.array.isRequired,
    token: PropTypes.string.isRequired
};
