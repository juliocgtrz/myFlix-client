import React from "react";
import { Navbar, Container, Nav, Row, Col, Form } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/reducers/user/user";

export const NavigationBar = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch;

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to ="/">
                    <span className="h5">MyFlix App</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarResponsive" />
                <Navbar.Collapse id="navbarResponsive">
                    <Nav className="me-auto">
                        {user === null ? (
                            <>
                                <Nav.Link as={Link} to="/login">
                                    Login
                                </Nav.Link>
                                <Nav.Link as={Link} to="/signup">
                                    Signup
                                </Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/movies">
                                    Home
                                </Nav.Link>
                                <Nav.Link as={Link} to="/profile">
                                    Profile
                                </Nav.Link>
                                <Nav.Link onClick={() => dispatch(setUser(null))}>Logout</Nav.Link>
                            </>
                        )}
                    </Nav>
                    {user !== null && (
                        <Nav>
                            <Nav.Link onClick={() => dispatch(clearUser())} className="ms-auto text-warning">
                                Logout
                            </Nav.Link>
                        </Nav>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
