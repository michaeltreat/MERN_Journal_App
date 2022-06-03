import JournalEntrySnapShot from "../Components/JournalEntrySnapShots";
import Header from "../Components/Header";
import JournalEntry from "../Components/JournalEntry";
import {Routes, Route, Link } from 'react-router-dom';

function Controls(props){
    console.log(props._id)
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
        return <JournalEntrySnapShot key={entry._id} entry={entry} />
    })
    
    const journalEntires = entries.map(entry =>{
        return <JournalEntry key={entry._id} entry={entry} title={journal.title} />
    })

    return <div>

        {/* <div>
            <button> New Entry</button>  
        </div> */}
        <Controls _id={journal._id}/>
       
        <p>Showing the {recentEntryDisplayLimit} most recent snapshots from "{journal.title}":</p>
            {journalEntrySnapShots}

        <p>Full Entries for {journal.title} </p>
            {journalEntires}


    </div>
}