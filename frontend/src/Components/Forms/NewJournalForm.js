import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { useNavigate } from "react-router-dom";
import { CreateJournal } from "../../data/Schemas/JournalSchema";

// Styles
import '../ComponentStyles/FormStyles/NewJournalForm.css'

const schema = yup.object({
    title: yup.string().required("The Journal needs a title."),
    description: yup.string(),
    tags: yup.string(),
   
}).required();

export default function NewJournalForm (props){
    const {register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
        shouldFocusError: true
    });
    
    // Used to navigate after submit.
    const navigate = useNavigate()

    const onSubmit = data => {

        let newJournal = new CreateJournal(data)
        
        props.setJournals( arr => [...arr, newJournal])
        navigate(`/journals/${newJournal._id}`)
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

        <p>{errors.tags?.message}</p>
        
        <input type="submit" value="Create Journal"  />
    </form>    
}