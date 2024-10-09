import { useEffect, useState } from "react";

interface Country {
  cca3: string;
  name: {
    common: string;
  };
  region: string;
  population: number;
  flags: {
    png: string;
  };
}

const Card: React.FC = () => {
  const [data, setData] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        const result = await response.json();
        setData(result.slice(0, 6));
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Une erreur inconnue s'est produite",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return <span className="loading loading-spinner text-success"></span>;
  if (error) return <p>Erreur: {error}</p>;

  return (
    <div id="card">
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((country) => (
          <div
            className="group mx-auto flex w-full max-w-xs flex-col gap-4 bg-amber-50 p-4 [perspective:1000] sm:w-72 sm:max-w-none"
            key={country.cca3}
          >
            <div className="relative h-64 w-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] sm:h-80">
              {/* Recto - Flag Side */}
              <div className="absolute inset-0 flex items-center justify-center rounded-lg border border-amber-200 bg-amber-50">
                <img
                  src={country.flags.png}
                  alt={`Drapeau de ${country.name.common}`}
                  className="h-24 w-36 object-contain sm:h-36 sm:w-56" // Taille du drapeau responsive
                />
              </div>

              {/* Verso - Country Info */}
              <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg bg-amber-200 px-6 py-8 text-center text-lg text-slate-200 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <h3 className="mb-2 text-lg font-bold text-amber-950">
                  {country.name.common}
                </h3>
                <p className="mb-2 text-lg text-amber-950">{country.region}</p>
                <p className="mb-2 leading-tight text-amber-950">
                  Population : {country.population.toLocaleString()}
                </p>
                <p className="text-amber-950">
                  <strong>Fait intéressant: </strong>
                  Découvrez les merveilles de {country.name.common} lors de
                  votre prochain voyage!
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
