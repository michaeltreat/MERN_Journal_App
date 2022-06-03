

import {Routes, Route, Link, Outlet } from 'react-router-dom';
import Journal from "./Journal"
import Header from './Layout/Header';
import Entry from './Entry';
import { useParams } from "react-router-dom"
import { getJournal } from '../data/data';

function Controls(props){
    return (
        <div className='controls-homeview'>
            <h4>Controls</h4>
            <div>
                <Link to={`/journals/${props._id}/entries/new`}>New Entry</Link> 
                <Link to={`/journals/${props._id}/`}>Back to Journal</Link>
                {/* <Link to={`/journals/`}>Back to Journals</Link>   */}
            </div>
        </div>
    )
}

export default function Entries (props){
    let params = useParams();
    const journal = props.journal || getJournal(params._id) 
   
    const entries = journal.entries

    const journalEntires = entries.map(entry =>{
        return (
            <li key={`entry-${entry._id}`}>
                <Link to={`/journals/${journal._id}/entries/${entry._id}`}>
                    <Entry key={entry._id} entry={entry} title={journal.title} />
                </Link >

            </li>
        )
    })

    return (
        <div>
           <div className='homeView'>
                <Header title={`${journal.title}'s Entires:`}/>
            </div>

            <Controls _id={journal._id}/>
            <ol>
                {journalEntires}
            </ol>
 
        </div>
    )


}