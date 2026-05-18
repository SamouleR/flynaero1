import React from 'react';
import { Link } from 'react-router-dom';
import './CtaSection.css';

const CtaSection = () => {
  return (
    <div className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">
            Vous avez un projet de simulation <span className="cfd-tooltip" data-tooltip="Computational Fluid Dynamics (Dynamique des Fluides Numérique). L'étude de la dynamique des fluides par la résolution numérique des équations régissant les fluides.">CFD</span> complexe ?
          </h2>
          <p className="cta-subtitle">Nos experts sont à votre écoute.</p>
        </div>
        <div className="cta-action">
          <Link to="/contact" className="cta-button">Nous Contacter</Link>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
