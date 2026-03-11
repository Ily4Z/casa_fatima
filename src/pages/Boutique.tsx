import { useParams } from 'react-router-dom';
import catalogue from '../data/catalogue.json' with { type: "json" };
import './Boutique.css';

export default function Boutique() {
  const { categorie } = useParams();

  // 1. On enlève les charms de la boutique classique
  let bijouxAffiches = catalogue.filter(bijou => bijou.categorie !== 'charm');

  // 2. Si on a cliqué sur une catégorie précise, on filtre
  if (categorie) {
    bijouxAffiches = bijouxAffiches.filter(bijou => bijou.categorie === categorie);
  }

  // Gère le titre de la page de manière élégante
  const titrePage = categorie 
    ? categorie.charAt(0).toUpperCase() + categorie.slice(1) 
    : "Toute notre collection";

  return (
    <div className="boutique-container">
      <div className="boutique-header">
        <h1 className="titre-page">{titrePage}</h1>
        <p className="sous-titre-page">Découvrez nos créations artisanales, pensées pour vous.</p>
      </div>
      
      {bijouxAffiches.length === 0 ? (
        <p className="message-vide">
          Aucun bijou trouvé dans cette catégorie pour le moment.
        </p>
      ) : (
        <div className="grille-produits">
          {bijouxAffiches.map((bijou) => (
            <div key={bijou.id} className="carte-produit">
              
              {/* C'est ici qu'on affiche la VRAIE image ! */}
              {/* On ajoute /casa_fatima devant pour que ça marche sur GitHub Pages */}
              <div className="conteneur-image">
                <img 
                  src={`${(import.meta as any).env.BASE_URL}${bijou.images[0].substring(1)}`} 
                  alt={bijou.nom} 
                  className="image-produit" 
                />
              </div>

              <div className="infos-produit">
                <h3 className="nom-produit">{bijou.nom}</h3>
                <p className="prix-produit">{bijou.prix.toFixed(2)} €</p>
                <button className="btn-voir-produit">Découvrir</button>
              </div>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
}