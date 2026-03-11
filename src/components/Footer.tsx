import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      
      {/* --- La fameuse frise d'azulejos sur le côté gauche --- */}
      {/* Utilise l'image de motif bleu que tu as déjà dans ton dossier public */}
      <div 
        className="azulejo-border"
        style={{ backgroundImage: `url('${(import.meta as any).env.BASE_URL}images/bg_motif_bleu.png')` }}
      ></div>

      <div className="footer-contenu-global">
        
        {/* --- 1. BANDE DE RÉASSURANCE (Haut) --- */}
        <div className="footer-reassurance">
          <div className="reassurance-item">
            <h4>LIVRAISON OFFERTE DÈS 60€</h4>
            <p>Livraison sous 48h-72h en<br/>France métropolitaine</p>
          </div>
          <div className="reassurance-item">
            <h4>PAIEMENT SÉCURISÉ</h4>
            <p>Paiement en 3x sans frais<br/>disponible avec Alma dès 50€</p>
          </div>
          <div className="reassurance-item">
            <h4>SATISFAIT ET REMBOURSÉ</h4>
            <p>Retour sous 14 jours</p>
          </div>
          <div className="reassurance-item">
            <h4>SERVICE CLIENT</h4>
            <p>Une question ? Nous écrire sur<br/>contact.casafatima@gmail.com</p>
          </div>
        </div>

        {/* --- 2. COLONNES DE LIENS (Milieu) --- */}
        <div className="footer-liens-grid">
          
          <div className="footer-colonne newsletter-col">
            <h4>NEWSLETTER</h4>
            <p>Inscris-toi pour ne pas rater des offres exclusives.</p>
            <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('✨ Merci pour votre inscription !'); }}>
              <input type="email" placeholder="Entrez votre adresse e-mail" required />
              <button type="submit">SOUSCRIRE</button>
            </form>
          </div>

          <div className="footer-colonne">
            <h4>INFORMATION</h4>
            <ul>
              <li><Link to="/histoire">À propos de la marque</Link></li>
              <li><Link to="/personnalisation">Nos personnalisations</Link></li>
              <li><Link to="/programme-fidelite">Programme de fidélité</Link></li>
            </ul>
          </div>

          <div className="footer-colonne">
            <h4>BOUTIQUE</h4>
            <ul>
              <li><Link to="/boutique/bagues">Bagues</Link></li>
              <li><Link to="/boutique/boucles">Boucles d'oreilles</Link></li>
              <li><Link to="/boutique/bracelets">Bracelets</Link></li>
              <li><Link to="/boutique/colliers">Colliers</Link></li>
            </ul>
          </div>

          <div className="footer-colonne">
            <h4>SERVICE CLIENT</h4>
            <ul>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/cgv">CGV</Link></li>
              <li><Link to="/mentions-legales">Mentions légales</Link></li>
              <li><Link to="/guide-des-tailles">Guide des tailles</Link></li>
            </ul>
          </div>

        </div>

        {/* --- 3. BARRE DU BAS (Réseaux & Paiements) --- */}
        <div className="footer-bottom">
          
          <div className="footer-sociaux">
            <a href="#" className="icone-reseau">P</a>
            <a href="#" className="icone-reseau">T</a>
            <a href="#" className="icone-reseau">I</a>
            <a href="#" className="icone-reseau">S</a>
          </div>

          <div className="footer-barre-legale">
            <span className="copyright">{new Date().getFullYear()}, Casa Fátima</span>
            
            <div className="moyens-paiement">
              <span className="badge-pay">VISA</span>
              <span className="badge-pay">MC</span>
              <span className="badge-pay">AMEX</span>
              <span className="badge-pay alma">Alma</span>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}