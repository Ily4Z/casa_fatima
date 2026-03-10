import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

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
            <img src="/casa_fatima/images/logo_accueil.png" alt="Logo Casa Fátima" className="logo-image" />
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
            
            {/* L'accueil corrigé avec un Link */}
            <li className="item-menu">
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>ACCUEIL</Link>
            </li>
            
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
                  <li>
                    <Link to="/boutique" style={{ textDecoration: 'none', color: 'inherit' }}>
                      BOUTIQUE
                    </Link>
                  </li>
                  {/* J'ai ajouté color: inherit pour éviter qu'ils ne deviennent bleus */}
                  <li><Link to="/boutique/bagues" style={{ textDecoration: 'none', color: 'inherit' }}><span>v</span> BAGUES</Link></li>
                  <li><Link to="/boutique/bracelets" style={{ textDecoration: 'none', color: 'inherit' }}><span>v</span> BRACELETS</Link></li>
                  <li><Link to="/boutique/boucles" style={{ textDecoration: 'none', color: 'inherit' }}><span>v</span> BOUCLES D'OREILLES</Link></li>
                  <li><Link to="/boutique/colliers" style={{ textDecoration: 'none', color: 'inherit' }}><span>v</span> COLLIERS</Link></li>
                </ul>
              )}
            </li>

            {/* LES VOICI : J'ai remis les className="item-menu" ici ! */}
            <li className="item-menu">
              <Link to="/personnalisation" style={{ textDecoration: 'none', color: 'inherit' }}>
                PERSONNALISEZ VOTRE BIJOU
              </Link>
            </li>
            <li className="item-menu">
              <Link to="/histoire" style={{ textDecoration: 'none', color: 'inherit' }}>
                NOTRE HISTOIRE
              </Link>
            </li>
            <li className="item-menu">
              <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}