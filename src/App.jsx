// import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Services from './pages/services/Services'
import Gallery from './pages/gallery/Gallery'
import Contact from './pages/contact/Contact'
import NotFound from './pages/notFound/NotFound'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <NotFound />
    </BrowserRouter>
  )
}

export default App