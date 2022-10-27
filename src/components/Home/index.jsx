import { useSelector } from "react-redux";
import myImg from '../../assets/images/me.jpg'

function Home() {
    const countervalue = useSelector(state => state.counterStore.counter)

    return (
        <>
            <div className="counter mt-5 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 d-flex">
                            <div className="image  px-5">
                                <img src={myImg} className="w-100 card shadow mt-5" alt="" />
                            </div>
                            <div className="contnet d-flex align-items-center ms-5 mt-5 ">
                                <p className="text-info fs-1 px-5">Hello, I'm Mohamed Abdo(Ayish), I'm a front-end website developer,
                                 I study at the iti</p>
                            </div>
                        </div>

                    </div>
                </div>
                <h1 className="text-center text-danger">Supporting : <span className="text-dark">{countervalue} $</span> </h1>

            </div>
            <div>
            </div>

        </>
    )

}
export default Home;