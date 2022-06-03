import './ComponentStyles/JournalSnapShot.css'
import {Routes, Route, Link, Outlet } from 'react-router-dom';

export default function JournalSnapShot(props){
    const journal = props.journal;


    return (
        <li className='journalSnapShot' key={journal._id}>
            <Link  to={`/journals/${journal._id}`}>
                <div>
                    <h3>{journal.title} :</h3>
                    <p><b>Description: </b></p>
                    <p>{journal.description}</p>
                </div>
            </Link>
        </li>
    )
}