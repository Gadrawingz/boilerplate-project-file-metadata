let express = require('express');
let cors = require('cors');
require('dotenv').config()

// PREPARING USAGE OF MULTER PACKAGE
const multer = require('multer');
const upload = multer();

let app = express();

// Getting started
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// MY STUFFS GOES HERE
app.post("/api/fileanalyse", 
upload.single("upfile"), 
function (request, response) {
  response.json({
    name: request.file.originalname,
    type: request.file.mimetype,
    size: request.file.size,
  });
});

// UNTOUCHABLE CODE
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});