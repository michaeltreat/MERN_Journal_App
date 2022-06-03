import JournalEntrySnapShot from "../Components/EntrySnapShots";
import Header from "../Components/Layout/Header";
import JournalEntry from "../Components/Entry";
import {Routes, Route, Link } from 'react-router-dom';
import Entries from "../Components/Entries";

function Controls(props){

    return (
        <div className='controls-homeview'>
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

    const journalEntrySnapShots = entries.map( (entry, i) =>{
        if ( i >= recentEntryDisplayLimit) return;

        return (
            <Link 
                to={`/journals/${journal._id}/entries/${entry._id}`}
                key={`entry-${entry._id}`}
                >
                <JournalEntrySnapShot key={entry._id} entry={entry} />

            </Link>

        ) 
    })
    
    return <div>

        <Controls _id={journal._id}/>

        <p>Showing the most recent snapshots from "{journal.title}":</p>
            {journalEntrySnapShots}
        
       



    </div>
}