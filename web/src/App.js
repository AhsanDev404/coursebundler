import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Courses from './layout/Courses'
import Footer from './layout/Footer'
import ForgetPassword from './layout/ForgetPassword'
import Header from './layout/Header'
import Home from './layout/Home'
import Login from './layout/Login'
import Register from './layout/Register'
import ResetPassword from './layout/ResetPassword'
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/password/forget' element={<ForgetPassword />} />
        <Route path='/password/reset/:token' element={<ResetPassword/>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App