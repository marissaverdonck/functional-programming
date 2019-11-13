// Hulp van Martijn
// Fetch geeft toegang tot het json file
// .then wacht tot de data binnen is, anders crash
fetch('data.json')
  .then(response => response.json())
  .then(json => getData(json));

// data = alle data uit enquette
// .map maakt een nieuwe array en zoekt naar items uit de ontbijtlijst
const getData = data => {
  const oldList = data
    .map(item => item["Wat eet je als ontbijt?"]);
  replaceCharacters(oldList);
}

// Pak data uit de ontbijtlijst (oldList)
// split: zoek naar karakters , +
// join: vervang deze karakters met ;
const replaceCharacters = oldList => {
  const newList = oldList
    .map(item =>
      item
      .toLowerCase()
      .split(/[,+&]/)
      .join(";")
    )
  console.log(newList);
}

//TODO null waardes
//TODE parse csv json