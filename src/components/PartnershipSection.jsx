import React from 'react';
import './PartnershipSection.css';

const PartnershipSection = () => {
    return (
        <section className="partnership-section">
            <div className="partnership-container">
                
                {/* Ligne du Haut */}
                <div className="partnership-row top-row">
                    <div className="ens-block">
                        <img 
                            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600" 
                            alt="Bâtiment" 
                            className="building-img"
                        />
                        <div className="ens-logo-css">
                            <span className="ens-line">école</span>
                            <span className="ens-line line-1">normale <span className="line-bar"></span></span>
                            <span className="ens-line line-2">supérieure <span className="line-bar"></span></span>
                            <span className="ens-line line-3">paris—saclay <span className="line-bar"></span></span>
                        </div>
                    </div>
                    
                    <div className="title-block">
                        <h2>Une start-up issue de<br/>l'ENS Paris-Saclay et du<br/>CNRS</h2>
                    </div>
                </div>

                {/* Ligne du Bas */}
                <div className="partnership-row bottom-row">
                    <div className="text-block">
                        <p>
                            FLYNAERO, créée en mai 2020 avec des 
                            professionnels du monde aéronautique et de la 
                            recherche en simulation numérique est spécialisée 
                            dans la conception dans le domaine de la mécanique 
                            des fluides externes à destination de l'Aéronautique, du 
                            Naval et des simulateurs de vol.
                        </p>
                    </div>
                    
                    <div className="cnrs-block">
                        <div className="cnrs-logo-css">
                            <span>cnrs</span>
                        </div>
                        <img 
                            src="https://images.unsplash.com/photo-1541888047915-181515286b2d?auto=format&fit=crop&q=80&w=600" 
                            alt="Campus" 
                            className="campus-img"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PartnershipSection;
