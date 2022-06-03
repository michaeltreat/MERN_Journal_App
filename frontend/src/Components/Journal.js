
import { getJournal } from "../data/data";
import { useParams } from "react-router-dom"

import Header from "./Header"
import EntriesView from "../Views/EntriesView"

export default function Journal(props){
    let params = useParams();
    const journal = props.journal || getJournal(params._id) 


    return <div>

        <Header title={`"${journal.title}"`} />

        <EntriesView journal={journal} recentEntryDisplayLimit={props.recentEntryDisplayLimit} />

    </div>
}