
import { getJournal } from "../data/data";
import { useParams } from "react-router-dom"

import Header from "./Header"
import EntriesView from "../Views/EntriesView"

export default function Journal(props){
    let params = useParams();
    const journal = getJournal(params._id) 


    return <div>

        <h3>{journal.title}</h3>

        {/* <EntriesView entries={journal.entries} title={journal.title} recentEntryDisplayLimit={props.recentEntryDisplayLimit} /> */}

    </div>
}