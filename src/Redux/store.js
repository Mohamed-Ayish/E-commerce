import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";
import { CounterSlice } from "./counterSlice";


export const store= configureStore({
    reducer:{
        counterStore:CounterSlice.reducer,
        cartstore:cartSlice.reducer,
    }
})