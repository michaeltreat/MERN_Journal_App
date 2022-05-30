import JournalEntry from "./JournalEntry"


export default function Journal(props){
    const description = "testing"
    const body = "lorem ipsum or sumthing or other"


    return <article>
            <ul>
                <JournalEntry description={description} body={body}  />
                <JournalEntry description={"simple"} body={"jack"} />
            </ul>
    </article>
}