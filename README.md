# The Travel Blog

Blog de voyage personnel construit avec React, TypeScript et Tailwind CSS. Récits authentiques, galerie photo interactive, système de commentaires et likes en temps réel.

## Fonctionnalités

- **Bilingue FR / EN** — bascule instantanée via react-i18next, contenu des articles inclus
- **Mode sombre** — thème clair/sombre persisté en localStorage, sans flash au chargement
- **Commentaires & Likes** — écriture et lecture en temps réel via Firebase Firestore
- **Parallax hero** — effet de profondeur sur la page d'accueil via scroll natif
- **Galerie photo** — filtre par catégorie, lightbox, navigation clavier
- **Blog** — vue grille / liste, recherche, filtre par tag, skeleton loaders
- **PWA** — installable, mode hors-ligne via service worker (vite-plugin-pwa)
- **SEO** — balises meta et Open Graph par page via react-helmet-async
- **Carte interactive** — pays visités mis en valeur via react-simple-maps
- **Formulaire de contact** — envoi d'email via EmailJS

## Stack technique

| Catégorie | Technologie |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite |
| Style | Tailwind CSS + DaisyUI |
| Routing | React Router v6 |
| Animations | Framer Motion |
| i18n | react-i18next |
| Base de données | Firebase Firestore |
| Email | EmailJS |
| PWA | vite-plugin-pwa |
| SEO | react-helmet-async |

## Installation

```bash
# Cloner le dépôt
git clone https://github.com/Boubacarkonate/exempleBlog.git
cd exempleBlog

# Installer les dépendances
npm install

# Démarrer en développement
npm run dev
```

## Variables d'environnement

Créez un fichier `.env` à la racine avec les clés suivantes :

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> La configuration Firebase est incluse directement dans `src/lib/firebase.ts`. La sécurité repose sur les règles Firestore, pas sur le secret des clés client.

## Scripts disponibles

```bash
npm run dev        # Serveur de développement
npm run build      # Build de production
npm run preview    # Prévisualiser le build
npm run lint       # Analyse ESLint
npm run format     # Formatage Prettier
```

## Structure du projet

```
src/
├── blog/          # Pages blog (liste + article)
├── components/    # Composants réutilisables (Comments, LikeButton, SEO…)
├── data/          # Données statiques (articles bilingues)
├── footer/        # Composant footer
├── header/        # Navbar
├── hooks/         # Hooks personnalisés (useBlogPosts)
├── i18n/          # Fichiers de traduction FR / EN
├── lib/           # Initialisation Firebase
├── main/          # Sections de la page d'accueil
├── pages/         # Pages About, NotFound
└── types/         # Déclarations TypeScript
```

## Déploiement

Le projet est déployé sur [Vercel](https://vercel.com). Chaque push sur `main` déclenche un déploiement automatique.
