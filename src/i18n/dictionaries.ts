import type { Locale } from "./config";

// Marketing/brand copy that hasn't been through a real translation pass yet
// is prefixed "TODO_TRANSLATE:" with the Polish original inline — searchable,
// visibly wrong if it ever ships, never a fabricated brand voice. Structural
// UI chrome (nav labels, buttons, form labels) is translated directly.

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
      // TODO: podmienić na prawdziwe opinie z Google/Facebooka/pyszne.pl (albo osadzić widżet Google Reviews)
      placeholderAuthor: "Klient/-ka",
      placeholder1:
        "Miejsce na prawdziwe opinie z Google, Facebooka lub pyszne.pl.",
      placeholder2:
        "Warto podpiąć widżet Google Reviews — wzmacnia lokalne SEO.",
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
    },
    cookieConsent: {
      text: "Używamy plików cookie do analizy ruchu na stronie (Google Analytics). Możesz zaakceptować lub odrzucić — zobacz",
      privacyLink: "politykę prywatności",
      accept: "Akceptuj",
      decline: "Odrzuć",
    },
    blog: {
      title: "Blog",
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
      heroTitleLine1: "TODO_TRANSLATE: Pizza z pieca,",
      heroTitleLine2: "TODO_TRANSLATE: prosto z Brzegu Dolnego",
      heroSubtitle:
        "TODO_TRANSLATE: Bella Mąka — rodzinna pizzeria przy ul. Stanisława Wyspiańskiego 16/Lok. 6A. Szybki dowóz i wynos, zamówienia online przez pyszne.pl.",
      ctaOrder: "Order online",
      ctaMenu: "See the menu",
      featureDeliveryTitle: "TODO_TRANSLATE: Szybki dowóz",
      featureDeliveryDesc:
        "TODO_TRANSLATE: Prosto pod drzwi, darmowa dostawa od 30 zł.",
      featureLocationTitle: "TODO_TRANSLATE: Dogodna lokalizacja",
      featureLocationDesc:
        "TODO_TRANSLATE: Wejście od tyłu budynku, 56-120 Brzeg Dolny.",
      featureOvenTitle: "TODO_TRANSLATE: Prosto z pieca",
      featureOvenDesc: "TODO_TRANSLATE: Świeże ciasto, codziennie na miejscu.",
      highlightsTitle: "TODO_TRANSLATE: Nasze hity",
      highlightsSubtitle:
        "TODO_TRANSLATE: Pełna karta i zamówienia na pyszne.pl.",
      allMenuCta: "Full menu",
    },
    menu: {
      title: "Menu",
      note: "TODO_TRANSLATE: Darmowa dostawa od 30 zł. Cena zawiera opakowanie. Pełna karta (pizza, sałatki, napoje, dodatki) i zamówienia online — na pyszne.pl.",
      tagWege: "veggie",
      tagOstre: "spicy",
      partialTitle: "TODO_TRANSLATE: To tylko część karty",
      partialSubtitle:
        "TODO_TRANSLATE: Pełne menu — 20 rodzajów pizzy, sałatki, napoje i dodatki — oraz zamówienia online znajdziesz na pyszne.pl.",
      partialCta: "Full menu & order",
    },
    gallery: {
      title: "Gallery",
      subtitle:
        "TODO_TRANSLATE: Prosto z pieca i z sali — Bella Mąka na co dzień.",
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
      body: "TODO_TRANSLATE: Bella Mąka działa w Brzegu Dolnym przy ul. Stanisława Wyspiańskiego 16/Lok. 6A. Tu wpiszemy prawdziwą historię lokalu — poproś właściciela o kilka zdań o początkach, zespole i podejściu do robienia pizzy.",
    },
    reviews: {
      title: "Reviews",
      seeMoreOn: "See more reviews on",
      facebook: "Facebook",
      // TODO: replace with real reviews from Google/Facebook/pyszne.pl (or embed a Google Reviews widget)
      placeholderAuthor: "Customer",
      placeholder1:
        "Space for real reviews from Google, Facebook or pyszne.pl.",
      placeholder2:
        "Worth embedding a Google Reviews widget — helps local SEO.",
    },
    privacy: {
      title: "Privacy policy",
      // TODO: before publishing — full text prepared/approved by the owner
      // or a lawyer (GDPR, data controller, legal basis, retention period,
      // user rights).
      p1Prefix:
        "TODO_TRANSLATE: Administratorem danych jest Bella Mąka, ul. Stanisława Wyspiańskiego 16/Lok. 6A, 56-120 Brzeg Dolny.",
      p2: "TODO_TRANSLATE: Strona korzysta z plików cookie Google Analytics wyłącznie po wyrażeniu zgody w bannerze cookie. Zgodę można wycofać w dowolnym momencie, czyszcząc dane strony w przeglądarce.",
      p3Prefix: "TODO_TRANSLATE: Kontakt w sprawie danych osobowych:",
    },
    footer: {
      hoursTitle: "Opening hours",
      contactTitle: "Contact",
      orderOnPyszne: "Order on pyszne.pl",
      rightsReserved: "All rights reserved.",
      privacyPolicy: "Privacy policy",
    },
    cookieConsent: {
      text: "TODO_TRANSLATE: Używamy plików cookie do analizy ruchu na stronie (Google Analytics). Możesz zaakceptować lub odrzucić — zobacz",
      privacyLink: "privacy policy",
      accept: "Accept",
      decline: "Decline",
    },
    blog: {
      title: "Blog",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
