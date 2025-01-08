import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
        isloggedin:false,
        usertype:null,
        
}
const authSlice = createSlice({
      name:'auth',
      initialState,
      reducers:{
        checkUserSession:(state,action)=>{
            state.usertype=action.payload.usertype
            state.isloggedin = action.payload.isloggedin;
        }
      }
})

export default authSlice.reducer;
export const {checkUserSession} = authSlice.actions;