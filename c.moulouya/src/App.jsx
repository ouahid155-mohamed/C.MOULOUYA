import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import APropos from './pages/APropos'
import Header from './components/Header/Header'
import Navbar from './components/NavBar/NavBar'
import Specialites from './pages/Specialites'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/"        element={<Home />} />
        <Route path="/apropos" element={<APropos />} />
        <Route path="/specialites" element={<Specialites/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/contact" element={<Contact/>} />
        
      </Routes>
    </BrowserRouter>
  )
}
export default App
