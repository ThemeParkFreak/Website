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
  "Cyberpunk",
  "Steampunk",
  "Dieselpunk",
  "Bavaria",
  "Dutch",
  "Space Cowboys",
  "Cowboys VS Aliens",
  "Oriental",
  "Asian",
  "Stone Age",
  "Egyptian",
  "Arabic",
  "Dinosaurs"
];

var randomTheme = themeList[Math.floor(Math.random()*themeList.length)];

document.getElementById('generatedTheme').innerHTML = randomTheme;
}
