import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import APropos from './pages/APropos'
import Header from './components/Header/Header'
import Navbar from './components/NavBar/NavBar'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/"        element={<Home />} />
        <Route path="/apropos" element={<APropos />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
