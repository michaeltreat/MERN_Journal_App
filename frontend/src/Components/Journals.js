import { Link } from 'react-router-dom'

// Components
import Header from './Layout/Header'
import JournalSnapShotView from '../Views/Sub-Views/JournalSnapShotView'

// Styles
import './ComponentStyles/Journals.css'

// TODO: Fix styling for Journals SnapShots

function Controls () {
  return (
    <div className='controls'>
      <h4>Controls</h4>
      <div>
        <Link to='/journals/new'>Create New Journal</Link>
      </div>
    </div>
  )
}

export default function Journals (props) {
  return (
    <div className='center'>
      <Header title='Journals' />

      <Controls />
      <h3>Your Journals: </h3>
      <JournalSnapShotView journals={props.journals} />
    </div>
  )
}
