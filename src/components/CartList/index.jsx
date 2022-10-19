import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import {  removeitem } from "../../Redux/cartSlice";

const CartList = () => {
    const cartlistt = useSelector(store => store.cartstore.listofcart);[]
    const dispatch = useDispatch();

    const removing = () => {
        dispatch(removeitem())
    }



    return (
        <>
            <div className="container py-5">
                <div className="row">
                    {
                        cartlistt.map((cart) => {
                            return (
                                <>
                                    <div className=" col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-5" >
                                        <div className="product-card card   h-100">
                                            <div key={cart.id} className="image text-center  py-2">
                                                <img className="" src={cart.image} alt="" />
                                            </div>
                                            <div className="content   px-2">
                                                <h2>Title: <span><h4>{cart.title}</h4></span></h2>
                                                <h2>Price: <span><h4>{cart.price} EGP</h4></span></h2>
                                                <h2>Price: <span><h4>{cart.description} EGP</h4></span></h2>
                                            </div>
                                            <div className="btns text-center">
                                                <button className="btn bg-info m-3 text-white" onClick={() => removing}>Remove</button>
                                                <button className="btn bg-danger m-3 text-white"><Link className="text-white" to="/shop">return to shopping</Link></button>
                                            </div>
                                        </div>
                                    </div>

                                </>
                            );
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default CartList;