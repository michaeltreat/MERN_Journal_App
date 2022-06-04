
// Styles
import './ComponentStyles/JournalSnapShot.css'

export default function JournalEntrySnapShot(props){
    const entry = props.entry;

    return (

        <div >
            
            <h3>Description:</h3>
            <p>
                {entry.description}
            </p>

            <h3>Body:</h3>
            <p>
                {(entry.body.length) > 120 ? `"${entry.body.slice(0,120)} ..."`: `"${entry.body}"`}
            </p>

        </div>
    )
}