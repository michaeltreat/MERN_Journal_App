
import JournalSnapShot from "../../Components/JournalSnapShot"

export default function JournalSnapShotView(props){

    const journalSnapShots = props.journals.map(journal =>{
        return <JournalSnapShot key={journal._id} journal={journal} />
    })

    return (
        <div>
            <h3>Your Journals:</h3>
            <ol>
                {journalSnapShots}
            </ol>
        </div>
    )
}