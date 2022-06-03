
import React, { useState} from 'react';
import {Routes, Route, Link } from 'react-router-dom'

import JournalSnapShot from "../Components/JournalSnapShot";
import Header from "../Components/Header";
import NewJournalForm from "../Components/Forms/NewJournalForm";
import Journal from "../Components/Journal";
import JournalSnapShotView from './Sub-Views/JournalSnapShotView';





export default function JournalsView(props){
    const [showForm, setShowForm] = useState()

  

    return <div>
    
        <Header header="- Journals" />
        <JournalSnapShotView journals={props.journals} />


        {/* Create Journal View */}
        <div>          
            <button onClick={() => setShowForm(!showForm)}>Create New Journal</button>  
        </div>

        <NewJournalForm  /> 
      
        {/* Full Journal View */}
        {/* <div>
        <Journal journal={props.journals[0]} recentEntryDisplayLimit={0} />
        <Journal journal={props.journals[0]} recentEntryDisplayLimit={1} />
        
        <Journal journal={props.journals[1]} recentEntryDisplayLimit={0} />
        
    </div> */}
    </div>
}