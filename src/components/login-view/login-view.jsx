import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/reducers/user/user";
import { Container, Row, Col, Form, Button, InputGroup, Modal, Spinner } from "react-bootstrap";

export const LoginView = ({ onLoggedIn }) => {
    const userStatus = useSelector((state) => state.user.status);
    const userError = useSelector((state) => state.user.error);
    const dispatch = useDispatch();

    const [passwordShown, setPasswordShown] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [localUserData, setLocalUserData] = useState({
        email: "",
        password: "",
    });

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(loginUser({ email: localUserData.email, password: localUserData.password }));
    };

    useEffect(() => {
        if (userStatus === "failed") {
            setModalMessage(userError);
            setShowModal(true);
        }
    }, [userStatus, userError]);

    if (userStatus === "loading") {
        return (
            <Container>
                <Row>
                    <Col className="d-flex justify-content-center align-items-center" >
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading..</span>
                        </Spinner>
                    </Col>
                </Row>
            </Container>
        );
    };

    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <h3 className="mb-4">Login</h3>
                    <Form className="form" onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="email">Email:</Form.Label>
                            <Form.Control
                                type="email"
                                id="email"
                                className="rounded"
                                value={localUserData.email}
                                onChange={(e) =>
                                    setLocalUserData((prevlocalUserData) => ({
                                        ...prevlocalUserData,
                                        email: e.target.value,
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
