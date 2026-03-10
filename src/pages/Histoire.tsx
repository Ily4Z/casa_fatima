import './Histoire.css';

export default function Histoire() {
  // Définition des chemins vers tes images (puisqu'elles sont dans /public/images/)
  const imageMotif = "/casa_fatima/images/bg_motif_bleu.png";
  const photoSisters1 = "/casa_fatima/images/photo_sisters_1.png";
  const photoSisters2 = "/casa_fatima/images/photo_sisters_2.png";
  const photoPortugal = "/casa_fatima/images/photo_portugal.png";

  return (
    // 1. Le conteneur principal de la page qui gère les grandes bordures azulejos laterales
    <div className="histoire-page-global-wrapper">
      
      {/* 2. Le bloc central texturé beige/papier où tout le contenu est posé */}
      <div className="histoire-central-content-block">
        
        {/* Le titre élégant en haut à gauche */}
        <h1 className="histoire-main-title">Notre Histoire</h1>
        
        {/* 3. La grille principale à deux colonnes */}
        <div className="histoire-main-grid-layout">
          
          {/* --- COLONNE GAUCHE (Texte et petites photos) --- */}
          <div className="histoire-left-column">
            
            {/* Premier paragraphe */}
            <p className="histoire-description-text">
              Le Portugal, c’est bien plus qu’un pays pour nous. C’est le bleu profond de la mer,
              le sable chaud sous nos pieds et ce rose particulier sur nos joues après une journée de soleil.
              Avec ma soeur Maëva, on a grandi bercées par ces paysages et par les histoires de notre famille.
            </p>
            
            {/* 4. La section spéciale des photos des soeurs avec les petits motifs internes */}
            <div className="sisters-photos-row">
              {/* Le petit morceau de motif azulejo à gauche */}
              <img src={imageMotif} alt="motif décoratif azulejo" className="inner-azulejo-slice" />
              
              {/* Les deux photos des soeurs */}
              <img src={photoSisters1} alt="Les soeurs Madeira - photo 1" className="sister-portrait" />
              <img src={photoSisters2} alt="Les soeurs Madeira - photo 2" className="sister-portrait" />
              
              {/* Le petit morceau de motif azulejo à droite */}
              <img src={imageMotif} alt="motif décoratif azulejo" className="inner-azulejo-slice" />
            </div>
            
            {/* Deuxième paragraphe */}
            <p className="histoire-description-text">
              Casa Fátima est née de ce besoin : garder nos racines vivantes, peu importe où nous sommes.
              Chaque bijou que nous imaginons est un souvenir, un hommage à notre culture et à ce lien qui nous unit,
              ma soeur et moi, même quand la distance nous sépare.
            </p>
          </div>
          
          {/* --- COLONNE DROITE (La grande photo du Portugal) --- */}
          <div className="histoire-right-column">
            <img 
              src={photoPortugal} 
              alt="Rue typique du Portugal avec arche" 
              className="main-portugal-photo" 
            />
          </div>
          
        </div> {/* Fin de la grille */}
        
      </div> {/* Fin du bloc central */}
      
    </div>
  );
}