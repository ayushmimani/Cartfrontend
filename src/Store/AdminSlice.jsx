import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isverified : false
}
const AdminSlice = createSlice({
     name:'admin',
     initialState,
     reducers:{
        checkverifiedmember :(state,action)=>{
            state.isverified = action.payload; 
        }
     }
})

export default  AdminSlice.reducer;
export const {checkverifiedmember} = AdminSlice.actions; 