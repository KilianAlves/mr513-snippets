"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
require('dotenv').config();
var routes = require('./snippets/snippets.routes');
const app = (0, express_1.default)();
app.use('/', routes);
const port = process.env.port;
app.set('view engine', 'ejs');
app.use(express_1.default.static('public'));
app.use((0, express_session_1.default)({
    secret: process.env.session_secret || '',
    saveUninitialized: false,
    resave: false
}));
app.listen(port, () => {
    console.log(`Server local démarré : http://localhost:${port}`);
});
