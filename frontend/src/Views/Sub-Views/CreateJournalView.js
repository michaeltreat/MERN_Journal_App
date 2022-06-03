import { useState} from 'react';
import NewJournalForm from "../../Components/Forms/NewJournalForm"


export default function CreateJournalView(props){
    const [showForm, setShowForm] = useState(false);

    return (
        <div> 
            {showForm
                ? <NewJournalForm  />
                : <button onClick={() => setShowForm(!showForm)}>Create New Journal</button>  
            
            }         
        </div>
    )

}

