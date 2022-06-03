import {Routes, Route, Link } from 'react-router-dom';

import Journal from '../Components/Journal';
import NewJournalForm from '../Components/Forms/NewJournalForm';
import NewEntryForm from '../Components/Forms/NewEntryForm';
import JournalEntry from '../Components/Entry';


import Journals from "../Components/Journals";
import { getJournals} from '../data/data';


export default function JournalsView(props){
    const journals = getJournals()

    return (

            <Routes>
                <Route path='/' element={<Journals journals={journals}/>} />
                <Route path="new" element={<NewJournalForm />} />
                <Route path=":_id" element={<Journal /> } />
                
                {/* These routes need to be created still. */}
                <Route path=":_id/entries" element={<Journal />} />
                {/* <Route path=":id/entries/new" element={<NewEntryForm journal={props.journal}/>} /> */}
                {/* <Route path=":id/entries/:id" element={<JournalEntry journal={props.journal}/>} /> */}
            </Routes>

    )
}
