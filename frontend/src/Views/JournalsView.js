import {Routes, Route, Link } from 'react-router-dom';

import Journal from '../Components/Journal';
import NewJournalForm from '../Components/Forms/NewJournalForm';
import NewEntryForm from '../Components/Forms/NewEntryForm';
import JournalEntry from '../Components/JournalEntry';


import Journals from "../Components/Journals";


export default function JournalsView(props){
    const journals = props.journals

    return (

            <Routes>
                <Route path='/' element={<Journals {...props}/>} />
                <Route path="new" element={<NewJournalForm />} />
                <Route path=":id" element={<Journal journal={journals[0]}/> } />
                
                {/* These routes need to be created still. */}
                {/* <Route path=":id/entries" element={<Journal entries={props.entries} />} /> */}
                {/* <Route path=":id/entries/new" element={<NewEntryForm journal={props.journal}/>} /> */}
                {/* <Route path=":id/entries/:id" element={<JournalEntry journal={props.journal}/>} /> */}
            </Routes>

    )
}
