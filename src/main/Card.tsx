interface Country {
  cca3: string;
  name: { common: string };
  region: string;
  population: number;
  flags: { png: string };
  fact: string;
}

const countries: Country[] = [
  {
    cca3: "GRC",
    name: { common: "Grèce" },
    region: "Europe",
    population: 10718565,
    flags: { png: "https://flagcdn.com/w320/gr.png" },
    fact: "La Grèce possède plus de 6 000 îles, dont 227 sont habitées.",
  },
  {
    cca3: "JPN",
    name: { common: "Japon" },
    region: "Asie",
    population: 125681593,
    flags: { png: "https://flagcdn.com/w320/jp.png" },
    fact: "Le Japon compte plus de 6 800 îles et 111 volcans actifs.",
  },
  {
    cca3: "NOR",
    name: { common: "Norvège" },
    region: "Europe",
    population: 5379475,
    flags: { png: "https://flagcdn.com/w320/no.png" },
    fact: "La Norvège possède le plus long fjord du monde : le Sognefjord (204 km).",
  },
  {
    cca3: "MAR",
    name: { common: "Maroc" },
    region: "Afrique",
    population: 36910558,
    flags: { png: "https://flagcdn.com/w320/ma.png" },
    fact: "Fès el-Bali est la plus grande médina du monde classée à l'UNESCO.",
  },
  {
    cca3: "ITA",
    name: { common: "Italie" },
    region: "Europe",
    population: 59554023,
    flags: { png: "https://flagcdn.com/w320/it.png" },
    fact: "L'Italie abrite 58 sites classés au patrimoine mondial de l'UNESCO.",
  },
  {
    cca3: "BRA",
    name: { common: "Brésil" },
    region: "Amérique du Sud",
    population: 215313498,
    flags: { png: "https://flagcdn.com/w320/br.png" },
    fact: "La forêt amazonienne couvre 60 % du territoire brésilien.",
  },
];

const Card: React.FC = () => (
  <div id="card">
    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
      {countries.map((country) => (
        <div
          className="group mx-auto flex w-full max-w-xs flex-col gap-4 bg-amber-50 p-4 dark:bg-stone-900 [perspective:1000] sm:w-72 sm:max-w-none"
          key={country.cca3}
        >
          <div className="relative h-64 w-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] sm:h-80">
            <div className="absolute inset-0 flex items-center justify-center rounded-lg border border-amber-200 bg-amber-50 dark:border-stone-600 dark:bg-stone-800">
              <img
                src={country.flags.png}
                alt={`Drapeau de ${country.name.common}`}
                loading="lazy"
                className="h-24 w-36 object-contain sm:h-36 sm:w-56"
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg bg-amber-200 px-6 py-8 text-center dark:bg-stone-700 [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <h3 className="mb-2 text-lg font-bold text-amber-950 dark:text-amber-100">
                {country.name.common}
              </h3>
              <p className="mb-2 text-amber-950 dark:text-amber-200">
                {country.region}
              </p>
              <p className="mb-3 leading-tight text-amber-950 dark:text-amber-200">
                Population : {country.population.toLocaleString("fr-FR")}
              </p>
              <p className="text-sm text-amber-950 dark:text-amber-200">
                {country.fact}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Card;
