
import {Routes, Route } from 'react-router-dom';

// Components 
import Journal from '../Components/Journal';
import NewJournalForm from '../Components/Forms/NewJournalForm';
import NewEntryForm from '../Components/Forms/NewEntryForm';
import Entry from '../Components/Entry';
import Entries from '../Components/Entries';


import Journals from "../Components/Journals";

export default function JournalsView(props){
    

    return (

            <Routes>
                {/* This component is rendered at the '/' route. It is rendering <Journals> */}
                <Route path='/' element={<Journals journals={props.journals} setJournals={props.setJournals}/>} />

                {/* The rest of these routes are specific to journals */}
                <Route path="new" element={<NewJournalForm journals={props.journals} setJournals={props.setJournals}/>} />
                <Route path=":_id" element={<Journal journals={props.journals}/> } />
                <Route path=":_id/entries" element={<Entries showControls={false}/>} />
                <Route path=":_id/entries/new" element={<NewEntryForm journal={props.journal}/>} />
                <Route path=":_id/entries/:id" element={<Entry showControls={true}/>} />
            </Routes>

    )
}
