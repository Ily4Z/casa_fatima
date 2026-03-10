import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import catalogue from '../data/catalogue.json';
import './Personnalisation.css';

export default function Personnalisation() {
  const navigate = useNavigate();
  const bases = catalogue.filter(bijou => bijou.categorie.includes('base'));
  const charms = catalogue.filter(bijou => bijou.categorie === 'charm');

  const [baseChoisie, setBaseChoisie] = useState(bases[0]);
  const [charmsChoisis, setCharmsChoisis] = useState<any[]>([]);

  const prixTotal = (baseChoisie?.prix || 0) + charmsChoisis.reduce((total, charm) => total + charm.prix, 0);

  const ajouterCharm = (charm: any) => setCharmsChoisis([...charmsChoisis, charm]);
  const retirerCharm = (index: number) => setCharmsChoisis(charmsChoisis.filter((_, i) => i !== index));

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
                  className={`carte-choix ${baseChoisie?.id === base.id ? 'active' : ''}`}
                  onClick={() => setBaseChoisie(base)}
                >
                  <div className="image-simulee"></div>
                  <span className="nom-item">{base.nom}</span>
                  <span className="prix-item">+{base.prix}€</span>
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
                  <div className="image-simulee petite"></div>
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
                <strong>Base : {baseChoisie?.nom}</strong>
                <span className="recap-prix">{baseChoisie?.prix.toFixed(2)} €</span>
              </div>

              <div className="recap-charms">
                <p className="charms-titre">Charms ajoutés ({charmsChoisis.length}) :</p>
                
                {charmsChoisis.length === 0 ? (
                  <p className="charms-vide">Sélectionnez des charms pour donner vie à votre bijou.</p>
                ) : (
                  <ul className="liste-charms">
                    {charmsChoisis.map((charm, index) => (
                      <li key={index} className="charm-selectionne">
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
              <button className="btn-ajouter-panier" onClick={() => { alert("✨ Votre création unique a été ajoutée au panier !");
                navigate('/panier'); // Redirige instantanément vers la page Panier
                }}> AJOUTER AU PANIER
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}