let express = require('express');
let app = express();
const fileUpload = require('express-fileupload');
let bodyParser = require("body-parser");
let db = require("./db/mongo")
let routes = require('./routes/index')

app.use(express.static('public'));
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// Définition des paramètres du serveur.
let hostname = 'localhost';
let port = 3000;

app.use('/', routes)

// connexion à la db
db.connectedDb()

// Démarrer le serveur 
app.listen(port, hostname, () => {
    console.log("Listening on http://" + hostname + ":" + port + "\n");
});