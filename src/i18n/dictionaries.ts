import type { Locale } from "./config";

const dictionaries = {
  pl: {
    nav: {
      menu: "Menu",
      gallery: "Galeria",
      reviews: "Opinie",
      about: "O nas",
      blog: "Blog",
      contact: "Kontakt",
      orderOnline: "Zamów online",
      openMenu: "Otwórz menu",
      switchLanguage: "Zmień język",
    },
    home: {
      cityTagline: "Brzeg Dolny, Dolny Śląsk",
      heroTitleLine1: "Pizza z pieca,",
      heroTitleLine2: "prosto z Brzegu Dolnego",
      heroSubtitle:
        "Bella Mąka — rodzinna pizzeria przy ul. Stanisława Wyspiańskiego 16/Lok. 6A. Szybki dowóz i wynos, zamówienia online przez pyszne.pl.",
      ctaOrder: "Zamów online",
      ctaMenu: "Zobacz menu",
      featureDeliveryTitle: "Szybki dowóz",
      featureDeliveryDesc: "Prosto pod drzwi, darmowa dostawa od 30 zł.",
      featureLocationTitle: "Dogodna lokalizacja",
      featureLocationDesc: "Wejście od tyłu budynku, 56-120 Brzeg Dolny.",
      featureOvenTitle: "Prosto z pieca",
      featureOvenDesc: "Świeże ciasto, codziennie na miejscu.",
      highlightsTitle: "Nasze hity",
      highlightsSubtitle: "Pełna karta i zamówienia na pyszne.pl.",
      allMenuCta: "Całe menu",
    },
    menu: {
      title: "Menu",
      note: "Darmowa dostawa od 30 zł. Cena zawiera opakowanie. Pełna karta (pizza, sałatki, napoje, dodatki) i zamówienia online — na pyszne.pl.",
      tagWege: "wege",
      tagOstre: "ostre",
      partialTitle: "To tylko część karty",
      partialSubtitle:
        "Pełne menu — 20 rodzajów pizzy, sałatki, napoje i dodatki — oraz zamówienia online znajdziesz na pyszne.pl.",
      partialCta: "Pełne menu i zamówienie",
    },
    gallery: {
      title: "Galeria",
      subtitle: "Prosto z pieca i z sali — Bella Mąka na co dzień.",
      imageAlt: "Bella Mąka — zdjęcie z pizzerii",
    },
    contact: {
      title: "Kontakt",
      addressLabel: "Adres",
      phoneLabel: "Telefon",
      hoursLabel: "Godziny otwarcia",
      socialLabel: "Social",
      facebook: "Facebook",
      pyszne: "pyszne.pl",
      mapTitle: "Mapa dojazdu",
    },
    about: {
      title: "O nas",
      // TODO: właściciel — historia pizzerii, kiedy powstała, skąd nazwa
      // "Bella Mąka", co jest dla was ważne w robieniu pizzy.
      body: "Bella Mąka działa w Brzegu Dolnym przy ul. Stanisława Wyspiańskiego 16/Lok. 6A.",
    },
    reviews: {
      title: "Opinie",
      seeMoreOn: "Zobacz też pełne opinie na",
      facebook: "Facebooku",
      emptyState:
        "Opinie klientów pojawią się tutaj wkrótce — zajrzyj na Facebooka.",
    },
    privacy: {
      title: "Polityka prywatności",
      // TODO: przed publikacją — pełna treść przygotowana/zaakceptowana przez
      // właściciela lub prawnika (RODO, administrator danych, podstawy
      // przetwarzania, okres retencji, prawa użytkownika).
      p1Prefix:
        "Administratorem danych jest Bella Mąka, ul. Stanisława Wyspiańskiego 16/Lok. 6A, 56-120 Brzeg Dolny.",
      p2: "Strona korzysta z plików cookie Google Analytics wyłącznie po wyrażeniu zgody w bannerze cookie. Zgodę można wycofać w dowolnym momencie, czyszcząc dane strony w przeglądarce.",
      p3Prefix: "Kontakt w sprawie danych osobowych:",
    },
    footer: {
      hoursTitle: "Godziny otwarcia",
      contactTitle: "Kontakt",
      orderOnPyszne: "Zamów na pyszne.pl",
      rightsReserved: "Wszystkie prawa zastrzeżone.",
      privacyPolicy: "Polityka prywatności",
      siteBy: "Projekt i wykonanie strony:",
    },
    cookieConsent: {
      text: "Używamy plików cookie do analizy ruchu na stronie (Google Analytics). Możesz zaakceptować lub odrzucić — zobacz",
      privacyLink: "politykę prywatności",
      accept: "Akceptuj",
      decline: "Odrzuć",
    },
    blog: {
      title: "Blog",
      empty: "Nie ma jeszcze żadnych wpisów — zajrzyj wkrótce.",
      fromFacebook: "Z Facebooka",
      viewOnFacebook: "Zobacz oryginalny wpis na Facebooku",
      opensInNewTab: "(otwiera się w nowej karcie)",
      galleryTitle: "Zdjęcia",
      openImage: "Otwórz zdjęcie w pełnym rozmiarze:",
      backToBlog: "Wszystkie wpisy",
      writtenIn: {
        pl: "Wpis dostępny tylko po polsku.",
        en: "Wpis dostępny tylko po angielsku.",
      },
    },
  },
  en: {
    nav: {
      menu: "Menu",
      gallery: "Gallery",
      reviews: "Reviews",
      about: "About",
      blog: "Blog",
      contact: "Contact",
      orderOnline: "Order online",
      openMenu: "Open menu",
      switchLanguage: "Switch language",
    },
    home: {
      cityTagline: "Brzeg Dolny, Lower Silesia",
      heroTitleLine1: "Pizza from the oven,",
      heroTitleLine2: "straight from Brzeg Dolny",
      heroSubtitle:
        "Bella Mąka — a family pizzeria at ul. Stanisława Wyspiańskiego 16/Lok. 6A. Fast delivery and takeaway, order online via pyszne.pl.",
      ctaOrder: "Order online",
      ctaMenu: "See the menu",
      featureDeliveryTitle: "Fast delivery",
      featureDeliveryDesc: "Straight to your door, free delivery from 30 zł.",
      featureLocationTitle: "Convenient location",
      featureLocationDesc:
        "Entrance from the back of the building, 56-120 Brzeg Dolny.",
      featureOvenTitle: "Fresh from the oven",
      featureOvenDesc: "Fresh dough, made on site every day.",
      highlightsTitle: "Our favourites",
      highlightsSubtitle: "Full menu and online orders on pyszne.pl.",
      allMenuCta: "Full menu",
    },
    menu: {
      title: "Menu",
      note: "Free delivery from 30 zł. Price includes packaging. Full menu (pizza, salads, drinks, extras) and online orders — on pyszne.pl.",
      tagWege: "veggie",
      tagOstre: "spicy",
      partialTitle: "This is only part of the menu",
      partialSubtitle:
        "Full menu — 20 kinds of pizza, salads, drinks and extras — plus online ordering, on pyszne.pl.",
      partialCta: "Full menu & order",
    },
    gallery: {
      title: "Gallery",
      subtitle:
        "Straight from the oven and the dining room — Bella Mąka, every day.",
      imageAlt: "Bella Mąka — photo from the pizzeria",
    },
    contact: {
      title: "Contact",
      addressLabel: "Address",
      phoneLabel: "Phone",
      hoursLabel: "Opening hours",
      socialLabel: "Social",
      facebook: "Facebook",
      pyszne: "pyszne.pl",
      mapTitle: "Map",
    },
    about: {
      title: "About us",
      // TODO: owner — pizzeria history, when it opened, where the "Bella
      // Mąka" name comes from, what matters to you about making pizza.
      body: "Bella Mąka is located in Brzeg Dolny at ul. Stanisława Wyspiańskiego 16/Lok. 6A. We'll put the real story of the place here — ask the owner for a few sentences about the beginnings, the team, and the approach to making pizza.",
    },
    reviews: {
      title: "Reviews",
      seeMoreOn: "See more reviews on",
      facebook: "Facebook",
      emptyState: "Customer reviews will appear here soon — check Facebook.",
    },
    privacy: {
      title: "Privacy policy",
      // TODO: before publishing — full text prepared/approved by the owner
      // or a lawyer (GDPR, data controller, legal basis, retention period,
      // user rights).
      p1Prefix:
        "The data controller is Bella Mąka, ul. Stanisława Wyspiańskiego 16/Lok. 6A, 56-120 Brzeg Dolny.",
      p2: "The site uses Google Analytics cookies only after consent is given in the cookie banner. Consent can be withdrawn at any time by clearing the site's data in your browser.",
      p3Prefix: "Contact regarding personal data:",
    },
    footer: {
      hoursTitle: "Opening hours",
      contactTitle: "Contact",
      orderOnPyszne: "Order on pyszne.pl",
      rightsReserved: "All rights reserved.",
      privacyPolicy: "Privacy policy",
      siteBy: "Website design & development:",
    },
    cookieConsent: {
      text: "We use cookies to analyse site traffic (Google Analytics). You can accept or decline — see",
      privacyLink: "privacy policy",
      accept: "Accept",
      decline: "Decline",
    },
    blog: {
      title: "Blog",
      empty: "No posts yet — check back soon.",
      fromFacebook: "From Facebook",
      viewOnFacebook: "See the original post on Facebook",
      opensInNewTab: "(opens in a new tab)",
      galleryTitle: "Photos",
      openImage: "Open full-size photo:",
      backToBlog: "All posts",
      writtenIn: {
        pl: "This post is available in Polish only.",
        en: "This post is available in English only.",
      },
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
