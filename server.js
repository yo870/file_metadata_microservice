// init project
var express = require('express');
var app = express();
var multer  = require('multer')

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.set("view engine", "ejs");

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.render("index");
});

app.post("/", multer().single('file_upload'), function (request, response, next) {
  if (request.file) {
    response.send({size: request.file.size})
  } else {
    response.redirect("/");
  }
});

app.use(function(req,res,next) {
  res.redirect("/");
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
