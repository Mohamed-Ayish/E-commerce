import './Counter.css';
import { useState } from "react";
import CounterAction from './CounterAction';
import { useDispatch, useSelector } from 'react-redux';
import {decrementCounter, incrementCounter, resetcounter} from '../../Redux/counterSlice'

function Counter() {
    const countervalue=useSelector(state=>state.counterStore.counter)
const dispatch=useDispatch();

    const incresecounter = () => {
        dispatch(incrementCounter(1))
    }
    const decresecounter = () =>{
        dispatch(decrementCounter(1))
        
    }
    const reset = () =>{
        dispatch(resetcounter())
    }
    
    return (
        <div>

            <CounterAction res={reset} counter={countervalue} inc={()=>incresecounter()} dec={()=>decresecounter()} />
        </div>
    );
}
export default Counter;