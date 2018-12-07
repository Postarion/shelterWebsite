const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const routes = require('./routes/index');


const app = express();


app.set('views', path.join(__dirname, 'views'));
//możliwość renderowania widoku 
app.set('view engine', 'pug');
//przetrzymywanie plików statycznych jak css czy obrazki
app.use(express.static(path.join(__dirname, 'public')));

//obsługa danych z wykorzystaniem formularzy metodą post
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use(session({
  secret: 'dog hero',
  resave: false,
  saveUninitialized: true,
  cookie: {}
}));

app.use(flash());

app.use('/', routes);

module.exports = app;

/*Metody:
POST - zapisanie nowych danych
PUT - przesyłanie i zmiana istniejących danych
PATCH - aktualizacja istniejących danych
DELETE - usunięcie danych
*/