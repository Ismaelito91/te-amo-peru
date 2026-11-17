// Contenus provisoires du site : à remplacer par les vraies infos du restaurant.
const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const restaurant = {
  name: "TAP",
  fullName: "Te Amo Perú",
  tagline: "Ceviche, braises & pisco sour",
  intro:
    "Une cuisine péruvienne de marché, du poisson du jour « cuit » au citron vert aux viandes saisies sur la braise, servie à partager comme à Lima.",
  address: "12 rue de la Pierre, 75011 Paris",
  phone: "01 23 45 67 89",
  email: "hola@te-amo-peru.fr",
  hours: [
    { days: "Mardi – Jeudi", time: "12h – 14h30 · 19h – 22h30" },
    { days: "Vendredi – Samedi", time: "12h – 14h30 · 19h – 23h30" },
    { days: "Dimanche", time: "12h – 16h" },
  ],
  images: {
    hero: unsplash("1535399831218-d5bd36d1a6b3", 2000),
    table: unsplash("1528605248644-14dd04022da1", 1800),
  },
};

export const signatureDishes = [
  {
    name: "Ceviche clásico",
    quechua: "Challwa",
    description: "Poisson du jour, leche de tigre, patate douce, maïs choclo, oignon rouge.",
    price: 19,
    image: unsplash("1535399831218-d5bd36d1a6b3", 900),
  },
  {
    name: "Anticuchos à la braise",
    quechua: "Nina",
    description: "Brochettes marinées au piment panca, pommes grenaille, sauce huacatay.",
    price: 22,
    image: unsplash("1529692236671-f1f6cf9683ba", 900),
  },
  {
    name: "Pisco sour",
    quechua: "Upyay",
    description: "Pisco quebranta, citron vert pressé minute, blanc d'œuf, amargo.",
    price: 11,
    image: unsplash("1551024709-8f23befc6f87", 900),
  },
];

// Chaque catégorie de la carte est un fil du quipu ; chaque plat, un nœud.
export const menu = [
  {
    category: "Ceviches",
    quechua: "Qocha",
    color: "red",
    items: [
      { name: "Clásico", price: 19 },
      { name: "Nikkei au thon", price: 21 },
      { name: "Leche de tigre", price: 9 },
    ],
  },
  {
    category: "Braises",
    quechua: "Nina",
    color: "yellow",
    items: [
      { name: "Anticuchos", price: 22 },
      { name: "Pollo a la brasa", price: 20 },
      { name: "Lomo saltado", price: 24 },
    ],
  },
  {
    category: "À partager",
    quechua: "Ayni",
    color: "purple",
    items: [
      { name: "Causa limeña", price: 12 },
      { name: "Papas a la huancaína", price: 9 },
      { name: "Yuca frita", price: 7 },
    ],
  },
  {
    category: "À boire",
    quechua: "Upyay",
    color: "stone",
    items: [
      { name: "Pisco sour", price: 11 },
      { name: "Chicha morada", price: 6 },
      { name: "Inca Kola", price: 4 },
    ],
  },
] as const;

export const formatPrice = (n: number) => `${n} €`;
