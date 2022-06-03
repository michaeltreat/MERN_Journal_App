import JournalEntrySnapShot from "../Components/JournalEntrySnapShots";
import Header from "../Components/Header";
import JournalEntry from "../Components/JournalEntry";


export default function EntriesView(props){
    const entries = props.entries
    const recentEntryDisplayLimit = props.recentEntryDisplayLimit || 4

    const journalEntrySnapShots = entries.map( (entry, i) =>{
        if ( i >= recentEntryDisplayLimit) return;
        return <JournalEntrySnapShot key={entry._id} entry={entry} />
    })
    
    const journalEntires = entries.map(entry =>{
        return <JournalEntry key={entry._id} entry={entry} title={props.title} />
    })

    return <div>

        <div>
            <button> New Entry</button>  
        </div>

       
        <p>Showing the {recentEntryDisplayLimit} most recent snapshots from "{props.title}":</p>
            {journalEntrySnapShots}

        <p>Full Entries for {props.title} </p>
            {journalEntires}


    </div>
}