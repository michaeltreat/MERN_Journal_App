import Header from "./Header"
import JournalEntry from "./JournalEntry"
import JournalEntrySnapShot from "./JournalEntrySnapShots"
import EntriesView from "../Views/EntriesView"

export default function Journal(props){
    const journal = props.journal    
    const recentEntryDisplayLimit = props.recentEntryDisplayLimit | 4

    const journalEntrySnapShots = journal.entries.map( (entry, i) =>{
        if ( i >= recentEntryDisplayLimit) return;
        return <JournalEntrySnapShot key={entry._id} entry={entry} />
    })

    return <div>
        <Header header={`- Journal: '${journal.title}'`} />
        <h3>{props.journal.title}</h3>

        {/* Rendering JournalEntrySnapShots */}
        <p>Recent "{journal.title}" entries:</p>
        <ul>
            {journalEntrySnapShots}
        </ul>

        {/* TODO: This is where I'm leaving off today. This view displays all of the entries. However, I am not sure if that's exactly what I want. I think here I want to display all the entries, but only as snapshots. When a user clicks on an entry, that's when it will then render just an individual entry, with it's full content. */}
        <EntriesView entries={journal.entries} title={journal.title}/>
        {/* Rending individual Journal Entries */}
    </div>
}