import Header from "./Header"
import JournalEntry from "./JournalEntry"

export default function Journal(props){
    const journal = props.journal    

    const journalEntries = props.journal.entries.map(entry =>{
        return <JournalEntry key={entry._id} description={entry.description} body={entry.body} />
    })

    return <div>
        <Header header={`- Journal: '${journal.title}'`} />
        <p>{props.journal.title}:</p>

        <p>The latest entries:</p>
        <ul>
            {journalEntries}
        </ul>
    </div>
}