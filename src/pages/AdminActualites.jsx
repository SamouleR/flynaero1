import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminActualites.css';

const AdminActualites = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        fullContent: '',
        type: 'Technologies',
        year: new Date().getFullYear().toString(),
        date: '',
        author: '',
        thumbTag: '',
        thumbTitle: '',
        image: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/articles', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                alert('Article créé avec succès !');
                navigate('/actualites');
            } else {
                alert('Erreur lors de la création de l\'article.');
            }
        } catch (error) {
            console.error('Error creating article:', error);
            alert('Erreur de connexion au serveur.');
        }
    };

    return (
        <div className="admin-page">
            <h1>Créer une Actualité</h1>
            <form onSubmit={handleSubmit} className="admin-form">
                <div className="form-group">
                    <label>Titre</label>
                    <input name="title" value={formData.title} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Description courte</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Contenu complet</label>
                    <textarea name="fullContent" value={formData.fullContent} onChange={handleChange} required rows="10" />
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Type</label>
                        <select name="type" value={formData.type} onChange={handleChange}>
                            <option value="Technologies">Technologies</option>
                            <option value="News Entreprise">News Entreprise</option>
                            <option value="Prix & Distinctions">Prix & Distinctions</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Année</label>
                        <input name="year" value={formData.year} onChange={handleChange} required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Date (ex: Mars 2024)</label>
                        <input name="date" value={formData.date} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Auteur</label>
                        <input name="author" value={formData.author} onChange={handleChange} required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Tag miniature (ex: Recherche)</label>
                        <input name="thumbTag" value={formData.thumbTag} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Titre miniature</label>
                        <input name="thumbTitle" value={formData.thumbTitle} onChange={handleChange} required />
                    </div>
                </div>
                <div className="form-group">
                    <label>URL Image</label>
                    <input name="image" value={formData.image} onChange={handleChange} required placeholder="https://..." />
                </div>
                <button type="submit" className="submit-btn">Publier l'actualité</button>
            </form>
        </div>
    );
};

export default AdminActualites;
