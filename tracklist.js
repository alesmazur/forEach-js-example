let tracks = [
  "1. Smells like teen spirit",
  "2. In bloom",
  "3. Come as You Are",
  "4. Breed",
  "5.Lithium",
  "6.Polly",
  "7.Territorial pissing",
  "8. Drain You",
  "9. Lounge Act",
  "10.Stay Away",
  "11. On a Plain",
  "12. Something in the way",
];

const trackList = document.querySelector(".track-list");

let list = "";

tracks.forEach((track) => {
  list += `<li>${track}</li>`;
});

trackList.innerHTML = list;

// band list

let band = [
  "Frontman: Kurt Cobain",
  "Bass: Christ Novaselich",
  "Drums:Dave Groll",
];

const bandList = document.querySelector(".band");

let participiant = "";

band.forEach((musician) => {
  participiant += `<li>${musician}</li>`;
});

bandList.innerHTML = participiant;
