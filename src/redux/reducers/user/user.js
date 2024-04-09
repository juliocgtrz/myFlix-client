import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
    "user/login",
    async ({ email, password }, { rejectWithValue }) => {
        console.log({email, password });
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
        setUserData: (state, action) => {
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                localStorage.setItem("user", JSON.stringify(action.payload.user));
                localStorage.setItem("token", action.payload.token);
                state.userData = action.payload.user;
                state.token = action.payload.token;
                state.status = "succeeded";
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(toggleFavorite.pending, () => {
            })
            .addCase(toggleFavorite.fulfilled, (state, action) => {
                localStorage.setItem("user", JSON.stringify(action.payload));
                state.userData = action.payload;
            })
            .addCase(toggleFavorite.rejected, (state, action) => {
                state.error = action.payload;
            });
    },
});

export const { setUserData, setToken, clearUser } = userSlice.actions;

export default userSlice.reducer;
