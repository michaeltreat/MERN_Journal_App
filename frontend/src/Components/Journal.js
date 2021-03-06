import { useParams } from "react-router-dom"

// Components
import Header from "./Layout/Header"
import EntriesView from "../Views/EntriesView"

export default function Journal(props){
    let params = useParams();

    const journals = props.journals
    const journal = journals.find(journal => journal._id === params._id)

    //TODO: fix error when routed to non-existant journal. IE: journal/wrong-_id
    if (!journal) console.log('ERROR')

    return (
        <div className="center">
            <Header title={`Journal: "${journal.title}"`} />
            <EntriesView journal={journal} />
        </div>
    )
}