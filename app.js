var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

// Provide form to search for artists
app.get("/", function(req, res){
  res.render("landing");
});

// render search results from Spotify API
app.get("results", function(req, res){
})

app.listen(8000, function(){
  console.log("Look at 8000!")
})
