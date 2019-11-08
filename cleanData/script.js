// Hulp van Martijn
// Fetch geeft toegang tot het json file
// .then wacht tot de data binnen is, anders crash
fetch('data.json')
  .then(response => response.json())
  .then(json => getData(json));

// data = alle data uit enquette
function getData(data) {
  const oldList = data
    .map(item => item["Wat eet je als ontbijt?"]);
  cleanData(oldList);
}

function cleanData(oldList) {
  const newList = oldList
    .map(item => item
      .toLowerCase()
    )
  console.log(newList);
}