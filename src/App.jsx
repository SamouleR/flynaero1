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
import AdminActualites from './pages/AdminActualites'
import Login from './pages/Login'
import Partenaires from './pages/Partenaires'
import Dpsm from './pages/Dpsm'
import Footer from './components/Footer'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const isAdmin = localStorage.getItem('isFlynaeroAdmin') === 'true';
  return isAdmin ? children : <Navigate to="/login" />;
};

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
          <Route path="/login" element={<Login />} />
          <Route path="/partenaires" element={<Partenaires />} />
          <Route path="/dpsm" element={<Dpsm />} />
          <Route 
            path="/admin/actualites" 
            element={
              <ProtectedRoute>
                <AdminActualites />
              </ProtectedRoute>
            } 
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App