import Header from './Header'
import './ComponentStyles/JournalEntry.css'

export default function JournalEntry(props){
    const entry = props.entry
    
    return <div className='journalEntry' >
            <label>Description:</label>
            <p>
                {entry.description}
            </p>

            <label>Body:</label>
            <p>
                {entry.body}
            </p>
        </div>
}