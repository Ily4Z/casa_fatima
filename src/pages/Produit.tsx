import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import catalogue from '../data/catalogue.json' with { type: "json" };
import './Produit.css';

export default function Produit() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const bijou = catalogue.find(b => b.id === id);

  // --- États pour gérer l'interactivité ---
  const [imageAffichee, setImageAffichee] = useState('');
  const [materiauChoisi, setMateriauChoisi] = useState('');
  const [tailleChoisie, setTailleChoisie] = useState('');
  const [quantite, setQuantite] = useState(1);
  
  // États pour les menus déroulants du bas
  const [descriptionOuverte, setDescriptionOuverte] = useState(true);
  const [livraisonOuverte, setLivraisonOuverte] = useState(false);

  // Au chargement du produit, on définit l'image et la matière par défaut
  useEffect(() => {
    if (bijou) {
      setImageAffichee(bijou.images[0]);
      if (bijou.materiaux.length > 0) {
        setMateriauChoisi(bijou.materiaux[0]);
      }
    }
  }, [bijou]);

  if (!bijou) {
    return (
      <div className="produit-introuvable">
        <h2>Ce bijou n'existe pas ou n'est plus disponible.</h2>
        <button onClick={() => navigate('/boutique')} className="btn-retour-boutique">Retour à la boutique</button>
      </div>
    );
  }

  // Fonction utilitaire pour les images (compatible Local et GitHub Pages)
  const getCheminImage = (chemin: string) => `${(import.meta as any).env.BASE_URL}${chemin.substring(1)}`;

  const gererAjoutPanier = () => {
    if (bijou.categorie === 'bagues' && tailleChoisie === '') {
      alert("✨ Veuillez sélectionner une taille.");
      return;
    }

    const panierActuel = JSON.parse(localStorage.getItem('casa_fatima_panier') || '[]');
    
    // On ajoute le bijou autant de fois que la quantité sélectionnée
    for(let i = 0; i < quantite; i++) {
      panierActuel.push({
        ...bijou,
        choixMateriau: materiauChoisi,
        choixTaille: bijou.categorie === 'bagues' ? tailleChoisie : null
      });
    }
    
    localStorage.setItem('casa_fatima_panier', JSON.stringify(panierActuel));
    navigate('/panier');
  };

  return (
    <div className="page-produit-moderne">
      <button className="btn-retour-simple" onClick={() => navigate(-1)}>← Retour</button>

      <div className="layout-produit">
        
        {/* --- COLONNE GAUCHE : La Galerie d'Images --- */}
        <div className="galerie-images">
          {/* Les miniatures verticales */}
          <div className="miniatures-colonne">
            {bijou.images.map((img, index) => (
              <img 
                key={index} 
                src={getCheminImage(img)} 
                alt={`${bijou.nom} vue ${index + 1}`} 
                className={`miniature ${imageAffichee === img ? 'active' : ''}`}
                onClick={() => setImageAffichee(img)}
              />
            ))}
          </div>
          
          {/* L'image principale grande */}
          <div className="image-principale-cadre">
            {imageAffichee && (
              <img src={getCheminImage(imageAffichee)} alt={bijou.nom} className="image-principale" />
            )}
          </div>
        </div>

        {/* --- COLONNE DROITE : Les Informations --- */}
        <div className="infos-produit-moderne">
          <h1 className="titre-produit">{bijou.nom}</h1>
          <p className="prix-produit">{bijou.prix.toFixed(2)} €</p>

          {/* Choix de la Couleur */}
          <div className="section-option">
            <span className="label-option">Couleur</span>
            <div className="boutons-couleur">
              {bijou.materiaux.map(mat => (
                <button 
                  key={mat}
                  className={`btn-couleur ${materiauChoisi === mat ? 'actif' : ''}`}
                  onClick={() => setMateriauChoisi(mat)}
                >
                  {/* Petite pastille de couleur générée en CSS */}
                  <span className={`pastille-couleur ${mat.toLowerCase()}`}></span>
                  <span className="texte-couleur">{mat === 'or' ? 'Or' : 'Argent'}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Choix de la Taille (si c'est une bague) */}
          {bijou.categorie === 'bagues' && (
            <div className="section-option">
              <span className="label-option">Taille</span>
              <select 
                className="selecteur-taille"
                value={tailleChoisie}
                onChange={(e) => setTailleChoisie(e.target.value)}
              >
                <option value="">Sélectionner...</option>
                <option value="50">50</option>
                <option value="52">52</option>
                <option value="54">54</option>
                <option value="56">56</option>
                <option value="58">58</option>
              </select>
            </div>
          )}

          {/* Quantité et Ajout au panier */}
          <div className="section-option">
            <span className="label-option">Quantité</span>
            <div className="barre-actions">
              
              <div className="selecteur-quantite">
                <button onClick={() => setQuantite(Math.max(1, quantite - 1))}>−</button>
                <span>{quantite}</span>
                <button onClick={() => setQuantite(quantite + 1)}>+</button>
              </div>

              <button className="btn-ajouter-rose" onClick={gererAjoutPanier}>
                AJOUTER
              </button>

              <button className="btn-favori">♡</button>
            </div>
          </div>

          {/* Menus Déroulants (Accordéons) */}
          <div className="accordeons-wrapper">
            
            <div className="accordeon-item">
              <button className="accordeon-titre" onClick={() => setDescriptionOuverte(!descriptionOuverte)}>
                <span className={`fleche-accordeon ${descriptionOuverte ? 'ouverte' : ''}`}>v</span> DESCRIPTION
              </button>
              {descriptionOuverte && (
                <div className="accordeon-contenu">
                  {bijou.description}
                </div>
              )}
            </div>

            <div className="accordeon-item">
              <button className="accordeon-titre" onClick={() => setLivraisonOuverte(!livraisonOuverte)}>
                <span className={`fleche-accordeon ${livraisonOuverte ? 'ouverte' : ''}`}>v</span> LIVRAISON
              </button>
              {livraisonOuverte && (
                <div className="accordeon-contenu">
                  Livraison standard gratuite. Expédition sous 48h jours ouvrés. Les créations personnalisées peuvent nécessiter 2 à 3 jours supplémentaires de confection.
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}