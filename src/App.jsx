// import React from 'react'+
import Home from './pages/home/Home'
import About from './pages/about/About'
import Services from './pages/services/Services'
import Gallery from './pages/gallery/Gallery'
import Contact from './pages/contact/Contact'
import NotFound from './pages/notFound/NotFound'

const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <NotFound />
    </div>
  )
}

export default App