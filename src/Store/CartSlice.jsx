import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    items:[],
    itemquantity:[]
}

const cartslice = createSlice({
   name:'Cart',
   initialState,
   reducers:{
    /*Note:
  1  Yes, the quantity key is added dynamically: The object in the state.items array is modified by adding the quantity key.
  2  This is safe with Redux Toolkit: Thanks to Immer, you don’t need to worry about immutability when modifying objects in the state.
  3  You’re modifying a reference: find gives you a reference to the object, so changes to existingItem are reflected in the original array.
     */
        addcartitem:(state,action)=>{
            const existingitem = state.items.find(item=>item.id===action.payload.id)
            if(existingitem){
                existingitem.quantity+=1
            }else{
                state.items.push({...action.payload, quantity:1});
            }
        },
        updatequantity:(state,action)=>{
            const {id,quantity}=action.payload;
             const existingItem = state.items.find(item=>item.id===action.payload.id)
             if(existingItem && quantity>0){
                 existingItem.quantity=quantity;
             }
        },
        removeItem:(state,action)=>{
                   state.items=state.items.filter(item=>item.id!==action.payload.id);
        }
   }
})

export default  cartslice.reducer;
export const {addcartitem,updatequantity,removeItem} = cartslice.actions;

