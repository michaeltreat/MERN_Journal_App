import JournalEntrySnapShot from "../Components/JournalEntrySnapShots";
import Header from "../Components/Header";
import JournalEntry from "../Components/JournalEntry";


export default function EntriesView(props){
    const entries = props.entries
    console.log(props.recentEntryDisplayLimit)
    const recentEntryDisplayLimit = props.recentEntryDisplayLimit || 4

    const journalEntrySnapShots = entries.map( (entry, i) =>{
        if ( i >= recentEntryDisplayLimit) return;
        return <JournalEntrySnapShot key={entry._id} entry={entry} />
    })
    
    const journalEntires = entries.map(entry =>{
        return <JournalEntry key={entry._id} entry={entry} title={props.title} />
    })

    return <div>

        {/*Create new Entry  */}
        <div>
            <button> New Entry</button>  
        </div>

        {/* Rendering snapshots of just the 4 most recent entries */}
        <p>Showing the {recentEntryDisplayLimit} most recent snapshots from "{props.title}":</p>
        <ul>
            {journalEntrySnapShots}
        </ul>
        
        {/* Full entries */}
        <div>
            <h3>Full Entries for {props.title} </h3>
            <ol>
                {journalEntires}
            </ol>
        </div>

    </div>
}