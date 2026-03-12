import { useParams, useNavigate } from 'react-router-dom';
import catalogue from '../data/catalogue.json' with { type: "json" };
import './Boutique.css';

export default function Boutique() {
  const { categorie } = useParams();
  const navigate = useNavigate();

  let bijouxAffiches = catalogue.filter(bijou => bijou.categorie !== 'charm');

  if (categorie) {
    bijouxAffiches = bijouxAffiches.filter(bijou => bijou.categorie === categorie);
  }

  const titrePage = categorie 
    ? categorie.charAt(0).toUpperCase() + categorie.slice(1) 
    : "Nos Collections";

  return (
    <div className="boutique-luxe-container">
      <div className="boutique-luxe-header">
        <h1 className="titre-luxe">{titrePage}</h1>
        <p className="sous-titre-luxe">Des pièces uniques, pensées pour traverser le temps.</p>
      </div>
      
      {bijouxAffiches.length === 0 ? (
        <p className="message-vide">L'atelier prépare de nouvelles merveilles pour cette catégorie.</p>
      ) : (
        <div className="grille-luxe">
          {bijouxAffiches.map((bijou) => (
            <div 
              key={bijou.id} 
              className="carte-luxe"
              onClick={() => navigate(`/produit/${bijou.id}`)}
            >
              
              <div className="conteneur-image-luxe">
                {/* Première image (toujours visible) */}
                <img 
                  src={`${(import.meta as any).env.BASE_URL}${bijou.images[0].substring(1)}`} 
                  alt={bijou.nom} 
                  className="img-luxe principale" 
                />
                
                {/* Deuxième image (visible au survol, si elle existe) */}
                {bijou.images[1] && (
                  <img 
                    src={`${(import.meta as any).env.BASE_URL}${bijou.images[1].substring(1)}`} 
                    alt={`${bijou.nom} porté`} 
                    className="img-luxe secondaire" 
                  />
                )}
              </div>

              <div className="infos-luxe">
                <h3 className="nom-luxe">{bijou.nom}</h3>
                <p className="prix-luxe">{bijou.prix.toFixed(2)} €</p>
                <span className="lien-decouvrir">Découvrir</span>
              </div>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
}