import './CounterAction.css';


function CounterAction(props) {
    return (
        <div className="">
        <div className='action'>
            <h1 className='count'>{props.counter}</h1>

            <button className="dec" onClick={props.dec}>-</button>
            <button className="inc" onClick={props.inc}>+</button>
            <div>

                <button className="res" onClick={props.res}>reset</button>

            </div>
        </div>
        </div>


    )

}
export default CounterAction;