
import {Routes, Route, Link } from 'react-router-dom';
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
        <li key={journal._id}>
            <Journal journal={journal}></Journal> 
        </li>
        )
    })

    return (
        <div>
           <div className='homeView'>
                <Header title="Journals" />
                <h3>{user}'s Journals</h3>
            </div>
            <Controls/>

            <div>
                <ul>
                    {journalElements}
                </ul>
            </div>
        </div>
    )


}