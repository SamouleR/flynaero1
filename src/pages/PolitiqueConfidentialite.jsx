import React from 'react';
import './Legal.css';

const PolitiqueConfidentialite = () => {
    return (
        <div className="legal-page-container">
            <h1 className="legal-title">Politique de Confidentialité</h1>
            <p className="legal-subtitle">Dernière mise à jour : 15 mai 2026</p>
            
            <section className="legal-section">
                <h2 className="legal-section-title">1. Introduction</h2>
                <p className="legal-text">
                    Chez FLYNAERO, la confidentialité et la sécurité des données industrielles, des informations d'ingénierie et des données personnelles sont d'une importance capitale. La présente politique détaille la façon dont nous collectons, utilisons, stockons et protégeons les informations personnelles des visiteurs de notre site et des utilisateurs de nos services d'aérodynamique et de mécanique des fluides, en totale conformité avec le Règlement Général sur la Protection des Données (RGPD) et la loi "Informatique et Libertés".
                </p>
            </section>

            <section className="legal-section">
                <h2 className="legal-section-title">2. Données collectées</h2>
                <div className="legal-text">
                    <p>Nous pouvons collecter et traiter les données suivantes :</p>
                    <ul className="legal-list">
                        <li><strong>Données d'identification :</strong> Nom, prénom, fonction, entreprise.</li>
                        <li><strong>Données de contact :</strong> Adresse e-mail professionnelle, numéro de téléphone, adresse postale.</li>
                        <li><strong>Données de projet industriel :</strong> Fichiers CAD/CAO, données CSV/JSON de contraintes structurelles, descriptions de projet soumises via l'Assistant IA ou le formulaire de contact.</li>
                        <li><strong>Données de navigation :</strong> Adresse IP, type de navigateur, pages consultées, via l'utilisation de cookies strictement nécessaires au bon fonctionnement de l'application React.</li>
                    </ul>
                </div>
            </section>

            <section className="legal-section">
                <h2 className="legal-section-title">3. Finalités du traitement</h2>
                <div className="legal-text">
                    <p>Vos données sont exclusivement utilisées pour :</p>
                    <ul className="legal-list">
                        <li>Traiter vos demandes de devis et d'études aérodynamiques.</li>
                        <li>Réaliser les simulations via la méthode DPSM et notre solveur propriétaire.</li>
                        <li>Interagir techniquement avec vous via notre Assistant IA pour pré-qualifier vos besoins.</li>
                        <li>Gérer la relation commerciale, la facturation et le suivi des projets.</li>
                        <li>Améliorer en continu nos modèles physiques (anonymisation systématique préalable des données industrielles).</li>
                    </ul>
                </div>
            </section>

            <section className="legal-section">
                <h2 className="legal-section-title">4. Partage et sécurité des données</h2>
                <p className="legal-text">
                    FLYNAERO s'engage à ne jamais vendre ni louer vos données personnelles ou industrielles à des tiers. L'accès à vos données est strictement limité au personnel autorisé de FLYNAERO (bureau d'études, pôle scientifique dirigé par Jean-Pierre BARBOT, direction informatique).<br/><br/>
                    Toutes les données de simulation (notamment les fichiers envoyés via le système de "Drag & Drop") sont chiffrées en transit (SSL/TLS) et au repos sur nos serveurs sécurisés AWS situés en France (Paris). Nous mettons en œuvre des mesures de sécurité organisationnelles et techniques de pointe pour empêcher tout accès non autorisé, altération ou fuite de données industrielles sensibles.
                </p>
            </section>

            <section className="legal-section">
                <h2 className="legal-section-title">5. Durée de conservation</h2>
                <p className="legal-text">
                    Les données personnelles et techniques liées à une demande de devis non aboutie sont conservées pour une durée maximale de 3 ans. Les données contractuelles (commandes, factures) sont conservées pendant la durée de la relation commerciale puis archivées pendant 10 ans pour répondre aux obligations légales et comptables françaises.
                </p>
            </section>

            <section className="legal-section">
                <h2 className="legal-section-title">6. Vos droits (RGPD)</h2>
                <div className="legal-text">
                    <p>Conformément à la réglementation européenne, vous disposez des droits suivants :</p>
                    <ul className="legal-list">
                        <li><strong>Droit d'accès et de rectification</strong> : Vous pouvez consulter, modifier ou mettre à jour vos données.</li>
                        <li><strong>Droit à l'effacement (droit à l'oubli)</strong> : Vous pouvez demander la suppression de vos données, sauf obligation légale contraire.</li>
                        <li><strong>Droit à la limitation et d'opposition</strong> : Vous pouvez limiter le traitement ou vous y opposer pour motif légitime.</li>
                        <li><strong>Droit à la portabilité</strong> : Vous pouvez récupérer vos données dans un format structuré.</li>
                    </ul>
                    <p style={{ marginTop: '15px' }}>
                        Pour exercer ces droits, veuillez adresser votre demande par email à l'adresse : <strong>dpo@flynaero.com</strong> ou par courrier postal au siège de FLYNAERO (1 Rue de la Réunion, 94150 Rungis). Vous avez également le droit d'introduire une réclamation auprès de la CNIL (cnil.fr).
                    </p>
                </div>
            </section>
        </div>
    );
};

export default PolitiqueConfidentialite;
