import { createSlice } from "@reduxjs/toolkit";

interface productState{
    name:string
    company:string
    qty:number
}
const initialState:productState[]=[
{name:"Shoes", company:"Bata", qty:3},
{name:"Shoes", company:"Service", qty:5},
{name:"Shoes", company:"Addidas", qty:1}
]

const productSlice =createSlice({
    name:"product",
    initialState,
    reducers:{
        addProduct(state,action){
            state.push(action.payload )
        },
        deleteProduct(state,action){}
    }
}) 

export const {addProduct,deleteProduct} =productSlice.actions;
export default productSlice.reducer