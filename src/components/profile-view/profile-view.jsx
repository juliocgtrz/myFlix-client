import { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const ProfileView = ({localUser, movies, token}) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
}