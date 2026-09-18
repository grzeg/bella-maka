export type Review = {
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
};

// Opinie wklejone ręcznie z Google (najlepsze/najbardziej reprezentatywne).
// Sortowane po `rating` malejąco przy renderze — patrz src/app/[locale]/opinie/page.tsx.
// Aktualizacja: ręczna, wklej nowe opinie tutaj gdy user je dostarczy.
export const reviews: Review[] = [
  {
    author: "Wiktoria Pyś",
    rating: 5,
    text: "Pizza była przepyszna – dawno nie jadłam tak dobrej pizzy! Ciasto idealnie wypieczone, składniki świeże i wysokiej jakości. Duży plus za to, że pizza nie była tłusta, dzięki czemu jadło się ją bardzo przyjemnie. Obsługa bardzo miła, uprzejma i pomocna, a zamówienie zostało zrealizowane sprawnie. Zdecydowanie polecam i na pewno jeszcze wrócę!",
  },
  {
    author: "Łukasz Wołowicki",
    rating: 5,
    text: "Bardzo smaczna pizza. Ciasto idealne, dobrej jakości składniki. Widać, że w jej przyrządzenie jest wkładane serce. Oby z biegiem czasu nic się nie zmieniło. Serdecznie polecam.",
  },
  {
    author: "Anna Lachowicz",
    rating: 5,
    text: "Bardzo smaczna pizza, można się najeść. Dużo składników i miła obsługa. Polecam :)",
  },
  {
    author: "Борис Плыгач",
    rating: 5,
    text: "Mega dobra pizza! Zamówiłem dwie duże i muszę powiedzieć, że dawno nie jadłem tak dobrej pizzy. Mam pojemny żołądek i dużą rodzinę, ale te dwie pizze zdołały nas wszystkich zadowolić. Na plus również darmowa dostawa oraz bardzo miły pan dostawca. Zamówienie zostało zrealizowane błyskawicznie. Zdecydowanie polecam!",
  },
  {
    author: "Weronika Zajączkowska",
    rating: 5,
    text: "Bardzo fajne miejsce, pizza świeża i naprawdę smaczna, a obsługa miła i sympatyczna. Na pewno jeszcze tu wrócę.",
  },
  {
    author: "Agata Kozlowska-Plesnar",
    rating: 5,
    text: "Bardzo miła obsługa. Pizza przygotowywana przy kliencie że świeżych i wysokiej jakości produktów. Właściciel bardzo elastyczny tzn można zmieniać pizzę pod klienta: pół na pół, zamiast szynki kurczak itp. Ceny konkurencyjne w porównaniu z innymi pizzeriami, powiem nawet że niskie, bo za ogromną pizzę 45cm z mięsem i warzywami zapłaciłam 50zl i cola 850 ml jest za 10zl gdzie u konkurencji tyle płaci się za szklankę. Na pewno jeszcze wrócimy. Polecam z całego serca.",
  },
];
