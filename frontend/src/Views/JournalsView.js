import JournalSnapShot from "../Components/JournalSnapShot";
import Header from "../Components/Header";
import NewJournalForm from "../Components/Forms/NewJournalForm";


export default function JournalsView(props){

    const journalSnapShots = props.journals.map(journal =>{
        return <JournalSnapShot key={journal._id} journal={journal} />
    })

    return <div>

        <Header header="- Journals" />

                
        <div>
            {/* button will take you to Create Journal Form */}
            <button>Create New Journal</button>  
            <NewJournalForm />

        </div>
        
        <div>
            <h3>Your Journals:</h3>
            <ol>
                {journalSnapShots}
            </ol>
        </div>

    </div>
}