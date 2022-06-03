
import "../../Components/ComponentStyles/JournalSnapShotView.css"
import JournalSnapShot from "../../Components/JournalSnapShot"


export default function JournalSnapShotView(props){

    const journalSnapShots = props.journals.map(journal =>{
        return <JournalSnapShot key={journal._id} journal={journal}/>
    })

    return (
        <div className="journalSnapShotView">
            <div>   
                <h3>Snapshots of your most recent Journals:</h3>
                <ol>
                    {journalSnapShots}
                </ol>
            </div>
        </div>
    )
}