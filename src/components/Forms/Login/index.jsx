import { Controller, useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";



function Login() {
    const { register, handleSubmit, formState: { errors }, control } = useForm();


    const onSubmit = data => console.log(data);
    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)} className=" p-5 w-50 text-info m-auto mt-5 ">

                {/* email */}
                <Form.Group className="mb-3" controlId="formBasicEmail">


                    <Form.Control

                        type="email" placeholder="Enter email"
                        {...register('email',
                            {
                                required: true
                            }
                        )}
                    />
                    {console.log(errors)}
                    {
                        errors?.email?.type === "required"
                        &&
                        <p className="text-danger"> email is required</p>
                    }

                </Form.Group>
                {/* //password */}
                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" placeholder="Password"
                        {
                        ...register('password',
                            {
                                required: true,
                                minLength: (6)

                            })
                        }
                    />
                    {
                        errors?.password?.type === "required"
                        &&
                        <p className="text-danger"> password is required</p>
                    }
                    {
                        errors?.password?.type === "minLength"
                        &&
                        <p className="text-danger"> The password must be at least 6 characters long</p>
                    }
                </Form.Group>

                <div className="submit text-center ">
                    <Button className="mt-5  px-5" variant="primary" type="submit">
                        <Link className='text-decoration-none  text-light  fs-4' to="/nav">login</Link>
                    </Button>

                </div>
            </Form>
            <div className="register text-center ">
                <p className="text-danger fs-3">Dont have Account !!? please Register</p>
                <Button className="mt-2  px-5" variant="primary" type="submit">
                    <Link className='text-decoration-none  text-light  fs-4' to="/signup">Register</Link>
                </Button>

            </div>
        </>
    )
}

export default Login;