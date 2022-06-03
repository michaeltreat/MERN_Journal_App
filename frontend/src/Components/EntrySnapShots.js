import './ComponentStyles/JournalSnapShot.css'

export default function JournalEntrySnapShot(props){
    const entry = props.entry;


    return (

        <div className='journalSnapShot' >
            
            <label>Description:</label>
            <p>
                {entry.description}
            </p>

            <label>Body:</label>
            <p>
                {(entry.body.length) > 120 ? `"${entry.body.slice(0,120)} ..."`: `"${entry.body}"`}
            </p>

        </div>
    )
}