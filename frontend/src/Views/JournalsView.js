
import {Routes, Route } from 'react-router-dom';

// Components :
    //Journals
import Journals from "../Components/Journals";
import NewJournalForm from '../Components/Forms/NewJournalForm';
import Journal from '../Components/Journal';

    //Entries
import Entries from '../Components/Entries';
import NewEntryForm from '../Components/Forms/NewEntryForm';
import Entry from '../Components/Entry';

export default function JournalsView(props){
    
    return (

            <Routes>
                {/* This component is rendered at the '/' route. It is rendering <Journals> */}
                <Route path='/' element={<Journals userData={props.userData} journals={props.journals} setJournals={props.setJournals}/>} />

                {/* The rest of these routes are specific to journals */}
                <Route path="new" element={<NewJournalForm setJournals={props.setJournals}/>} />
                <Route path=":_id/*" element={<Journal journals={props.journals}/> } />
                <Route path=":_id/entries" element={<Entries journals={props.journals} showControls={false}/>} />
                <Route path=":_id/entries/new" element={<NewEntryForm setJournals={props.setJournals} journals={props.journals}/>} />
                <Route path=":_id/entries/:id" element={<Entry journals={props.journals} showControls={true}/>} />
            </Routes>

    )
}
