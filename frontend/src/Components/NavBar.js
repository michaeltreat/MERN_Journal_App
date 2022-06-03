import './ComponentStyles/NavBar.css'
import Header from './Header';
import { Link } from "react-router-dom";

export default function NavBar(props){

    return (

        <nav>
            <Header title="Journally App"/>    
            <Link to="/"><p>Login</p></Link>
            <Link to="home"><p>Home</p></Link>
            <Link to="journals"><p>Journals</p></Link>
        </nav>
    )
}