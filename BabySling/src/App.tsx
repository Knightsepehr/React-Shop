import { useState } from 'react'
import Header from './comp/sections/header'
import Footer from './comp/sections/footer'
import SigninPage from './Pages/SignIn'
import NotFound from './Pages/404'
import AccountMenuItem from './comp/etc/accountmenuitem'
import AccountMenu from './Pages/Account'
import RegistrationForm from './comp/forms/registerform'
import RegisterPage from './Pages/Register'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main className="w-full">
      <Header/>
      {/* <SigninPage/> */}
      <RegisterPage/>
      <Footer/>

    </main>
    </>
  )
}

export default App
