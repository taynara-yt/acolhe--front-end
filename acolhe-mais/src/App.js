import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Sobre from './components/pages/Sobre'
import Plataforma from './components/pages/Plataformas'
import Home from './components/pages/Home'
import Login from './components/pages/Login'


import Container from './components/layout/Container'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'


function App() {
  return (
    <Router>
    <Navbar/>
   
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/plataformas" element={<Plataforma />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route exact path="/adminLog" element={<Login/>} />
        
        
    </Routes>
    
    <Footer/>
    </Router>
  )
}

export default App