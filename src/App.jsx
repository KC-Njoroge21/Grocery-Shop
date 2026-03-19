import React from 'react'
import {Routes, Route} from 'react-router-dom' 
import Landing from './pages/Landing'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
    </div>
  )
}

export default App