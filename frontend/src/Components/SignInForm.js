import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    username: yup.string().required("Username is required."),
    password: yup.string().required("Password is required.").matches(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/, "Must include an uppercase, lowercase, and number."),
  }).required();

export default function SignInForm(){
    const {register, handleSubmit, watch, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });
    // console.log(watch(errors))
    const onSubmit = data => {
        console.log("hello");
    }
    return <form onSubmit={handleSubmit(onSubmit)}>

        <input placeholder="Username" 
            {...register("username")}
        />
        <p>{errors.username?.message}</p>
        <input 
            placeholder="Password"
            {...register("password")}
        />
        <p>{errors.password?.message}</p>
        <input type="submit" />
    </form>
}