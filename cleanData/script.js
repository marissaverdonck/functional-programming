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
  const clearList1 = oldList
    // .map maakt een nieuwe array van de items
    .map(item =>
      item
      .toLowerCase()
      .split(/[,+&]/)
      .join(";")
    )
  console.log(clearList1);
  check(clearList1)
}

function check(clearList1) {
  const clearList2 = clearList1
    .map(item => item == "" ? item = null : item)
  console.log(clearList2)
}














//TODO null waardes
//TODE parse csv json