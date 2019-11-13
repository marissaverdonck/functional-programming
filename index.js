// // selecteer het svg element
// const svg = d3.select('svg');
// var arc = d3.arc();

// // svg.attr pakt de value uit de html.
// // + is parseFloat oftwel het veranderd het type van string naar number
// const height = +(svg.attr('height'));
// const width = +(svg.attr('width'));

// // new DOM element aanmaken. creeern circle element
// const circle = svg.append('circle')
//   // door geen ; te grbuiken, kan .attr direct erachteraan geschreven worden
//   // eerste argument is de key, 2e value
//   .attr('r', height / 2)
//   .attr('cx', width / 2)
//   .attr('cy', height / 2);

// // zoek D3 API's voor speciale vormen
// var mouth = svg.append('path')
//   .attr('d', arc({
//     innerRadius: 150,
//     outerRadius: 170,
//     startAngle: Math.PI / 2,
//     endAngle: Math.PI * 3 / 2
//     .transition().duration(2000)
//   }))

// Bron: https://www.youtube.com/watch?v=Qw6uAg3EO64
// Mapprojections: https://github.com/d3/d3-geo-projection

// Omdat npm d3 geinstaleerd is kan hier alles uit gehaald worden.
// ipv import
const json = d3.json;
const feature = topojson.feature;
// geoPath zet data om naar een svg-string
const geoPath = d3.geoPath;
// geoNaturalEarth1 is een projectie
const geoNaturalEarth1 = d3.geoNaturalEarth1;
const svg = d3.select('svg');

const height = +(svg.attr('height'));
const width = +(svg.attr('width'));
const projection = geoNaturalEarth1();
// zet de svg-string om naar de projectie
const pathGenerator = geoPath().projection(projection);



svg
  .append('path')
  .attr('class', 'sphere')
  .attr('d', pathGenerator({ type: 'Sphere' }));



// Laad de kaart uit de url in json
// Haal daarna de data op
// topoJson omzetten naar geoJson met de NPM package: topoJson .feature
json('https://unpkg.com/world-atlas@1.1.4/world/110m.json')
  .then(data => {
    const countries = feature(data, data.objects.countries);

    // dataJoin opzetten
    const paths = svg.selectAll('path')
      .data(countries.features)
      .enter().append('path')
      .attr('class', 'country')
      .attr('d', d => pathGenerator(d));
  });