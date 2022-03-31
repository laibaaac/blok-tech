const haversine = require('haversine');
const express = require('express');
const res = require('express/lib/response');
const app = express();
const port = 3000;
const dotenv = require('dotenv').config();
const { MongoClient }=require('mongodb');
const { ObjectID } = require('mongodb');



const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

let db = null;

app.use(express.static('public'))
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
    }
  ];

  
    app.get('/', (req, res) => {
      res.send('<h1>Restaurant</h1>')
    })

    app.get('/about', (req, res) => {
      res.render("about")
    })
    
    //app.get ('/restaurant/:id', (req, res) =>{
      //const restaurant = restaurant.find(element =>element.id == id)
    //  const id = req.params.id
  


    /*****************************************************
    * Connect to database
    ****************************************************/
    asyncfunctionconnectDB() {​
    consturi = process.env.DB_URI;
    constclient = newMongoClient(uri, {​
    useNewUrlParser:true,
    useUnifiedTopology:true,
    }​);
    try {​
    awaitclient.connect();
    db = client.db(process.env.DB_NAME);
    }​ catch (error) {​
    throwerror;
    }​
    }​

  app.get('/', async (req, res) => {
      // GET LIST OF MOVIES
      const query = {"location": "amsterdam"}
     // const options = {sort : {location:amsterdam}}
      //hier word er soort van gefilterd
      const restaurant = await db.collection('restaurant').find(query, options).toArray();
  
      // RENDER PAGE
     // const title  = (movies.length == 0) ? "No movies were found" : "Movies";
     // res.render('', {title, movies});
  });
    
  app.get('/movies/:movieId', async (req, res) => {

    // FIND restaurant
    const id = req.params.restaurantId;
    const query = {_id: ObjectId(req.params.restaurantId)}
    const restaurant = await db.collection('restaurant').findOne(query);

    // RENDER PAGE
    const title = `Moviedetails for ${movie.name}`;
    res.render('moviedetails', {title, movie});
});

  app.post('/restaurant/add', async (req, res) => {
    // ADD 
    let restaurant = {
        slug: slug(req.body.name),
        name: req.body.name, 
       location: req.body.location
    };
    await db.collection('restaurant').insertOne(movie);
    const query = {"location": "amsterdam"}
    const options = {sort : {location:amsterdam}}
    //hier word er soort van gefilterd
    const restaurant = await db.collection('restaurant').find(query, options).toArray();





    app.post ('/ditistijdelijk', (req, res) => {
      console.log(req.body);
      const restaurant = {
        name: req.body.eenvariabele

      }
      restaurant.push(restaurant)
    
      title = "hetisgelukt"
      res.render('restaurant', ('hetisgelukt', {restaurant}));
    })


    app.use ((req, res, next) => {
      res.status(404).send('Error 404: file not found')
    });
    //dit gebeurdt er wanneer ik een pagina heb die niet in mijn route ontstaat


    app.get('/restaurant/add', (req, res) =>{
      const title = "Add a new restaurant";
      res.render('addrest', {title});
    });

    async function connectionDB() {
      const uri = process.env.DB_URI;
    }
    /*** Start webserver */
    app.listen(port, ()=> {
      connectionDB().then => console.log("we have a connection to mongo!");
      console.info(`listening on port ${port}`)
    });
