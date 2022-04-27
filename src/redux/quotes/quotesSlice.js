import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

/** Data extraction with axios via API -start- */
export const fetchQuotes=createAsyncThunk("quotes/getQuotes", async ()=>{
    const res= await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/quotes`)
    return res.data
}) 

 export const quotesSlice=createSlice({
     name:"quotes",
     initialState:{
        items:[],
        status:"idle",
        error:"",
     },
     reducers:{},
     extraReducers:{
         [fetchQuotes.pending]:(state)=>{
             state.status="loading"
         },
         [fetchQuotes.fulfilled]:(state,action)=>{
             state.items=action.payload;
             state.status="succeeded"
            
         },
         [fetchQuotes.rejected]:(state, action)=>{
             state.status="failed"
             state.error=action.error.message;
         }
     },

 })

 export default quotesSlice.reducer;