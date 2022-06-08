import { Link } from "react-router-dom"

// Components
import EntrySnapShot from "../../Components/SnapShots/EntrySnapShots"

export default function EntrySnapShotView (props) {
    const journal = props.journal
    const entries = journal.entries

    const entrySnapShots = entries.map( (entry) =>{
        
        return (
            <li className="journalSnapShot" key={`entry-${entry._id}`}>
                <Link to={`/journals/${journal._id}/entries/${entry._id}`}>
                    <EntrySnapShot entry={entry} />
                </Link>
            </li>
        ) 
    })

    return (
        <div>
            <ol>
                {entrySnapShots}
            </ol>
        </div>
    )
} 
