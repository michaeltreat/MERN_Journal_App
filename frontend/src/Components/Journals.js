import {Link } from 'react-router-dom';
import Header from './Layout/Header';

// Styles 
import "./ComponentStyles/Journals.css"
import JournalSnapShot from './JournalSnapShot';

function Controls(){
    return (
        <div className='controls-homeview'>
            <h4>Controls</h4>
            <div>
                <Link to="/journals/new">Create New Journal</Link> 
            </div>
        </div>
    )
}


export default function Journals (props){
    const journals = props.journals
    const user = "Miles"

    const journalElements = journals.map( (journal ) =>{
        return (
            <li key={journal._id}>
                <Link 
                    to={`/journals/${journal._id}`}
                >
                    <JournalSnapShot setJournals={props.setJournals} journal={journal} />

                </Link>
            </li>
        )
    });

    return (
        <div>
           <div className='homeView'>
                <Header title={`${user}'s Journals`}/>
            </div>

            <Controls/>

            <div className='journals'>
                <ol>
                    {journalElements}
                </ol>
            </div>
        </div>
    )
}