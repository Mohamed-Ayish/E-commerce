import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './navbar.css';
import { BsFillCartDashFill } from "react-icons/bs";

function Navbar() {
    const count=useSelector(store=>store.cartstore.counter)
    
    return (
<>

        <div className="container-fluied bg-dark py-3">
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 m-auto w-75">
                <div className="container-fluid">
                    <a className="navbar-brand text-danger" href="#">Ayish store</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className='a fs-4' to="/"> Home </Link>
                            </li>
                            <li className="nav-item">
                                <Link className='a fs-4' to="/about"> About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='a fs-4' to="/count">Supporting</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className='a fs-4'  to="/shop">Shopping</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='a fs-4' to="/cart"><BsFillCartDashFill/> <span className='text-danger'>{count}</span> </Link>
                            </li>
                            <li className="nav-item">
                                <Link className='a text-dark fs-4' to="/signup">SignUp</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='a text-dark fs-4'  to="/login">login</Link>
                            </li>
                           
                            
                           
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        </>
    )
}
export default Navbar;