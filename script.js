const IMAGE_COUNT = 15;
const SOUND_COUNT = 15;
const INTERVAL_MS = 5000;

const images = Array.from({ length: IMAGE_COUNT }, (_, i) =>
  `images/animal_${String(i).padStart(3, "0")}.png`
);

const sounds = Array.from({ length: SOUND_COUNT }, (_, i) =>
  `sounds/animal_sound_${String(i).padStart(2, "0")}.wav`
);

const names = [
  "KORA VELD",
  "MIRU SHAI",
  "DREN TAL",
  "SORA VA",
  "NIVI KAL",
  "RUMA HEX",
  "TORA MIN",
  "VESH LAA",
  "GRAI MOK",
  "LUMO RIN",
  "TAVI KESH",
  "ORU NELL",
  "SAVA DRO",
  "YARA FEN",
  "ZORI LAA",
];

const phrases = [
  { text: "Lumo varai, kesh taluun.", gloss: "The moss-light calls; the canopy listens." },
  { text: "Dren kaia moru faal.", gloss: "We move with the river-beasts." },
  { text: "Soli fenna, iri vash.", gloss: "Small wings, wide echoes." },
  { text: "Goru nivan sehtira.", gloss: "Stone hides the quiet roar." },
  { text: "Miira loh, miira kai.", gloss: "Hear the herd, see the herd." },
  { text: "Tal isha veyr.", gloss: "Night teaches the fanged ones." },
  { text: "Ruu namel vesh.", gloss: "Rain crowns the soft-scaled." },
  { text: "Kori fenn, kori dral.", gloss: "First breath, first track." },
  { text: "Ashi toro velim.", gloss: "We trade light for shelter." },
  { text: "Yara shen vuli.", gloss: "The echo-singers are near." },
  { text: "Fen lo varun.", gloss: "The creek remembers names." },
  { text: "Vey toru, vey toru.", gloss: "Stay low, stay low." },
  { text: "Naru ishka sel.", gloss: "Fog paints the animal paths." },
  { text: "Ghal tevi mekh.", gloss: "We follow the drum-beast." },
  { text: "Sava liir, sava loh.", gloss: "Soft claws, softer steps." },
];

let index = 0;
let timer = null;

const imageEl = document.getElementById("animalImage");
const nameEl = document.getElementById("animalName");
const phraseEl = document.getElementById("animalPhrase");
const glossEl = document.getElementById("animalGloss");
const audioEl = document.getElementById("audioPlayer");
const startBtn = document.getElementById("startButton");

function updateView() {
  imageEl.src = images[index % images.length];
  nameEl.textContent = names[index % names.length];
  phraseEl.textContent = phrases[index % phrases.length].text;
  glossEl.textContent = phrases[index % phrases.length].gloss;

  audioEl.src = sounds[index % sounds.length];
  audioEl.play().catch(() => {
    startBtn.classList.remove("hidden");
  });
}

function next() {
  index = (index + 1) % images.length;
  updateView();
}

function startLoop() {
  updateView();
  if (timer) clearInterval(timer);
  timer = setInterval(next, INTERVAL_MS);
}

startBtn.addEventListener("click", () => {
  startBtn.classList.add("hidden");
  startLoop();
});

// Start visuals immediately; audio will start on first user click if blocked.
updateView();
