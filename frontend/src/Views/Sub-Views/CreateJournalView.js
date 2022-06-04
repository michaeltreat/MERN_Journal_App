import { useState} from 'react';
import NewJournalForm from "../../Components/Forms/NewJournalForm"


export default function CreateJournalView(props){
    const [showForm, setShowForm] = useState(false);

    return (
        <div> 
            <NewJournalForm  />          
        </div>
    )

}

