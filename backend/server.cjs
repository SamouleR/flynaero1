const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;
const DATA_FILE = path.join(__dirname, 'data', 'articles.json');

app.use(cors());
app.use(bodyParser.json());

// Mock transporter (Replace with real SMTP credentials for production)
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'mock.user@ethereal.email',
        pass: 'mock_password'
    }
});

// Get all articles
app.get('/api/articles', (req, res) => {
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read data' });
        }
        res.json(JSON.parse(data));
    });
});

// Contact endpoint
app.post('/api/contact', async (req, res) => {
    const { name, company, email, subject, message } = req.body;

    try {
        const companyEmail = 'samuelralaikoa@gmail.com';

        // 1. Email to Flynaero (Styled)
        const mailToCompany = {
            from: '"Flynaero Contact" <contact@flynaero.com>',
            to: companyEmail,
            subject: `🚀 Nouveau message de ${name} : ${subject}`,
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
                    <div style="background-color: #0f172a; padding: 30px; text-align: center;">
                        <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Nouveau Contact Site Web</h1>
                    </div>
                    <div style="padding: 30px; color: #1e293b; line-height: 1.6;">
                        <p><strong>Nom :</strong> ${name}</p>
                        <p><strong>Société :</strong> ${company}</p>
                        <p><strong>Email :</strong> <a href="mailto:${email}" style="color: #007bff;">${email}</a></p>
                        <p><strong>Objet :</strong> ${subject}</p>
                        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
                        <p><strong>Message :</strong></p>
                        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; font-style: italic;">
                            ${message.replace(/\n/g, '<br />')}
                        </div>
                    </div>
                    <div style="background-color: #f1f5f9; padding: 20px; text-align: center; font-size: 12px; color: #64748b;">
                        Ce message a été envoyé depuis le formulaire de contact de Flynaero.
                    </div>
                </div>
            `
        };

        // 2. Confirmation email to User (Styled)
        const mailToUser = {
            from: '"Flynaero" <contact@flynaero.com>',
            to: email,
            subject: 'Confirmation de réception - Flynaero',
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
                    <div style="background-color: #007bff; padding: 40px; text-align: center;">
                        <h1 style="color: #ffffff; margin: 0; font-size: 28px;">Merci de nous avoir contactés</h1>
                    </div>
                    <div style="padding: 40px; color: #1e293b; line-height: 1.8; text-align: center;">
                        <h2 style="color: #0f172a;">Bonjour ${name},</h2>
                        <p style="font-size: 16px;">Nous avons bien reçu votre demande concernant "<strong>${subject}</strong>".</p>
                        <p style="font-size: 16px;">Nos ingénieurs analysent actuellement votre message. Un expert de l'équipe <strong>Flynaero</strong> reviendra vers vous dans un délai maximum de <strong>24 heures</strong>.</p>
                        <div style="margin-top: 40px;">
                            <a href="https://flynaero.com" style="background-color: #0f172a; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: bold;">Visiter notre site</a>
                        </div>
                    </div>
                    <div style="background-color: #f8fafc; padding: 30px; text-align: center; font-size: 13px; color: #64748b; border-top: 1px solid #e2e8f0;">
                        <p style="margin: 0;">Flynaero - L'ingénierie aéronautique augmentée</p>
                        <p style="margin: 5px 0 0;">1 Rue de la Réunion, 94150 Rungis, France</p>
                    </div>
                </div>
            `
        };

        // For now, we simulate success since we don't have real SMTP credentials.
        // In production, uncomment the lines below:
        // await transporter.sendMail(mailToCompany);
        // await transporter.sendMail(mailToUser);

        console.log(`Email envoyé de la part de ${email}`);
        res.status(200).json({ message: 'Email envoyé avec succès' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email' });
    }
});

// Create a new article
app.post('/api/articles', (req, res) => {
    const newArticle = req.body;
    
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read data' });
        }
        
        const articles = JSON.parse(data);
        newArticle.id = articles.length > 0 ? Math.max(...articles.map(a => a.id)) + 1 : 1;
        articles.push(newArticle);
        
        fs.writeFile(DATA_FILE, JSON.stringify(articles, null, 4), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to save data' });
            }
            res.status(201).json(newArticle);
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
