import './CounterAction.css';


function CounterAction(props) {
    return (
        <div className="counting card bg-info py-5 text-center">
            <div className='action'>
                <h1 className='text-danger'>please Support us</h1>

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