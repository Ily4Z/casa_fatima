export default function Contact() {
  return (
    <div style={{ maxWidth: '600px', margin: '60px auto', padding: '0 20px', textAlign: 'center' }}>
      <h1 style={{ fontFamily: 'Times New Roman', color: '#1A5B7E' }}>Contactez-nous</h1>
      <p style={{ marginBottom: '30px', color: '#666' }}>Une question sur un bijou ou une commande ? Écrivez-nous.</p>
      
      <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <input type="text" placeholder="Votre Nom" style={{ padding: '15px', border: '1px solid #ccc' }} />
        <input type="email" placeholder="Votre Email" style={{ padding: '15px', border: '1px solid #ccc' }} />
        <textarea placeholder="Votre Message" rows={6} style={{ padding: '15px', border: '1px solid #ccc' }}></textarea>
        <button type="button" style={{ backgroundColor: '#1A5B7E', color: 'white', padding: '15px', border: 'none', cursor: 'pointer' }}>
          ENVOYER
        </button>
      </form>
    </div>
  );
}