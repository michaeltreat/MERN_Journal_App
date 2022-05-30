import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import "./SignInForm.css"

const schema = yup.object({
    username: yup.string().required("Username is required."),
    password: yup.string().required("Password is required.").matches(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/, "Must include an uppercase, lowercase, and number."),
  }).required();

export default function SignInForm(){
    const {register, handleSubmit, watch, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        console.log("hello");
    }
    return <div>

        <form className="primary" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="Username">Username: </label>
            <input placeholder="Username" 
                {...register("username")}
                />
            <p>{errors.username?.message}</p>
            <label htmlFor="Password">Password: </label>
            <input 
                placeholder="Password"
                {...register("password")}
                />
            <p>{errors.password?.message}</p>
            <input type="submit" />
        </form>
    </div>
}