import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import catalogue from '../data/catalogue.json' with { type: "json" };
import './Produit.css';

export default function Produit() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const bijou = catalogue.find(b => b.id === id);

  // --- NOUVEAU : Mémoire pour les choix du client ---
  const [materiauChoisi, setMateriauChoisi] = useState('');
  const [tailleChoisie, setTailleChoisie] = useState('');

  // Dès qu'on arrive sur la page, on sélectionne la 1ère matière par défaut
  useEffect(() => {
    if (bijou && bijou.materiaux.length > 0) {
      setMateriauChoisi(bijou.materiaux[0]);
    }
  }, [bijou]);

  if (!bijou) {
    return (
      <div className="produit-introuvable">
        <h2>Ce bijou n'existe pas ou n'est plus disponible.</h2>
        <button onClick={() => navigate('/boutique')} className="btn-retour">Retour à la boutique</button>
      </div>
    );
  }

  const imageSrc = `${(import.meta as any).env.BASE_URL}${bijou.images[0].substring(1)}`;

  // Fonction pour ajouter au panier avec les options
  const gererAjoutPanier = () => {
    // Sécurité : obliger à choisir une taille si c'est une bague
    if (bijou.categorie === 'bagues' && tailleChoisie === '') {
      alert("✨ Veuillez sélectionner une taille avant d'ajouter cette bague à votre panier.");
      return;
    }

    const panierActuel = JSON.parse(localStorage.getItem('casa_fatima_panier') || '[]');
    
    // On crée un nouvel article combinant le bijou ET les choix du client
    const articleAAjouter = {
      ...bijou,
      choixMateriau: materiauChoisi,
      choixTaille: bijou.categorie === 'bagues' ? tailleChoisie : null
    };
    
    panierActuel.push(articleAAjouter);
    localStorage.setItem('casa_fatima_panier', JSON.stringify(panierActuel));
    navigate('/panier');
  };

  return (
    <div className="page-produit-container">
      <button className="btn-retour-boutique" onClick={() => navigate(-1)}>
        ← Retour
      </button>

      <div className="produit-grid">
        <div className="produit-image-wrapper">
          <img src={imageSrc} alt={bijou.nom} className="produit-image-grand" />
        </div>

        <div className="produit-infos-wrapper">
          <h1 className="produit-titre">{bijou.nom}</h1>
          <p className="produit-prix-grand">{bijou.prix.toFixed(2)} €</p>
          
          <div className="separateur-dore"></div>
          <p className="produit-description-longue">{bijou.description}</p>
          
          {/* --- NOUVEAU : Les options de personnalisation --- */}
          <div className="options-produit">
            
            {/* Choix de la matière */}
            <div className="option-groupe">
              <span className="option-label">Matière :</span>
              <div className="choix-boutons">
                {bijou.materiaux.map(mat => (
                  <button 
                    key={mat}
                    className={`btn-choix ${materiauChoisi === mat ? 'actif' : ''}`}
                    onClick={() => setMateriauChoisi(mat)}
                  >
                    {mat}
                  </button>
                ))}
              </div>
            </div>

            {/* Choix de la taille (UNIQUEMENT POUR LES BAGUES) */}
            {bijou.categorie === 'bagues' && (
              <div className="option-groupe">
                <span className="option-label">Taille :</span>
                <select 
                  className="select-taille"
                  value={tailleChoisie}
                  onChange={(e) => setTailleChoisie(e.target.value)}
                >
                  <option value="">Sélectionner une taille...</option>
                  <option value="50">Taille 50</option>
                  <option value="52">Taille 52</option>
                  <option value="54">Taille 54</option>
                  <option value="56">Taille 56</option>
                  <option value="58">Taille 58</option>
                  <option value="60">Taille 60</option>
                </select>
              </div>
            )}
            
          </div>

          <button className="btn-ajouter-grand" onClick={gererAjoutPanier}>
            AJOUTER AU PANIER
          </button>
        </div>
      </div>
    </div>
  );
}