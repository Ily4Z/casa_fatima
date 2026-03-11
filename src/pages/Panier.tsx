import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Panier.css';

export default function Panier() {
  const navigate = useNavigate();
  // On crée un état pour stocker les articles du panier
  const [articles, setArticles] = useState<any[]>([]);

  // Quand la page s'ouvre, on va lire la "mémoire" du navigateur
  useEffect(() => {
    const panierSauvegarde = localStorage.getItem('casa_fatima_panier');
    if (panierSauvegarde) {
      setArticles(JSON.parse(panierSauvegarde));
    }
  }, []);

  // Fonction pour retirer un bijou précis
  const retirerArticle = (indexASupprimer: number) => {
    const nouveauPanier = articles.filter((_, index) => index !== indexASupprimer);
    setArticles(nouveauPanier);
    localStorage.setItem('casa_fatima_panier', JSON.stringify(nouveauPanier));
  };

  // Calcul du prix total
  const prixTotal = articles.reduce((total, article) => total + article.prix, 0);

  return (
    <div className="panier-container">
      <h1 className="panier-titre">Votre Panier</h1>
      
      {articles.length === 0 ? (
        <div className="panier-vide">
          <p>Votre panier est pour l'instant aussi léger qu'une brise d'été.</p>
          <button onClick={() => navigate('/boutique')} className="btn-retour-boutique">
            Découvrir nos collections
          </button>
        </div>
      ) : (
        <div className="panier-layout">
          
          {/* Colonne gauche : La liste des bijoux */}
          <div className="panier-liste">
            {articles.map((article, index) => (
              <div key={index} className="panier-article">
                <div className="article-image-mini">
                  {/* On gère le chemin de l'image comme dans la boutique */}
                  <img src={`${(import.meta as any).env.BASE_URL}${article.images?.[0]?.substring(1) || ''}`} alt={article.nom} />
                </div>
                <div className="article-infos">
                  <h3>{article.nom}</h3>
                  <p className="article-categorie">
                    {article.categorie} 
                    {/* On affiche la matière si elle a été choisie */}
                    {article.choixMateriau && ` • ${article.choixMateriau}`}
                    {/* On affiche la taille si c'est une bague et qu'elle a été choisie */}
                    {article.choixTaille && ` • T.${article.choixTaille}`}
                  </p>
                </div>
                <div className="article-prix">
                  {article.prix.toFixed(2)} €
                </div>
                <button 
                  className="btn-supprimer" 
                  onClick={() => retirerArticle(index)}
                  title="Retirer du panier"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          {/* Colonne droite : Le résumé de la commande */}
          <div className="panier-recapitulatif">
            <h2>Résumé</h2>
            <div className="recap-ligne">
              <span>Sous-total</span>
              <span>{prixTotal.toFixed(2)} €</span>
            </div>
            <div className="recap-ligne">
              <span>Livraison</span>
              <span>Offerte</span>
            </div>
            <div className="separateur"></div>
            <div className="recap-total">
              <span>Total</span>
              <span>{prixTotal.toFixed(2)} €</span>
            </div>
            <button className="btn-commander" onClick={() => alert("✨ Redirection vers le paiement sécurisé...")}>
              VALIDER LA COMMANDE
            </button>
          </div>
          
        </div>
      )}
    </div>
  );
}