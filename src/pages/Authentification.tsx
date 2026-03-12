import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Authentification.css';

export default function Authentification() {
  const navigate = useNavigate();
  
  // États pour savoir si on affiche "Connexion" ou "Inscription"
  const [estModeConnexion, setEstModeConnexion] = useState(true);
  
  // États pour les champs du formulaire
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [nom, setNom] = useState('');

  // État pour savoir si l'utilisateur est connecté
  const [utilisateurConnecte, setUtilisateurConnecte] = useState<any>(null);

  // Vérifie au chargement si quelqu'un est déjà "connecté" dans la mémoire
  useEffect(() => {
    const session = localStorage.getItem('casa_fatima_user');
    if (session) {
      setUtilisateurConnecte(JSON.parse(session));
    }
  }, []);

  const gererSoumission = (e: React.FormEvent) => {
    e.preventDefault();
    
    // On simule la création ou la connexion en sauvegardant un faux utilisateur
    const fauxUtilisateur = {
      nom: estModeConnexion ? "Maria" : nom, // Donne "Maria" par défaut si connexion simple
      email: email,
      pointsFidelite: 250
    };

    localStorage.setItem('casa_fatima_user', JSON.stringify(fauxUtilisateur));
    setUtilisateurConnecte(fauxUtilisateur);
    
    // On nettoie les champs
    setEmail('');
    setMotDePasse('');
    setNom('');
  };

  const seDeconnecter = () => {
    localStorage.removeItem('casa_fatima_user');
    setUtilisateurConnecte(null);
  };

  // --- AFFICHAGE SI CONNECTÉ ---
  if (utilisateurConnecte) {
    return (
      <div className="auth-container">
        <div className="compte-dashboard">
          <h1 className="titre-auth">Mon Compte</h1>
          <h2 className="bienvenue-texte">Bonjour {utilisateurConnecte.nom} ✨</h2>
          
          <div className="compte-grille">
            <div className="compte-carte">
              <h3>Mes Éclats de Fidélité</h3>
              <p className="points-fidelite">{utilisateurConnecte.pointsFidelite} Éclats</p>
              <button className="btn-secondaire" onClick={() => navigate('/programme-fidelite')}>Voir mes avantages</button>
            </div>
            
            <div className="compte-carte">
              <h3>Mes Commandes</h3>
              <p>Vous n'avez pas encore de commande en cours.</p>
              <button className="btn-secondaire" onClick={() => navigate('/boutique')}>Découvrir nos bijoux</button>
            </div>
          </div>

          <button className="btn-deconnexion" onClick={seDeconnecter}>Se déconnecter</button>
        </div>
      </div>
    );
  }

  // --- AFFICHAGE SI NON CONNECTÉ (Formulaire) ---
  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-header">
          <button 
            className={`auth-onglet ${estModeConnexion ? 'actif' : ''}`}
            onClick={() => setEstModeConnexion(true)}
          >
            CONNEXION
          </button>
          <button 
            className={`auth-onglet ${!estModeConnexion ? 'actif' : ''}`}
            onClick={() => setEstModeConnexion(false)}
          >
            CRÉER UN COMPTE
          </button>
        </div>

        <form className="auth-form" onSubmit={gererSoumission}>
          {!estModeConnexion && (
            <div className="champ-groupe">
              <label htmlFor="nom">Prénom & Nom</label>
              <input 
                type="text" 
                id="nom" 
                required 
                value={nom} 
                onChange={(e) => setNom(e.target.value)} 
                className="input-arrondi" 
                placeholder="Ex: Maria Silva"
              />
            </div>
          )}

          <div className="champ-groupe">
            <label htmlFor="email">E-mail</label>
            <input 
              type="email" 
              id="email" 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="input-arrondi" 
            />
          </div>

          <div className="champ-groupe">
            <label htmlFor="password">Mot de passe</label>
            <input 
              type="password" 
              id="password" 
              required 
              value={motDePasse} 
              onChange={(e) => setMotDePasse(e.target.value)} 
              className="input-arrondi" 
            />
          </div>

          <button type="submit" className="btn-envoyer-carre full-width">
            {estModeConnexion ? "SE CONNECTER" : "VALIDER L'INSCRIPTION"}
          </button>
          
          {estModeConnexion && (
            <p className="mot-de-passe-oublie">Mot de passe oublié ?</p>
          )}
        </form>
      </div>
    </div>
  );
}