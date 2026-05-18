import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ActualiteDetail.css';

const ActualiteDetail = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:5000/api/articles')
            .then(res => res.json())
            .then(data => {
                const found = data.find((a) => a.id === parseInt(id));
                setArticle(found);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching article:', err);
                setLoading(false);
            });
    }, [id]);

    // --- Comment system with localStorage persistence ---
    const storageKey = `flynaero_comments_${id}`;

    const [comments, setComments] = useState(() => {
        try {
            const stored = localStorage.getItem(storageKey);
            return stored ? JSON.parse(stored) : [];
        } catch {
            return [];
        }
    });

    const [authorName, setAuthorName] = useState('');
    const [authorRole, setAuthorRole] = useState('');
    const [commentText, setCommentText] = useState('');

    // Persist comments to localStorage
    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(comments));
    }, [comments, storageKey]);

    const handleSubmitComment = (e) => {
        e.preventDefault();
        if (!authorName.trim() || !commentText.trim()) return;

        const newComment = {
            id: Date.now(),
            author: authorName.trim(),
            role: authorRole.trim() || 'Visiteur',
            text: commentText.trim(),
            date: new Date().toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
            }),
        };

        setComments([newComment, ...comments]);
        setAuthorName('');
        setAuthorRole('');
        setCommentText('');
    };

    // Get initials for avatar
    const getInitials = (name) => {
        return name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    if (loading) {
        return (
            <div className="article-detail-page">
                <div style={{ padding: '100px 0', textAlign: 'center' }}>Chargement...</div>
            </div>
        );
    }

    if (!article) {
        return (
            <div className="article-detail-page">
                <Link to="/actualites" className="back-link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12" />
                        <polyline points="12 19 5 12 12 5" />
                    </svg>
                    Retour aux actualités
                </Link>
                <h1 style={{ fontSize: '32px', fontWeight: 900 }}>Article introuvable</h1>
                <p>L'article que vous recherchez n'existe pas ou a été supprimé.</p>
            </div>
        );
    }

    return (
        <div className="article-detail-page">
            {/* Back link */}
            <Link to="/actualites" className="back-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                </svg>
                Retour aux actualités
            </Link>

            {/* Article Header */}
            <div className="article-detail-header">
                <div className="article-detail-badges">
                    <span className="badge badge-type">{article.type}</span>
                    <span className="badge badge-year">{article.year}</span>
                </div>
                <h1 className="article-detail-title">{article.title}</h1>
                <div className="article-detail-meta">
                    <span className="author">{article.author}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{comments.length} commentaire{comments.length !== 1 ? 's' : ''}</span>
                </div>
            </div>

            {/* Hero Image */}
            <div className="article-detail-hero">
                <img src={article.image} alt={article.title} />
            </div>

            {/* Article Content */}
            <div className="article-detail-content">
                {article.fullContent.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                ))}
            </div>

            {/* Separator */}
            <div className="section-separator"></div>

            {/* COMMENT SECTION */}
            <div className="comments-section">
                <h2 className="comments-title">
                    Commentaires
                    <span className="comments-count-badge">{comments.length}</span>
                </h2>

                {/* Comment Form */}
                <form className="comment-form" onSubmit={handleSubmitComment}>
                    <h4>Laisser un commentaire</h4>
                    <div className="form-row">
                        <input
                            type="text"
                            placeholder="Votre nom *"
                            value={authorName}
                            onChange={(e) => setAuthorName(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Votre fonction (ex: Ingénieur CFD)"
                            value={authorRole}
                            onChange={(e) => setAuthorRole(e.target.value)}
                        />
                    </div>
                    <textarea
                        placeholder="Partagez votre avis sur cet article..."
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="btn-comment"
                        disabled={!authorName.trim() || !commentText.trim()}
                    >
                        Publier le commentaire
                    </button>
                </form>

                {/* Comments List */}
                <div className="comments-list">
                    {comments.length > 0 ? (
                        comments.map((comment) => (
                            <div key={comment.id} className="comment-item">
                                <div className="comment-header">
                                    <div className="comment-avatar">
                                        {getInitials(comment.author)}
                                    </div>
                                    <div>
                                        <div className="comment-author">
                                            {comment.author}
                                            {comment.role && (
                                                <span style={{ fontWeight: 500, fontSize: '12px', color: '#007bff', marginLeft: '8px' }}>
                                                    {comment.role}
                                                </span>
                                            )}
                                        </div>
                                        <div className="comment-date">{comment.date}</div>
                                    </div>
                                </div>
                                <div className="comment-text">{comment.text}</div>
                            </div>
                        ))
                    ) : (
                        <div className="no-comments">
                            Soyez le premier à commenter cet article.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ActualiteDetail;
