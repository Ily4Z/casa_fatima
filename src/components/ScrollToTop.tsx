import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation(); // Détecte l'URL actuelle

  useEffect(() => {
    // À chaque fois que l'URL change, on remonte à 0 pixels (tout en haut)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Ce composant est totalement invisible sur l'écran !
}