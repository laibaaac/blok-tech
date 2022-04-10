/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema ({
    slug: {
       type: String,
       required: true
    },
    name: {
       type: String,
       required: true
    },
    location: {
       type: String,
       required: true
    },
 });
 
 const restaurant = mongoose.model("restaurant", restaurantSchema);
 
 module.exports = restaurant;