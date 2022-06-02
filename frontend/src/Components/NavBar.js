import {Routes, Route, Link} from "react-router-dom";

export default function NavBar(props){

    return (
        <nav>
            <Link to="/">Login Page</Link>
            <Link to="home">Home</Link>
            <Link to="journals">Journals</Link>
        </nav>
    )
}