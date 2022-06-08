import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { v4 as uuidv4 } from "uuid"
import { useNavigate } from "react-router-dom";

// Styles
import '../ComponentStyles/FormStyles/NewJournalForm.css'

const schema = yup.object({
    title: yup.string().required("The Journal needs a title."),
    description: yup.string(),
    tags: yup.string(),
   
}).required();

export default function NewJournalForm (props){
    const navigate = useNavigate()

    const {register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
        shouldFocusError: true
    });

    function UserJournal(data) {
        this._id = uuidv4()
        this. visibility = {
                    public : false,
                    shared : true
                }
        this.title = data.title
        this.description = data.description
        this.author = {
                    _id : uuidv4()
                }
        this.entries = []
        return this
    }

    const onSubmit = data => {

        let newJournal = new UserJournal(data)
        
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