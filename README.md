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

## Tools
• NPM
• D3
• SPARQL

## License
[MIT License](https://github.com/marissaverdonck/functional-programming/blob/master/license)





