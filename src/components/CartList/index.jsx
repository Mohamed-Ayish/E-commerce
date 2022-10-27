import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { decreaseitem, icreaseitem, removeItem } from "../../Redux/cartSlice";
import { BsArchiveFill, BsFillBookmarkPlusFill, BsFillBookmarkDashFill } from "react-icons/bs";

const CartList = () => {
    const cartlistt = useSelector(store => store.cartstore.listofcart);
    // const totalquantity = useSelector(store => store.cartstore.totalQuantity);
    // const totaltprice = useSelector(store => store.cartstore.totalPricce);
    const dispatch = useDispatch();

    const increase = (product) => {
        dispatch(icreaseitem(product))
    }
    const decrease = (product) => {
        dispatch(decreaseitem(product))
    }

    const removing = (idd) => {
        dispatch(removeItem(idd))
    }
    const totalprice = () => {
        let total = 0
        cartlistt.map(e => {
            total = total + (e.price * e.cartQuantity);

        });
        return `${total}`
    }


    return (
        <>
            <div className="container  py-5">
                <div className="row">
                    <div className="total d-flex justify-content-between mb-5">
                        <div className="totalprice">
                            <h1 className="text-dark "> Total price is : <span className="text-danger">{totalprice()}</span> </h1>

                        </div>
                        <div className="totalcuantity">
                            <h1 className="text-center text-dark">Total quantity is : <span className="text-danger">{cartlistt.length}</span> </h1>
                        </div>
                    </div>
                    {
                        cartlistt.map((cart) => {
                            return (
                                <>
                                    <div className="col-sm-12 mb-5  shadow">
                                        <div className="row p-5">
                                            <div className="col-md-4">
                                                <div className="show d-flex">
                                                    <div className="image  w-50">
                                                        <img className="w-100 " src={cart.image} alt="" />
                                                    </div>
                                                    <div className="content w-50 d-flex align-items-center">
                                                        <h2>{cart.title}</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="quantity d-flex justify-content-around w-100 h-100  align-items-center">
                                                    <button onClick={() => decrease(cart)} className="bg-transparent fs-2 border-0">
                                                        <BsFillBookmarkDashFill /></button>
                                                    <h2 className=" text-center  rounded-circle w-25 card shadow ">{cart.cartQuantity}</h2>
                                                    <button onClick={() => increase(cart)} className=" bg-transparent fs-2 border-0">
                                                        <BsFillBookmarkPlusFill /></button>
                                                </div>
                                            </div>
                                            <div className="col-md-4 d-flex align-items-center justify-content-around">
                                                <div className="price">
                                                    <h2 className="fs-5">EGP  {cart.price * cart.cartQuantity}</h2>
                                                </div>
                                                <div className="remove">
                                                    <button className="bg-transparent border-0 fs-1 text-danger" onClick={() => removing(cart.id)}>
                                                        <BsArchiveFill /></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 text-center">
                                                <button className="btn bg-danger m-3 text-white ">
                                                    <Link className="text-white text-decoration-none" to="/shop">
                                                        return to shopping</Link></button>
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