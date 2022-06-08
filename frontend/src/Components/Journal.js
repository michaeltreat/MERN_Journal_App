
import { getJournal } from "../data/data";
import { useParams } from "react-router-dom"

import Header from "./Layout/Header"
import EntriesView from "../Views/Sub-Views/EntriesView"

export default function Journal(props){
    let params = useParams();
    const journals = props.journals
    const journal = journals.find(journal => journal._id === params._id)
    // const journal = props.journal || getJournal(params._id)
    console.log(journal)



    return <div>

        <Header title={`"${journal.title}"`} />

        <EntriesView journal={journal} recentEntryDisplayLimit={props.recentEntryDisplayLimit} />

    </div>
}