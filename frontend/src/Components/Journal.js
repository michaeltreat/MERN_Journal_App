import Header from "./Header"
import EntriesView from "../Views/EntriesView"

export default function Journal(props){
    const journal = props.journal    

    return <div>

        <h3>{props.journal.title}</h3>

        <EntriesView entries={journal.entries} title={journal.title} recentEntryDisplayLimit={props.recentEntryDisplayLimit} />

    </div>
}