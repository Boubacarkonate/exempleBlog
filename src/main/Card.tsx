import { countries } from "../data/CountryList";

const Card: React.FC = () => {
  return (
    <div className="container mx-auto my-10 px-4">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {countries.map((pays, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 rounded-lg border border-zinc-400 bg-zinc-100 p-4 shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-amber-200 hover:text-amber-950 hover:ring hover:ring-amber-950 hover:ring-offset-1"
          >
            <img
              src={pays.image}
              alt={`${pays.name} flag`}
              className="mb-2 h-32 w-full rounded-t-lg object-cover" // Augmentation de la hauteur pour une meilleure visibilité
            />
            <h3 className="text-center text-lg font-bold">{pays.name}</h3>
            <p className="text-center text-lg text-gray-700">
              {pays.continent}
            </p>
            <p className="text-center leading-tight">{pays.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
