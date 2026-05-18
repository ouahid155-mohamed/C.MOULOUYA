import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Home from './pages/Home'
import APropos from './pages/APropos'
import Header from './components/Header/Header'
import Navbar from './components/NavBar/NavBar'
import Specialites from './pages/Specialites'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

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
