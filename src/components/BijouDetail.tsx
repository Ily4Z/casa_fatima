import { useState } from 'react';
import './BijouDetail.css';

// On définit les propriétés que le composant va recevoir
interface BijouDetailProps {
  nom: string;
  description: string;
  prix: number;
}

export default function BijouDetail({ nom, description, prix }: BijouDetailProps) {
  // Gestion des choix de l'utilisateur
  const [couleur, setCouleur] = useState<'Or' | 'Argent'>('Or');
  const [quantite, setQuantite] = useState(1);
  
  // Gestion des accordéons (Description & Livraison)
  const [sectionOuverte, setSectionOuverte] = useState<'description' | 'livraison' | null>(null);

  // Fonctions pour la quantité
  const diminuerQuantite = () => setQuantite(q => (q > 1 ? q - 1 : 1));
  const augmenterQuantite = () => setQuantite(q => q + 1);

  // Fonction pour les accordéons
  const toggleSection = (section: 'description' | 'livraison') => {
    setSectionOuverte(sectionOuverte === section ? null : section);
  };

  return (
    <div className="bijou-detail-container">
      {/* 1. Zone de gauche : La galerie d'images (Structure de base pour l'instant) */}
      <div className="galerie-images">
        <div className="thumbnails">
          <button>▲</button>
          <div className="thumbnail-placeholder">Img 1</div>
          <div className="thumbnail-placeholder">Img 2</div>
          <div className="thumbnail-placeholder">Img 3</div>
          <button>▼</button>
        </div>
        <div className="image-principale">
          {/* L'image du bijou sur fond d'azulejos viendra ici */}
          <div className="image-placeholder">Image Principale</div>
        </div>
      </div>

      {/* 2. Zone de droite : Les informations et actions */}
      <div className="bijou-infos">
        <h1 className="bijou-titre">{nom}</h1>
        <p className="bijou-prix">{prix.toFixed(2)} €</p>

        {/* Choix de la couleur */}
        <div className="choix-couleur">
          <p className="label-bleu">Couleur</p>
          <div className="boutons-couleur">
            <button 
              className={couleur === 'Or' ? 'actif' : ''} 
              onClick={() => setCouleur('Or')}
            >
              <span className="pastille-or"></span> Or (Gold)
            </button>
            <button 
              className={couleur === 'Argent' ? 'actif' : ''} 
              onClick={() => setCouleur('Argent')}
            >
              <span className="pastille-argent"></span> Argent (Silver)
            </button>
          </div>
        </div>

        {/* Quantité et Ajout au panier */}
        <div className="actions-panier">
          <p className="label-bleu">Quantité</p>
          <div className="ligne-actions">
            <div className="selecteur-quantite">
              <button onClick={diminuerQuantite}>-</button>
              <span>{quantite}</span>
              <button onClick={augmenterQuantite}>+</button>
            </div>
            <button className="bouton-ajouter">AJOUTER</button>
            <button className="bouton-favori">♡</button>
          </div>
        </div>

        {/* Accordéons Description et Livraison */}
        <div className="accordions">
          <div className="accordion-item">
            <button className="accordion-titre" onClick={() => toggleSection('description')}>
              <span>{sectionOuverte === 'description' ? 'V' : '>'} DESCRIPTION</span>
            </button>
            {sectionOuverte === 'description' && (
              <div className="accordion-contenu">
                <p>{description}</p>
              </div>
            )}
          </div>
          
          <div className="accordion-item">
            <button className="accordion-titre" onClick={() => toggleSection('livraison')}>
              <span>{sectionOuverte === 'livraison' ? 'V' : '>'} LIVRAISON</span>
            </button>
            {sectionOuverte === 'livraison' && (
              <div className="accordion-contenu">
                <p>Livraison standard sous 3 à 5 jours ouvrés. Expédié depuis la France.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}