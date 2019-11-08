// Hulp van Martijn
// Fetch geeft toegang tot het json file
// .then wacht tot de data binnen is, anders crash
fetch('oceanie.json')
  .then(response => response.json())
  .then(json => getData(json));

// funtie wordt uitgevoerd nadat data is opgehaald met fetch
function getData(json) {
  // json = alle data in oceanie
  // met .map maak je een object{} aan van oceanie. Hierin geef je keys mee (lat, long, imageLink)
  // {} geeft aan dat je een object wil maken, als je een array zou willen gebruik []}
  // arrow function die location meekrijgt in de parameter function(location){} bij een arrow gebruik je geen {}
  let oceanie = json.results.bindings
    .map(location => {
      return {
        lat: location.lat.value,
        long: location.long.value,
        imageLink: location.imageLink.value,
      }
    })
  console.log(oceanie)
  return oceanie
}