import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Equipe.css';

const Equipe = () => {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    };

    return (
        <div className="equipe-page">


            <section className="notre-equipe-section">
                <h1>Notre équipe</h1>

                <div className="team-grid">
                    <div className="member-card">
                        <div className="photo-container"><img src="/img/rudy.webp" alt="Rudy GOVINDOORAZOO" /></div>
                        <h2>Rudy GOVINDOORAZOO</h2>
                        <h3>CEO DE FLYNAERO</h3>
                        <div className="description-row">
                            <a href="#" className="linkedin-link"><svg className="linkedin-icon" viewBox="0 0 24 24">
                                    <path
                                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg></a>
                            <p>Expert en hautes technologies et management (ESSEC). Optimise les stratégies d'innovation et
                                conduit le changement au sein de FLYNAERO.</p>
                        </div>
                    </div>

                    <div className="member-card">
                        <div className="photo-container"><img src="/img/serge.webp" alt="Serge GOULAOUEN" /></div>
                        <h2>Serge GOULAOUEN</h2>
                        <h3>RESPONSABLE RESSOURCES ET DÉVELOPPEMENT</h3>
                        <div className="description-row">
                            <a href="#" className="linkedin-link"><svg className="linkedin-icon" viewBox="0 0 24 24">
                                    <path
                                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg></a>
                            <p>Ingénieur aéronautique et chercheur associé au CNRS. Fondateur de IAPA et expert en simulateurs
                                de vol pour l'aviation civile.</p>
                        </div>
                    </div>

                    <div className="member-card">
                        <div className="photo-container"><img src="/img/jean-pierre.webp" alt="Jean-Pierre BARBOT" /></div>
                        <h2>Jean-Pierre BARBOT</h2>
                        <h3>DIRECTION SCIENTIFIQUE</h3>
                        <div className="description-row">
                            <a href="#" className="linkedin-link"><svg className="linkedin-icon" viewBox="0 0 24 24">
                                    <path
                                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg></a>
                            <p>Enseignant-chercheur et Maître de conférences à l'ENS Paris-Saclay. Pilote le projet EASY-FLUID
                                et l'encadrement technique.</p>
                        </div>
                    </div>

                    <div className="member-card">
                        <div className="photo-container"><img src="/img/mehdi.webp" alt="Mehdi BRAHATI" /></div>
                        <h2>Mehdi BRAHATI</h2>
                        <h3>RESPONSABLE INFORMATIQUE</h3>
                        <div className="description-row">
                            <a href="#" className="linkedin-link"><svg className="linkedin-icon" viewBox="0 0 24 24">
                                    <path
                                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg></a>
                            <p>Spécialiste du développement scientifique et informatique. En charge de l'architecture logicielle
                                des solutions Flynaero.</p>
                        </div>
                    </div>

                    <div className="member-card">
                        <div className="photo-container"><img src="/img/dominique.webp" alt="Dominique PLACKO" /></div>
                        <h2>Dominique PLACKO</h2>
                        <h3>CONSEILLER SCIENTIFIQUE</h3>
                        <div className="description-row">
                            <p>Enseignant-chercheur à l'ENS. Inventeur de la méthode DPSM et garant des orientations
                                scientifiques de la direction.</p>
                        </div>
                    </div>

                    <div className="member-card">
                        <div className="photo-container"><img src="/img/eric.webp" alt="Eric DARGELOS" /></div>
                        <h2>Eric DARGELOS</h2>
                        <h3>DIRECTEUR COMMERCIAL</h3>
                        <div className="description-row">
                            <a href="#" className="linkedin-link"><svg className="linkedin-icon" viewBox="0 0 24 24">
                                    <path
                                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg></a>
                            <p>Ancien commandant de bord (5000 hdv) et cadre chez Airbus. Expert en maintenance jet et systèmes
                                drones.</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Equipe;
