var http = require('http');
var fs = require('fs');


app = http.createServer(function(req, res) {
    var statusDesired = req.url.split('/')[1];

    if( http.STATUS_CODES[statusDesired] === undefined ) {
      statusDesired = 400;
    }
    res.statusCode = statusDesired;

    var filename = 'images/' + statusDesired;

    fs.exists(filename, function(exists) {
      if( exists ) {
        res.setHeader("Content-Type", "image/jpeg");
        fs.createReadStream(filename).pipe(res);
      }
      else {
        res.setHeader('Content-Type', 'text/plain');
        res.write('');
        res.end();
      }
    })
  });

var port = process.env.PORT || 5000;

app.listen(port);

