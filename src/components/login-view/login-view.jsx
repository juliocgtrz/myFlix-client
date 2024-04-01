import React, { useEffect } from "react";
import { Container, Row, Col, Form, Button, InputGroup, Modal, Spinner } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/reducers/user/user";


export const LoginView = ({ onLoggedIn }) => {
    const userStatus = useSelector((state) => state.user.status);
    const userError = useSelector((state) => state.user.error);
    const dispatch = useDispatch();

    const [passwordShown, setPasswordShown] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [localUserData, setLocalUserData] = useState({
        username: "",
        password: "",
    });

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(loginUser({ username: localUserData.username, password: localUserData.password }));
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
        <Container className="mt-5">
            <Row>
                <Col>
                    <h3 className="mb-4">Login</h3>
                    <Form className="form" onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="username">Username:</Form.Label>
                            <Form.Control
                                type="username"
                                id="username"
                                className="rounded"
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
                    
                        <Form.Group className="my-3">
                            <Form.Label htmlFor="password">Password:</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    id="password"
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
                        <Button type="submit" className="mt-2">Login</Button>
                    </Form>
                </Col>
            </Row>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-warning">Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {modalMessage}
                </Modal.Body>
            </Modal>
        </Container>
    );
};
