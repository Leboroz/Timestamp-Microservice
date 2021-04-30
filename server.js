// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});
///views/api/2015-12-25
app.get("/api", (req, res) => {
  const date = new Date();
  
  return res.json({unix: date.getTime(), utc: date.toUTCString()})

});

app.get("/api/:data", function (req, res) {
  const { data } = req.params;
  const date = new Date(data);
  if(Number(data))
  return res.json({unix: Number(data), utc: new Date("2015-12-25").toUTCString()});
  return res.json({unix: date.getTime(), utc: date.toUTCString()})
  
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
