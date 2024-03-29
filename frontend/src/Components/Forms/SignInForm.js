import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { v4 as uuidv4 } from "uuid"


//bootstrap
import Button from "react-bootstrap/Button";

// Styles
import "../ComponentStyles/FormStyles/SignInForm.css"

//off until production
// const schema = yup.object({
//     username: yup.string().required("Username is required."),
//     password: yup.string().required("Password is required.").matches(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/, "Must be 6 characters long, include both an uppercase and lowercase letter, and number."),
//     email: yup.string().required("Email is required.").matches(/.+\@.+\..+/, "Must be a valid email format.")
// }).required();

export default function SignInForm(props){
    const {register, handleSubmit, formState: {errors} } = useForm({
        // resolver: yupResolver(schema),
        shouldFocusError: true
    });


    
    const onSubmit = data => {
        console.log("hello from SignInForm.js");
        console.dir()
    }

    return <form className="primary" onSubmit={handleSubmit(onSubmit)}>
            <p>Sign-in:</p>

            <input 
                placeholder="Username"
                autoFocus
                {...register("username")}
                />
            <p>{errors.username?.message}</p>
            
            <input 
                placeholder="Password"
                {...register("password")}
                />

            
            <p>{errors.password?.message}</p>

            <input 
                placeholder="Email"
                {...register("email")}
                />
            
            <p>{errors.email?.message}</p>
            
            <Button type="submit">Login</Button>
        </form>
}