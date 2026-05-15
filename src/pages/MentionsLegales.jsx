import React from 'react';
import './Legal.css';

const MentionsLegales = () => {
    return (
        <div className="legal-page-container">
            <h1 className="legal-title">Mentions Légales</h1>
            <p className="legal-subtitle">Dernière mise à jour : 15 mai 2026</p>
            
            <section className="legal-section">
                <h2 className="legal-section-title">1. Éditeur du site</h2>
                <div className="legal-text">
                    <p>Le présent site web, accessible à l'adresse URL <strong>flynaero.com</strong>, est édité par la société <strong>FLYNAERO</strong>.</p>
                    <ul className="legal-list">
                        <li><strong>Forme juridique</strong> : Société par Actions Simplifiée (SAS)</li>
                        <li><strong>Capital social</strong> : 50 000 Euros</li>
                        <li><strong>Siège social</strong> : 1 Rue de la Réunion, 94150 Rungis, France</li>
                        <li><strong>RCS</strong> : Créteil B 123 456 789</li>
                        <li><strong>Numéro de TVA Intracommunautaire</strong> : FR 12 345678901</li>
                        <li><strong>Email de contact</strong> : contact@flynaero.com</li>
                        <li><strong>Téléphone</strong> : +33 (0)1 45 67 89 10</li>
                    </ul>
                    <p style={{ marginTop: '15px' }}><strong>Directeur de la publication</strong> : M. Rudy GOVINDOORAZOO, en sa qualité de Chief Executive Officer.</p>
                </div>
            </section>

            <section className="legal-section">
                <h2 className="legal-section-title">2. Hébergement du site</h2>
                <div className="legal-text">
                    <p>Le site flynaero.com est hébergé par :</p>
                    <ul className="legal-list">
                        <li><strong>Hébergeur</strong> : Amazon Web Services (AWS) EMEA SARL</li>
                        <li><strong>Adresse</strong> : 38 Avenue John F. Kennedy, L-1855 Luxembourg</li>
                        <li><strong>Serveurs</strong> : Hébergés en Europe (Région Paris - eu-west-3)</li>
                    </ul>
                </div>
            </section>

            <section className="legal-section">
                <h2 className="legal-section-title">3. Propriété intellectuelle</h2>
                <p className="legal-text">
                    L'ensemble des éléments qui figurent sur le site flynaero.com (notamment la méthode DPSM, l'architecture du logiciel Easy-Fluid, les marques, logos, dessins, graphismes, chartes graphiques, icônes, textes, applications, scripts, fonctionnalités, ainsi que leur sélection ou combinaison apparaissant à l'adresse URL ou sur les sous-domaines associés) est la propriété exclusive de FLYNAERO ou fait l'objet d'une autorisation d'utilisation.<br/><br/>
                    Toute reproduction, représentation, modification, publication, transmission, dénaturation, totale ou partielle du site ou de son contenu, par quelque procédé que ce soit, et sur quelque support que ce soit est interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la Propriété Intellectuelle.
                </p>
            </section>

            <section className="legal-section">
                <h2 className="legal-section-title">4. Responsabilité</h2>
                <p className="legal-text">
                    FLYNAERO s'efforce d'assurer au mieux de ses possibilités, l'exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu. Toutefois, FLYNAERO ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à la disposition sur ce site.<br/><br/>
                    En conséquence, FLYNAERO décline toute responsabilité pour toute interruption du site, survenance de bogues, inaccessibilité de l'assistant IA ou pour tout dommage résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des informations mises à la disposition sur le site.
                </p>
            </section>

            <section className="legal-section">
                <h2 className="legal-section-title">5. Droit applicable et attribution de juridiction</h2>
                <p className="legal-text">
                    Tout litige en relation avec l'utilisation du site flynaero.com est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents du ressort du siège social de FLYNAERO (Rungis), sous réserve d'une attribution de compétence spécifique découlant d'un texte de loi ou réglementaire particulier.
                </p>
            </section>
        </div>
    );
};

export default MentionsLegales;
