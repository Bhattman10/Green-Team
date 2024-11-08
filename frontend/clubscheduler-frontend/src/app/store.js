import {configureStore} from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice"
import clubsReducer from "../features/clubs/clubsSlice"


export const store = configureStore({
    reducer: {
        auth: authReducer,
        clubs: clubsReducer,
    },
})