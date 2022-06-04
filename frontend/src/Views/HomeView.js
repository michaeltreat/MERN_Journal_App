import '../Components/ComponentStyles/HomeView.css'
import '../Components/ComponentStyles/Controls-HomeView.css'


import React, { useState} from 'react';
import {Routes, Route, Link } from 'react-router-dom';

import NewJournalForm from '../Components/Forms/NewJournalForm';
import NewEntryForm from '../Components/Forms/NewEntryForm';
import Journal from '../Components/Journal';
import JournalEntry from '../Components/Entry';

import Header from "../Components/Layout/Header";
import Journals from '../Components/Journals';
import JournalSnapShotView from './Sub-Views/JournalSnapShotView';
import CreateJournalView from './Sub-Views/CreateJournalView';
import JournalEntrySnapShot from '../Components/EntrySnapShots';


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