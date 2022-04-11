/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-catch */
/* eslint-disable no-undef */
const express = require('express');
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line quotes
const res = require('express/lib/response');
const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;
// eslint-disable-next-line no-undef
// eslint-disable-next-line no-unused-vars
const dotenv = require('dotenv').config();
const {
  MongoClient
} = require('mongodb');
const {
ObjectID } = require('mongodb');
const bodyParser = require('body-parser');
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line quotes
const slug = require('slug');
const { application } = require('express');


/********
  middleware
 */
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
let db = null;


app.set('view engine', 'ejs');


//routes

// eslint-disable-next-line quotes
app.get("/", async (req, res) => {
  
  res.render('index');
});


//hier filter ik het formulier op locatie, maar eerst een route geven
app.get("/result", async (req, res) => {

  const userLocation = req.query.location;

  //hier haal ik de restaurant lijst uit mijn database (mongodb)

  const results = await db.collection('restaurant').find({location:userLocation}).toArray();
  
  
  //loggen als het werkt en renderen!
  console.log(results);
  
  res.render("result", {
  
  results
  
  });
  
  });

  //een route maken voor de pagina about (formulier om te gaan filteren)
app.get("/about", async (req, res) => {
  
  res.render("about");

});

//hier maak ik een route voor het invoegen van een nieuwe restaurant!

app.get("/addresto", async (req, res) => {
  res.render("addresto");

});

//hier wordt het nieuwe restaurant gepost (laat zien)
app.post("/addresto", async (req, res) => {

  console.log('even kijken');
  
  let restaurant = {
    slug: req.body.name,
    name: req.body.name, 
    location: req.body.location
  };
  
  await db.collection('restaurant').insertOne(restaurant);

  res.render("addresto");
});
//hier wordt het nieuwe restaurant gepost in mijn database

//hier heb ik mijn api route gemaakt
app.get("/food", (req, res) => {
  res.render("food", { title: "food"});
});

/*****************************************************
 * Connect to database
 ****************************************************/
 // eslint-disable-next-line no-unused-vars
 async function connectDB() {
  const uri = process.env.DB_URI;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  try {
    await client.connect();
    db = client.db(process.env.DB_NAME);
  } catch (error) {
    throw error;
  }
}


// eslint-disable-next-line no-unused-vars
app.use((req, res, next) => {
  res.status(404).send("Error 404: file not found");
});
//dit gebeurdt er wanneer ik een pagina heb die niet in mijn route ontstaat

 
  /*** Start webserver */
app.listen(port, () => {
 connectDB().then( () => console.log("we have a connection to mongo!")) ;
  console.log(`Example app listening on port ${port}`);
});