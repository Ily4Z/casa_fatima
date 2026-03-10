import './Accueil.css';

export default function Accueil() {
  return (
    <div className="accueil-container">
      
      {/* 1. Bannière Principale (Hero) */}
      <section className="hero-banner">
        {/* L'image de fond sera gérée en CSS */}
        <div className="hero-content">
          <h1 className="slogan">Là où les souvenirs deviennent des bijoux.</h1>
          <div className="hero-pagination">
            <span className="dot actif"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </section>

      {/* 2. Section Histoire / Intro */}
      <section className="intro-section">
        <div className="ornement-azulejo">
          {/* On mettra la vraie image des 3 petits losanges ici */}
          <span>✧ ❁ ✧</span> 
        </div>
        <p className="texte-histoire">
          Des bijoux de famille inspirés par nos racines. Pensées par les sœurs Madeira 
          en hommage à notre grand-mère Fátima, nos créations en acier inoxydable 
          se portent comme une seconde peau : un lien précieux entre vos souvenirs, 
          vos traditions et les moments dorés de la vie.
        </p>
        <a href="/histoire" className="lien-decouvrir">Découvrir la marque</a>
      </section>

      {/* 3. Carrousel des Catégories */}
      <section className="categories-carousel">
        {/* Flèche Gauche */}
        <button className="nav-arrow left-arrow">{'<'}</button>

        <div className="categories-wrapper">
          {/* Les catégories de la maquette */}
          <div className="categorie-card">
            <div className="categorie-image-placeholder bg-bagues">Img Bagues</div>
            <h3 className="categorie-titre">Bagues</h3>
          </div>

          <div className="categorie-card main-card">
            <div className="categorie-image-placeholder bg-boucles">Img Boucles</div>
            <h3 className="categorie-titre">Boucles d'oreilles</h3>
          </div>

          <div className="categorie-card">
            <div className="categorie-image-placeholder bg-bracelets">Img Bracelets</div>
            <h3 className="categorie-titre">Bracelets</h3>
          </div>
        </div>

        {/* Flèche Droite */}
        <button className="nav-arrow right-arrow">{'>'}</button>
      </section>

    </div>
  );
}