export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string; author?: string };

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: ContentBlock[];
  coverImage: string;
  date: string;
  readTime: number;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "santorini-ile-aux-maisons-blanches",
    title: "Santorin — L'île aux maisons blanches",
    excerpt:
      "Perchée sur les falaises de la caldeira, Santorin vous envoûte dès le premier regard. Voici mon carnet de voyage dans ce joyau de la mer Égée.",
    coverImage:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&q=80",
    date: "12 juin 2025",
    readTime: 6,
    tags: ["Grèce", "Île", "Méditerranée"],
    content: [
      {
        type: "paragraph",
        text: "Arriver à Santorin par la mer, c'est une expérience qui s'imprime à jamais dans la mémoire. Le ferry glisse lentement le long de la caldeira, ces hautes falaises de roche volcanique striées de rouge et de noir, couronnées par les villages blancs d'Oia et de Fira. Dès les premiers instants, on comprend pourquoi cette île grecque est l'une des plus photographiées au monde.",
      },
      {
        type: "heading",
        text: "Oia, le village suspendu",
      },
      {
        type: "paragraph",
        text: "Le village d'Oia, perché à 300 mètres au-dessus de la mer, est le cœur de la carte postale santorinoise. Ses ruelles pavées de marbre blanc, ses maisons aux dômes bleus et ses terrasses fleuries de bougainvillées créent un labyrinthe enchanteur où l'on se perd avec bonheur. Chaque coin de rue offre un tableau différent, une nouvelle perspective sur la mer Égée.",
      },
      {
        type: "quote",
        text: "Il y a des endroits dans le monde qui vous font croire que le paradis existe. Santorin est de ceux-là.",
      },
      {
        type: "heading",
        text: "La gastronomie locale",
      },
      {
        type: "paragraph",
        text: "Au-delà des paysages, Santorin se distingue par sa cuisine exceptionnelle. Les tomates cerises locales, cultivées en plein vent dans la terre volcanique, ont une saveur incomparable. Le fava, une purée de pois cassés jaunes arrosée d'huile d'olive et de câpres, est le plat signature de l'île. Accompagné d'un verre de vin Assyrtiko, le cépage blanc emblématique de Santorin, c'est la Grèce dans toute sa quintessence.",
      },
      {
        type: "paragraph",
        text: "Santorin reste une destination qui dépasse les attentes même les plus élevées. Malgré l'afflux touristique estival, l'île conserve une âme unique, portée par ses habitants chaleureux et ses paysages d'une beauté presque irréelle. Une adresse à inscrire absolument sur votre liste de voyages.",
      },
    ],
  },
  {
    id: 2,
    slug: "tokyo-entre-tradition-et-modernite",
    title: "Tokyo — Entre tradition et modernité",
    excerpt:
      "Ville-monde aux mille contrastes, Tokyo oscille entre temples millénaires et buildings futuristes. Dix jours dans la capitale japonaise ont bouleversé ma vision du voyage.",
    coverImage:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80",
    date: "3 avril 2025",
    readTime: 8,
    tags: ["Japon", "Asie", "Métropole"],
    content: [
      {
        type: "paragraph",
        text: "Tokyo est une ville qui redéfinit l'échelle humaine. Avec ses 37 millions d'habitants dans l'agglomération, c'est la plus grande métropole du monde — et pourtant, on ne s'y sent jamais écrasé. Les Tokyoïtes ont cette capacité extraordinaire d'organiser l'espace urbain avec une précision chirurgicale, faisant de chaque quartier un village dans la ville.",
      },
      {
        type: "heading",
        text: "Asakusa, la mémoire vivante de Edo",
      },
      {
        type: "paragraph",
        text: "Le quartier d'Asakusa est le Tokyo d'avant la modernité. Le temple Senso-ji, fondé au VIIe siècle, accueille chaque jour des milliers de pèlerins et de visiteurs qui foulent la Nakamise-dori, cette allée bordée de boutiques traditionnelles vendant des omiyage et des objets artisanaux. Le contraste est saisissant lorsqu'on aperçoit, au-delà du toit du temple, la silhouette futuriste de la Tokyo Skytree.",
      },
      {
        type: "quote",
        text: "Tokyo, c'est vivre en 2025 et en 1300 simultanément. C'est l'unique ville au monde où le passé et le futur coexistent sans se nier.",
      },
      {
        type: "heading",
        text: "Shibuya et la symphonie humaine",
      },
      {
        type: "paragraph",
        text: "Le carrefour de Shibuya est l'un des spectacles les plus fascinants que j'aie jamais vu. Toutes les 90 secondes, un flot humain impressionnant traverse simultanément dans toutes les directions, en un ballet parfaitement orchestré où personne ne bouscule personne. Ce carrefour est devenu le symbole d'une société où l'organisation collective prime sur l'individualisme.",
      },
      {
        type: "paragraph",
        text: "Tokyo est une ville que l'on ne comprend pas, on la ressent. Elle échappe aux catégories, aux comparaisons, aux résumés. Dix jours n'ont fait qu'amplifier mon envie d'y retourner pour en découvrir de nouveaux pans. C'est l'essence même du voyage : quitter un endroit plus curieux qu'en y arrivant.",
      },
    ],
  },
  {
    id: 3,
    slug: "fjords-norvege-voyage-hors-du-temps",
    title: "Les Fjords de Norvège — Un voyage hors du temps",
    excerpt:
      "Eau d'un vert émeraude, falaises vertigineuses, villages colorés lovés dans les criques. La Norvège des fjords est un poème visuel que les mots peinent à retranscrire.",
    coverImage:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&q=80",
    date: "18 juillet 2024",
    readTime: 7,
    tags: ["Norvège", "Nature", "Europe du Nord"],
    content: [
      {
        type: "paragraph",
        text: "Il existe des paysages qui vous rendent muet. Les fjords norvégiens en font partie. Naviguant à bord d'un petit ferry depuis Bergen vers le Sognefjord — le plus long et le plus profond fjord du monde — j'ai passé des heures sur le pont, incapable de quitter des yeux ces parois rocheuses qui plongent directement dans une eau d'un vert cristallin.",
      },
      {
        type: "heading",
        text: "Le Sognefjord, roi des fjords",
      },
      {
        type: "paragraph",
        text: "Le Sognefjord s'étend sur 204 kilomètres à l'intérieur des terres, avec des parois atteignant parfois 1400 mètres de hauteur. Ses bras secondaires, comme le Nærøyfjord classé au patrimoine mondial de l'UNESCO, offrent des panoramas encore plus intimes et grandioses. Naviguer dans ces eaux, c'est comprendre ce que signifie \"l'infinie variété du monde naturel\".",
      },
      {
        type: "quote",
        text: "La Norvège vous apprend l'humilité. Face aux fjords, l'homme mesure sa juste place dans l'ordre des choses.",
      },
      {
        type: "heading",
        text: "Flåm, la porte des fjords",
      },
      {
        type: "paragraph",
        text: "Le village de Flåm, niché au fond du Sognefjord, est le point de départ du Flåmsbana, l'une des lignes de chemin de fer les plus spectaculaires du monde. En 20 kilomètres, le train s'élève de 867 mètres, traversant des tunnels creusés dans la montagne, longeant des cascades bouillonnantes et des vallées couvertes de neige même en été. Un voyage dans le voyage.",
      },
      {
        type: "paragraph",
        text: "La Norvège est un pays qui vous transforme. Loin des foules et de l'agitation des grandes villes, elle vous reconnecte à l'essentiel : la beauté brute de la nature, le silence, et ce sentiment rare d'être infiniment petit face à la grandeur du monde.",
      },
    ],
  },
  {
    id: 4,
    slug: "marrakech-couleurs-de-la-medina",
    title: "Marrakech — Les couleurs de la Médina",
    excerpt:
      "Épices, henné, muezzins au loin et ruelles sinueuses : Marrakech est une explosion sensorielle qui vous happe dès la sortie de l'aéroport. Mon immersion dans la ville rouge.",
    coverImage:
      "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1200&q=80",
    date: "5 novembre 2024",
    readTime: 6,
    tags: ["Maroc", "Médina", "Afrique"],
    content: [
      {
        type: "paragraph",
        text: "Marrakech ne s'apprivoise pas — elle vous saisit. Dès la sortie de l'aéroport Menara, l'air chaud et parfumé de la ville vous enveloppe, présage d'une expérience sensorielle totale. La ville rouge, ainsi surnommée pour la couleur de ses remparts en pisé, est l'une des destinations les plus envoûtantes du continent africain.",
      },
      {
        type: "heading",
        text: "La Jemaa el-Fna, théâtre à ciel ouvert",
      },
      {
        type: "paragraph",
        text: "La place Jemaa el-Fna est le cœur battant de Marrakech. Le matin, elle accueille les vendeurs de jus d'orange fraîchement pressé et les charmeurs de serpents. Le soir, elle se transforme en un immense restaurant à ciel ouvert où s'alignent des dizaines d'étals fumants proposant harira, tajines, kefta et brochettes. La fumée des braseros, les appels des marchands et les lumières des restaurants créent une atmosphère unique au monde, classée par l'UNESCO au Patrimoine Immatériel de l'Humanité.",
      },
      {
        type: "quote",
        text: "Dans les souks de Marrakech, chaque pas est une découverte. Perdez-vous — c'est la meilleure chose qui puisse vous arriver.",
      },
      {
        type: "heading",
        text: "Les souks et l'art de la négociation",
      },
      {
        type: "paragraph",
        text: "S'aventurer dans les souks de la médina, c'est plonger dans un labyrinthe coloré et odorant où chaque ruelle est spécialisée : les tanneurs dans le quartier des Chouara, les tisserands dans le souk des étoffes, les orfèvres dans le souk des bijoutiers. Négocier y est un art et presque une obligation sociale. Un sourire, un thé à la menthe offert, une discussion sur les mérites respectifs des deux propositions : le prix final est souvent anecdotique, l'expérience, elle, est inoubliable.",
      },
      {
        type: "paragraph",
        text: "Marrakech est une ville qui ne laisse personne indifférent. Certains l'adorent, d'autres en sont dépassés — mais nul ne la quitte sans avoir été profondément touché. C'est la magie de cette cité millénaire : elle vous prend par la main et vous emmène dans un autre siècle, tout en restant bien vivante et contemporaine.",
      },
    ],
  },
];
