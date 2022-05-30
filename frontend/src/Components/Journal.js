import JournalEntry from "./JournalEntry"

export default function Journal(props){
    
    const journalEntries = props.journalEntries.map(entry =>{
        return <JournalEntry key={entry._id} description={entry.description} body={entry.body} />
    })

    return <article>
            <ul>
                {journalEntries}
            </ul>
    </article>
}