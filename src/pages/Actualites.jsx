import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './Actualites.css';

export const articlesData = [
    {
        id: 1,
        title: 'Flynaero valide la méthode DPSM sur profils NACA 0012',
        description: 'Après deux ans de recherche intensive, notre équipe scientifique dirigée par Jean-Pierre Barbot a réussi la validation complète du solveur DPSM sur les profils aérodynamiques NACA. Les résultats montrent une précision comparable aux méthodes CFD traditionnelles avec un temps de calcul réduit de 85%.',
        fullContent: `Après deux ans de recherche intensive au sein de notre laboratoire de Rungis, l'équipe scientifique de Flynaero, sous la direction du Professeur Jean-Pierre Barbot, a franchi une étape décisive : la validation complète et rigoureuse de notre solveur propriétaire basé sur la méthode DPSM (Distributed Point Source Method) appliquée aux profils aérodynamiques NACA 0012.

Les résultats obtenus sont remarquables. En comparaison directe avec les méthodes CFD traditionnelles (volumes finis, éléments finis), notre approche DPSM démontre une précision équivalente, voire supérieure dans certaines configurations d'écoulement, tout en réduisant le temps de calcul de 85%. Cette performance ouvre des perspectives considérables pour l'industrie aéronautique.

Les tests ont été menés sur une gamme étendue de nombres de Reynolds (de 10⁴ à 10⁷) et d'angles d'attaque (de -5° à +20°), couvrant ainsi les régimes d'écoulement les plus courants en ingénierie aérospatiale. Les coefficients de portance (Cz) et de traînée (Cx) calculés par notre solveur ont été confrontés aux données expérimentales de référence issues de la NASA, avec un écart moyen inférieur à 2%.

Cette validation constitue le socle scientifique sur lequel repose l'ensemble de notre offre logicielle Easy-Fluid. Elle confirme la viabilité de la méthode DPSM comme alternative crédible et performante aux approches conventionnelles de simulation numérique des fluides.`,
        type: 'Technologies',
        year: '2024',
        date: 'Mars 2024',
        author: 'Dr. Jean-Pierre Barbot',
        thumbTag: 'Recherche',
        thumbTitle: 'DPSM\nValidation',
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 2,
        title: 'Lancement officiel d\'Easy-Fluid v2.0',
        description: 'La version 2.0 de notre logiciel phare Easy-Fluid intègre désormais un module de maillage adaptatif automatique et une interface utilisateur entièrement repensée. Les ingénieurs peuvent maintenant lancer des simulations complexes en quelques clics.',
        fullContent: `Flynaero est fière d'annoncer le lancement officiel d'Easy-Fluid v2.0, la nouvelle génération de notre plateforme de simulation aérodynamique. Cette mise à jour majeure représente plus de 18 mois de développement et intègre les retours de nos premiers utilisateurs industriels.

Les nouveautés principales d'Easy-Fluid v2.0 incluent :

Un module de maillage adaptatif automatique : le logiciel génère désormais automatiquement un maillage optimisé en fonction de la géométrie importée, éliminant l'une des étapes les plus chronophages du processus de simulation. L'algorithme adapte dynamiquement la densité du maillage dans les zones critiques (bords d'attaque, zones de décollement).

Une interface utilisateur entièrement repensée : conçue avec les principes du "Design Thinking", la nouvelle interface permet aux ingénieurs de lancer des simulations complexes en moins de 5 clics. Le tableau de bord temps réel affiche les résidus de convergence, les champs de pression et les lignes de courant de manière interactive.

L'intégration native des formats CAO : Easy-Fluid v2.0 accepte désormais les imports directs depuis CATIA V5/V6, SolidWorks et STEP/IGES, sans conversion préalable.

Un module de post-traitement avancé : visualisation 3D interactive des résultats, export automatique de rapports PDF professionnels, et comparaison multi-cas pour les études paramétriques.

Easy-Fluid v2.0 est disponible dès maintenant pour nos clients sous licence. Une version de démonstration est accessible sur demande via notre formulaire de contact.`,
        type: 'Technologies',
        year: '2025',
        date: 'Janvier 2025',
        author: 'Équipe Produit Flynaero',
        thumbTag: 'Produit',
        thumbTitle: 'Easy-Fluid\nv2.0',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 3,
        title: 'Flynaero lauréat du Prix Innovation Aéronautique 2025',
        description: 'Flynaero a été distinguée lors du Salon International de l\'Aéronautique et de l\'Espace pour sa contribution révolutionnaire à la simulation numérique des fluides.',
        fullContent: `C'est avec une immense fierté que Flynaero annonce avoir reçu le Prix Innovation Aéronautique 2025, décerné lors du 54ème Salon International de l'Aéronautique et de l'Espace du Bourget.

Le jury, composé d'experts de l'ONERA, du CNRS, de Dassault Aviation et de Safran, a salué "l'originalité et le potentiel disruptif de la méthode DPSM développée par Flynaero, qui ouvre de nouvelles perspectives pour l'optimisation aérodynamique en phase de conception préliminaire".

Ce prix récompense l'ensemble de notre démarche scientifique et entrepreneuriale :

La rigueur académique de nos travaux de recherche, publiés dans les revues internationales de référence (AIAA Journal, Journal of Computational Physics).

L'innovation technologique incarnée par notre solveur Easy-Fluid, qui démocratise l'accès à la simulation aérodynamique haute-fidélité.

L'impact industriel concret de nos solutions, déjà adoptées par plusieurs acteurs majeurs du secteur aéronautique européen.

Rudy Govindoorazoo, CEO de Flynaero, a déclaré : "Ce prix est la reconnaissance du travail acharné de toute notre équipe. Il confirme que la méthode DPSM n'est pas une simple curiosité académique, mais bien une technologie de rupture qui transforme la façon dont l'industrie conçoit les aéronefs de demain."

Flynaero tient à remercier l'ensemble de ses partenaires, clients et collaborateurs qui contribuent chaque jour à cette aventure scientifique et industrielle.`,
        type: 'Prix & Distinctions',
        year: '2025',
        date: 'Juin 2025',
        author: 'Direction Flynaero',
        thumbTag: 'Récompense',
        thumbTitle: 'Prix\nInnovation',
        image: 'https://images.unsplash.com/photo-1559060017-445fb9722f2a?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 4,
        title: 'Partenariat stratégique avec Airbus Defence & Space',
        description: 'Flynaero signe un accord de collaboration pluriannuel avec Airbus Defence & Space pour l\'optimisation aérodynamique de composants critiques.',
        fullContent: `Flynaero et Airbus Defence & Space annoncent la signature d'un accord de collaboration stratégique pluriannuel portant sur l'optimisation aérodynamique de composants critiques pour les programmes de défense et spatial européens.

Dans le cadre de ce partenariat, Flynaero mettra à disposition sa technologie propriétaire DPSM et son logiciel Easy-Fluid pour répondre aux besoins spécifiques d'Airbus Defence & Space en matière de :

Optimisation aérodynamique de carénages et de surfaces de contrôle pour les plateformes aériennes de nouvelle génération.

Simulation thermique couplée pour les composants exposés à des conditions extrêmes lors de la rentrée atmosphérique.

Études paramétriques rapides en phase de conception préliminaire, permettant d'explorer un espace de design 10 fois plus large qu'avec les outils conventionnels.

Ce partenariat marque une étape majeure dans la reconnaissance industrielle de notre technologie. Il démontre que la méthode DPSM a atteint un niveau de maturité suffisant pour être déployée sur des programmes de premier plan dans l'industrie aérospatiale et de défense.

Les premiers travaux communs débuteront au quatrième trimestre 2025, avec une équipe mixte composée d'ingénieurs Flynaero et Airbus basée sur le site de Toulouse.`,
        type: 'News Entreprise',
        year: '2025',
        date: 'Septembre 2025',
        author: 'Rudy Govindoorazoo, CEO',
        thumbTag: 'Partenariat',
        thumbTitle: 'Airbus\nDefence',
        image: 'https://images.unsplash.com/photo-1540829016269-e05670f88adb?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 5,
        title: 'Ouverture du nouveau centre R&D à Rungis',
        description: 'Flynaero inaugure son nouveau centre de Recherche & Développement de 400m² au cœur de Rungis, équipé de stations de calcul haute performance.',
        fullContent: `Flynaero a inauguré ce mois-ci son nouveau centre de Recherche & Développement, situé au 1 Rue de la Réunion à Rungis. D'une superficie de 400m², ces nouveaux locaux ont été conçus pour répondre aux ambitions de croissance de l'entreprise.

Le centre est équipé de :

Un cluster de calcul haute performance (HPC) composé de 128 cœurs de calcul et 512 Go de RAM, permettant de réaliser des simulations DPSM massives en temps quasi-réel.

Un laboratoire de visualisation 3D avec un écran immersif de 4 mètres de diagonale, pour l'analyse interactive des résultats de simulation.

Des espaces de travail collaboratifs conçus selon les principes du "New Work", favorisant la créativité et l'échange entre chercheurs, ingénieurs et développeurs.

Une salle de démonstration client équipée pour les présentations et les formations Easy-Fluid.

Le centre accueille actuellement 8 collaborateurs et prévoit d'atteindre une équipe de 15 chercheurs et ingénieurs d'ici fin 2026, avec des recrutements en cours dans les domaines de la mécanique des fluides numérique, de l'intelligence artificielle et du développement logiciel.

"Ces nouveaux locaux sont à la hauteur de nos ambitions", a déclaré Rudy Govindoorazoo. "Ils offrent à notre équipe un environnement de travail exceptionnel pour continuer à repousser les frontières de la simulation aérodynamique."`,
        type: 'News Entreprise',
        year: '2026',
        date: 'Février 2026',
        author: 'Équipe Communication',
        thumbTag: 'Expansion',
        thumbTitle: 'Centre\nR&D',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 6,
        title: 'L\'IA prescriptive intégrée au solveur DPSM : une première mondiale',
        description: 'Notre équipe vient de publier les résultats de l\'intégration d\'un modèle d\'intelligence artificielle causale directement dans le pipeline de calcul DPSM.',
        fullContent: `Flynaero franchit une nouvelle frontière technologique avec l'intégration réussie d'un modèle d'intelligence artificielle causale et prescriptive directement dans le pipeline de calcul du solveur DPSM. Cette avancée, publiée dans le Journal of Computational Physics, constitue une première mondiale dans le domaine de la simulation numérique des fluides.

Le principe est révolutionnaire : au lieu de se contenter de calculer les performances aérodynamiques d'une géométrie donnée (approche descriptive classique), notre système est désormais capable de :

Diagnostiquer automatiquement les zones problématiques d'un écoulement (décollement, tourbillons parasites, zones de surpression).

Prescrire des modifications géométriques ciblées pour optimiser les performances, en s'appuyant sur un modèle causal qui comprend les relations physiques entre la forme et l'écoulement.

Prédire l'impact des modifications avant même de relancer une simulation complète, grâce à un réseau de neurones entraîné sur plus de 50 000 cas de simulation DPSM.

Les premiers tests industriels montrent que cette approche permet de réduire le nombre d'itérations de conception de 70%, passant en moyenne de 15 boucles d'optimisation à seulement 4.

"L'IA ne remplace pas le physicien, elle l'augmente", explique le Dr. Barbot. "Notre système comprend la physique sous-jacente et propose des solutions que même un ingénieur expérimenté n'aurait pas envisagées."

Cette fonctionnalité sera intégrée dans Easy-Fluid v3.0, prévue pour le second semestre 2026.`,
        type: 'Technologies',
        year: '2026',
        date: 'Mai 2026',
        author: 'Dr. Jean-Pierre Barbot',
        thumbTag: 'Innovation',
        thumbTitle: 'IA\nPrescriptive',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    },
];

const types = ['Prix & Distinctions', 'News Entreprise', 'Technologies'];
const years = ['2024', '2025', '2026'];

const Actualites = () => {
    const [activeType, setActiveType] = useState(null);
    const [activeYear, setActiveYear] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredArticles = useMemo(() => {
        return articlesData.filter((article) => {
            const matchesType = activeType ? article.type === activeType : true;
            const matchesYear = activeYear ? article.year === activeYear : true;
            const matchesSearch = searchQuery
                ? article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  article.description.toLowerCase().includes(searchQuery.toLowerCase())
                : true;
            return matchesType && matchesYear && matchesSearch;
        });
    }, [activeType, activeYear, searchQuery]);

    // Load comments count from localStorage
    const getCommentsCount = (articleId) => {
        try {
            const stored = localStorage.getItem(`flynaero_comments_${articleId}`);
            return stored ? JSON.parse(stored).length : 0;
        } catch { return 0; }
    };

    return (
        <div className="actualites-page">
            <h1 className="actualites-title">Actualités</h1>
            <div className="actualites-title-underline"></div>

            {/* Filtres */}
            <div className="actualites-filters">
                <div className="filter-row">
                    <span className="filter-label orange">Type</span>
                    {types.map((type) => (
                        <button
                            key={type}
                            className={`filter-tag ${activeType === type ? 'active' : ''}`}
                            onClick={() => setActiveType(activeType === type ? null : type)}
                        >
                            {type}
                        </button>
                    ))}
                </div>

                <div className="filter-row-search">
                    <div className="filter-row" style={{ flex: 1 }}>
                        <span className="filter-label green">Année</span>
                        {years.map((year) => (
                            <button
                                key={year}
                                className={`filter-tag ${activeYear === year ? 'active' : ''}`}
                                onClick={() => setActiveYear(activeYear === year ? null : year)}
                            >
                                {year}
                            </button>
                        ))}
                    </div>

                    <div className="search-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Rechercher un mot-clé..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* Liste d'articles */}
            <div className="articles-list">
                {filteredArticles.length > 0 ? (
                    filteredArticles.map((article) => (
                        <Link to={`/actualites/${article.id}`} key={article.id} className="article-item-link">
                            <div className="article-item">
                                <div className="article-left">
                                    <div className="article-thumb">
                                        <img src={article.image} alt={article.title} />
                                        <div className="thumb-overlay">
                                            <span className="thumb-tag">{article.thumbTag}</span>
                                            <span className="thumb-title">{article.thumbTitle}</span>
                                            <span className="thumb-date">{article.date}</span>
                                        </div>
                                    </div>
                                    <div className="thumb-caption">
                                        <span className="thumb-caption-title">{article.thumbTag}</span>
                                        <span className="thumb-caption-date">{article.date}</span>
                                    </div>
                                </div>
                                <div className="article-body">
                                    <h3>{article.title}</h3>
                                    <p>{article.description}</p>
                                    <div className="article-meta">
                                        <span className="meta-item">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                            </svg>
                                            {getCommentsCount(article.id)}
                                        </span>
                                        <span className="meta-item">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="10" />
                                                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                                                <line x1="9" y1="9" x2="9.01" y2="9" />
                                                <line x1="15" y1="9" x2="15.01" y2="9" />
                                            </svg>
                                            {article.reactions || 0}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <div className="no-results">Aucun article ne correspond à vos critères de recherche.</div>
                )}
            </div>

            {/* CTA */}
            <div className="actualites-cta">
                <button className="btn-voir-tout">
                    Voir toutes les actualités de la recherche
                </button>
            </div>
        </div>
    );
};

export default Actualites;
