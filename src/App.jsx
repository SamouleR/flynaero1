import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Equipe from './pages/Equipe'
import Histoire from './pages/Histoire'
import MentionsLegales from './pages/MentionsLegales'
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite'
import Cgv from './pages/Cgv'
import Actualites from './pages/Actualites'
import ActualiteDetail from './pages/ActualiteDetail'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/histoire" element={<Histoire />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/cgv" element={<Cgv />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/actualites/:id" element={<ActualiteDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App