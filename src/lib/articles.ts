export type Article = {
  slug: string;
  title: string;
  description: string;
  readingTime: string;
  category: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "comment-conserver-films-super-8",
    title: "Comment conserver ses films Super 8 sur le long terme ?",
    description: "Température, humidité, boîtes, manipulation : le guide complet pour préserver vos bobines Super 8 et 8 mm pendant des décennies.",
    readingTime: "6 min",
    category: "Conservation",
    intro: "Une bobine Super 8 est une petite merveille de chimie fragile. Bien conservée, elle traverse les décennies. Mal stockée, elle peut se dégrader en quelques années. Voici les règles simples qui font toute la différence.",
    sections: [
      {
        heading: "Une pièce fraîche, sèche et stable",
        body: [
          "L'ennemi numéro un du celluloïd est l'humidité combinée à la chaleur. Visez une température entre 12 et 18 °C et une humidité relative autour de 40 %.",
          "Évitez à tout prix les greniers (canicule l'été) et les caves (humidité). Un placard intérieur, dans une pièce chauffée modérément, est idéal.",
        ],
      },
      {
        heading: "Choisir les bonnes boîtes",
        body: [
          "Remplacez les vieilles boîtes métalliques qui rouillent par des boîtes plastiques neutres (polypropylène), certifiées sans acide.",
          "Étiquetez chaque bobine : date supposée, lieu, personnes présentes. Ces informations valent de l'or au moment de la numérisation.",
        ],
      },
      {
        heading: "Manipuler avec précaution",
        body: [
          "Avec des mains parfaitement propres. Le gras des doigts marque le film et attire la poussière.",
          "Ne rembobinez jamais un film sec ou cassant sans l'avoir inspecté d'abord. Un film abîmé mérite un passage chez un professionnel.",
        ],
      },
      {
        heading: "Quand faut-il numériser ?",
        body: [
          "Dès qu'une bobine montre des signes de syndrome du vinaigre (odeur acide), de moisissures ou de raideur, il est urgent de la faire numériser. Une fois numérisées en haute résolution, vos images sont préservées à jamais.",
        ],
      },
    ],
  },
  {
    slug: "difference-super-8-8mm",
    title: "Super 8 ou 8 mm : quelle différence, comment les reconnaître ?",
    description: "Format, perforations, qualité d'image : tout ce qu'il faut savoir pour identifier vos bobines familiales avant numérisation.",
    readingTime: "5 min",
    category: "Formats",
    intro: "Vous avez retrouvé une pile de bobines dans un carton et vous ne savez pas ce que c'est. Rassurez-vous : les distinguer est plus simple qu'il n'y paraît.",
    sections: [
      {
        heading: "Le 8 mm standard (ou « Regular 8 »)",
        body: [
          "Commercialisé à partir de 1932, le 8 mm standard était le format grand public de l'après-guerre. Les perforations sont grandes, l'image occupe une petite portion du film.",
          "Il se trouve généralement sur des petites bobines métalliques.",
        ],
      },
      {
        heading: "Le Super 8",
        body: [
          "Lancé par Kodak en 1965, le Super 8 offre des perforations plus petites, ce qui laisse plus de place à l'image : environ 50 % plus grande. Résultat : une définition sensiblement meilleure.",
        ],
      },
      {
        heading: "Comment les identifier en un coup d'œil",
        body: [
          "Perforations grosses et carrées : 8 mm standard. Perforations petites et rectangulaires : Super 8. En cas de doute, envoyez-nous une photo : nous vous confirmons le format en quelques minutes.",
        ],
      },
    ],
  },
  {
    slug: "pourquoi-numeriser-ses-bobines",
    title: "Pourquoi numériser ses bobines Super 8 dès maintenant ?",
    description: "Vieillissement chimique, projecteurs devenus rares, disparition des ateliers : les vraies raisons d'agir sans attendre.",
    readingTime: "4 min",
    category: "Préservation",
    intro: "« On le fera un jour. » Sauf que ce jour-là, la bobine est parfois trop fragile pour être passée. Voici pourquoi le bon moment, c'est maintenant.",
    sections: [
      {
        heading: "Le celluloïd vieillit — silencieusement",
        body: [
          "Les films Super 8 subissent un lent processus de dégradation chimique appelé « syndrome du vinaigre ». Une fois enclenché, il est irréversible et peut détruire une bobine en quelques années.",
        ],
      },
      {
        heading: "Les projecteurs disparaissent",
        body: [
          "Les projecteurs Super 8 fiables se font rares, et les pièces de rechange encore plus. Une mauvaise projection avec un appareil mal réglé peut abîmer définitivement un film.",
        ],
      },
      {
        heading: "Un fichier numérique, c'est éternel",
        body: [
          "Une fois numérisées en haute définition, vos images se dupliquent, se partagent avec la famille, se sauvegardent dans le cloud. Elles ne craignent plus rien.",
        ],
      },
    ],
  },
  {
    slug: "stocker-films-anciens",
    title: "Comment stocker des films anciens avant leur numérisation ?",
    description: "Trois règles simples pour préserver vos bobines quelques mois, le temps d'organiser leur numérisation.",
    readingTime: "3 min",
    category: "Conservation",
    intro: "En attendant leur numérisation, quelques précautions suffisent à empêcher toute dégradation supplémentaire.",
    sections: [
      {
        heading: "À plat, à l'abri de la lumière",
        body: [
          "Les bobines se conservent couchées, jamais debout. La lumière directe accélère la décoloration : un placard fermé est parfait.",
        ],
      },
      {
        heading: "Éloigner de l'humidité et des sources de chaleur",
        body: [
          "L'humidité favorise le syndrome du vinaigre et les moisissures. Un endroit sec, à température stable (autour de 18 °C), est idéal.",
        ],
      },
      {
        heading: "Ne pas ouvrir les boîtes trop souvent",
        body: [
          "Chaque ouverture expose le film à l'air ambiant. Résistez à l'envie de tout inspecter : notez ce dont vous vous souvenez sur l'étiquette et laissez la bobine tranquille jusqu'à la numérisation.",
        ],
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
