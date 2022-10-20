import { Controller, useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function Login() {
    const { register, handleSubmit, formState: { errors }, control } = useForm();

    
    const onSubmit = data => console.log(data);
    return (
        
        <Form onSubmit={handleSubmit(onSubmit)} className="bg-danger p-5 w-25 text-info m-auto mt-5">
          
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
                Submit
            </Button>
            </div>
        </Form>
    )
}

export default Login;