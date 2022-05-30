import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import '../ComponentStyles/FormStyles/NewJournalForm.css'

const schema = yup.object({
    title: yup.string().required("The Journal needs a title."),
    description: yup.string(),
    tags: yup.string(),
   
}).required();


export default function NewJournalForm (){
    const {register, handleSubmit, watch, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
        shouldFocusError: true
    });

    const onSubmit = data => {
        console.log("hello from newJournalForm.js");
        console.dir(data)
    }

    return <form className="journalForm" onSubmit={handleSubmit(onSubmit)}>
        <p>New Journal Form</p>
        <input 
            placeholder="Journal Title"
            autoFocus
            {...register("title")}
            />
        <p>{errors.title?.message}</p>
        
        <input 
            placeholder="Description"
            {...register("description")}
            />

        <p>{errors.description?.message}</p>

        <input 
            placeholder="Tags #fitness #workingout"
            {...register("tags")}
            />

        {/* errors are rendered in p tags. I want to extract this into an error component */}
        <p>{errors.tags?.message}</p>
        
        <input type="submit" value="Create Journal"  />
    </form>

    
}