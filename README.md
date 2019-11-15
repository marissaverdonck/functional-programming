## Het Concept

### Waar komt de collectie van Musea Wereldculturen vandaan?
![Naamloos-41](https://user-images.githubusercontent.com/43657951/68856388-a93cda80-06e0-11ea-88f0-bf5ab127015d.png)

Voor de tentoonstelling in het Tropenmuseum heb ik een interactieve kaart gemaakt. De kaart laat zien waar de collectie vandaan komt. Hoe meer objecten er zijn, hoe donkerder de kleur van de stippen. De gebruiker kan de catgorie kiezen en daarna op een van de stippen klikken op afbeeldingen van het object te bekijken.

## Feature 
De Feature ik het laden van de data op de kaart waarbij de gebruiker zelf kan kiezen welke categorie er afgebeeld wordt.
De gebruiker kan hierna kiezen van welk object details getoond worden.

## Onderzoek
Bekijk hoe ik op dit idee gekomen ben en zie het onderzoek in de [Wiki](https://github.com/marissaverdonck/functional-programming/wiki)

## Installatie
1. Open de terminal

2. Navigeer in de CLI naar de map waar de applicatie geinstaleerd kan worden

3. Type <br/>
```
Git clone https://github.com/marissaverdonck/functional-programming.git
```

4. Installeer NPM en de dependencies<br/>
```
npm install
```

## Data
Data wordt opgehaald uit de [collectie wereldculturen](https://collectie.wereldculturen.nl). De Data is opgebouwd als een thesaurus. Via SPARQL kan data worden opgevraagd. Ik zoek op categorie en haal daarvan de link, plaatslink, plaatsnaam, type, imagelink, longitude en latitude op.

<img width="571" alt="Schermafbeelding 2019-11-15 om 07 15 18" src="https://user-images.githubusercontent.com/43657951/68921171-1a7b9c80-0778-11ea-985d-220e9d0edf35.png">

<img width="571" alt="Schermafbeelding 2019-11-15 om 07 17 12" src="https://user-images.githubusercontent.com/43657951/68921170-1a7b9c80-0778-11ea-899a-43db49ca3bb0.png">

###
<img width="571" alt="Schermafbeelding 2019-11-15 om 07 24 32" src="https://user-images.githubusercontent.com/43657951/68921425-ff5d5c80-0778-11ea-8364-049b1997a8a2.png">

## Tools

• NPM

• D3

• SPARQL

## Credits

• Curran Kelleher - making a World Map. Bron: https://www.youtube.com/watch?v=Qw6uAg3EO64

• D3 Geo Map Projections - Bron: https://github.com/d3/d3-geo-projection

• Razpudding - Datapunten op kaart. Bron: https://beta.vizhub.com/Razpudding/6b3c5d10edba4c86babf4b6bc204c5f0

## License
[MIT License](https://github.com/marissaverdonck/functional-programming/blob/master/license)

## 
[Data opschonen *extra opdracht](https://github.com/marissaverdonck/functional-programming/wiki/Week-1/_edit#extra-opdracht-data-opschonen)





