import Header from "./Header"
import JournalEntry from "./JournalEntry"

export default function Journal(props){
    const journal = props.journal    

    const journalEntries = props.journal.entries.map(entry =>{
        return <JournalEntry key={entry._id} description={entry.description} body={entry.body} />
    })

    return <div>
        <Header header={`- Journal: '${journal.title}'`} />
        <h3>{props.journal.title}</h3>

        <p>Recent entries:</p>
        <ul>
            {journalEntries}
        </ul>
    </div>
}