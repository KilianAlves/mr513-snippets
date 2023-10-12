import express from 'express';
import session from 'express-session';

require('dotenv').config()
var routes = require('./snippets/snippets.routes');

const app = express();
app.use('/', routes);
const port = process.env.port;
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(session({
    secret: process.env.session_secret || '', // ajoutez la variable d'environnement correspondante au fichier .env
    saveUninitialized: false,
    resave: false
}));

declare module "express-session" {
    interface SessionData {
    }
}

app.listen(port, () => {
    console.log(`Server local démarré : http://localhost:${port}`);
});