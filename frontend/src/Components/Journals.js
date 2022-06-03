
import {Routes, Route, Link } from 'react-router-dom';
import Journal from "./Journal"
import Header from './Header';


function Controls(){
    return (
        <div className='controls'>
            <div>
                <Link to="/journals/new">Create New Journal</Link> 
            </div>
            <div>
                <Link to="/journals/1">testing :id link for journal1</Link> 
            </div>
        </div>
    )
}


export default function Journals (props){
    const journals = props.journals

    const journalElements = journals.map( (journal ) =>{
        return (
        <li key={journal._id}>
            <Journal journal={journal}></Journal> 
        </li>
        )
    })

    return (
        <div>
            <Header title={`Journals`} />
            <Controls/>

            <div>
                <ul>
                    {journalElements}
                </ul>
            </div>
        </div>
    )


}