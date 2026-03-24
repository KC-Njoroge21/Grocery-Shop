import React from 'react'
import {Routes, Route} from 'react-router-dom' 
import Landing from './pages/Landing'
import Header from './components/Header'
import Products from './pages/Products'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </div>
  )
}

export default App