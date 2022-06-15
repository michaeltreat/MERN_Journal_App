
// Components
import EntrySnapShotView from './Sub-Views/EntrySnapShotView'

export default function EntriesView (props) {
  const journal = props.journal

  return (
    <div>
      <h3>Recent Journal Entries: </h3>
      <EntrySnapShotView journal={journal} entries={journal.entries} />
    </div>
  )
}
