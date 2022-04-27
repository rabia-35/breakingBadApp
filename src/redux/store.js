import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./character/characterSlice"
import quotesSlice from "./quotes/quotesSlice";
export const store=configureStore({
    reducer:{
        character:charactersSlice,
        quotes:quotesSlice,
    },
})