import { configureStore } from "@reduxjs/toolkit";
import cartlist from "./CartSlice"
import authSlice from './AuthSlice'
import adminSlice from './AdminSlice'

const store = configureStore({
    reducer:{
       cart:cartlist,
       auth:authSlice,
       admin:adminSlice
    }
})
export default store;