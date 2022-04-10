/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const mongoose = require("mongoose");

const BarSchema = new mongoose.Schema ({
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
 
 const Bars = mongoose.model("Bars", BarSchema);
 
 module.exports = Bars;