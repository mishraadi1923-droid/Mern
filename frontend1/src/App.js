import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import AddMovie from './Components/AddMovie'
import EditMovie from './Components/EditMovie'
import ShowMovie from './Components/ShowMovie'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {
  return (
    <>
    
      <BrowserRouter>
        <Navbar />
        
        <Routes>
        <Route path='/movie/:id' element={<ShowMovie />} />
        <Route path='/edit/:id' element={<EditMovie />} />
        
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddMovie />} />

        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}
export default App


