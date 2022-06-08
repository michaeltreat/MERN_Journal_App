import { Link } from "react-router-dom"

// Components
import JournalSnapShot from "../../Components/SnapShots/JournalSnapShot"

export default function JournalSnapShotView(props){

    const journalSnapShots = props.journals.map(journal =>{
        return (
            <li key={journal._id}>
                <Link to={`/journals/${journal._id}`}>
                    <JournalSnapShot journal={journal} />
                </Link>
            </li>
        )
    })

    return (
        <div > 
            <ol>
                {journalSnapShots}
            </ol>
        </div>
    )
}