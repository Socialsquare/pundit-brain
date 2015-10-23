var express = require('express'),
    bodyParser = require('body-parser');
var app = express();
 
app.use(bodyParser.json());

app.get('/wisdom', function (req, res) {
  var question = req.body.question || null;
  if(question) {
    console.log('question:', question);
    if(question.toLowerCase().indexOf('answer to the ultimate question') > 0) {
      res.send({
        code: 'return 42;'
      });
    } else if(question.toLowerCase().indexOf('workdays') > 0) {
      res.send({
        code: 'return 3;'
      });
    } else {
      res.status(404).send({
        error: 'Could not find wisdom that matches the question.'
      });
    }
  }
});
 
app.listen(3000, function() {
  var port = this.address().port;
  console.log('Listening on port', port);
});
