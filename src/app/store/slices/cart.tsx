import { createSlice } from "@reduxjs/toolkit";

interface cartState {
    name:string;
    company:string;
    qty:number;
}
const initialState:cartState[]=[]

const cartSlice = createSlice({
    name:"cart", 
    initialState,
    reducers:{  
        addCart(state,{payload}){
            //state.push(action.payload)
            // const obj = state.find((val) => val.name == payload.name);
            // if(obj){
            //     ++obj.qty;
            //     const newState = state.filter((val) => val.name !== obj.name);
            //     state = [...newState,obj];
                
                
            // }
            state.push(payload)
        },
        deleteCart(state,action){},
    }
})

export const {addCart,deleteCart}=cartSlice.actions;

export default cartSlice.reducer;