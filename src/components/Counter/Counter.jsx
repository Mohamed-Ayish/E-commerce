import './Counter.css';
import { useState } from "react";
import CounterAction from './CounterAction';
import { useDispatch, useSelector } from 'react-redux';
import {decrementCounter, incrementCounter} from '../../Redux/counterSlice'

function Counter() {
    const countervalue=useSelector(state=>state.counterStore.counter)
const dispatch=useDispatch();

    const incresecounter = () => {
        dispatch(incrementCounter(1))
    }
    const decresecounter = () =>{
        dispatch(decrementCounter(1))
        if(countervalue<0){
            countervalue=0;
        }
    }
    
    return (
        <div>

            <CounterAction  counter={countervalue} inc={incresecounter} dec={decresecounter} />
        </div>
    );
}
export default Counter;