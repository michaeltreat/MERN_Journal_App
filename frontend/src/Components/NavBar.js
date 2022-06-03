import './ComponentStyles/NavBar.css'
import { Link } from "react-router-dom";

export default function NavBar(props){

    return (
        <nav>
            <Link to="/"><p>Login Page</p></Link>
            <Link to="home"><p>Home</p></Link>
            <Link to="journals"><p>Journals</p></Link>
        </nav>
    )
}