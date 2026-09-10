export type MenuTag = "wege" | "ostre";

export type MenuItem = {
  name: string;
  description: string;
  prices: [number, number, number]; // 28 / 35 / 45 cm
  tags?: MenuTag[];
};

// Skrót menu — pełna karta i zamówienia przez pyszne.pl (site.social.pyszne)
export const pizzaSizes = ["28 cm", "35 cm", "45 cm"] as const;

export const menuHighlights: MenuItem[] = [
  {
    name: "Napoli",
    description: "Sos pomidorowy, ser, świeża bazylia",
    prices: [30, 35, 45],
    tags: ["wege"],
  },
  {
    name: "Torino",
    description: "Sos pomidorowy, ser, pieczarki, salami, kukurydza",
    prices: [36, 41, 51],
  },
  {
    name: "Sicilia",
    description: "Sos pomidorowy, ser, pieczarki, mix papryki, oliwki",
    prices: [37, 42, 52],
    tags: ["wege"],
  },
  {
    name: "Parma",
    description: "Sos pomidorowy, ser, szynka dojrzewająca, rukola, pomidor koktajlowy, parmezan",
    prices: [40, 45, 55],
  },
  {
    name: "Modena",
    description: "Sos pomidorowy, gouda, oliwki, ser wędzony, camembert, ser pleśniowy",
    prices: [39, 44, 54],
    tags: ["wege"],
  },
  {
    name: "Rimini",
    description: "Sos pomidorowy ostry, wieprzowina, salami, boczek, cebula, kukurydza, jalapeño",
    prices: [42, 47, 57],
    tags: ["ostre"],
  },
];

export const menuNote =
  "Darmowa dostawa od 30 zł. Cena zawiera opakowanie. Pełna karta (pizza, sałatki, napoje, dodatki) i zamówienia online — na pyszne.pl.";
