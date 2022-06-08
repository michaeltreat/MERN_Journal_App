import { useState } from 'react';

import {Routes, Route } from 'react-router-dom';
import Journal from '../Components/Journal';
import NewJournalForm from '../Components/Forms/NewJournalForm';
import NewEntryForm from '../Components/Forms/NewEntryForm';
import Entry from '../Components/Entry';
import Entries from '../Components/Entries';


import Journals from "../Components/Journals";
import { getJournals} from '../data/data';


export default function JournalsView(props){
    

    return (

            <Routes>
                <Route path='/' element={<Journals journals={props.journals} setJournals={props.setJournals}/>} />
                <Route path="new" element={<NewJournalForm journals={props.journals} setJournals={props.setJournals}/>} />
                <Route path=":_id" element={<Journal journals={props.journals}/> } />
                
                {/* These routes need to be created still. */}
                <Route path=":_id/entries" element={<Entries showControls={false}/>} />
                <Route path=":_id/entries/new" element={<NewEntryForm journal={props.journal}/>} />
                <Route path=":_id/entries/:id" element={<Entry showControls={true}/>} />
            </Routes>

    )
}
