import './GuideFidelite.css';

export default function Fidelite() {
  return (
    <div className="page-info-container">
      <div className="page-info-content">
        <h1 className="titre-fidelite">PROGRAMME DE FIDÉLITÉ</h1>

        <div className="fidelite-box-principale">
          <div className="fidelite-avantages">
            <h3>Vos Avantages</h3>
            <ul>
              <li><strong>1. Éclats de Fidélité:</strong> Gagnez des points pour chaque euro dépensé.</li>
              <li><strong>2. Offres Exclusives:</strong> Accédez aux ventes privées avant tout le monde.</li>
              <li><strong>3. Surprise d'Anniversaire:</strong> Un cadeau unique pour votre jour spécial.</li>
            </ul>
          </div>
          <div className="fidelite-marche">
            <h3>Comment ça Marche ?</h3>
            <p>Un simple compte et chaque commande accumule des Éclats. <strong>Transformez vos Éclats en réductions !</strong></p>
          </div>
        </div>

        <table className="tableau-niveaux">
          <thead>
            <tr>
              <th>Niveau</th>
              <th>Condition</th>
              <th>Avantage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>NIV 1</strong></td>
              <td>Inscrit</td>
              <td>Recevez les nouveautés en priorité</td>
            </tr>
            <tr>
              <td><strong>NIV 2</strong></td>
              <td>250 Éclats</td>
              <td>-10% sur toute la boutique</td>
            </tr>
            <tr>
              <td><strong>NIV 3</strong></td>
              <td>500 Éclats</td>
              <td>Livraison offerte à vie</td>
            </tr>
          </tbody>
        </table>

        <button className="btn-fidelite-cta">CRÉER MON COMPTE ET GAGNER MES PREMIERS ÉCLATS</button>
      </div>
    </div>
  );
}