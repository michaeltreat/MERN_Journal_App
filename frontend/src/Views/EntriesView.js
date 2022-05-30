import JournalSnapShot from "../Components/JournalSnapShot";
import Header from "../Components/Header";
import JournalEntry from "../Components/JournalEntry";


export default function EntriesView(props){
    const entries = props.entries
    

    // TODO: Currently this is rendering all of the entries in full content. Instead, I want to render just the snapshots of all the entires. Then, if a user clicks on an individual entry, it will render just that entry's full content it it's own view. 
    const journalEntires = entries.map(entry =>{
        return <JournalEntry key={entry._id} entry={entry} title={props.title} />
    })

    return <div>
        <Header header={`- Entries for "${props.title}":`} />
        {/*Create new Entry  */}
        <div>
            <button> New Entry</button>  
        </div>
        
        <div>
            <h3>Entries:</h3>
            <ol>
                {journalEntires}
            </ol>
        </div>

    </div>
}