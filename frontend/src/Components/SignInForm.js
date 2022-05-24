import React from "react";
import {useForm} from "react-hook-form";

export default function SignInForm(){
    const {register, handleSubmit, watch, formState: {errors} } = useForm();
    const onSubmit = data => console.log(data);

    return <form onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor="uname">Username</label>
        <input defaultValue="Username" {...register("Username", {required:true})} />

        <label htmlFor="password">Password</label>
        <input defaultValue="Password" {...register("Password", {required:true})}/>
        {errors.exampleRequired && <span>This field is required</span>}

        <button type="submit">submit</button>
    </form>
}