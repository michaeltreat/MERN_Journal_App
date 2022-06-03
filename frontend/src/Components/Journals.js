
import {Routes, Route, Link, Outlet } from 'react-router-dom';
import Journal from "./Journal"
import Header from './Header';

function Controls(){
    return (
        <div className='controls-homeview'>
                <h4>Controls</h4>
                <div>

                    <Link to="/journals/new">Create New Journal</Link> 
                    <Link to="/journals/1">testing :id link for journal1</Link> 
                </div>
        </div>
    )
}


export default function Journals (props){
    const journals = props.journals
    const user = "Miles"

    const journalElements = journals.map( (journal ) =>{
        return (

        <Link 
            to={`/journals/${journal._id}`}
            key={journal._id}
        >
            <h3>{journal.title}</h3>
        </Link>
 
        )
    })

    return (
        <div>
            {/* <Route path=":id" element={<Journal journal={}/> } /> */}
           <div className='homeView'>
                <Header title="Journals" />
                <h3>{user}'s Journals</h3>
            </div>
            <Controls/>

            <div>
                {journalElements}

            </div>
        </div>
    )


}