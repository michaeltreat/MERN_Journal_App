import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import '../ComponentStyles/FormStyles/NewJournalForm.css'


export default function NewEntryForm (props){

    const schema = yup.object({
        body: yup.string().required("The entry needs a body."),
        tags: yup.string(),
    }).required();
    
    
    const {register, handleSubmit, watch, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
        shouldFocusError: true
    });

    const onSubmit = data => {
        console.log("hello from new Entry Form.js");
        console.dir(data)
    }
    
        return <form className="journalForm" onSubmit={handleSubmit(onSubmit)}>
            <p>New Journal Form</p>
            <input 
                placeholder="Journal Title"
                autoFocus
                {...register("body")}
                />
            <p>{errors.body?.message}</p>
                
            <input 
                placeholder="Tags #fitness #workingout"
                {...register("tags")}
                />
    
            <p>{errors.tags?.message}</p>
            
            <input type="submit" value="Create Journal"  />
        </form>
    
        
    }
