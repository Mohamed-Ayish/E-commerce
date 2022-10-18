import './Counter.css';
import { useState } from "react";
import CounterAction from './CounterAction';


function Counter() {
    const [count, setcount] = useState(0);
    const incresecounter = () => setcount(count + 1);
    const decresecounter = () => count > 0 && setcount(count - 1);
    const reset = () => setcount(0);
    return (
        <div>

            <CounterAction res={reset} counter={count} inc={incresecounter} dec={decresecounter} />
        </div>
    );
}
export default Counter;