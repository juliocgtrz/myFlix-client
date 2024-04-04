import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
    "user/login",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const response = await fetch("https://my-movies-flix-db-60666e043a4b.herokuapp.com/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message.message || "Could not login");
            }
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const toggleFavorite = createAsyncThunk(
    "user/toggleFavorite",
    async ({ movieId, isFavorite }, { getState, rejectWithValue }) => {
        const state = getState();
        const token = state.user.token;
        const userEmail = state.user.userData.email;
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        };
        const method = isFavorite ? "DELETE" : "POST";
        const url = `https://my-movies-flix-db-60666e043a4b.herokuapp.com/users/${userEmail}/favoriteMovies/${movieId}`;

        try {
            const response = await fetch(url, { method, headers });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || "Could not update favorite movies");
            }
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const userSlice = createSlice({
    name: "user",
    initialState: { userData: null, token: null, error: null },
    reducers: {
        setUser: (state, action) => {
            localStorage.setItem("user", JSON.stringify(action.payload));
            state.userData = action.payload;
        },
        setToken: (state, action) => {
            localStorage.setItem("token", action.payload);
            state.token = action.payload;
        },
        clearUser: (state) => {
            localStorage.clear();
            state.userData = null;
            state.token = null;
        }
    }
});

export const { setUserData, setToken, clearUser } = userSlice.actions;

export default userSlice.reducer;
