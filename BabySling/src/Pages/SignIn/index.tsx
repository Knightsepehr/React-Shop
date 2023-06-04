import { useState } from 'react'
import SignInForm from '../../comp/forms/signinform'
import '../../App.css'
import Jumbotron from '../../comp/etc/Jumbotron'

function Signin() {
//   const [count, setCount] = useState(0)

  return (
    <>
    <div className="w-full">
        <Jumbotron pageTitle='Sign In' pageaddresstext='Home/Sign-in' />
      <div className="flex justify-center py-10">
      <SignInForm/>
      </div>

    </div>
    </>
  )
}

export default Signin
