import err from '../../assets/images/error.webp'


function Notfound() {


    return (
        <>
            <div className="counter mt-5 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <div className="image text-center ">
                                <img src={err} className="  rounded-circle" alt="" />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )

}
export default Notfound;