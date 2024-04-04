import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk(
    "movies/fetchMovies",
    async (token, { rejectWithValue }) => {
        try {
            const response = await fetch("https://my-movies-flix-db-60666e043a4b.herokuapp.com/movies", {
                headers: { Authorization: `Bearer ${token}`},
            });
            if (!response.ok) {
                throw new Error("Failed to fetch movies");
            }
            const data = await response.json();
            return data.map((movie) => ({
                id: movie._id,
                image: movie.ImagePath,
                title: movie.Title,
                description: movie.Description,
                genre: movie.Genre.Name,
                director: movie.Director.Name,
            }));
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const moviesSlice = createSlice ({
    name: "movies",
    initialState: {
        data: [],
        filter: "",
        error: null,
    },
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        }
    }
});

//Exporting reducers
export const { setMovies, setFilter } = moviesSlice.actions;
export default moviesSlice.reducer;
