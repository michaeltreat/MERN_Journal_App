import JournalSnapShot from "../Components/JournalSnapShot";
import Header from "../Components/Header";

export default function JournalsView(props){

    const journalSnapShots = props.journals.map(journal =>{
        return <JournalSnapShot key={journal._id} journal={journal} />
    })

    return <div>

        <Header header="Journally App - Journals" />
                
        <div>
            {/* button will take you to Create Journal Form */}
            <button>Create New Journal</button>  
        </div>
        
        <div>
            <p>Your Journals:</p>
            <ol>
                {journalSnapShots}
            </ol>
        </div>

    </div>
}