import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/reducers/user/user";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const LoginView = ({ onLoggedIn }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (event) => {
        //this prevents the default behavior of the form which is to reload the entire page
        event.preventDefault();
        dispatch(loginUser({ email: localUserData.email, password: localUserData.password}));
    };

    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <h3 className="mb-4">Login</h3>
                    <Form className="form" onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="Username">Username:</Form.Label>
                            <Form.Control
                                type="text"
                                minLength="5"
                                value={localUserData.username}
                                onChange={(e) =>
                                    setLocalUserData((prevlocalUserData) => ({
                                        ...prevlocalUserData,
                                        username: e.target.value,
                                    }))
                                }
                                required
                            />
                        </Form.Group>
                    
                        <Form.Group className="mb-4">
                            <Form.Label htmlFor="Password">Password:</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    id="Password"
                                    type={passwordShown ? "text" : "password"}
                                    value={localUserData.password}
                                    onChange={(e) => 
                                        setLocalUserData((prevlocalUserData) => ({
                                            ...prevlocalUserData,
                                            password: e.target.value,
                                        }))
                                    }
                                    minLength="8"
                                    required
                                />
                            </InputGroup>
                        </Form.Group>
                        <Button variant="primary" type="submit">Login</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};
