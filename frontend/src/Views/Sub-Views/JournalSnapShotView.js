import { Link } from "react-router-dom"

// Components
import JournalSnapShot from "../../Components/SnapShots/JournalSnapShot"

// Styles
import "../../Components/ComponentStyles/JournalSnapShotView.css"



export default function JournalSnapShotView(props){

    const journalSnapShots = props.journals.map(journal =>{
        return (
            <li key={journal._id}>
                <Link 
                    to={`/journals/${journal._id}`}
                >
                    <JournalSnapShot setJournals={props.setJournals} journal={journal} />

                </Link>
            </li>
        )
    })

    return (
        <div className="journalSnapShotView"> 
            <ol>
                {journalSnapShots}
            </ol>
        </div>
    )
}