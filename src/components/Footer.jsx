import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

export default function Footer() {
  // 1. État pour afficher/cacher le bouton Back To Top
  const [showBackToTop, setShowBackToTop] = useState(false);

  // 2. Récupération dynamique de l'année actuelle
  const currentYear = new Date().getFullYear();

  // 3. Écouteur d'événement au scroll (l'équivalent de ton script JS)
  useEffect(() => {
    const handleScroll = () => {
      // Si on descend de plus de 400px, on affiche le bouton
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    // On ajoute l'écouteur au chargement du composant
    window.addEventListener('scroll', handleScroll);

    // Fonction de nettoyage (très important en React pour éviter les bugs)
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 4. Fonction pour remonter en haut de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Colonne 1 */}
        <div className="footer-col">
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.5rem' }}>
            <img src="/logo.png" alt="Flynaero Logo" style={{ height: '40px', objectFit: 'contain' }} />
            <h3 style={{ margin: 0 }}>Flynaero.</h3>
          </div>
          <address className="footer-address">
            <p>Siège social / Bureau d'études</p>
            <p>
              1 Rue de la Réunion<br />
              94150 Rungis, France
            </p>
          </address>
        </div>

        {/* Colonne 2 */}
        <div className="footer-col">
          <h3>Plan du site</h3>
          <nav aria-label="Navigation de pied de page">
            <Link to="/">Accueil</Link>
            <Link to="/equipe">L'entreprise</Link>
            <Link to="/dpsm">La méthode DPSM</Link>
            <Link to="/contact">Nous contacter</Link>
          </nav>
        </div>

        {/* Colonne 3 */}
        <div className="footer-col">
          <h3>Restons connectés</h3>
          <p>Prêt à concrétiser votre projet avec nos ingénieurs ?</p>
          {/* Attention au style en ligne en React : on utilise un objet {{}} */}
          <Link to="/contact" style={{ color: 'var(--color-accent-blue)', fontWeight: 'bold' }}>
            Démarrer un projet →
          </Link>
          <br />
          <a href="https://linkedin.com/company/flynaero" target="_blank" rel="noopener noreferrer" aria-label="Suivez-nous sur LinkedIn">
            Suivez-nous sur LinkedIn
          </a>
        </div>
      </div>

      {/* Bouton Back to Top avec condition sur la classe */}
      <button 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`} 
        aria-label="Retour en haut"
        onClick={scrollToTop}
      >
        {/* Attention : stroke-width devient strokeWidth en JSX */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>

      {/* Partie basse du footer */}
      <div className="footer-bottom">
        <div className="copyright">
          {/* L'année est injectée dynamiquement avec les accolades */}
          &copy; <span>{currentYear}</span> Flynaero. Tous droits réservés.
        </div>
        <div className="footer-legal">
          <Link to="/mentions-legales">Mentions légales</Link>
          <Link to="/confidentialite">Politique de confidentialité</Link>
          <Link to="/cgv">CGV</Link>
        </div>
      </div>
    </footer>
  );
}