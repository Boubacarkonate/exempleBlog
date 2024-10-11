import { useState } from "react";

const Gallery = () => {
  // État pour l'image sélectionnée et l'ouverture de la modal
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fonction pour ouvrir la modal
  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc); // Définir l'image sélectionnée
    setIsModalOpen(true); // Ouvrir la modal
  };

  // Fonction pour fermer la modal
  const closeModal = () => {
    setIsModalOpen(false); // Fermer la modal
  };

  return (
    <div className="p-5 md:p-10">
      {/* Galerie d'images */}
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-4 lg:gap-8 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
        <img
          src="https://images.unsplash.com/photo-1698701730887-edce157aa73d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZveWFnZXN8ZW58MHx8MHx8fDA%3D"
          alt="Image 1"
          className="skew-y-3 cursor-zoom-in transition duration-500 hover:translate-x-1 hover:rotate-2 hover:scale-110 hover:brightness-110"
          onClick={() =>
            openModal(
              "https://images.unsplash.com/photo-1698701730887-edce157aa73d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZveWFnZXN8ZW58MHx8MHx8fDA%3D",
            )
          }
        />
        <img
          src="https://images.unsplash.com/photo-1632255395307-6bae65766391?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZveWFnZXN8ZW58MHx8MHx8fDA%3D"
          alt="Image 2"
          className="skew-x-3 cursor-zoom-in transition duration-500 hover:translate-y-1 hover:rotate-1 hover:scale-110 hover:contrast-125"
          onClick={() =>
            openModal(
              "https://images.unsplash.com/photo-1632255395307-6bae65766391?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZveWFnZXN8ZW58MHx8MHx8fDA%3D",
            )
          }
        />
        <img
          src="https://images.unsplash.com/photo-1724371304347-c6d6633e09c8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHZveWFnZXN8ZW58MHx8MHx8fDA%3D"
          alt="Image 3"
          className="skew-y-6 cursor-zoom-in transition duration-500 hover:translate-x-2 hover:rotate-3 hover:scale-105 hover:saturate-150"
          onClick={() =>
            openModal(
              "https://images.unsplash.com/photo-1724371304347-c6d6633e09c8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHZveWFnZXN8ZW58MHx8MHx8fDA%3D",
            )
          }
        />
        <img
          src="https://images.unsplash.com/photo-1657739797829-94821bca107f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dm95YWdlc3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Image 4"
          className="skew-x-6 cursor-zoom-in transition duration-500 hover:translate-y-1 hover:rotate-2 hover:scale-110 hover:hue-rotate-15"
          onClick={() =>
            openModal(
              "https://images.unsplash.com/photo-1657739797829-94821bca107f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dm95YWdlc3xlbnwwfHwwfHx8MA%3D%3D",
            )
          }
        />
        <img
          src="https://images.unsplash.com/photo-1547672456-77fb521d4ba2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Image 5"
          className="skew-y-3 cursor-zoom-in transition duration-500 hover:translate-x-2 hover:rotate-3 hover:scale-110 hover:brightness-125"
          onClick={() =>
            openModal(
              "https://images.unsplash.com/photo-1547672456-77fb521d4ba2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            )
          }
        />
        <img
          src="https://plus.unsplash.com/premium_photo-1664303291529-8867054222f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHZveWFnZXN8ZW58MHx8MHx8fDA%3D"
          alt="Image 6"
          className="-skew-x-2 cursor-zoom-in transition duration-500 hover:translate-y-1 hover:rotate-3 hover:scale-110 hover:saturate-150"
          onClick={() =>
            openModal(
              "https://plus.unsplash.com/premium_photo-1664303291529-8867054222f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHZveWFnZXN8ZW58MHx8MHx8fDA%3D",
            )
          }
        />
        <img
          src="https://images.unsplash.com/photo-1657739834200-603c86eb4001?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHZveWFnZXN8ZW58MHx8MHx8fDA%3D"
          alt="Image 7"
          className="skew-y-6 cursor-zoom-in transition duration-500 hover:translate-x-3 hover:rotate-3 hover:scale-105 hover:contrast-150"
          onClick={() =>
            openModal(
              "https://images.unsplash.com/photo-1657739834200-603c86eb4001?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHZveWFnZXN8ZW58MHx8MHx8fDA%3D",
            )
          }
        />
        <img
          src="https://images.unsplash.com/photo-1563921742125-de69749122fb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHZveWFnZXN8ZW58MHx8MHx8fDA%3D"
          alt="Image 8"
          className="skew-x-3 cursor-zoom-in transition duration-500 hover:translate-y-2 hover:rotate-2 hover:scale-105 hover:brightness-110"
          onClick={() =>
            openModal(
              "https://images.unsplash.com/photo-1563921742125-de69749122fb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHZveWFnZXN8ZW58MHx8MHx8fDA%3D",
            )
          }
        />
        {/* Nouvelle image 9 */}
        <img
          src="https://plus.unsplash.com/premium_photo-1680195157217-6aafaae9c850?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHZveWFnZXN8ZW58MHx8MHx8fDA%3D"
          alt="Image 9"
          className="skew-y-6 cursor-zoom-in transition duration-500 hover:translate-x-2 hover:rotate-3 hover:scale-105 hover:saturate-150"
          onClick={() =>
            openModal(
              "https://plus.unsplash.com/premium_photo-1680195157217-6aafaae9c850?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHZveWFnZXN8ZW58MHx8MHx8fDA%3D",
            )
          }
        />
        {/* Nouvelle image 10 */}
        <img
          src="https://images.unsplash.com/photo-1604430466284-e3a33823187e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHZveWFnZXN8ZW58MHx8MHx8fDA%3D"
          alt="Image 10"
          className="skew-x-2 cursor-zoom-in transition duration-500 hover:translate-y-2 hover:rotate-3 hover:scale-110 hover:hue-rotate-15"
          onClick={() =>
            openModal(
              "https://images.unsplash.com/photo-1604430466284-e3a33823187e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHZveWFnZXN8ZW58MHx8MHx8fDA%3D",
            )
          }
        />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 transition-opacity duration-300 ease-in-out">
          <div className="relative scale-100 transition-all duration-500 ease-out">
            {/* Image en grand */}
            <img
              src={selectedImage}
              alt="Selected"
              className="max-h-screen max-w-full object-contain"
            />
            {/* Bouton pour fermer la modal */}
            <button
              className="absolute right-2 top-2 text-3xl font-bold text-red-600"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
