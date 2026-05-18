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
        for (let i = 0; i < 60; i++) {
            const height = 20 + Math.abs(Math.sin(i * 0.5) * 30) + Math.abs(Math.cos(i * 0.2) * 10);
            const isActive = (i / 59) * 100 <= progress;
            waves.push(
                <div 
                    key={i} 
                    className={`wave-bar ${isActive ? 'active' : ''}`} 
                    style={{ height: `${height}px` }}
                ></div>
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

                {/* The custom thumb (Red Pill with Arrows and Line) */}
                <div className="slider-thumb-wrapper" style={{ left: `${progress}%` }}>
                    <div className="slider-thumb-pill">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5M5 12l7-7M5 12l7 7"/>
                        </svg>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M19 12l-7-7M19 12l-7 7"/>
                        </svg>
                    </div>
                    <div className="vertical-indicator-line"></div>
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
