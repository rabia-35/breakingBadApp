import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./character/characterSlice"
export const store=configureStore({
    reducer:{
        character:charactersSlice,
    },
})