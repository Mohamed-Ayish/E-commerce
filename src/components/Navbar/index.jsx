import { Link } from 'react-router-dom';
import './navbar.css';
function Navbar() {
    return (
<>

        <div className="container-fluied bg-dark py-3">
            <nav class="navbar navbar-expand-lg navbar-light bg-light px-4 m-auto w-75">
                <div class="container-fluid">
                    <a class="navbar-brand text-danger" href="#">product shopping</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <Link to="/"> Home </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/about"> About</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/shop">Shop</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/count">counter</Link>
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