import React from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/reducers/movies";

export const MoviesFilter = () => {
    const filter = useSelector((state) => state.movies.filter);
    const dispatch = useDispatch();

    return (
        <>
            <Form.Group className="form">
                <Form.Label htmlFor="filter">Search</Form.Label>
                <InputGroup>
                    <Form.Control
                        id="filter"
                        type="text"
                        placeholder="Search..."
                        value={filter}
                        onChange={(e) => dispatch(setFilter(e.target.value))}
                    />
                    <Button variant="outline-secondary" onClick={() => dispatch(setFilter(""))}>
                        Search
                    </Button>
                </InputGroup>
            </Form.Group>
        </>
    );
};
