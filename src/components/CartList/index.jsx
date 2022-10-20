import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { additem, removeItem } from "../../Redux/cartSlice";
import { FaBeer } from 'react-icons/fa';
import { BsArchiveFill ,BsFillBookmarkPlusFill,BsFillBookmarkDashFill} from "react-icons/bs";

const CartList = () => {
    const cartlistt = useSelector(store => store.cartstore.listofcart);
    const totalquantity = useSelector(store => store.cartstore.totalQuantity);
    const cartQuantity = useSelector(store => store.cartstore.cartQuantity);
    const totaltprice = useSelector(store => store.cartstore.totalPricce);
    const dispatch = useDispatch();
    const add = () => {
        dispatch(additem());
    }

    const removing = (idd) => {
        dispatch(removeItem(idd))
    }

    return (
        <>
            <div className="container py-5">
                <div className="row">
                    <h1 className="text-danger "> total price : <span className="text-dark">{totaltprice}</span> </h1>
                    <h1 className="text-center text-danger">total quantity : <span className="text-dark">{totalquantity}</span> </h1>
                    {
                        cartlistt.map((cart) => {
                            return (
                                <>
                                    <div className=" col-xl-12 col-lg-6 col-md-6 col-sm-12 mb-5 " >

                                        <div className="product-card card d-flex w-50 m-auto bg-info">
                                            <div key={cart.id} className="image py-2 text-center">
                                                <img className="" src={cart.image} alt="" />
                                            </div>
                                            <div className="content text-center  px-2">
                                                <h2>Title: <span><h4>{cart.title}</h4></span></h2>
                                                <h2>Price: <span><h4>{cart.price} EGP</h4></span></h2>
                                            </div>
                                            <div className="btns text-center">
                                                <div className="remove">
                                                <button onClick={() => removing(id)} className="btn  m-3 text-white" >
                                                    <h3 className="text-danger">
                                                        <BsArchiveFill /> </h3></button>
                                                </div>
                                                <div className="icrement">
                                                <button onClick={() => add()} className="text-danger border-0 fs-2  me-5"><BsFillBookmarkPlusFill/></button>
                                                <button className="text-danger border-0 fs-2  "><BsFillBookmarkDashFill/></button>
                                                </div>

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