import { createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";

const initialState = {
    counter: 0
}


//reducer
export const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        incrementCounter: (state, action) => {
            state.counter = state.counter + action.payload;
        },
        decrementCounter: (state, action) => {
            state.counter = state.counter - action.payload;
        },

    }

})
export const { incrementCounter, decrementCounter } = CounterSlice.actions;