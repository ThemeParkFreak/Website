function generateCountry(){
var countryList = [
  "Germany",
  "England",
  "The Netherlands",
  "Denmark",
  "United States of America",
  "Canada",
  "Mexico",
  "Spain",
  "France",
  "Italy",
  "South Africa",
  "Switzerland",
  "Austrailia",
  "New Zealand",
  "Japan",
  "China",
  "Poland",
  "Portugal",
  "Turkey",
  "Scotland",
  "Wales",
  "Republic of Ireland",
  "Northern Ireland",
  "Belgium"
];

var randomCountry = countryList[Math.floor(Math.random()*countryList.length)];

document.getElementById('generatedCountry').innerHTML = randomCountry;
}