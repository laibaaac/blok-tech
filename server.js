const express = require('express');
const app = express ();
const port = 3000;

const restaurants = [
    {
      "id":1, 
      "name": "Namaste",
    }, 
    {
      "id":2, 
      "name": "Queen R",
    }, 
    {
      "id":3, 
      "name": "Ramen ya",
    }, 
    {
      "id":4, 
      "name": "Poke",
    }, 
    {
      "id":5, 
      "name": "Istanbul",
    }, 
    {
      "id":6, 
      "name": "Saigon",
    }, 
    {
      "id":7, 
      "name": "Pho 91",
    }, 
    {
      "id":8, 
      "name": "Thai",
    },  {
      "id":9, 
      "name": "Grill",
    },  {
      "id":10, 
      "name": "Pizzeria",
    }, 
  ;

app.get('/', (req, res) => {
    res.send('<h1>Restaurant</h1>')
  })

const restaurants = [
];
  
app.get('/test', (req, res) => {
    res.render
} )

//listen on port 3000
app.listen(port, () => console.info (`listening on port ${port}`))