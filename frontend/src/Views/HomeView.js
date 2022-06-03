
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





export default function JournalsView(props){
    const user = 'Miles'

    return (
        <div>
        
                <div>
                    <Header header="- Home" />
                    <p>Welcome {user}!</p>
                </div>

            <Link to="new">Create New Journal</Link> 
            <p></p>
            <Link to="/journals/">View All Journals</Link>  

            <JournalSnapShotView journals={props.journals} />
            
        </div>
    )
}