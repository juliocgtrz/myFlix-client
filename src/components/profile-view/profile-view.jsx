import { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { UserInfo } from "./user-info";
import { favoriteMovies } from "./favorite-movies";
import { UpdateUser } from "./update-user";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const ProfileView = ({localUser, movies, token}) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    const [username, setUsername]= useState(storedUser.username);
    const [password, setPassword]= useState(storedUser.password);
    const [email,setEmail]= useState(storedUser.email);
    const [birthday, setBirthday]= useState(storedUser.birthday);
    const [user, setUser]= useState();
    const favoriteMovies = user === undefined ? [] : movies.filter(m => user.favoriteMovies?.includes(m.title))

    const formData = {
        username: username,
        password: password,
        email: email,
        birthday: birthday
    }
    const handleSubmit = (event) => {
        event.preventDefault(event);
        fetch(`https://my-movies-flix-db-60666e043a4b.herokuapp.com/users/${user.username}`, {
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
        fetch (`https://my-movies-flix-db-60666e043a4b.herokuapp.com/users/${storedUser.username}`, {
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
            setUser(usersFromApi.find((u) => u.username === localUser.username));
            console.log("Profile Saved User: " + JSON.stringify(user));
        })
        .catch((error) => {
            console.error(error);
        });
    }, [token]);

    return (
        <Container className="mx-1">
            <Row>
                <Card className="mb-5">
                    <Card.Body>
                        <Card.Title>My Profile</Card.Title>
                        <Card.Text>
                            {
                                user && (<UserInfo name={user.username} email={user.email} />)
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
                        favoriteMovies && (<favoriteMovies user={user} favoriteMovies={favoriteMovies} />)
                    }
                </Col>
            </Row>
        </Container>
    );
};
