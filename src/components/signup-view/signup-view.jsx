import React, { useState } from "react";
import { Modal, Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/reducers/user/user";

const signupUser = async (userData) => {
    try {
        const response = await fetch("https://my-movies-flix-db-60666e043a4b.herokuapp.com/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        });

        const data = await response.json();

        if (response.status === 422) {
            throw new Error(data.errors.map(err => err.msg).join(", "));
        } else if (response.status === 201) {
            return data;
        }else if (response.status === 500) {
            throw new Error(data.message || "Server error. Please try again later.");
        }
    } catch (error) {
        throw error;
    }
};

export const SignupView = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        birthday: "",
    });
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({ title: "", message: "" });
    const [passwordShown, setPasswordShown] = useState(false);
    const dispatch = useDispatch();

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const userData = await signupUser(formData);

            setModalContent({ title: "Hello", message: `Signup successful! Welcome, ${userData.username || "user"}. `});
            setShowModal(true);
            dispatch(loginUser({ username: formData.username, password: formData.password }));
        } catch (error) {
            setModalContent({ title: "Error", message: error.message });
            setShowModal(true);
        }
    };

    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <h3 className="mb-4">Sign Up</h3>
                    <Form className="form" onSubmit={handleSubmit}>
                        <Form.Group className="my-3">
                            <Form.Label htmlFor="username">Username</Form.Label>
                            <Form.Control
                                type="text"
                                id="username"
                                name="username"
                                className="rounded"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="my-3">
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control
                                type="email"
                                id="email"
                                name="email"
                                className="rounded"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="my-3">
                            <Form.Label htmlFor="password">Password</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    id="password"
                                    name="password"
                                    type={passwordShown ? "text" : "password"}
                                    value={formData.password}
                                    onChange={handleChange}
                                    minLength="8"
                                    required
                                />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="my-3">
                            <Form.Label htmlFor="birthday">Birthday</Form.Label>
                            <Form.Control
                                type="date"
                                id="birthday"
                                name="birthday"
                                className="rounded"
                                value={formData.birthday}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Button type="submit" className="mt-2">
                            Sign Up
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Modal size="sm" centered animation={false} show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Hello!</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalContent.message}</Modal.Body>
            </Modal>
        </Container>
    );
};
