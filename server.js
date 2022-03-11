const haversine = require('haversine');
const express = require('express');
const app = express();
const port = 3000;


// Startpunt, de gebruiker zijn/haar locatie
const start = {
  latitude: 52.370216,
  longitude: 4.895168
}

// Locatie van het restaurant
const end = {
  latitude: 52.370323,
  longitude: 5.215608
}

// Bereken de afstand in meters tussen het start en eindpunt, gebruiker en restaurant. Dit moet je per restaurant doen
let distance = haversine(start, end, {unit: 'meter'}) / 1000;

// Hiermee rond je het getal af op 2 decimalen
console.log(distance.toFixed(2))

// function compare(a, b) {
//   if ( a.distance < b.distance ){
//     return -1;
//   }
//   if ( a.distance > b.distance ){
//     return 1;
//   }
//   return 0;
// }


// restaurants.sort(compare)

const restaurants = [
  {   "id": 1,
      "name": "Namaste",
      "location": {
        lat: 52.326671,
        long: 4.912476
      }
    },
    {
      "id": 2,
      "name": "Queen R",
    },
    {
      "id": 3,
      "name": "Ramen ya",
    },
    {
      "id": 4,
      "name": "Poke",
    },
    {
      "id": 5,
      "name": "Istanbul",
    },
    {
      "id": 6,
      "name": "Saigon",
    },
    {
      "id": 7,
      "name": "Pho 91",
    },
    {
      "id": 8,
      "name": "Thai",
    }, {
      "id": 9,
      "name": "Grill",
    }, {
      "id": 10,
      "name": "Pizzeria",
    }
  ];


    app.get('/', (req, res) => {
      res.send('<h1>Restaurant</h1>')
    })

    app.get('/about', (req, res) => {
      res.render("about")
    })

    //listen on port 3000
    app.listen(port, () => console.info(`listening on port ${port}`))