import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice= createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        addtowishlist:(state,action)=>{
            state.push(action.payload)
        },
        removefromwishlist:(state,action)=>{
           return state.filter(item=>item.id!=action.payload)
        }
    }
})
export const {addtowishlist,removefromwishlist}=wishlistSlice.actions;
export default wishlistSlice.reducer