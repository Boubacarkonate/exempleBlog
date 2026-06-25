import { Link } from "react-router-dom";
import { FiCompass } from "react-icons/fi";
import SEO from "../components/SEO";

const NotFound = () => (
  <main className="flex min-h-screen flex-col items-center justify-center px-6 pb-0 pt-24 text-center">
    <SEO
      title="Page introuvable"
      description="Cette page n'existe pas sur The Travel Blog. Revenez à l'accueil ou explorez le carnet de voyage."
    />
    <div className="mb-6 animate-spin-slow text-amber-300 dark:text-amber-500">
      <FiCompass size={80} strokeWidth={1} />
    </div>
    <p className="mb-2 text-sm uppercase tracking-widest text-amber-500 dark:text-amber-400">
      Erreur 404
    </p>
    <h1 className="mb-4 text-4xl font-bold text-amber-950 dark:text-amber-100 md:text-5xl">
      Destination introuvable
    </h1>
    <p className="mb-10 max-w-md text-amber-700 dark:text-amber-300">
      Il semblerait que cette page n'existe pas sur notre carte. Peut-être
      avez-vous pris un mauvais tournant quelque part ?
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      <Link
        to="/"
        className="rounded-full bg-amber-950 px-6 py-3 font-semibold text-amber-50 transition-colors hover:bg-amber-700 dark:bg-amber-400 dark:text-stone-900 dark:hover:bg-amber-300"
      >
        Retour à l'accueil
      </Link>
      <Link
        to="/blog"
        className="rounded-full border border-amber-950 px-6 py-3 font-semibold text-amber-950 transition-colors hover:bg-amber-100 dark:border-amber-400 dark:text-amber-100 dark:hover:bg-stone-700"
      >
        Voir le blog
      </Link>
    </div>
  </main>
);

export default NotFound;
