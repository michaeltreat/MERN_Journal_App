import JournalSnapShot from "../Components/JournalSnapShot";
import Header from "../Components/Header";
import NewJournalForm from "../Components/Forms/NewJournalForm";
import Journal from "../Components/Journal";


export default function JournalsView(props){

    const journalSnapShots = props.journals.map(journal =>{
        return <JournalSnapShot key={journal._id} journal={journal} />
    })

    return <div>

        <Header header="- Journals" />
        
        {/* Create Journal View */}
        <div>
            
            <button>Create New Journal</button>  
            <NewJournalForm />
        </div>
        

        {/* Journal SnapShot View */}
        <div>
            <h3>Your Journals:</h3>
            <ol>
                {journalSnapShots}
            </ol>
        </div>

        {/* Full Journal View */}
        <div>
            <Journal journal={props.journals[0]} recentEntryDisplayLimit={0} />
        </div>

    </div>
}