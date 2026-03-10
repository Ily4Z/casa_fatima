import catalogue from '../data/catalogue.json';
import './Boutique.css';

export default function Boutique() {
  // On filtre pour ne pas afficher les "charms" seuls dans la boutique classique
  const bijouxClassiques = catalogue.filter(bijou => bijou.categorie !== 'charm');

  return (
    <div className="boutique-container">
      <h1 className="titre-page">Notre Collection</h1>
      <p className="sous-titre-page">Découvrez nos créations artisanales, pensées pour vous.</p>
      
      <div className="grille-produits">
        {bijouxClassiques.map((bijou) => (
          <div key={bijou.id} className="carte-produit">
            {/* L'emplacement de l'image */}
            <div className="image-produit-placeholder">
              <span>{bijou.nom}</span>
            </div>
            
            <div className="infos-produit">
              <h3 className="nom-produit">{bijou.nom}</h3>
              <p className="prix-produit">{bijou.prix.toFixed(2)} €</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}