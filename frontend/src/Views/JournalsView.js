import Journals from "../Components/Journals";

export default function JournalsView(props){
    const journals = props.journals


    return (
        <Journals {...props} />
    )
}
