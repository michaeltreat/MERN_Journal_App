import { useParams } from "react-router-dom"
import { getJournal } from '../data/data';
import { Link } from 'react-router-dom';

// Styles
// import './ComponentStyles/JournalEntry.css'


function Controls(props){
    return (
        <div className='controls-homeview'>
            <h4>Controls</h4>
            <div>
                <Link to={`/journals/${props._id}/entries/new`}>New Entry</Link> 
                <Link to={`/journals/${props._id}/`}>Back to Journal</Link>
                <Link to={`/journals/`}>Back to Journals</Link>  
            </div>
        </div>
    )
}

export default function JournalEntry(props){
    let showControls = props.showControls
    const params = useParams()
    const journal = props.journal || getJournal(params._id);

    const entry = props.entry || journal.entries.find( 
        (entry) => entry._id === params.id
    )
    
    return (
        <div >
            {(showControls)
                ? <Controls _id={journal._id} />
                : null
            }           

            <h3>Description:</h3>
                <p>{entry.description}</p>

            <h4>
                <em>
                    {entry.body}
                </em>
            </h4>
        </div>
        )
}