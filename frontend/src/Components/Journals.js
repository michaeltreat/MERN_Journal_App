import Journal from "./Journal";

export default function Journals(props){

    const journals = props.journals.map(journal =>{
        return <Journal key={journal._id} journalEntries={journal.entries}></Journal>
    })

    return <ul>
        {journals}
    </ul>

}