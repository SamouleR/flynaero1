import React, { useState, useRef, useEffect } from 'react';
import './Histoire.css';

const historyData = [
    { id: 1, year: '2018', date: 'Jan 2018', title: 'Fondation', summary: 'Création de Flynaero', detail: 'Naissance de l\'entreprise avec la vision de révolutionner la simulation des fluides et l\'ingénierie aéronautique.', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600' },
    { id: 2, year: '2019', date: 'Mar 2019', title: 'DPSM Validé', summary: 'Validation théorique', detail: 'Première validation scientifique de notre méthode Distributed Point Source Method appliquée à l\'aérodynamique.', image: 'https://images.unsplash.com/photo-1540829016269-e05670f88adb?auto=format&fit=crop&q=80&w=600' },
    { id: 3, year: '2020', date: 'Sep 2020', title: 'Partenariats', summary: 'Premiers clients industriels', detail: 'Signature de nos premiers contrats majeurs avec des acteurs clés de l\'industrie aérospatiale européenne.', image: 'https://images.unsplash.com/photo-1559060017-445fb9722f2a?auto=format&fit=crop&q=80&w=600' },
    { id: 4, year: '2021', date: 'Fév 2021', title: 'Expansion', summary: 'Nouveau bureau d\'études', detail: 'Ouverture de nos nouveaux locaux à Rungis pour accueillir une équipe d\'ingénieurs et chercheurs grandissante.', image: 'https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&q=80&w=600' },
    { id: 5, year: '2022', date: 'Nov 2022', title: 'Easy-Fluid', summary: 'Lancement du logiciel', detail: 'Sortie officielle de notre solveur Easy-Fluid, permettant des calculs 10 fois plus rapides que les méthodes CFD classiques.', image: 'https://images.unsplash.com/photo-1464037866556-c67d9f56e4dc?auto=format&fit=crop&q=80&w=600' },
    { id: 6, year: '2023', date: 'Mai 2023', title: 'IA Intégrée', summary: 'Assistant IA prédictif', detail: 'Intégration pionnière de l\'intelligence artificielle pour guider la conception et anticiper les anomalies physiques.', image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=600' },
    { id: 7, year: '2024', date: 'Jan 2024', title: 'International', summary: 'Ouverture européenne', detail: 'Expansion de nos activités vers l\'Allemagne et le Royaume-Uni, marquant notre croissance à l\'international.', image: 'https://images.unsplash.com/photo-1520114878144-6123749968dd?auto=format&fit=crop&q=80&w=600' },
    { id: 8, year: '2025', date: 'Oct 2025', title: 'Nouvelle Gen', summary: 'Maillage temps-réel', detail: 'Développement d\'une technologie de maillage dynamique en temps réel pour des simulations interactives.', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600' },
    { id: 9, year: '2026', date: 'Jui 2026', title: 'Leader', summary: 'Reconnaissance mondiale', detail: 'Flynaero est reconnu comme leader technologique en simulation de mécanique des fluides augmentée.', image: 'https://images.unsplash.com/photo-1540829016269-e05670f88adb?auto=format&fit=crop&q=80&w=600' },
];

const Histoire = () => {
    const [progress, setProgress] = useState(0);
    const carouselRef = useRef(null);
    const [maxTranslate, setMaxTranslate] = useState(0);

    // Calculate max translation based on container width and total width of cards
    useEffect(() => {
        const updateMaxTranslate = () => {
            if (carouselRef.current) {
                const containerWidth = carouselRef.current.parentElement.offsetWidth;
                const totalScrollWidth = carouselRef.current.scrollWidth;
                // If content is larger than container, calculate max translation
                if (totalScrollWidth > containerWidth) {
                    setMaxTranslate(totalScrollWidth - containerWidth);
                } else {
                    setMaxTranslate(0);
                }
            }
        };

        // Delay the initial calculation slightly to ensure images are considered in layout
        setTimeout(updateMaxTranslate, 100);
        window.addEventListener('resize', updateMaxTranslate);
        return () => window.removeEventListener('resize', updateMaxTranslate);
    }, []);

    // Helper to generate the wave bars
    const renderWaves = () => {
        const waves = [];
        // Generate 60 bars for the visual effect
        for (let i = 0; i < 60; i++) {
            // Randomish height between 20px and 60px, but deterministic for stable render
            const height = 20 + Math.abs(Math.sin(i * 0.5) * 30) + Math.abs(Math.cos(i * 0.2) * 10);
            waves.push(
                <div key={i} className="wave-bar" style={{ height: `${height}px` }}></div>
            );
        }
        return waves;
    };

    const handleSliderChange = (e) => {
        setProgress(e.target.value);
    };

    // Calculate current translation
    const currentTranslateX = -(progress / 100) * maxTranslate;

    return (
        <div className="histoire-page">
            <h1 className="histoire-title">Notre Histoire</h1>

            <div className="carousel-wrapper">
                <div 
                    className="carousel-container" 
                    ref={carouselRef}
                    style={{ transform: `translateX(${currentTranslateX}px)` }}
                >
                    {historyData.map((item) => (
                        <div key={item.id} className="history-card">
                            <div className="card-img-container">
                                <img src={item.image} alt={item.title} className="card-img" />
                                <div className="card-hover-text">
                                    <p>{item.detail}</p>
                                </div>
                            </div>
                            <div className="card-header">
                                <span className="card-title-text">{item.title}</span>
                                <span className="card-date">{item.date}</span>
                            </div>
                            <div className="card-summary">{item.summary}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="timeline-section">
                {/* The visual waves */}
                <div className="waves-container">
                    {renderWaves()}
                </div>

                {/* The invisible native slider for interaction */}
                <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={progress} 
                    onChange={handleSliderChange} 
                    className="slider-input"
                />

                {/* The custom thumb (Airplane) */}
                <div className="slider-thumb" style={{ left: `${progress}%` }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.7l-1.2 3.6c-.2.5.1 1 .5 1.1L10 13l-4 4-3-1c-.5-.2-1 .2-1.2.6L1 18l5.5 1.5L8 25l1.4-.8c.4-.2.8-.7.6-1.2l-1-3 4-4 1.4 7c.1.4.6.7 1.1.5l3.6-1.2c.5-.2.8-.6.7-1.1z"/>
                    </svg>
                </div>

                {/* Labels below the timeline */}
                <div className="timeline-labels-months">
                    <span>01</span><span>03</span><span>05</span><span>07</span><span>09</span><span>11</span><span>13</span><span>15</span><span>17</span><span>19</span><span>21</span><span>23</span><span>25</span><span>27</span><span>29</span>
                </div>
                
                <div className="timeline-labels-years">
                    {historyData.map((item, index) => (
                        <span key={index}>{item.year}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Histoire;
