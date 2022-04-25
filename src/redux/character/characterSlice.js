import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const char_limit=12

/** Data extraction with axios via API -start- */
export const fetchCharacters=createAsyncThunk("characters/getCharacters", async (page)=>{
    const res= await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters?limit=${page ?  char_limit * page : 12}&offset=0`)
    return res.data
}) 
/** Data extraction with axios via API -end- */

/** Pending, fulfilled and rejected operations of the data captured in state management   */
export const charactersSlice=createSlice({
    name:"character",
    initialState:{
        items:[],
        isLoading:false,
        error:"",
        page:2,
    },
    reducers:{
        pageIncrement:(state)=>{
            state.page+=1;
        }
    },
    extraReducers:{
        [fetchCharacters.pending]:(state)=>{
            state.isLoading=true
        },
        [fetchCharacters.fulfilled]:(state,action)=>{
            state.items=action.payload
            state.isLoading=false
        },
       
        [fetchCharacters.rejected]:(state,action)=>{
            state.isLoading=false;
            state.error=action.error.message;

        }
    }
})

export const { pageIncrement }= charactersSlice.actions;
export default charactersSlice.reducer