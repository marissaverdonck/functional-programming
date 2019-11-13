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