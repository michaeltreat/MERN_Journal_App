import '../Components/ComponentStyles/HomeView.css'
import '../Components/ComponentStyles/Controls-HomeView.css'


import React from 'react';
import { Link } from 'react-router-dom';

import Header from "../Components/Layout/Header";
import JournalSnapShotView from './Sub-Views/JournalSnapShotView';

function Controls(){
    return (
        <div className='controls-homeview'>
            <h4>Controls</h4>
            <div>
                <Link to="/journals/">View All Journals</Link>  
                <Link to="/journals/new">Create New Journal</Link> 
            </div>
        </div>
    )
}

export default function JournalsView(props){
    const user = 'Miles M.'

    return (
        <div>
            <div className='homeView'>
                    <Header title={`Home - Welcome ${user}`} />

            </div>

            <Controls />
            
            <JournalSnapShotView journals={props.journals} />
        </div>
    )
}