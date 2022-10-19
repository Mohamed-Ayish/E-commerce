import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { addToCart,} from "../../Redux/cartSlice";
import './shop.css';



function Shop() {
    
   const dispatch =useDispatch();
    const [products, setproduct] = useState([])
    useEffect(() => {
        getproduct();
    }, [])

    const getproduct = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setproduct(json))

    };
    
    const handleAddToCart=(prod)=>{
        dispatch(addToCart(prod))
    }
    
    // console.log(products)
    return (
        <div className="container ">
            <div className="row">
                <h1 className="text-danger mb-5 text-center fs-4 mt-5">Click on the product to see its details : </h1>
                {
                    products.map((product => {
                        return (
                            <>
                                   <div className=" col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-5" >
                                <div className="product-card card   h-100">
                                <div key={product.id} className="image text-center  py-2">
                                        <img className="h-100" src={product.image} alt="" />
                                        </div>
                                    <div className="content h-50  px-2">
                                        <h2>Title: <span><h4>{product.title}</h4></span></h2>
                                        <h2>Price: <span><h4>{product.price} EGP</h4></span></h2>
                                        
                                    </div>
                                    <div className="btns text-center">
                                    <button 
                                        className="btn bg-danger m-3 text-white"
                                        onClick={()=>handleAddToCart(product)}
                                        >add to cart</button>
                                        <button className="btn bg-info m-3 "><Link className="text-white" to={`/shop/${product.id}`}>Read Details</Link></button>
                                    </div>
                                </div>
                          </div>
                           
                            </>
                        );
                    }))
                }
            </div>
        </div>

    );
}
export default Shop;