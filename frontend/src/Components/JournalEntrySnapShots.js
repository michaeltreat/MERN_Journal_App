import './ComponentStyles/JournalSnapShot.css'

export default function JournalEntrySnapShot(props){
    const entry = props.entry;

    return <li >
        <div className='journalEntry' >
            
            <label>Description:</label>
            <p>
                {entry.description}
            </p>

            <label>Body:</label>
            <p>
                {(entry.body.length) > 160 ? `"${entry.body.slice(0,160)} ..."`: `"${entry.body}"`}}
            </p>
        </div>
    </li>
}