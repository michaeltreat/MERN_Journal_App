import { useParams, Link } from 'react-router-dom'

// Components
import Header from './Layout/Header'
import EntriesView from '../Views/EntriesView'

// Styles
import '../Components/ComponentStyles/Controls.css'

export default function Journal (props) {
  const params = useParams()

  const journals = props.journals
  const journal = journals.find(journal => journal._id === params._id)

  // Need props in order to reference the journal/:_id part of the route.
  function Controls (props) {
    return (
      <div className='controls'>
        <h4>Controls</h4>
        <div>
          <Link to={`/journals/${props._id}/entries/new`}>New Entry</Link>
          <Link to={`/journals/${props._id}/entries`}>View Entires</Link>
        </div>
      </div>
    )
  }

  // TODO: fix error when routed to non-existant journal. IE: journal/wrong-_id
  if (!journal) console.log('ERROR')

  return (
    <div className='center'>
      <Header title={`Journal: "${journal.title}"`} />
      <Controls _id={journal._id} />
      <EntriesView journal={journal} />
    </div>
  )
}
