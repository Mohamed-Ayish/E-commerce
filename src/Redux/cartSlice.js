import { createSlice } from "@reduxjs/toolkit";


// inilialstate
const initialState = {
    listofcart: [],
    counter: 0,
    cartQuantity: 0,
    totalQuantity: 0,
    totalPricce: 0,

}




//reducer
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.listofcart.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                alert("alredy Exist")
            }

            else {
                state.listofcart.push(action.payload)
                state.counter = state.counter + 1;
                state.totalQuantity = state.totalQuantity + 1;
                state.cartQuantity = state.cartQuantity + 1;

            }
        },
        additem: (state, action) => {
            const cartItem = state.listofcart.find((e) => e.id === payload.id);
            cartItem.cartQuantity = cartItem.cartQuantity + 1;

        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.listofcart = state.listofcart.filter((e) => {
                e.id !== itemId;
            })
        }

    }
})

//action

export const { addToCart, additem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;