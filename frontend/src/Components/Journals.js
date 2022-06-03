

import Journal from "./Journal"

export default function Journals (props){
    const journals = props.journals

    const journalElements = journals.map( (journal ) =>{

        return (
        <li key={journal._id}>
            <Journal journal={journal}></Journal> 
        </li>
        )
    })

    return (
        <div>
            <ul>
                {journalElements}
            </ul>
        </div>
    )


}