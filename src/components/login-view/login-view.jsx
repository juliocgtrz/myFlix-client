import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const LoginView = ({ onLoggedIn }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (event) => {
        //this prevents the default behavior of the form which is to reload the entire page
        event.preventDefault();

        const data = {
            Username: username,
            Password: password
        };

        fetch("https://my-movies-flix-db-60666e043a4b.herokuapp.com/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((response) => response.json())
        .then((data) => {
            console.log("Login response: ", data);
            if (data.user) {
                localStorage.setItem("user", JSON.stringify(data.user));
                localStorage.setItem("token", data.token);
                dispatch(setUser(data.user, data.token));
            } else {
                alert("No such user");
            }
        })
        .catch((e) => {
            console.error("login error: ", e);
            alert("Something went wrong");
        });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
                <Form.Label>Username:</Form.Label>
                <Form.Control
                    type="text"
                    minLength="5"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="mb-4"
                />
            </Form.Group>
                    
            <Form.Group controlId="formPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="mb-4"
                />
            </Form.Group>
            <Button variant="primary" type="submit">Login</Button>
        </Form>
    );
};

LoginView.propTypes = {
    onLoggedIn: PropTypes.func.isRequired,
};