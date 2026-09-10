export const site = {
  name: "Bella Mąka",
  city: "Brzeg Dolny",
  cityGenitive: "Brzegu Dolnego", // "z Brzegu Dolnego"
  cityLocative: "Brzegu Dolnym", // "w Brzegu Dolnym"
  url: "https://bellamaka.pl", // TODO: podmienić na docelową domenę
  description:
    "Pizzeria Bella Mąka w Brzegu Dolnym — pizza z pieca, szybki dowóz i wynos. Zamówienia online przez pyszne.pl.",
  phone: "+48 000 000 000", // TODO: prawdziwy numer
  hours: [
    { day: "Poniedziałek – Czwartek", hours: "TODO – TODO" },
    { day: "Piątek – Sobota", hours: "TODO – TODO" },
    { day: "Niedziela", hours: "TODO – TODO" },
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
