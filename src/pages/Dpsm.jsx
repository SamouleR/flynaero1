import React from 'react';
import './Dpsm.css';

const Dpsm = () => {
    return (
        <div className="dpsm-page">
            <div className="dpsm-container">
                <h1 className="dpsm-title">Technologies du futur</h1>
                
                <p className="dpsm-intro">
                    La méthode appelée DPSM (Distributed Point Source Modeling), 
                    Intégrée à un logiciel de calcul de paramètres aérodynamiques basé sur la 
                    technologie des sources ponctuelles distribuée permet ainsi :
                </p>
                
                <ul className="dpsm-list-plain">
                    <li>- Un calcul direct tridimensionnel vrai</li>
                    <li>- Un calcul prédictif</li>
                    <li>- Une méthode non itérative</li>
                    <li>- Une identification facile des contributions de chaque élément du problème pris séparément</li>
                    <li>- Autorise des vitesses de calcul des milliers de fois plus élevées et une mise en oeuvre facilité.</li>
                </ul>
            </div>
        </div>
    );
};

export default Dpsm;
