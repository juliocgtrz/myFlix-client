import React, { useState } from "react";
import { Button, Container, Row, Col, InputGroup, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { MovieCard } from "../movie-card/movie-card";
import { setUserData, clearUser } from "../../redux/reducers/user/user";

export const ProfileView = () => {
    const movies = useSelector((state) => state.movies.data);
    const user = useSelector((state) => state.user.userData);
    const token = useSelector((state) => state.user.token);
    const dispatch = useDispatch();

    const [localUser, setLocalUser] = useState(user);
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordRepeat, setNewPasswordRepeat] = useState("");
    const [passwordShown, setPasswordShown] = useState(false);
    const [checkPhrase, setCheckPhrase] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({ title: "", message: "" });
    const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] = useState(false);
    const [showPasswordChangeModal, setShowPasswordChangeModal] = useState(false);

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

        switch (type) {
            case "userData":
                setModalData({ title: "Update", message: "Changes saved.", error: false });
                break;
            case "password":
                setModalData({ title: "Update", message: "New password saved.", error: false });
                break;
            default:
                setModalData({ title: "Update", message: "User data updated successfully.", error: false });
        }

        fetch(`https://my-movies-flix-db-60666e043a4b.herokuapp.com/users/${user.email}`, fetchOptions)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Failed to update account.");
                }
            })
            .then(updatedUser => {
                setNewPassword("");
                setNewPasswordRepeat("");
                setShowModal(true);
                dispatch(setUserData(updatedUser));
            })
            .catch((e) => {
                setModalData({ title: "Error", message: `Something went wrong: ${e.message}`, error: true });
                setShowModal(true);
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
        setShowPasswordChangeModal(false);
        fetchRequest({ password: newPassword }, "password");
    };

    const handleDeleteAccount = () => {
        setShowDeleteConfirmationModal(false);
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        };
            
        fetch(`https://my-movies-flix-db-60666e043a4b.herokuapp.com/users/${user.email}`, {
            method: "DELETE",
            headers: headers,
        })
            .then (response => {
                if (response.ok) {
                    dispatch(clearUser());
                } else {
                    throw new Error("Failed to delete account.");
                }
            })
            .catch((e) => {
                setModalData({ title: "Error", message: `Something went wrong: ${e.message}` });
                setShowModal(true);
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
                {favoriteMovieCards.length > 0 ? favoriteMovieCards : <Col><p className="">Your list of favorite movies is still empty.</p></Col>}
            </Row>
            <hr></hr>
            <Row>
                <Col>
                    <Form className="form" onSubmit={handleUserUpdateSubmit}>
                        <h2 className="mb-4">Account Information</h2>
                        <Form.Group className="my-3">
                            <Form.Label htmlFor="firstname">First Name</Form.Label>
                            <Form.Control
                                id="firstname"
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
                            <Form.Label htmlFor="lastname">Last Name</Form.Label>
                            <Form.Control
                                id="lastname"
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
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control
                                id="email"
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
                            <Form.Label htmlFor="birthday">Birthday</Form.Label>
                            <Form.Control
                                id="birthday"
                                type="date"
                                value={localUser.birthday}
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
                            setShowPasswordChangeModal(true);
                        }}>
                        <h4 className="mt-4">Change password</h4>
                        <Form.Group className="">
                            <Form.Label htmlFor="password">New Password</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    id="password"
                                    type={passwordShown ? "text" : "password"}
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    minLength="8"
                                    isInvalid={newPassword && newPasswordRepeat && newPassword !== newPasswordRepeat}
                                />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="my-3">
                            <Form.Label htmlFor="newPasswordRepeat">Reenter Password</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    id="newPasswordRepeat"
                                    type={passwordShown ? "text" : "password"}
                                    value={newPasswordRepeat}
                                    onChange={(e) => setNewPasswordRepeat(e.target.value)}
                                    minLength="8"
                                    isInvalid={newPassword && newPasswordRepeat && newPassword !== newPasswordRepeat}
                                />
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
                            <Button variant="danger" onClick={() => setShowDeleteConfirmationModal(true)} disabled={!checkPhrase}>
                                Delete Account
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
            <Modal show={showPasswordChangeModal} onHide={() => setShowPasswordChangeModal(false)} centered animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-warning">Change Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to <span className="text-warning">change</span> your <span className="text-warning">password</span>?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowPasswordChangeModal(false)}>Cancel</Button>
                    <Button variant="danger" onClick={handlePasswordChangeSubmit}>Change Password</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={setShowDeleteConfirmationModal} onHide={() => setShowDeleteConfirmationModal(false)} centered animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-warning">Confirm Account Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to <span className="text-warning">delete</span> your account?<br />This action cannot be undone.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteConfirmationModal(false)}>Cancel</Button>
                    <Button variant="danger" onClick={handleDeleteAccount}>Delete Account</Button>
                </Modal.Footer>
            </Modal>

            <Modal size="sm" show={showModal} onHide={() => setShowModal(false)} centered animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-warning fs-5">{modalData.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalData.message}</Modal.Body>
            </Modal>
        </Container>
    );
};
