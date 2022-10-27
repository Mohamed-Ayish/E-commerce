import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './navbar.css';
import { BsFillCartDashFill } from "react-icons/bs";
import { AiFillHome ,AiOutlineLogin} from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { FaDonate,FaShoppingCart } from "react-icons/fa";

function Navbar() {
    const count=useSelector(store=>store.cartstore.counter)
    
    return (
<>

        <div className="container-fluied bg-dark py-3">
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 m-auto w-75">
                <div className="container-fluid">
                    <a className="navbar-brand text-light p-2 card shadow bg-dark" href="#">Ayish Store</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <h2 className='text-center'><AiFillHome/></h2>
                                <Link className='a fs-4 ' to="/home"> Home </Link>
                            </li>
                            <li className="nav-item">
                                <h2 className='text-center'><FcAbout/></h2>
                                <Link className='a fs-4' to="/about"> About</Link>
                            </li>
                            <li className="nav-item">
                                <h2 className='text-center'><FaDonate/></h2>
                                <Link className='a fs-4' to="/count">Donating</Link>
                            </li>
                            <li className="nav-item ">
                                <h2 className='text-center text-dark'><FaShoppingCart/></h2>
                                <Link className='a fs-4'  to="/shop">Shop</Link>
                            </li>
                           
                            
                           
                        </ul>
                        <ul className='ms-auto d-flex text-decoration-none'>
                            <li className="nav-item">
                                <h2 className='text-dark text-center  '>{count}</h2>
                                <Link className='a fs-2' to="/cart"><BsFillCartDashFill/>  </Link>
                            </li>
            
                            <li className="nav-item">
                                <h2 className='text-center text-dark'> <AiOutlineLogin/></h2>                              
                                <Link className='a fs-2'  to="/login">login</Link>
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