import EntrySnapShot from "../../Components/SnapShots/EntrySnapShots";
import { Link } from 'react-router-dom';

// Styles
import "../../Components/ComponentStyles/Controls.css"

function Controls(props){

    return (
        <div className='controls'>
            <h4>Controls</h4>
            <div>
                <Link to={`/journals/${props._id}/entries/new`}>New Entry</Link> 
                <Link to={`/journals/${props._id}/entries`}>View Entires</Link>  
            </div>
        </div>
    )
}

export default function EntriesView(props){
    const journal = props.journal
    const entries = journal.entries
    const recentEntryDisplayLimit = props.recentEntryDisplayLimit || 4

    //TODO: Fix when there are no entries on a journal yet
    const journalEntrySnapShots = entries.map( (entry, i) =>{
        if ( i >= recentEntryDisplayLimit) return;

        return (
            <li className="journalSnapShot" key={`entry-${entry._id}`}>
                <Link to={`/journals/${journal._id}/entries/${entry._id}`}>
                    <EntrySnapShot key={entry._id} entry={entry} />
                </Link>
            </li>

        ) 
    })
    
    return <div>

        <Controls _id={journal._id}/>

        <h3>Recent Entries: </h3>
            <ol>
                {journalEntrySnapShots}
            </ol>
        
       



    </div>
}