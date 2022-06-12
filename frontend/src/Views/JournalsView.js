//  route =  /journals/
import {React, useState, useEffect} from 'react';
import {Routes, Route, useParams, useLocation } from 'react-router-dom';

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

    const [activeJournal, setActiveJournal] = useState(props.journals[0]); 
    
    
    const params = useParams();
    
    useEffect(() => {
        
        if(params[Object.keys(params)[0]]){
            console.log('inside of params')
            params._id = params[Object.keys(params)[0]]
            if(activeJournal?._id !== params._id){
                    
                let journal = props.journals.find(journal => journal._id === params.id)
                setActiveJournal(journal)
            }
        }
    })


    
    
        
        // console.log(params[Object.keys(params)[0]])
    
    return (

            <Routes>
                {/* This component is rendered at the '/' route. It is rendering <Journals> */}
                <Route path='/' element={<Journals setActiveJournal={setActiveJournal} journals={props.journals} setJournals={props.setJournals}/>} />

                {/* The rest of these routes are specific to journals */}
                <Route path="/:_id/*" element={<Journal journal={activeJournal} journals={props.journals}/> } />
                <Route path="new" element={<NewJournalForm setJournals={props.setJournals}/>} />
                <Route path=":_id/entries" element={<Entries journals={props.journals} showControls={false}/>} />
                <Route path=":_id/entries/new" element={<NewEntryForm setJournals={props.setJournals} journals={props.journals}/>} />
                <Route path=":_id/entries/:id" element={<Entry journals={props.journals} showControls={true}/>} />
            </Routes>

    )
}
