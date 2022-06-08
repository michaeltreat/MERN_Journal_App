import { Link } from 'react-router-dom';

// Components
import EntrySnapShotView from './Sub-Views/EntrySnapShotView';

// Styles
import "../Components/ComponentStyles/Controls.css"


// Need props in order to reference the journal/:_id part of the route.
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

    return (
        <div>
            <Controls _id={journal._id}/>
            
            <h3>Recent Journal Entries: </h3>
            <EntrySnapShotView  journal={journal} entries={journal.entries} />

        </div>
    )
}