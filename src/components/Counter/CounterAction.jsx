import { BsFillBookmarkDashFill, BsFillBookmarkPlusFill } from 'react-icons/bs';
import './CounterAction.css';


function CounterAction(props) {
    return (
        <div className="counting card py-5 text-center d-flex justify-content-center align-items-center vh-100">
            <div className='action  p-5 card shadow'>
                <h1 className='text-danger '>please Support us</h1>

<div className="btns d-flex text-center justify-content-around align-items-center p-5">
                <button className="dec bg-transparent border-0 fs-1" onClick={props.dec}><BsFillBookmarkDashFill /></button>
                <h1 className='count card p-5 shadow text-info rounded-circle'>{props.counter}</h1>
                <button className="inc bg-transparent border-0 fs-1" onClick={props.inc}><BsFillBookmarkPlusFill /></button>
                </div>
                <div>

                   

                </div>
            </div>
        </div>


    )

}
export default CounterAction;