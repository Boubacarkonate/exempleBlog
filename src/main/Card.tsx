import { FiUsers } from "react-icons/fi";

interface Country {
  cca3: string;
  name: { common: string };
  region: string;
  population: number;
  flags: { png: string };
  fact: string;
  photo: string;
}

const countries: Country[] = [
  {
    cca3: "GRC",
    name: { common: "Grèce" },
    region: "Europe",
    population: 10718565,
    flags: { png: "https://flagcdn.com/w320/gr.png" },
    fact: "La Grèce possède plus de 6 000 îles, dont 227 sont habitées.",
    photo:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=700&auto=format&fit=crop&q=75",
  },
  {
    cca3: "JPN",
    name: { common: "Japon" },
    region: "Asie",
    population: 125681593,
    flags: { png: "https://flagcdn.com/w320/jp.png" },
    fact: "Le Japon compte plus de 6 800 îles et 111 volcans actifs.",
    photo:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=700&auto=format&fit=crop&q=75",
  },
  {
    cca3: "NOR",
    name: { common: "Norvège" },
    region: "Europe",
    population: 5379475,
    flags: { png: "https://flagcdn.com/w320/no.png" },
    fact: "La Norvège possède le plus long fjord du monde : le Sognefjord (204 km).",
    photo:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=700&auto=format&fit=crop&q=75",
  },
  {
    cca3: "MAR",
    name: { common: "Maroc" },
    region: "Afrique",
    population: 36910558,
    flags: { png: "https://flagcdn.com/w320/ma.png" },
    fact: "Fès el-Bali est la plus grande médina du monde classée à l'UNESCO.",
    photo:
      "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=700&auto=format&fit=crop&q=75",
  },
  {
    cca3: "ITA",
    name: { common: "Italie" },
    region: "Europe",
    population: 59554023,
    flags: { png: "https://flagcdn.com/w320/it.png" },
    fact: "L'Italie abrite 58 sites classés au patrimoine mondial de l'UNESCO.",
    photo:
      "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=700&auto=format&fit=crop&q=75",
  },
  {
    cca3: "BRA",
    name: { common: "Brésil" },
    region: "Amérique du Sud",
    population: 215313498,
    flags: { png: "https://flagcdn.com/w320/br.png" },
    fact: "La forêt amazonienne couvre 60 % du territoire brésilien.",
    photo:
      "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=700&auto=format&fit=crop&q=75",
  },
];

const Card = () => (
  <div id="card" className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {countries.map((country) => (
      <div
        key={country.cca3}
        className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-xl"
      >
        {/* Photo de fond */}
        <img
          src={country.photo}
          alt={country.name.common}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient permanent bas */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10" />

        {/* Overlay hover */}
        <div className="absolute inset-0 bg-amber-950/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Drapeau + région — haut gauche */}
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <span className="rounded bg-white/15 px-2 py-0.5 text-xs font-semibold uppercase tracking-widest text-white/90 backdrop-blur-sm">
            {country.region}
          </span>
        </div>

        {/* Drapeau — haut droite */}
        <div className="absolute right-3 top-3 overflow-hidden rounded shadow-lg ring-1 ring-white/20">
          <img
            src={country.flags.png}
            alt={`Drapeau ${country.name.common}`}
            className="h-5 w-8 object-cover"
          />
        </div>

        {/* Contenu bas */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="text-xl font-bold text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.8),0_1px_3px_rgba(0,0,0,0.9)]">
            {country.name.common}
          </h3>

          {/* Infos supplémentaires au hover */}
          <div className="mt-2 translate-y-3 space-y-1.5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <p className="flex items-center gap-1.5 text-xs text-amber-200/80">
              <FiUsers size={12} />
              {country.population.toLocaleString("fr-FR")} habitants
            </p>
            <p className="text-sm leading-snug text-amber-50/90">
              {country.fact}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Card;
