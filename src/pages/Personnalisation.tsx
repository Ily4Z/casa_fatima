import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Personnalisation.css';

// --- 1. On définit nos deux bases ---
const bases = [
  { id: 'base-collier', nom: 'Collier Chaîne Fine', prix: 45.00, image: 'images/presentation_perso.png' },
  { id: 'base-bracelet', nom: 'Bracelet Maille', prix: 35.00, image: 'images/br_moreira_1.png' }
];

// --- 2. On génère automatiquement les 15 charms ---
// Tous à 9€ (tu peux modifier ce prix !)
const charms = Array.from({ length: 15 }, (_, i) => ({
  id: `charm-${i + 1}`,
  nom: `Charm ${i + 1}`,
  prix: 9.00,
  image: `images/charms_${i + 1}.png`
}));

export default function Personnalisation() {
  const navigate = useNavigate();

  const [baseChoisie, setBaseChoisie] = useState(bases[0]);
  const [charmsChoisis, setCharmsChoisis] = useState<any[]>([]);

  const prixTotal = baseChoisie.prix + charmsChoisis.reduce((total, charm) => total + charm.prix, 0);

  const ajouterCharm = (charm: any) => setCharmsChoisis([...charmsChoisis, charm]);
  const retirerCharm = (index: number) => setCharmsChoisis(charmsChoisis.filter((_, i) => i !== index));

  // Fonction pour envoyer la création dans le VRAI panier
  const ajouterAuPanier = () => {
    const panierActuel = JSON.parse(localStorage.getItem('casa_fatima_panier') || '[]');
    
    // On crée un article spécial "Création sur-mesure"
    const creationUnique = {
      id: `perso-${Date.now()}`,
      nom: `Création : ${baseChoisie.nom}`,
      categorie: 'personnalisation',
      prix: prixTotal,
      images: [`/${baseChoisie.image}`], // On utilise l'image de la base pour le panier
      description: `Bijou personnalisé comprenant la base et ${charmsChoisis.length} charm(s).`,
      choixMateriau: 'Sur-mesure',
      charms: charmsChoisis // On garde les charms en mémoire
    };
    
    panierActuel.push(creationUnique);
    localStorage.setItem('casa_fatima_panier', JSON.stringify(panierActuel));
    
    alert("✨ Votre création unique a été ajoutée au panier !");
    navigate('/panier');
  };

  return (
    <div className="atelier-container">
      
      {/* L'en-tête de l'atelier */}
      <div className="atelier-header">
        <span className="ornement-bleu">✧ ❁ ✧</span>
        <h1 className="atelier-titre">L'Atelier de Création</h1>
        <p className="atelier-sous-titre">Façonnez un bijou unique, à l'image de vos souvenirs.</p>
      </div>

      <div className="atelier-workspace">
        
        {/* --- COLONNE GAUCHE : L'établi de création --- */}
        <div className="atelier-outils">
          
          {/* Étape 1 : La Base */}
          <section className="etape-section">
            <h2 className="etape-titre"><span>1</span> Choisissez votre base</h2>
            <div className="choix-grille">
              {bases.map(base => (
                <button 
                  key={base.id} 
                  className={`carte-choix ${baseChoisie.id === base.id ? 'active' : ''}`}
                  onClick={() => setBaseChoisie(base)}
                >
                  <img src={`${(import.meta as any).env.BASE_URL}${base.image}`} alt={base.nom} className="image-choix" />
                  <span className="nom-item">{base.nom}</span>
                  <span className="prix-item">{base.prix}€</span>
                </button>
              ))}
            </div>
          </section>

          {/* Étape 2 : Les Charms */}
          <section className="etape-section">
            <h2 className="etape-titre"><span>2</span> Ajoutez vos symboles</h2>
            <div className="choix-grille charmes-grille">
              {charms.map(charm => (
                <button 
                  key={charm.id} 
                  className="carte-choix charm-btn"
                  onClick={() => ajouterCharm(charm)}
                >
                  <img src={`${(import.meta as any).env.BASE_URL}${charm.image}`} alt={charm.nom} className="image-choix petite" />
                  <span className="nom-item">{charm.nom}</span>
                  <span className="prix-item">+{charm.prix}€</span>
                </button>
              ))}
            </div>
          </section>
        </div>

        {/* --- COLONNE DROITE : Le ticket récapitulatif --- */}
        <div className="atelier-recap-wrapper">
          <div className="atelier-recap">
            <h2 className="recap-titre">Votre Composition</h2>
            
            <div className="recap-contenu">
              <div className="recap-info">
                <strong>Base : {baseChoisie.nom}</strong>
                <span className="recap-prix">{baseChoisie.prix.toFixed(2)} €</span>
              </div>

              <div className="recap-charms">
                <p className="charms-titre">Charms ajoutés ({charmsChoisis.length}) :</p>
                
                {charmsChoisis.length === 0 ? (
                  <p className="charms-vide">Sélectionnez des charms pour donner vie à votre bijou.</p>
                ) : (
                  <ul className="liste-charms">
                    {charmsChoisis.map((charm, index) => (
                      <li key={index} className="charm-selectionne">
                        <img src={`${(import.meta as any).env.BASE_URL}${charm.image}`} alt="mini-charm" className="mini-charm-recap" />
                        <span>{charm.nom}</span>
                        <div className="charm-actions">
                          <span className="charm-prix">{charm.prix.toFixed(2)} €</span>
                          <button className="btn-retirer" onClick={() => retirerCharm(index)} title="Retirer">✕</button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="recap-footer">
              <div className="ligne-total">
                <span>Total</span>
                <span className="prix-total">{prixTotal.toFixed(2)} €</span>
              </div>
              <button className="btn-ajouter-panier" onClick={ajouterAuPanier}> 
                AJOUTER AU PANIER
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}