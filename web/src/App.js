import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Courses from './layout/Courses'
import Footer from './layout/Footer'
import Header from './layout/Header'
import Home from './layout/Home'
import Login from './layout/Login'
import Register from './layout/Register'
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App