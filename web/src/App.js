import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Courses from './layout/Courses'
import Header from './layout/Header'
import Home from './layout/Home'
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
      </Routes>
    </Router>
  )
}

export default App