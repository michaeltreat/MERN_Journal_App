import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { useParams, useNavigate } from 'react-router-dom'

// Data Schema
import { CreateEntry } from '../../data/Schemas/EntrySchema'

// Styles
import '../ComponentStyles/FormStyles/NewJournalForm.css'

// Input Validation
const schema = yup.object({
  body: yup.string().required('The entry needs a body.'),
  description: yup.string()
}).required()

export default function NewEntryForm (props) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    shouldFocusError: true
  })

  // Used to navigate after Submit
  const navigate = useNavigate()
  const params = useParams()

  const journal = props.journals.find(journal => journal._id === params._id)

  const onSubmit = data => {
    const newEntry = new CreateEntry(data)
    journal.entries.push(newEntry)

    navigate(`/journals/${journal._id}/entries/${newEntry._id}`)
  }

  return (
    <form className='journalForm' onSubmit={handleSubmit(onSubmit)}>
      <p>New Journal Entry</p>
      <input
        placeholder='Description'
        {...register('description')}
      />

      <p>{errors.description?.message}</p>

      <textarea
        placeholder='Today I felt ....'
        autoFocus
        {...register('body')}
      />
      <p>{errors.body?.message}</p>

      <input type='submit' value='Create Journal' />
    </form>
  )
}
