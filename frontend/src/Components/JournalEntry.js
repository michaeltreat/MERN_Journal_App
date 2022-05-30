import './ComponentStyles/JournalEntry.css'

export default function JournalEntry(props){
    
    return <li>
        <div className='journalEntry' >
            
            <label>Description:</label>
            <p>
                {props.description}
            </p>

            <label>Body:</label>
            <p>
                {props.body}
            </p>
        </div>
    </li>

}