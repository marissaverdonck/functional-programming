// SPARQL Sieraden
const query = `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX edm: <http://www.europeana.eu/schemas/edm/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX hdlh: <https://hdl.handle.net/20.500.11840/termmaster>
PREFIX wgs84: <http://www.w3.org/2003/01/geo/wgs84_pos#>
PREFIX geo: <http://www.opengis.net/ont/geosparql#>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX gn: <http://www.geonames.org/ontology#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
SELECT (SAMPLE(?cho) AS ?choSample) ?place ?placeName ?type ?imageLink ?lat ?long WHERE {
    <https://hdl.handle.net/20.500.11840/termmaster13201> skos:narrower* ?type .
    ?type skos:prefLabel ?typeName .
    ?cho dct:spatial ?place ;
        edm:object ?type ;
       edm:isShownBy ?imageLink .
    ?place skos:exactMatch/wgs84:lat ?lat .
    ?place skos:exactMatch/wgs84:long ?long .
}
GROUP BY ?place ?placeName ?type ?imageLink ?lat ?long
`

const endpoint = "https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-28/sparql";
const circleDelay = 2
const circleSize = 3

// Bron: https://www.youtube.com/watch?v=Qw6uAg3EO64
// Mapprojections: https://github.com/d3/d3-geo-projection

// Omdat npm d3 geinstaleerd is kan hier alles uit gehaald worden ipv import
const json = d3.json;
const feature = topojson.feature;
// geoPath zet data om naar een svg-string
const geoPath = d3.geoPath;
// geoEquirectangular is een projectie
const geoEquirectangular = d3.geoEquirectangular;
const projection = geoEquirectangular();
// zet de svg-string om naar de projectie
const pathGenerator = geoPath().projection(projection);
// svg centreren. Bron: https://bl.ocks.org/mbostock/4136647
const height = 500;
const width = 800;
const svg = d3.select('svg')
  .attr("viewBox", "90 0 " + width + " " + height)
  .attr("width", width)
  .attr("height", height);


//function setupMap(){}
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
    const paths = svg
      .selectAll('path')
      .data(countries.features)
      .enter()
      .append('path')
      .attr('class', 'country')
      .attr('d', d => pathGenerator(d));
  });

plotLocations()

function plotLocations() {
  fetch(endpoint + "?query=" + encodeURIComponent(query) + "&format=json")
    .then(data => data.json())
    .then(json => json.results.bindings)
    .then(results => {
      // convertYear(jsonResults);
      //TODO: clean up results in separate function
      results.forEach(result => {
        result.lat = Number(result.lat.value)
        result.long = Number(result.long.value)

      })
      console.log(results)
      svg
        .selectAll('circle')
        .data(results)
        .enter()
        .append('circle')
        .attr('class', 'circles')
        .attr('cx', function(d) {
          return projection([d.long, d.lat])[0]
        })
        .attr('cy', function(d) {
          return projection([d.long, d.lat])[1]
        })
        .attr('r', 'px')
        //Opacity is quite heavy on the rendering process so I've turned it off	
        //.attr('opacity', .5)
        .transition()
        .delay(function(d, i) { return i * circleDelay; })
        .duration(1500)
        .ease(d3.easeBounce)
        .attr('r', circleSize + 'px')
    })
};