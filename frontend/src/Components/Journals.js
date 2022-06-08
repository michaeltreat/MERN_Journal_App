import {Link } from 'react-router-dom';

// Components
import Header from './Layout/Header';
import JournalSnapShotView from '../Views/Sub-Views/JournalSnapShotView';

// Styles 
import "./ComponentStyles/Journals.css"

function Controls(){
    return (
        <div className='controls'>
            <h4>Controls</h4>
            <div>
                <Link to="/journals/new">Create New Journal</Link> 
            </div>
        </div>
    )
}


export default function Journals (props){
    const journals = props.journals


    return (
        <div>
           <div className='homeView'>
                <Header title={`Miles M.'s Journals`}/>
            </div>

            <Controls/>

            <JournalSnapShotView journals={props.journals} />
        </div>
    )
}