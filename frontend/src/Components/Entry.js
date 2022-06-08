import { useParams } from "react-router-dom"
import { getJournal } from '../data/data';
import { Link } from 'react-router-dom';

// Styles
import './ComponentStyles/Entry.css'


function Controls(props){
    return (
        <div className='controls'>
            <h4>Controls</h4>
            <div>
                <Link to={`/journals/${props._id}/entries/new`}>New Entry</Link> 
                <Link to={`/journals/${props._id}/`}>Back to Journal</Link>
            </div>
        </div>
    )
}

export default function Entry(props){
    let showControls = props.showControls

    const params = useParams()
    
    const journal = props.journals.find(journal => journal._id === params._id)   
    const entry = journal.entries.find(entry => entry._id === params.id)

    return (
        <div>
            {(showControls)
                ? <Controls _id={journal._id} />
                : null
            }           

            <div >
                <h3>Description:</h3>
                <p>{entry.description}</p>
                
                <h4><em>{entry.body}</em></h4>
            </div>
        </div>
        )
    }