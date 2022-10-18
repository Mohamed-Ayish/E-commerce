import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import './shop.css';
function Shop() {
    const [products, setproduct] = useState([])
    useEffect(() => {
        getproduct();
    }, [])

    const getproduct = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setproduct(json))

    };

    console.log(products)
    return (
        <div className="container ">
            <div className="row">
                <h1 className="text-danger mb-5 text-center fs-4 mt-5">Click on the product to see its details : </h1>
                {
                    products.map((product => {
                        return (
                            <Link to={`/shop/${product.id}`} key={product.id} className=" col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-5" >
                                <div className="product-card card   h-100">
                                    <div className="image text-center  py-2">
                                        <img src={product.image} alt="" />
                                    </div>
                                    <div className="content  px-2">
                                        <h2>Title: <span><h4>{product.title}</h4></span></h2>
                                        <h2>Price: <span><h4>{product.price} EGP</h4></span></h2>
                                        <h2>description: <span><h4>{product.description}</h4></span></h2>
                                    </div>
                                </div>
                            </Link>
                        )
                    }))
                }
            </div>
        </div>

    );
}
export default Shop;