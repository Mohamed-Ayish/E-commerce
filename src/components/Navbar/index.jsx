import { Link } from 'react-router-dom';
import './navbar.css';
function Navbar(){
    return(
<nav className="nav d-flex justify-content-around align-items-center py-3">
 <h3>Shopping</h3>
 <ul className="d-flex justify-content-around align-items-center w-50">
 <Link to="/"> <li className="list-item ">Home</li> </Link>
 <Link to="/about"> <li className="list-item ">About</li></Link>
 <Link to="/shop"><li className="list-item ">Shop</li></Link>
 </ul>
 </nav>
    )
}
export default Navbar;