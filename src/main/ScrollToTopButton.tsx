import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa"; // Assurez-vous d'installer react-icons si ce n'est pas déjà fait.

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Fonction pour basculer la visibilité du bouton
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      // Ajustez la valeur selon vos besoins
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Fonction pour faire défiler vers le haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Ajoute un écouteur d'événements lors du défilement de la fenêtre
    window.addEventListener("scroll", toggleVisibility);

    // Nettoyage de l'écouteur d'événements
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5">
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Retour en haut"
          className="rounded-full bg-amber-200 p-3 shadow-lg transition hover:bg-amber-300"
        >
          <FaArrowUp className="text-2xl text-amber-950" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
