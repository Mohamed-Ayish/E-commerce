import { createSlice } from "@reduxjs/toolkit";
import CartList from "../components/CartList";


// inilialstate
const initialState = {
    listofcart: [],
    counter: 0,
    totalQuantity:0,
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
                action.payload.cartQuantity = 1;
                state.listofcart.push(action.payload)
                state.counter = state.counter + 1;


            }
        },
        icreaseitem: (state, action) => {
            let index = state.listofcart.findIndex((e) => {
                return e.id == action.payload.id;

            })
            state.listofcart[index].cartQuantity += 1;
            state.totalQuantity=state.totalQuantity+1;
          state.listofcart.length = state.listofcart.length +1;

        },
        decreaseitem: (state, action) => {
            let index1 = state.listofcart.findIndex((e) => {
                return e.id == action.payload.id;

            })
            state.listofcart[index1].cartQuantity -= 1;
            if( state.listofcart[index1].cartQuantity <1){

            }
            state.totalQuantity=state.totalQuantity-1; 
            state.listofcart.length = state.listofcart.length -1;
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.listofcart = state.listofcart.filter((e) => {
                return e.id !== itemId;
            })
            state.counter = state.counter - 1;

        },
       
    }
})

//action

export const { addToCart, icreaseitem, decreaseitem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;