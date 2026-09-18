export const site = {
  name: "Bella Mąka",
  city: "Brzeg Dolny",
  cityGenitive: "Brzegu Dolnego", // "z Brzegu Dolnego"
  cityLocative: "Brzegu Dolnym", // "w Brzegu Dolnym"
  url: "https://bellamaka.pl",
  description:
    "Pizzeria Bella Mąka w Brzegu Dolnym — pizza z pieca, szybki dowóz i wynos. Zamówienia online przez pyszne.pl.",
  phone: "+48 512 613 840",
  hours: [
    { day: "Poniedziałek – Sobota", hours: "14:00 – 22:00" },
    { day: "Niedziela", hours: "Zamknięte" },
  ],
  address: {
    street: "ul. Stanisława Wyspiańskiego 16/Lok. 6A",
    note: "Wejście od tyłu budynku",
    city: "Brzeg Dolny",
    postalCode: "56-120",
  },
  social: {
    facebook: "https://www.facebook.com/bellamakabrzegdolny/?locale=pl_PL",
    pyszne: "https://www.pyszne.pl/menu/bella-maka",
  },
} as const;
