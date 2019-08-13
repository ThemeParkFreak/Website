function generateTheme(){
var themeList = [
  "Greek Mythology",
  "Roman Mythology",
  "Norse Mythology",
  "Fairy",
  "Sci-Fi",
  "Tropical",
  "Western",
  "Dystopia",
  "Hollywood",
  "Vikings",
  "Pirates",
  "Horror",
  "Ocean",
  "Mountain",
  "African",
  "Unicorn Space Rangers",
  "Uni-Sheep Space Rangers",
  "Cyberpunk",
  "Steampunk",
  "Dieselpunk",
  "Bavaria",
  "Dutch",
  "Space Cowboys",
  "people riding on dragons and throwing wolves at maggots",
  "Drunk Dutch pirate flies on spoopy ship and tries to scare you till you drop out of the building into a mediocre KumbaK water coaster",
  "Cowboys VS Aliens",
  "420",
  "Oriental",
  "Asian",
  "Stone Age",
  "Dinosaurs"
];

var randomTheme = themeList[Math.floor(Math.random()*themeList.length)];

document.getElementById('generatedTheme').innerHTML = randomTheme;
}