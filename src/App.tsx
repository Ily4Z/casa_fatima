import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Import de la navigation
import Navigation from './components/Navigation';

// Import de toutes tes pages
import Produit from './pages/Produit';
import Accueil from './pages/Accueil';
import Boutique from './pages/Boutique';
import Histoire from './pages/Histoire';
import Personnalisation from './pages/Personnalisation';
import Contact from './pages/Contact';
import Panier from './pages/Panier';
import Authentification from './pages/Authentification';
import Footer from './components/Footer';
import MentionsLegales from './pages/MentionsLegales';
import Cgv from './pages/Cgv';
import GuideTailles from './pages/GuideTailles.tsx';
import Fidelite from './pages/Fidelite.tsx';
import ScrollToTop from './components/ScrollToTop';

// Import des styles globaux
import './assets/global.css'; 

export default function App() {
  return (
    <Router>
      {/* Notre ascenseur magique qui remonte en haut à chaque clic */}
      <ScrollToTop />
      <div className="app-container">
        {/* La navigation reste toujours visible en haut */}
        <Navigation />

        {/* Le contenu qui change en fonction du lien cliqué */}
        <main>
          <Routes>
            <Route path="/" element={<Accueil />} />
            {/* L'étoile permet d'attraper /boutique, /boutique/bagues, etc. */}
            <Route path="/produit/:id" element={<Produit />} />
            <Route path="/boutique" element={<Boutique />} /> 
            <Route path="/boutique/:categorie" element={<Boutique />} />
            <Route path="/personnalisation" element={<Personnalisation />} />
            <Route path="/histoire" element={<Histoire />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/panier" element={<Panier />} />
            <Route path="/authentification" element={<Authentification />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/cgv" element={<Cgv />} />
            <Route path="/guide-des-tailles" element={<GuideTailles />} />
            <Route path="/programme-fidelite" element={<Fidelite />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
}