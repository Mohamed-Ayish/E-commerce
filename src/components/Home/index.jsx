import { useSelector } from "react-redux";

function Home() {
    const countervalue = useSelector(state => state.counterStore.counter)

    return (
        <>
            <div className="counter">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="image">
                                <img src="" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-center text-danger">Supporting : <span className="text-dark">{countervalue} $</span> </h1>
            </div>

        </>
    )

}
export default Home;