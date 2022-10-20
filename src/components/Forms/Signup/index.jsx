import { Controller, useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Select from "react-select"


function Signup() {
    const { register, handleSubmit, formState: { errors }, control } = useForm();

    const coursesoptions = [
        {
            value: 1,
            label: 'mail'
        },
        {
            value: 2,
            label: 'femail'
        }
    ]
    const onSubmit = data => console.log(data);
    return (
        
        <Form onSubmit={handleSubmit(onSubmit)} className="bg-info p-5 w-25 text-info m-auto mt-5">
            {/* First Name */}
            <Form.Group className="mb-3" controlId="formBasicName">

                <Form.Control
                    type="text" placeholder="first name "
                    {...register('fname',
                        {
                            required: true
                        }
                    )}
                />
                {console.log(errors)}
                {
                    errors?.email?.type === "required"
                    &&
                    <p className="text-danger"> first name is required</p>
                }

            </Form.Group>

            {/* last Name */}
            <Form.Group className="mb-3" controlId="formBasicName">

               
                <Form.Control

                    type="text" placeholder="last name"
                    {...register('lname',
                        {
                            required: true
                        }
                    )}
                />
                {console.log(errors)}
                {
                    errors?.email?.type === "required"
                    &&
                    <p className="text-danger"> last name is required</p>
                }

            </Form.Group>

            {/* Phone Number */}
            <Form.Group className="mb-3" controlId="formBasicNumber">

               
                <Form.Control

                    type="text" placeholder="phone number"
                    {...register('phone',
                        {
                            required: true
                        }
                    )}
                />
                {console.log(errors)}
                {
                    errors?.email?.type === "required"
                    &&
                    <p className="text-danger">phone number is required</p>
                }

            </Form.Group>



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
                },
                {
                    errors?.password?.type === "minLength"
                    &&
                    <p className="text-danger"> The password must be at least 6 characters long</p>
                }
            </Form.Group>
            {/* select */}
            <Controller
                name="select"
                
                control={control}

                render={({ field }) =>
                    <Select
                    placeholder="select your gender"
                        
                        {...field}
                        options={coursesoptions}
                    />
                }
            />
            <div className="submit text-center ">
            <Button className="mt-5  px-5" variant="primary" type="submit">
                Submit
            </Button>
            </div>
        </Form>
    )
}

export default Signup;