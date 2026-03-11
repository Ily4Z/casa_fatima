import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Accueil.css';

// Nos 5 catégories avec leurs images respectives
const categories = [
  { id: 'bagues', nom: 'Bagues', image: 'images/presentation_ba.png', lien: '/boutique/bagues' },
  { id: 'boucles', nom: "Boucles d'oreilles", image: 'images/presentation_bo.png', lien: '/boutique/boucles' },
  { id: 'bracelets', nom: 'Bracelets', image: 'images/presentation_br.png', lien: '/boutique/bracelets' },
  { id: 'colliers', nom: 'Colliers', image: 'images/presentation_co.png', lien: '/boutique/colliers' },
  { id: 'perso', nom: 'Personnalisation', image: 'images/presentation_perso.png', lien: '/personnalisation' },
];

export default function Accueil() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonctions pour passer à l'image suivante/précédente en boucle
  const imageSuivante = () => {
    setCurrentIndex((prev) => (prev + 1) % categories.length);
  };

  const imagePrecedente = () => {
    setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  // Petite astuce pour déterminer la position de chaque image (centre, gauche, droite)
  const getClassePosition = (index: number) => {
    const difference = index - currentIndex;
    const diffNormalisee = difference >= 0 ? difference : difference + categories.length;

    if (diffNormalisee === 0) return 'slide slide-centre';
    if (diffNormalisee === 1) return 'slide slide-droite';
    if (diffNormalisee === categories.length - 1) return 'slide slide-gauche';
    return 'slide slide-cachee'; // Pour les images qui sont "derrière"
  };

  return (
    <div className="accueil-container">
      {/* --- TA SUPERBE BANNIÈRE --- */}
      <div 
        className="hero-banner" 
        style={{ backgroundImage: `url('${(import.meta as any).env.BASE_URL}images/bann_accueil.png')` }}
      >
        <div className="hero-content">
          <h1 className="slogan">Là où les souvenirs deviennent des bijoux.</h1> {/* N'hésite pas à remettre ton vrai texte ! */}
        </div>
        
        <div className="hero-pagination">
          {/* Si tu as besoin de tes petits points de pagination plus tard */}
        </div>
      </div>
      {/* --------------------------- */}

      <section className="section-carrousel">
        <h2 className="carrousel-sous-titre">Des bijoux de famille inspirés par nos racines. Pensées par les sœurs Madeira en hommage à notre grand-mère Fátima, nos créations en acier inoxydable se portent comme une seconde peau : un lien précieux entre vos souvenirs, vos traditions et les moments dorés de la vie</h2>
        
        <div className="carrousel-wrapper">
          {/* Flèche Gauche */}
          <button className="fleche-nav fleche-gauche" onClick={imagePrecedente}>
            ‹
          </button>

          <div className="carrousel-piste">
            {categories.map((cat, index) => (
              <div key={cat.id} className={getClassePosition(index)}>
                <Link to={cat.lien} style={{ textDecoration: 'none' }}>
                  <img 
                    src={`${(import.meta as any).env.BASE_URL}${cat.image}`} 
                    alt={cat.nom} 
                  />
                  <h3>{cat.nom}</h3>
                </Link>
              </div>
            ))}
          </div>

          {/* Flèche Droite */}
          <button className="fleche-nav fleche-droite" onClick={imageSuivante}>
            ›
          </button>
        </div>
      </section>
    </div>
  );
}