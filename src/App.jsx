import React from 'react'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import Header from './components/Header'
import Homeblog from './components/Homeblog'
import About from './components/pages/About'
import Skills from './components/pages/Skills'
import Services from './components/pages/Services'
// import Certificates from './components/pages/Certificates'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'
import Footer from './components/Footer'





const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Homeblog/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/services' element={<Services/>}/>
        {/* <Route path='/certificates' element={<Certificates/>}/>            */}
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
       

      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  )
}

export default App