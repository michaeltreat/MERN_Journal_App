import '../Components/ComponentStyles/HomeView.css'
import '../Components/ComponentStyles/Controls.css'


import React, { useState} from 'react';
import {Routes, Route, Link } from 'react-router-dom';

import NewJournalForm from '../Components/Forms/NewJournalForm';
import NewEntryForm from '../Components/Forms/NewEntryForm';
import Journal from '../Components/Journal';
import JournalEntry from '../Components/JournalEntry';

import Header from "../Components/Header";
import Journals from '../Components/Journals';
import JournalSnapShotView from './Sub-Views/JournalSnapShotView';
import CreateJournalView from './Sub-Views/CreateJournalView';
import JournalEntrySnapShot from '../Components/JournalEntrySnapShots';


function Controls(){
    return (
        <div className='controls'>
            <div>
            <Link to="/journals/">View All Journals</Link>  
            </div>

            <div>
            <Link to="/journals/new">Create New Journal</Link> 
            </div>
        </div>
    )
}


export default function JournalsView(props){
    const user = 'Miles'

    return (
        <div>
            <div>
                <Header title="Home" />
                <h3>Welcome {user}!</h3>
            </div>
            <Controls />
            <JournalSnapShotView journals={props.journals} />
            
        </div>
    )
}