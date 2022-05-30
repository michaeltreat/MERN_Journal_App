import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import "./ComponentStyles/SignInForm.css"

const schema = yup.object({
    username: yup.string().required("Username is required."),
    password: yup.string().required("Password is required.").matches(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/, "Must include an uppercase, lowercase, and number."),
  }).required();

export default function SignInForm(){
    const {register, handleSubmit, watch, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
        shouldFocusError: true
    });

    const onSubmit = data => {
        console.log("hello");
    }
    return <div >

        <form className="primary" onSubmit={handleSubmit(onSubmit)}>
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

            {/* errors are rendered in p tags. I want to extract this into an error component */}
            <p>{errors.password?.message}</p>
            
            <input type="submit" value="Login"  />
        </form>
    </div>
}