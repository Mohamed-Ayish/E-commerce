import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './details.css';
const Details = () => {
    const params = useParams();
    const [products, setproduct] = useState([]);

    useEffect(() => {
        getproduct();
    }, [])


    const getproduct = () => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(res => res.json())
            .then(json => setproduct(json))

    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 ">
                        <div className="product-details d-flex bg-info">
                            <div className="image">
                                <img src={products.image} alt="" />
                            </div>
                            <div className="content card p-5">
                                <h2>ID: <span><h4>{products.id}</h4></span></h2>
                                <h2>Title: <span><h4>{products.title}</h4></span></h2>
                                <h2>Price: <span><h4>{products.price} EGP</h4></span></h2>
                                <h2>description: <span><h4>{products.description}</h4></span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Details;