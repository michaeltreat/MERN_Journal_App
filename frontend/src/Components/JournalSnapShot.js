import './ComponentStyles/JournalSnapShot.css'


export default function JournalSnapShot(props){
    const journal = props.journal;


    return <li >
        <div className='journalSnapShot'>
            <p>{journal.title}</p>
            <p>{journal.description}</p>
        </div>
    </li>
}