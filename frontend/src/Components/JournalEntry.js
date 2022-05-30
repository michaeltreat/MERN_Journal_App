import './JournalEntry.css'

export default function JournalEntry(props){
    
    return <li>
        <div className="journalEntry">
            <p>Description:{props.description}</p>
            <p>Body:{props.body}</p>
        </div>
    </li>

}