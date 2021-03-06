
// Styles
import '../ComponentStyles/SnapShot.css'

export default function JournalSnapShot(props){
    const journal = props.journal;

    return (
        <div className='journalSnapShot'>
            <h3>"{journal.title}"</h3>
            <p><b>Description: </b></p>
            <p>{journal.description}</p>
        </div>
    )
}