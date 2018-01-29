// init project
var express = require('express');
var app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.set("view engine", "ejs");

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.render("index");
});

app.get("/whoami", function (request, response) {
  
var ip = request.headers['x-forwarded-for'].split(",")[0] || 
     request.connection.remoteAddress || 
     request.socket.remoteAddress ||
     (request.connection.socket ? request.connection.socket.remoteAddress : null);  
    
var language = request.headers['accept-language'].split(",")[0];
  
var software = request.headers['user-agent'].split("(")[1].split(")")[0];
  
  response.send(
    {
      "ipaddress": ip,
      "language": language,
      "software": software
    }
  );

});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
