import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <main className="contact-container">
            <section>
                <div className="contact-header">
                    <h1>Contact</h1>
                </div>

                <div className="brand-logo-group">
                    <img src="/logo.png" alt="Flynaero" style={{ height: '40px', objectFit: 'contain' }} />
                </div>

                <p className="intro-description">
                    Prêt à transformer votre ingénierie ? Nos experts en aérodynamique numérique et mécanique des fluides
                    traitent vos demandes sous 24h.
                </p>

                <div className="info-block">
                    <span className="info-label">
                        <svg viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                        Email
                    </span>
                    <a href="mailto:contact@flynaero.com" className="info-content">contact@flynaero.com</a>
                </div>

                <div className="info-block">
                    <span className="info-label">
                        <svg viewBox="0 0 24 24">
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                        </svg>
                        Téléphone
                    </span>
                    <span className="info-content">01 45 67 89 10</span>
                </div>

                <div className="info-block">
                    <span className="info-label">
                        <svg viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                        Localisation
                    </span>
                    <span className="info-content">43 avenue Robert Schuman, 94150 Rungis</span>
                </div>

                <div className="map-preview">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2631.63756885374!2d2.3486111!3d48.7475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e673f84897f3ef%3A0xc304a91986968989!2s43%20Av.%20Robert%20Schuman%2C%2094150%20Rungis!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                        width="100%" height="100%" style={{border: 0}} allowFullScreen=""
                        loading="lazy">
                    </iframe>
                </div>
            </section>

            <section>
                <form className="form-layout" onSubmit={e => e.preventDefault()}>
                    <div className="form-field">
                        <label>Nom</label>
                        <input type="text" placeholder="Votre nom complet" />
                    </div>
                    <div className="form-field">
                        <label>Société</label>
                        <input type="text" placeholder="Nom de votre entreprise" />
                    </div>
                    <div className="form-field full-row">
                        <label>Email Professionnel</label>
                        <input type="email" placeholder="exemple@gmail.com" />
                    </div>
                    <div className="form-field full-row">
                        <label>Objet</label>
                        <input type="text" placeholder="Sujet de votre demande" />
                    </div>
                    <div className="form-field full-row">
                        <label>Message (Max 2000 caractères)</label>
                        <textarea rows="5"
                            placeholder="Décrivez votre projet aéronautique ou votre question technique"></textarea>
                    </div>

                    <button type="submit" className="btn-send">Envoyer le message</button>

                    <div className="ia-cta">
                        <div className="ia-text">
                            <strong>Besoin d'aide technique immédiate ?</strong>
                            Préparez votre projet avec notre assistant IA expert en DPSM.
                        </div>
                        <a href="#" className="btn-ai-chat">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            </svg>
                            Parler à l'IA
                        </a>
                    </div>
                </form>
            </section>
        </main>
    );
};

export default Contact;
