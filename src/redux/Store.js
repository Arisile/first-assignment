import { configureStore } from "@reduxjs/toolkit";
import counterRedcer from "./CounterSlice";


export const store = configureStore({
    reducer: {
        counter: counterRedcer,
    },
});