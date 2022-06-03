import './ComponentStyles/JournalSnapShot.css'
import JournalEntrySnapShot from './JournalEntrySnapShots';

export default function JournalSnapShot(props){
    const journal = props.journal;


    return <li >
        <div className='journalSnapShot'>
            <p>{journal.title}</p>
            <p>{journal.description}</p>
            <p>{<JournalEntrySnapShot entry={journal.entries[0]} />} </p>
        </div>
    </li>
}