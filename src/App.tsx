import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import de la navigation
import Navigation from './components/Navigation';

// Import de toutes tes pages
import Accueil from './pages/Accueil';
import Boutique from './pages/Boutique';
import Histoire from './pages/Histoire';
import Personnalisation from './pages/Personnalisation';
import Contact from './pages/Contact';
import Panier from './pages/Panier';
import Authentification from './pages/Authentification';

// Import des styles globaux
import './assets/global.css'; 

export default function App() {
  return (
    <Router>
      <div className="app-container">
        {/* La navigation reste toujours visible en haut */}
        <Navigation />

        {/* Le contenu qui change en fonction du lien cliqué */}
        <main>
          <Routes>
            <Route path="/" element={<Accueil />} />
            {/* L'étoile permet d'attraper /boutique, /boutique/bagues, etc. */}
            <Route path="/boutique" element={<Boutique />} /> 
            <Route path="/boutique/:categorie" element={<Boutique />} />
            <Route path="/personnalisation" element={<Personnalisation />} />
            <Route path="/histoire" element={<Histoire />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/panier" element={<Panier />} />
            <Route path="/authentification" element={<Authentification />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}