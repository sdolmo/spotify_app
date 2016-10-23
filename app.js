var express = require("express");
var app = express();
var bodyParser = require("body-parser"); //Do blog post on body parse and what is middleware
var request = require("request");

app.use(bodyParser.urlencoded({extended: true})); //what does this do?
app.set("view engine", "ejs"); //sets all view extensions to ejs

// Provide form to search for artists in landing.ejs and render in root route
app.get("/", function(req, res){
  res.render("landing");
});

// render search results from Spotify API in results.ejs
app.get("/results", function(req, res){
  var query = req.query.search;
  var url = "https://api.spotify.com/v1/search?q=" + query + "&type=album";
  request(url, function(error, response, body){
        if(!error && response.statusCode == 200) {
          var data = JSON.parse(body); // parse the body response to access the object rather than a string
          res.render("results", {data: data});
        };
    });
})

app.listen(8000, function(){
  console.log("Look at 8000!")
})
