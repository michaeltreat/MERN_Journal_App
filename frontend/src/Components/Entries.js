import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom';

// Components
import Header from './Layout/Header';

// Styles 
import "../Components/ComponentStyles/Controls.css"
import EntrySnapShotView from "../Views/Sub-Views/EntrySnapShotView";

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

export default function Entries (props){
    let params = useParams();
    const journal = props.journals.find(journal => journal._id === params._id)

    return (
        <div className="center">
            <Header title={`Journal: "${journal.title}" `} />
            <Controls _id={journal._id}/>
            <h3>Entries:</h3>
            <EntrySnapShotView journal={journal} />
 
        </div>
    )


}