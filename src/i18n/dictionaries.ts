import type { Locale } from "./config";

const dictionaries = {
  pl: {
    // <title>/<meta description> and share-image alt per page. About has its
    // own title/metaDescription inside `about`.
    meta: {
      homeImageAlt: "Pizza z pieca w pizzerii Bella Mąka w Brzegu Dolnym",
      home: {
        title: "Bella Mąka — Pizzeria w Brzegu Dolnym",
        description:
          "Pizzeria Bella Mąka w Brzegu Dolnym — pizza z pieca, szybki dowóz i wynos. Zamówienia online przez pyszne.pl.",
      },
      menu: {
        title: "Menu i ceny pizzy",
        description:
          "Menu pizzerii Bella Mąka w Brzegu Dolnym — wybrane pizze i ceny. Pełna karta i zamówienia na pyszne.pl.",
      },
      gallery: {
        title: "Galeria zdjęć",
        description:
          "Zdjęcia pizzy, pieca i wnętrza pizzerii Bella Mąka w Brzegu Dolnym.",
      },
      contact: {
        title: "Kontakt, adres i godziny otwarcia",
        description:
          "Adres, godziny otwarcia i telefon do pizzerii Bella Mąka w Brzegu Dolnym.",
      },
      reviews: {
        title: "Opinie klientów",
        description: "Opinie klientów o pizzerii Bella Mąka w Brzegu Dolnym.",
      },
      blog: {
        title: "Nowości i promocje",
        description:
          "Nowości i promocje pizzerii Bella Mąka w Brzegu Dolnym — blog.",
      },
      privacy: {
        title: "Polityka prywatności",
        description: "Polityka prywatności strony pizzerii Bella Mąka.",
      },
    },
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
      pizzaImageAlt: "Pizza {name}",
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
      // Per-file alt (key = file name in public/images/gallery); files without an
      // entry fall back to the generic imageAlt above.
      photoAlts: {
        "678236393_122108356682946185_9087006221761922777_n.jpg":
          "Pizza z salami i jalapeño na blacie, w tle wnętrze pizzerii",
        "681172380_122109315758946185_5816188189101238378_n.jpg":
          "Pizza z rukolą, pomidorkami koktajlowymi i parmezanem",
        "690676977_122110435442946185_315487328596184958_n.jpg":
          "Pizza z szynką, korniszonami i cebulą",
        "709864983_122114201918946185_791720273738378839_n.jpg":
          "Pizza w kartonie: jedna połowa z salami, druga z rukolą i pomidorami",
        "712275247_122114591006946185_4729532188410140497_n.jpg":
          "Pizza z pieczarkami, papryką i oliwkami",
        "723675641_122116913792946185_6017507405857854950_n.jpg":
          "Lada z pojemnikami z serem, sosem pomidorowym i dodatkami do pizzy",
        "724937293_122116652564946185_2100637243274836640_n.jpg":
          "Rozsmarowywanie sosu pomidorowego łyżką na rozwałkowanym cieście",
        "727543119_122117242850946185_1573333033143380203_n.jpg":
          "Pizza w kartonie: jedna połowa z pieczarkami i papryką, druga z rukolą i parmezanem",
        "730608378_122117446724946185_8776755293474888288_n.jpg":
          "Pizza z rukolą, pomidorami i parmezanem obok butelki napoju",
        "731787924_122117708930946185_6389327317895970416_n.jpg":
          "Pracownik w koszulce z logo Bella Mąka trzyma pizzę z salami i jalapeño",
        "732813799_122118238700946185_2928710676832217233_n.jpg":
          "Pizza z salami i jalapeño na papierze do pieczenia przy ceglanej ścianie",
        "737543666_122118486164946185_7479663703818371328_n.jpg":
          "Pizza z szynką, kukurydzą, pieczarkami i bazylią",
        "739200219_122119107554946185_7411014529842675684_n.jpg":
          "Pizza z pieczarkami i papryką przed otworem pieca",
        "742001928_122119379456946185_7581732249834831093_n.jpg":
          "Pracownik w koszulce z logo Bella Mąka trzyma pizzę z szynką",
        "743234584_122119653116946185_4102379689060176804_n.jpg":
          "Pizza z serem na łopacie przy otwartym piecu",
        "751303525_122120992856946185_2637267718236037275_n.jpg":
          "Pizza wewnątrz pieca",
        "757955002_122122040870946185_6001159039285075233_n.jpg":
          "Pizza z pieczarkami, papryką i oliwkami widziana z góry",
        "764006289_122122870184946185_3189412169458248103_n.jpg":
          "Karton z pizzą obok pieca z niebieskim panelem sterowania",
        "pizza1.jpg": "Pizza z mięsem, pieczarkami i cebulą widziana z góry",
        "pizza11.jpeg": "Pizza w otworze pieca",
        "pizza12.jpeg":
          "Trzy surowe pizze z szynką obok drewnianego wałka na granitowym blacie",
        "pizza13.jpeg":
          "Trzy surowe pizze z szynką, korniszonami i cebulą na blacie roboczym",
        "pizza14.jpeg":
          "Dłonie przy małej pizzy na papierze do pieczenia na stole w sali",
        "pizza15.jpeg":
          "Pokrojona pizza z listkiem bazylii na drewnianej desce",
        "pizza16.jpeg": "Pokrojona pizza z listkiem bazylii, ujęcie z boku",
        "pizza17.jpeg": "Pizza z salami i kukurydzą w otwartym kartonie",
        "pizza18.jpeg": "Dwie pizze w piecu",
        "pizza19.jpeg": "Cztery otwarte kartony z pizzami na blacie",
        "pizza21.jpeg":
          "Pizza z jalapeño, cebulą i kukurydzą na stole z lampką i kwiatkiem",
        "pizza22.jpeg":
          "Kulki ciasta obok sit do pizzy i ulotki z numerem telefonu",
        "pizza4.jpg":
          "Trzy surowe pizze z szynką i drewniany wałek na granitowym blacie",
        "unnamed.jpg":
          "Wnętrze pizzerii: ceglany kontuar, piec w głębi i stoły ze stołkami",
      },
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
      metaDescription:
        "Bella Mąka to rodzinna pizzeria w Brzegu Dolnym: ciasto robione codziennie na miejscu, pizza z pieca, jedzenie na miejscu, wynos i dowóz.",
      // TODO: właściciel — historia pizzerii (kiedy powstała, skąd nazwa
      // "Bella Mąka"). Dopisać jako osobny akapit, nie zgadywać.
      lead: "Bella Mąka to rodzinna pizzeria w Brzegu Dolnym, przy ul. Stanisława Wyspiańskiego. Pieczemy pizzę na cieście przygotowywanym codziennie na miejscu.",
      interiorAlt:
        "Wnętrze pizzerii Bella Mąka: lada z ciemnej cegły, piec w głębi i stoliki z drewnianymi stołkami",
      doughTitle: "Ciasto i piec",
      doughBody:
        "Wszystko zaczyna się od ciasta. Przygotowujemy je codziennie u nas w lokalu, a każdą pizzę składamy ręcznie: rozwałkowane ciasto, sos, ser, dodatki i prosto do pieca.",
      doughImageAlt: "Kulki świeżego ciasta na pizzę przy sitach do pizzy",
      sauceImageAlt:
        "Rozprowadzanie sosu pomidorowego łyżką na rozwałkowanym cieście",
      menuTitle: "Karta",
      menuBody:
        "W karcie mamy dwadzieścia pizz, od klasycznej Napoli z bazylią po ostrą Rimini z jalapeño. Każdą przygotujemy w trzech rozmiarach: 28, 35 albo 45 cm. Są też pozycje wegetariańskie i wegańskie, sałatki i napoje. Listę alergenów znajdziesz u nas w lokalu.",
      ovenImageAlt: "Pizza piekąca się w piecu Bella Mąka",
      visitTitle: "Na miejscu, na wynos, z dowozem",
      visitBody:
        "Możesz zjeść u nas na miejscu, odebrać zamówienie na wynos albo zamówić dowóz. Dowóz jest darmowy od 30 zł. Zamówienia przyjmujemy telefonicznie i online przez pyszne.pl. Do lokalu wchodzi się od tyłu budynku.",
      newsBody: "Promocje i nowości ogłaszamy na Facebooku i na naszym blogu.",
      addressLabel: "Adres",
      phoneLabel: "Telefon",
      ctaOrder: "Zamów online",
      ctaContact: "Dojazd i kontakt",
      ctaGallery: "Zobacz galerię",
      ctaBlog: "Czytaj bloga",
      facebookLabel: "Facebook",
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
    // TODO: native-English pass on the meta copy (machine translation).
    meta: {
      homeImageAlt: "Oven-baked pizza at Bella Mąka pizzeria in Brzeg Dolny",
      home: {
        title: "Bella Mąka — Pizzeria in Brzeg Dolny",
        description:
          "Bella Mąka pizzeria in Brzeg Dolny — oven-baked pizza, fast delivery and takeaway. Order online via pyszne.pl.",
      },
      menu: {
        title: "Pizza menu and prices",
        description:
          "The Bella Mąka menu in Brzeg Dolny — selected pizzas and prices. Full menu and online orders on pyszne.pl.",
      },
      gallery: {
        title: "Photo gallery",
        description:
          "Photos of the pizza, the oven and the dining room at Bella Mąka pizzeria in Brzeg Dolny.",
      },
      contact: {
        title: "Contact, address and opening hours",
        description:
          "Address, opening hours and phone number of Bella Mąka pizzeria in Brzeg Dolny.",
      },
      reviews: {
        title: "Customer reviews",
        description:
          "What customers say about Bella Mąka pizzeria in Brzeg Dolny.",
      },
      blog: {
        title: "News and offers",
        description:
          "News and offers from Bella Mąka pizzeria in Brzeg Dolny — the blog.",
      },
      privacy: {
        title: "Privacy policy",
        description: "Privacy policy of the Bella Mąka pizzeria website.",
      },
    },
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
      pizzaImageAlt: "{name} pizza",
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
      // Per-file alt (key = file name in public/images/gallery); files without an
      // entry fall back to the generic imageAlt above.
      photoAlts: {
        "678236393_122108356682946185_9087006221761922777_n.jpg":
          "Pizza with salami and jalapeño on a counter, the pizzeria interior in the background",
        "681172380_122109315758946185_5816188189101238378_n.jpg":
          "Pizza with arugula, cherry tomatoes and parmesan",
        "690676977_122110435442946185_315487328596184958_n.jpg":
          "Pizza with ham, pickles and onion",
        "709864983_122114201918946185_791720273738378839_n.jpg":
          "Pizza in a box: one half with salami, the other with arugula and tomatoes",
        "712275247_122114591006946185_4729532188410140497_n.jpg":
          "Pizza with mushrooms, peppers and olives",
        "723675641_122116913792946185_6017507405857854950_n.jpg":
          "Counter with containers of cheese, tomato sauce and pizza toppings",
        "724937293_122116652564946185_2100637243274836640_n.jpg":
          "Spreading tomato sauce with a spoon over rolled-out dough",
        "727543119_122117242850946185_1573333033143380203_n.jpg":
          "Pizza in a box: one half with mushrooms and peppers, the other with arugula and parmesan",
        "730608378_122117446724946185_8776755293474888288_n.jpg":
          "Pizza with arugula, tomatoes and parmesan next to a bottle of soft drink",
        "731787924_122117708930946185_6389327317895970416_n.jpg":
          "Staff member in a Bella Mąka logo T-shirt holding a pizza with salami and jalapeño",
        "732813799_122118238700946185_2928710676832217233_n.jpg":
          "Pizza with salami and jalapeño on baking paper by a brick wall",
        "737543666_122118486164946185_7479663703818371328_n.jpg":
          "Pizza with ham, corn, mushrooms and basil",
        "739200219_122119107554946185_7411014529842675684_n.jpg":
          "Pizza with mushrooms and peppers in front of the oven opening",
        "742001928_122119379456946185_7581732249834831093_n.jpg":
          "Staff member in a Bella Mąka logo T-shirt holding a pizza with ham",
        "743234584_122119653116946185_4102379689060176804_n.jpg":
          "Cheese pizza on a peel by the open oven",
        "751303525_122120992856946185_2637267718236037275_n.jpg":
          "Pizza inside the oven",
        "757955002_122122040870946185_6001159039285075233_n.jpg":
          "Pizza with mushrooms, peppers and olives seen from above",
        "764006289_122122870184946185_3189412169458248103_n.jpg":
          "Pizza box next to an oven with a blue control panel",
        "pizza1.jpg": "Pizza with meat, mushrooms and onion seen from above",
        "pizza11.jpeg": "Pizza in the oven opening",
        "pizza12.jpeg":
          "Three raw ham pizzas next to a wooden rolling pin on a granite counter",
        "pizza13.jpeg":
          "Three raw pizzas with ham, pickles and onion on a work counter",
        "pizza14.jpeg":
          "Hands next to a small pizza on baking paper at a table in the dining room",
        "pizza15.jpeg": "Sliced pizza with a basil leaf on a wooden board",
        "pizza16.jpeg": "Sliced pizza with a basil leaf, side view",
        "pizza17.jpeg": "Pizza with salami and corn in an open box",
        "pizza18.jpeg": "Two pizzas in the oven",
        "pizza19.jpeg": "Four open boxes with pizzas on a counter",
        "pizza21.jpeg":
          "Pizza with jalapeño, onion and corn on a table with a lamp and a flower",
        "pizza22.jpeg":
          "Balls of dough next to pizza screens and a flyer with a phone number",
        "pizza4.jpg":
          "Three raw ham pizzas and a wooden rolling pin on a granite counter",
        "unnamed.jpg":
          "Inside the pizzeria: a brick counter, the oven at the back and tables with stools",
      },
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
      metaDescription:
        "Bella Mąka is a family pizzeria in Brzeg Dolny: dough made fresh every day on site, pizza straight from the oven, eat in, takeaway and delivery.",
      // TODO: owner — pizzeria history (when it opened, where the "Bella
      // Mąka" name comes from). Add as a separate paragraph, don't guess.
      lead: "Bella Mąka is a family pizzeria in Brzeg Dolny, on ul. Stanisława Wyspiańskiego. We bake our pizza on dough made fresh every day on site.",
      interiorAlt:
        "Inside the Bella Mąka pizzeria: a dark brick counter, the oven at the back and tables with wooden stools",
      doughTitle: "Dough and oven",
      doughBody:
        "It all starts with the dough. We make it every day right here, and every pizza is put together by hand: rolled-out dough, sauce, cheese, toppings, and straight into the oven.",
      doughImageAlt: "Balls of fresh pizza dough next to pizza screens",
      sauceImageAlt:
        "Spreading tomato sauce with a spoon over rolled-out dough",
      menuTitle: "The menu",
      menuBody:
        "Our menu has twenty pizzas, from a classic Napoli with basil to a spicy Rimini with jalapeño. Every pizza comes in three sizes: 28, 35 or 45 cm. There are vegetarian and vegan options too, plus salads and drinks. The allergen list is available at the pizzeria.",
      ovenImageAlt: "Pizza baking in the Bella Mąka oven",
      visitTitle: "Eat in, take away or get it delivered",
      visitBody:
        "You can eat with us, pick up your order to take away, or have it delivered. Delivery is free on orders from 30 zł. We take orders by phone and online via pyszne.pl. The entrance is at the back of the building.",
      newsBody: "We announce offers and news on Facebook and on our blog.",
      addressLabel: "Address",
      phoneLabel: "Phone",
      ctaOrder: "Order online",
      ctaContact: "Directions and contact",
      ctaGallery: "See the gallery",
      ctaBlog: "Read the blog",
      facebookLabel: "Facebook",
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
