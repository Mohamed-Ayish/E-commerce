import { createSlice } from "@reduxjs/toolkit";


// inilialstate
const initialState = {
    listofcart: [],
    counter: 0,
}




//reducer
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.counter = state.counter + 1;
            state.listofcart.push(action.payload)
        },
        removeitem: (state, action) => {
            state.listofcart= state.listofcart.pop();
            state.counter = state.counter - 1;
            
        }
    }
})

//action

export const { addToCart, removeitem } = cartSlice.actions;