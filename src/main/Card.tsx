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
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        const result = await response.json();
        setData(result.slice(0, 6));
      } catch (error: any) {
        setError(error.message);
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
    <div className="container mx-auto my-10 px-4">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((country) => (
          <div
            key={country.cca3}
            className="flex flex-col gap-4 rounded-lg border border-amber-200 bg-amber-50 p-4 shadow-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-amber-100 hover:text-amber-950 hover:ring hover:ring-amber-950 hover:ring-offset-1"
          >
            <img
              src={country.flags.png}
              alt={`Drapeau de ${country.name.common}`}
              className="mb-2 h-32 w-full rounded-t-lg object-cover"
            />
            <h3 className="text-center text-lg font-bold text-amber-950">
              {country.name.common}
            </h3>
            <p className="text-center text-lg text-amber-950">
              {country.region}
            </p>
            <p className="text-center leading-tight text-amber-950">
              Population : {country.population.toLocaleString()}
            </p>
            <p>
              <strong className="text-amber-950">Fait intéressant : </strong>
              <span className="text-amber-950">
                Découvrez les merveilles de {country.name.common} lors de votre
                prochain voyage!
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
