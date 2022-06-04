
import "../../Components/ComponentStyles/JournalSnapShotView.css"
import JournalSnapShot from "../../Components/JournalSnapShot"


export default function JournalSnapShotView(props){

    const journalSnapShots = props.journals.map(journal =>{
        return (
            <li key={journal._id}>
                <JournalSnapShot journal={journal}/>
            </li>
        )
    })

    return (
        <div className="journalSnapShotView"> 
            <h3>Recent Journals :</h3>
            <ol>
                {journalSnapShots}
            </ol>
        </div>
    )
}