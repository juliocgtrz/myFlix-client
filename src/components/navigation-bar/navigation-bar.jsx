import React from "react";
import { Navbar, Container, Nav, Row, Col, Form } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import PropTypes from "prop-types";

export const NavigationBar = ({ user, movies, onLoggedOut, setQuery }) => {
    return (
        <Navbar bg="dark" expand="lg" bg="primary" className="nav navbar-dark">
            <Container>
                <Navbar.Brand as={Link} to ="/">
                    MyFlix App
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {!user && (
                            <>
                                <Nav.Link as={Link} to="/login">
                                    Login
                                </Nav.Link>
                                <Nav.Link as={Link} to="/signup">
                                    Signup
                                </Nav.Link>
                            </>
                        )}
                        {user && (
                            <>
                                <Nav.Link as={Link} to="/">
                                    Home
                                </Nav.Link>
                                <Nav.Link as={Link} to="/profile">
                                    Profile
                                </Nav.Link>
                                <Nav.Link onClick={onLoggedOut}>Logout</Nav.Link>
                                <Navbar.Text>Search Movies:</Navbar.Text>
                                <input
                                    type="text"
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

NavigationBar.propTypes = {
    user: PropTypes.object.isRequired,
    onLoggedOut: PropTypes.func.isRequired
};