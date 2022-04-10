/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-catch */
/* eslint-disable no-undef */
const express = require("express");
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line quotes
const res = require('express/lib/response');
const app = express();
const router = express.Router();
const port = 3000;
// eslint-disable-next-line no-undef
// eslint-disable-next-line no-unused-vars
const dotenv = require("dotenv").config();
const {
  MongoClient
} = require("mongodb");
const {
  // eslint-disable-next-line no-unused-vars
  ObjectID
} = require("mongodb");
const bodyParser = require("body-parser");
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line quotes
const slug = require('slug');


/********
  middleware
 */
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
let db = null;


app.set("view engine", "ejs");

const filter = { location: " " };
//routes

// eslint-disable-next-line quotes
app.post(`/ `, async (req, res) => {
  console.log(req.body);
  res.render("about");
  
});

app.get('/result', async (req, res) => {
  res.render('result');
});

// const result = await gebruiker.updateOne(filter, updateDoc, options);

app.get('/favoriet', async (req, res) => {
  res.render("favoriet");

});

app.post('/favoriet/delete', async (req, res) => {

});

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

 async function connectionDB() {
    const uri = process.env.DB_URI;
  }
  
  /*** Start webserver */
app.listen(port, () => {
 connectionDB().then( () => console.log("we have a connection to mongo!")) ;
  console.log(`Example app listening on port ${port}`);
});