import { createSlice } from "@reduxjs/toolkit";

//initialstate
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
            if(state.counter <0){
                state.counter=0;
            }
        },
        resetcounter: (state, action) => {
            state.counter = 0;
        },

    }

})

//action
export const { incrementCounter, decrementCounter ,resetcounter} = CounterSlice.actions;