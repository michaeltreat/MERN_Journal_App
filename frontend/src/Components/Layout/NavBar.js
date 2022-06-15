import Header from './Header'
import { Link } from 'react-router-dom'

// Styles
import '../ComponentStyles/NavBar.css'

export default function NavBar (props) {
  return (

    <nav>
      <Header title='Journally App' />
      <Link to='home'><p>Home</p></Link>
      <Link to='journals'><p>Journals</p></Link>
      <Link to='/'><p>Login</p></Link>
    </nav>
  )
}
