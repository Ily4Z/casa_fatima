import './GuideFidelite.css';

export default function GuideTailles() {
  return (
    <div className="page-info-container">
      <div className="page-info-content">
        <h1 className="titre-guide">Préserver l'éclat de Casa Fátima</h1>
        <h2 className="sous-titre-guide">Section 2 : Guide des tailles</h2>

        <div className="guide-grid">
          {/* Colliers et Bracelets */}
          <div className="guide-section-gauche">
            <div className="guide-item">
              <h3>COLLIERS</h3>
              <p>• Choker (38cm)</p>
              <p>• Standard (45cm)</p>
              <p>• Sautoir (60cm)</p>
              <p className="note-guide">Nos colliers ont des chaînes d'extension de 5 cm</p>
            </div>

            <div className="guide-item">
              <h3>BRACELETS</h3>
              <p className="note-guide">Nos bracelets ont des chaînes d'extension de 5 cm</p>
              <p>Prenez votre mesure, ajoutez 1cm pour un porté idéal.</p>
            </div>
          </div>

          {/* Tableau des Bagues */}
          <div className="guide-section-droite">
            <h3>BAGUES</h3>
            <table className="tableau-tailles">
              <thead>
                <tr>
                  <th>Taille FR</th>
                  <th>Diamètre intérieur (mm)</th>
                  <th>Tour de doigt (mm)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>50</td><td>15.9 mm</td><td>50 mm</td></tr>
                <tr><td>52</td><td>16.5 mm</td><td>52 mm</td></tr>
                <tr><td>54</td><td>17.2 mm</td><td>54 mm</td></tr>
                <tr><td>56</td><td>17.8 mm</td><td>56 mm</td></tr>
                <tr><td>58</td><td>18.5 mm</td><td>58 mm</td></tr>
                <tr><td>60</td><td>19.1 mm</td><td>60 mm</td></tr>
              </tbody>
            </table>
            <p className="legende-bagues">
              La plupart des bagues Casa Fátima sont ajustables. Ce guide vous permet simplement d'avoir une idée de votre taille habituelle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}