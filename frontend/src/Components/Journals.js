

import {Routes, Route, Link, Outlet } from 'react-router-dom';
import Journal from "./Journal"
import Header from './Header';

function Controls(){
    return (
        <div className='controls-homeview'>
                <h4>Controls</h4>
                <div>

                    <Link to="/journals/new">Create New Journal</Link> 
                </div>
        </div>
    )
}


export default function Journals (props){
    const journals = props.journals
    const user = "Miles"

    const journalElements = journals.map( (journal ) =>{
        return (
            <li key={journal._id}>
                <Link 
                    to={`/journals/${journal._id}`}
                >
                <h3>{journal.title}</h3>
                </Link>
            </li>
 
        )
    })

    return (
        <div>
           <div className='homeView'>
                <Header title={`${user}'s Journals`}/>
            </div>

            <Controls/>

            <div>
                <ol>
                    {journalElements}
                </ol>
            </div>
        </div>
    )


}