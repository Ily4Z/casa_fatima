import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [nom, setNom] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [commentaire, setCommentaire] = useState('');

  const gererEnvoi = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`✨ Merci ${nom || 'inconnu'} ! Votre message a bien été envoyé à l'atelier Casa Fátima.`);
    setNom('');
    setTelephone('');
    setEmail('');
    setCommentaire('');
  };

  return (
    <div className="page-contact-bg">
      <div className="contact-wrapper">
        
        <h1 className="titre-contact-main">CONTACTEZ-NOUS</h1>
        
        <h2 className="sous-titre-contact">Besoin d'aide ? Nous sommes à votre écoute</h2>
        
        <p className="texte-intro-contact">
          Équipe réduite & forte affluence : délais exceptionnellement rallongés. Merci pour votre patience et votre confiance 💙<br/>
          Vous avez une question sur l'entretien de vos bijoux en acier inoxydable, sur le suivi de votre commande, ou sur une personnalisation ? <strong>Nous sommes là pour vous répondre.</strong>
        </p>

        <form className="formulaire-contact" onSubmit={gererEnvoi}>
          
          <div className="contact-colonnes">
            {/* --- Colonne Gauche : Nom / Téléphone --- */}
            <div className="colonne-formulaire">
              <div className="champ-groupe">
                <label htmlFor="nom">NOM</label>
                <input 
                  type="text" 
                  id="nom" 
                  value={nom} 
                  onChange={(e) => setNom(e.target.value)} 
                  className="input-arrondi" 
                />
              </div>
              
              <div className="champ-groupe">
                <label htmlFor="telephone">NUMÉRO DE TÉLÉPHONE</label>
                <input 
                  type="tel" 
                  id="telephone" 
                  value={telephone} 
                  onChange={(e) => setTelephone(e.target.value)} 
                  className="input-arrondi" 
                />
              </div>
            </div>

            {/* --- Colonne Droite : Infos --- */}
            <div className="colonne-infos">
              <p>Nous serions ravis d'avoir de vos nouvelles - veuillez utiliser le formulaire pour nous envoyer votre message.</p>
              
              <div className="info-lignes-contact">
                <div className="info-ligne">
                  <span className="info-icon">💬</span> @CasaFátima
                </div>
                <div className="info-ligne">
                  <span className="info-icon">✉️</span> contact.casafatima@gmail.com
                </div>
              </div>
              
              <div className="sav-horaires">
                <p>SAV :</p>
                <p>Lundi à Vendredi : 9h30 - 17h30</p>
                <p>Samedi & Dimanche : Fermé</p>
              </div>
            </div>
          </div>

          {/* --- Partie Basse : Email / Commentaire --- */}
          <div className="partie-basse-form">
            <div className="champ-groupe">
              <label htmlFor="email">E-MAIL<span className="etoile">*</span></label>
              <input 
                type="email" 
                id="email" 
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="input-arrondi" 
              />
            </div>

            <div className="champ-groupe">
              <label htmlFor="commentaire">COMMENTAIRE<span className="etoile">*</span></label>
              <textarea 
                id="commentaire" 
                required 
                rows={8} 
                value={commentaire} 
                onChange={(e) => setCommentaire(e.target.value)} 
                className="textarea-arrondi"
              ></textarea>
            </div>

            <button type="submit" className="btn-envoyer-carre">ENVOYER</button>
          </div>
          
        </form>
      </div>
    </div>
  );
}