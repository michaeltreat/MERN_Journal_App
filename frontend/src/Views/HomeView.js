import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Header from "../Components/Layout/Header";
import JournalSnapShotView from './Sub-Views/JournalSnapShotView';

// Styles
import '../Components/ComponentStyles/Controls.css'

function Controls(){
    return (
        <div className='controls'>
            <h4>Controls</h4>
            <div>
                <Link to="/journals/">View All Journals</Link>  
                <Link to="/journals/new">Create New Journal</Link> 
            </div>
        </div>
    )
}

export default function JournalsView(props){
    
    return (
        <div className='center'>
            <Header title={`Home`} />
            <Controls />

            <h3>Recent Journals:</h3>
            <JournalSnapShotView journals={props.journals} />
        </div>
    )
}