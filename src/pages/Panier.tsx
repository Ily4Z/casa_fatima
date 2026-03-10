export default function Panier() {
  return (
    <div style={{ maxWidth: '800px', margin: '60px auto', padding: '0 20px' }}>
      <h1 style={{ fontFamily: 'Times New Roman', borderBottom: '1px solid #000', paddingBottom: '10px' }}>Votre Panier</h1>
      
      {/* Simulation d'un article dans le panier */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', borderBottom: '1px solid #eee' }}>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div style={{ width: '80px', height: '80px', backgroundColor: '#f4f4f4' }}></div>
          <div>
            <h3>Bague Coimbra</h3>
            <p style={{ color: '#666' }}>Couleur : Or</p>
          </div>
        </div>
        <p>45.00 €</p>
      </div>

      <div style={{ textAlign: 'right', marginTop: '30px' }}>
        <h2>Sous-total : 45.00 €</h2>
        <p style={{ color: '#666', fontSize: '0.9rem' }}>Frais de port calculés à l'étape suivante.</p>
        <button style={{ backgroundColor: '#000', color: 'white', padding: '15px 40px', border: 'none', marginTop: '20px', cursor: 'pointer' }}>
          VALIDER LA COMMANDE
        </button>
      </div>
    </div>
  );
}