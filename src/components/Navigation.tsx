import { useState } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

export default function Navigation() {
  // Gère l'ouverture du menu latéral (mobile)
  const [menuOuvert, setMenuOuvert] = useState(false);
  // Gère l'ouverture du sous-menu "Nos Bijoux"
  const [bijouxOuvert, setBijouxOuvert] = useState(false);

  return (
    <header className="navbar">
      {/* Barre supérieure visible en permanence */}
      <div className="navbar-top">
        <button 
          className="bouton-hamburger" 
          onClick={() => setMenuOuvert(!menuOuvert)}
        >
          {menuOuvert ? '✕' : '☰'}
        </button>
        
        <div className="logo-container">
          <Link to="/">
            <img src="/images/logo_accueil.png" alt="Logo Casa Fátima" className="logo-image" />
          </Link>
        </div>

        <div className="icones-droite">
          <Link to="/panier" className="icone" style={{ textDecoration: 'none', background: 'none', border: 'none' }}>🛒</Link>
          <Link to="/authentification" className="icone" style={{ textDecoration: 'none', background: 'none', border: 'none' }}>👤</Link>
        </div>
      </div>

      {/* Le menu déroulant doré */}
      {menuOuvert && (
        <nav className="menu-dore">
          <ul className="liste-menu">
            <li className="item-menu"><a href="/">ACCUEIL</a></li>
            
            {/* Menu avec sous-catégories */}
            <li className="item-menu">
              <button 
                className="bouton-sous-menu" 
                onClick={() => setBijouxOuvert(!bijouxOuvert)}
              >
                NOS BIJOUX <span>{bijouxOuvert ? 'ʌ' : 'v'}</span>
              </button>
              
              {/* Le sous-menu qui s'affiche au clic */}
              {bijouxOuvert && (
                <ul className="sous-menu">
                  {/* Le lien vers la boutique globale */}
                  <li><Link to="/boutique" style={{ textDecoration: 'none' }}><span>v</span> TOUS NOS BIJOUX</Link></li>
  
                  {/* Les liens filtrés */}
                  <li><Link to="/boutique/bagues" style={{ textDecoration: 'none' }}><span>v</span> BAGUES</Link></li>
                  <li><Link to="/boutique/bracelets" style={{ textDecoration: 'none' }}><span>v</span> BRACELETS</Link></li>
                  <li><Link to="/boutique/boucles" style={{ textDecoration: 'none' }}><span>v</span> BOUCLES D'OREILLES</Link></li>
                  <li><Link to="/boutique/colliers" style={{ textDecoration: 'none' }}><span>v</span> COLLIERS</Link></li>
                </ul>
              )}
            </li>

            <li className="item-menu"><a href="/personnalisation">PERSONNALISEZ VOTRE BIJOU</a></li>
            <li className="item-menu"><a href="/histoire">NOTRE HISTOIRE</a></li>
            <li className="item-menu"><a href="/contact">CONTACT</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}