import basket from '../../assets/images/basket.png'
const About = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-danger text-center mt-5">Welcome to our shopping store !</h2>
                    </div>
                </div>
                <div className="row d-flex justify-content-between align-items-center vh-100">
                    <div className="col-md-6">
                        <h2 className="text-danger text-center mt-5 w-100">This is a shopping store where you can shop to see the products,
                            know the details of each product, and buy the product</h2>
                    </div>
                    <div className="col-md-6">
                        <img className='w-75' src={basket} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;