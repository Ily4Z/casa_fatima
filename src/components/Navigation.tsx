import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  const [menuOuvert, setMenuOuvert] = useState(false);
  const [bijouxOuvert, setBijouxOuvert] = useState(false);

  // La petite fonction magique qui referme tout !
  const fermerMenu = () => {
    setMenuOuvert(false);
    setBijouxOuvert(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-top">
        <button 
          className="bouton-hamburger" 
          onClick={() => setMenuOuvert(!menuOuvert)}
        >
          {menuOuvert ? '✕' : '☰'}
        </button>
        
        <div className="logo-container">
          {/* On ferme aussi le menu si on clique sur le logo */}
          <Link to="/" onClick={fermerMenu}>
            <img src="/casa_fatima/images/logo_accueil.png" alt="Logo Casa Fátima" className="logo-image" />
          </Link>
        </div>

        <div className="icones-droite">
          <Link to="/panier" className="icone-link" onClick={fermerMenu}>
            {/* On utilise notre astuce BASE_URL pour que ça marche en local et sur GitHub */}
            <img 
              src={`${(import.meta as any).env.BASE_URL}images/logo_panier.png`} 
              alt="Panier" 
              className="icone-image" 
            />
          </Link>
          <Link to="/authentification" className="icone-link" onClick={fermerMenu}>
            <img 
              src={`${(import.meta as any).env.BASE_URL}images/logo_compte.png`} 
              alt="Mon Compte" 
              className="icone-image" 
            />
          </Link>
        </div>
      </div>

      {menuOuvert && (
        <nav className="menu-dore">
          <ul className="liste-menu">
            
            <li className="item-menu">
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} onClick={fermerMenu}>ACCUEIL</Link>
            </li>
            
            <li className="item-menu">
              <button 
                className="bouton-sous-menu" 
                onClick={() => setBijouxOuvert(!bijouxOuvert)}
              >
                NOS BIJOUX <span>{bijouxOuvert ? 'ʌ' : 'v'}</span>
              </button>
              
              {bijouxOuvert && (
                <ul className="sous-menu">
                  <li><Link to="/boutique" style={{ textDecoration: 'none', color: 'inherit' }} onClick={fermerMenu}>BOUTIQUE</Link></li>
                  <li><Link to="/boutique/bagues" style={{ textDecoration: 'none', color: 'inherit' }} onClick={fermerMenu}><span>v</span> BAGUES</Link></li>
                  <li><Link to="/boutique/bracelets" style={{ textDecoration: 'none', color: 'inherit' }} onClick={fermerMenu}><span>v</span> BRACELETS</Link></li>
                  <li><Link to="/boutique/boucles" style={{ textDecoration: 'none', color: 'inherit' }} onClick={fermerMenu}><span>v</span> BOUCLES D'OREILLES</Link></li>
                  <li><Link to="/boutique/colliers" style={{ textDecoration: 'none', color: 'inherit' }} onClick={fermerMenu}><span>v</span> COLLIERS</Link></li>
                </ul>
              )}
            </li>

            <li className="item-menu">
              <Link to="/personnalisation" style={{ textDecoration: 'none', color: 'inherit' }} onClick={fermerMenu}>
                PERSONNALISEZ VOTRE BIJOU
              </Link>
            </li>
            <li className="item-menu">
              <Link to="/histoire" style={{ textDecoration: 'none', color: 'inherit' }} onClick={fermerMenu}>
                NOTRE HISTOIRE
              </Link>
            </li>
            <li className="item-menu">
              <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }} onClick={fermerMenu}>
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}