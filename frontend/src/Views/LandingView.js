import Header from '../Components/Layout/Header'
import SignInForm from '../Components/Forms/SignInForm'

export default function LandingView (props) {
  return (
    <div className='center'>
      <Header title='Login' />
      <SignInForm />
    </div>
  )
}
