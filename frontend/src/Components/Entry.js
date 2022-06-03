import Header from './Layout/Header'
import './ComponentStyles/JournalEntry.css'

export default function JournalEntry(props){
    const entry = props.entry
    
    return (

        <div className='journalEntry' >
            
            <p>
                {entry.description}
            </p>

            
            <p>
                {entry.body}
            </p>
        </div>
        )
}