import React from 'react';
import './Legal.css';

const Cgv = () => {
    return (
        <div className="legal-page-container">
            <h1 className="legal-title">Conditions Générales de Vente (CGV)</h1>
            <p className="legal-subtitle">Dernière mise à jour : 15 mai 2026</p>
            
            <section className="legal-section">
                <h2 className="legal-section-title">1. Objet et champ d'application</h2>
                <p className="legal-text">
                    Les présentes Conditions Générales de Vente (ci-après les "CGV") régissent les relations contractuelles entre la société FLYNAERO, SAS au capital de 50 000€ (ci-après le "Prestataire"), et toute personne morale (ci-après le "Client") sollicitant des prestations de service en ingénierie aérodynamique, simulation fluide et études par la méthode DPSM (Distributed Point Source Method).<br/><br/>
                    La signature d'un devis ou d'une lettre de commande implique l'acceptation sans réserve des présentes CGV par le Client, à l'exclusion de tout autre document tel que ses propres conditions générales d'achat, sauf dérogation formelle et expresse du Prestataire.
                </p>
            </section>

            <section className="legal-section">
                <h2 className="legal-section-title">2. Formation du contrat et commandes</h2>
                <p className="legal-text">
                    Toute prestation fait l'objet d'un devis préalable, gratuit et sans engagement, valable pour une durée de trente (30) jours à compter de sa date d'émission. Le contrat n'est valablement formé qu'après réception par FLYNAERO du devis daté et signé par le Client, portant la mention « Bon pour accord », et accompagné du paiement de l'acompte prévu.<br/><br/>
                    Le périmètre technique exact des simulations (finesse du maillage, nombres de Reynolds, conditions aux limites, utilisation du logiciel Easy-Fluid) est rigoureusement encadré par le Cahier des Charges annexé au devis.
                </p>
            </section>

            <section className="legal-section">
                <h2 className="legal-section-title">3. Tarifs et conditions de paiement</h2>
                <p className="legal-text">
                    Les prix sont libellés en Euros et calculés hors taxes (HT). Ils sont majorés du taux de TVA en vigueur au jour de la facturation.
                </p>
                <ul className="legal-list">
                    <li><strong>Acompte :</strong> Sauf mention contraire, un acompte de 30% du montant total TTC est exigé à la commande. Les travaux scientifiques ne débutent qu'après encaissement de cet acompte.</li>
                    <li><strong>Solde :</strong> Le solde est payable à réception du rapport technique final de simulation, à 30 jours fin de mois.</li>
                    <li><strong>Retard de paiement :</strong> Tout retard de paiement entraîne l'exigibilité de plein droit de pénalités de retard calculées sur la base de trois fois le taux d'intérêt légal, ainsi qu'une indemnité forfaitaire pour frais de recouvrement de 40€.</li>
                </ul>
            </section>

            <section className="legal-section">
                <h2 className="legal-section-title">4. Exécution des prestations et délais</h2>
                <p className="legal-text">
                    Les délais de réalisation des simulations sont donnés à titre indicatif lors de l'établissement du devis. Ils dépendent de la complexité géométrique, du temps de calcul machine requis sur le solveur DPSM, et de la réactivité du Client à fournir les données d'entrée (plans CAO 3D nets, paramètres thermodynamiques).<br/><br/>
                    Un retard de livraison ne peut donner lieu à aucune pénalité, retenue ou annulation de commande, sauf accord écrit et préalable de FLYNAERO.
                </p>
            </section>

            <section className="legal-section">
                <h2 className="legal-section-title">5. Confidentialité stricte (NDA)</h2>
                <p className="legal-text">
                    FLYNAERO et le Client s'engagent mutuellement à conserver la plus stricte confidentialité sur les informations, données industrielles, géométries, résultats de calcul et documents échangés dans le cadre de la prestation. FLYNAERO s'interdit formellement de divulguer, publier ou utiliser les données du Client à d'autres fins que l'exécution de la commande.<br/><br/>
                    La conclusion systématique d'un Accord de Non-Divulgation (NDA) spécifique peut être exigée par l'une ou l'autre des parties avant tout transfert de données CAO.
                </p>
            </section>

            <section className="legal-section">
                <h2 className="legal-section-title">6. Propriété intellectuelle et Livrables</h2>
                <p className="legal-text">
                    Sous réserve du paiement intégral du prix, les résultats spécifiques de l'étude (rapports, champs de pression, coefficients de traînée et de portance) deviennent la propriété exclusive du Client.<br/><br/>
                    Toutefois, FLYNAERO conserve l'entière et exclusive propriété intellectuelle de ses outils mathématiques, de la méthode DPSM, du code source de ses algorithmes et du solveur Easy-Fluid. Le Client s'interdit toute tentative de rétro-ingénierie (reverse engineering) visant à déduire la méthode de calcul employée par le Prestataire.
                </p>
            </section>

            <section className="legal-section">
                <h2 className="legal-section-title">7. Limites de responsabilité</h2>
                <p className="legal-text">
                    FLYNAERO est tenu à une obligation de moyens pour la réalisation des études. Les résultats de simulation fluides (CFD et DPSM) constituent des modélisations théoriques prédictives. Bien que FLYNAERO s'assure d'une précision maximale en s'appuyant sur l'expertise de ses chercheurs, la responsabilité finale de l'application industrielle des résultats incombe exclusivement au Client (qui doit notamment prévoir des validations par essais en soufflerie ou en vol).<br/><br/>
                    La responsabilité de FLYNAERO ne saurait excéder le montant hors taxes encaissé au titre de la prestation ayant causé le dommage prouvé.
                </p>
            </section>

            <section className="legal-section">
                <h2 className="legal-section-title">8. Loi applicable et litiges</h2>
                <p className="legal-text">
                    Les présentes CGV et les contrats qui en découlent sont soumis au droit français. En cas de litige ou de réclamation, les parties s'engagent à rechercher une solution à l'amiable. À défaut d'accord amiable dans un délai de 30 jours, le Tribunal de Commerce de Créteil sera seul compétent.
                </p>
            </section>
        </div>
    );
};

export default Cgv;
