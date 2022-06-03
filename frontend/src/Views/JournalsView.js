
import React, { useState} from 'react';
import {Routes, Route, Link } from 'react-router-dom';

import Header from "../Components/Header";
import Journals from '../Components/Journals';
import JournalSnapShotView from './Sub-Views/JournalSnapShotView';
import CreateJournalView from './Sub-Views/CreateJournalView';



export default function JournalsView(props){
    const [showForm, setShowForm] = useState()
    const [showJournals, setShowJournals] = useState(false)

    return <div>
    
        <Header header="- Journals" />
        <p>Welcome Miles!</p>

        <CreateJournalView />
        {/* <JournalSnapShotView {...props}/> */}
        <Journals {...props} />
        
        <button>View All Journals</button>


    </div>
}