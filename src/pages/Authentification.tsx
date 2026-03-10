import { useState } from 'react';

export default function Authentification() {
  const [estInscription, setEstInscription] = useState(false);

  return (
    <div style={{ maxWidth: '400px', margin: '80px auto', padding: '0 20px', textAlign: 'center' }}>
      <h1 style={{ fontFamily: 'Times New Roman' }}>{estInscription ? 'Créer un compte' : 'Se connecter'}</h1>
      
      <form style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '30px' }}>
        {estInscription && (
          <input type="text" placeholder="Prénom et Nom" style={{ padding: '15px', border: '1px solid #ccc' }} />
        )}
        <input type="email" placeholder="Email" style={{ padding: '15px', border: '1px solid #ccc' }} />
        <input type="password" placeholder="Mot de passe" style={{ padding: '15px', border: '1px solid #ccc' }} />
        
        <button type="button" style={{ backgroundColor: '#1A5B7E', color: 'white', padding: '15px', border: 'none', cursor: 'pointer' }}>
          {estInscription ? 'S\'INSCRIRE' : 'CONNEXION'}
        </button>
      </form>

      <button 
        onClick={() => setEstInscription(!estInscription)} 
        style={{ background: 'none', border: 'none', color: '#666', textDecoration: 'underline', marginTop: '20px', cursor: 'pointer' }}
      >
        {estInscription ? 'Déjà un compte ? Connectez-vous' : 'Pas encore de compte ? Créer un compte'}
      </button>
    </div>
  );
}