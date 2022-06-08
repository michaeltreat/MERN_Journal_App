import { Link } from "react-router-dom"

import "../../Components/ComponentStyles/JournalSnapShotView.css"

// Components
import JournalSnapShot from "../../Components/SnapShots/JournalSnapShot"

export default function JournalSnapShotView(props){

    const journalSnapShots = props.journals.map(journal =>{
        return (
            <Link key={journal._id} to={`/journals/${journal._id}`} >
                <JournalSnapShot journal={journal} />
            </Link>

        )
    })

    return (
        <div>
            {journalSnapShots}
        </div>
    )
}