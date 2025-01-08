import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products:[]
}

const ProductSlice =  createSlice({
      name:'product',
      initialState,
      reducers:{
          addproduct:(state,action)=>{
               state.products.push(...products, state.action)
          }
      }
})


export default ProductSlice;
export const {addproduct}  = ProductSlice.actions