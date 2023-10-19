import express, { NextFunction, Request, Response } from 'express';
import session from 'express-session';

// eslint-disable-next-line @typescript-eslint/no-var-requires
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

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(`ERREUR : ${err.message}`);
    res.render('error', { err });
});

app.listen(port, () => {
    console.log(`Server local démarré : http://localhost:${port}`);
});
