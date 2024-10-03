import { countries } from "../data/CountryList";

const Card: React.FC = () => {
  return (
    <div className="my-10  grid grid-cols-3 gap-10">
      {countries.map((pays, index) => (
        <div
          key={index}
          className="hover flex max-w-sm flex-col gap-4 rounded-md border border-zinc-400 bg-zinc-100 p-4 shadow-lg ring-amber-950 ring-offset-1 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-amber-200 hover:text-amber-950 hover:ring"
        >
          <img
            src={pays.image}
            alt={`${pays.name} flag`}
            className="mb-2 h-24 w-full object-cover"
          />
          <h3 className="text-lg font-bold hover:ring-gray-50">{pays.name}</h3>
          <p className="text-xl hover:ring-gray-50">{pays.continent}</p>{" "}
          <p className="leading-tight">{pays.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
