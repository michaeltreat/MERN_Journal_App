import { useParams } from "react-router-dom"

// Components
import Header from "./Layout/Header"
import EntriesView from "../Views/Sub-Views/EntriesView"

export default function Journal(props){
    let params = useParams();

    const journals = props.journals
    const journal = journals.find(journal => journal._id === params._id)

    //TODO: fix error when routed to non-existant journal.
    if (!journal) console.log('ERROR')

    return (
        <div>
            <Header title={`"${journal.title}"`} />

            <EntriesView journal={journal} recentEntryDisplayLimit={props.recentEntryDisplayLimit} />

        </div>
    )
}