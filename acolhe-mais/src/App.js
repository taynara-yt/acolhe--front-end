import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Sobre from './components/pages/Sobre'
import Plataforma from './components/pages/Plataforma'
import Home from './components/pages/Home'
import Sugestao from './components/pages/Sugestao'


import Container from './components/layout/Container'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'




function App() {
  return (
    <Router>
    <Navbar/>
   
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/plataforma" element={<Plataforma />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/sugestao" element={<Sugestao/>} />
        
    </Routes>
    <Sugestao/>
    <Footer/>
    </Router>
  )
}

export default App