export type MenuTag = "wege" | "ostre";

export type MenuItem = {
  name: string;
  description: string;
  prices: [number, number, number]; // 28 / 35 / 45 cm
  tags?: MenuTag[];
  image: string;
};

// Skrót menu — pełna karta i zamówienia przez pyszne.pl (site.social.pyszne)
export const pizzaSizes = ["28 cm", "35 cm", "45 cm"] as const;

export const menuHighlights: MenuItem[] = [
  {
    name: "Napoli",
    description: "Sos pomidorowy, ser, świeża bazylia",
    prices: [30, 35, 45],
    tags: ["wege"],
    image: "/images/menu/napoli.jpg",
  },
  {
    name: "Torino",
    description: "Sos pomidorowy, ser, pieczarki, salami, kukurydza",
    prices: [36, 41, 51],
    image: "/images/menu/torino.jpg",
  },
  {
    name: "Sicilia",
    description: "Sos pomidorowy, ser, pieczarki, mix papryki, oliwki",
    prices: [37, 42, 52],
    tags: ["wege"],
    image: "/images/menu/sicilia.jpg",
  },
  {
    name: "Parma",
    description:
      "Sos pomidorowy, ser, szynka dojrzewająca, rukola, pomidor koktajlowy, parmezan",
    prices: [40, 45, 55],
    image: "/images/menu/parma.jpg",
  },
  {
    name: "Modena",
    description:
      "Sos pomidorowy, gouda, oliwki, ser wędzony, camembert, ser pleśniowy",
    prices: [39, 44, 54],
    tags: ["wege"],
    // TODO: zdjęcie tymczasowe (ser z pieca) — podmienić na prawdziwe Modena, gdy będzie dostępne
    image: "/images/menu/modena.jpg",
  },
  {
    name: "Rimini",
    description:
      "Sos pomidorowy ostry, wieprzowina, salami, boczek, cebula, kukurydza, jalapeño",
    prices: [42, 47, 57],
    tags: ["ostre"],
    image: "/images/menu/rimini.jpg",
  },
];

export const menuNote =
  "Darmowa dostawa od 30 zł. Cena zawiera opakowanie. Pełna karta (pizza, sałatki, napoje, dodatki) i zamówienia online — na pyszne.pl.";
