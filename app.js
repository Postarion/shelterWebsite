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

app.use((req, res, next)=>{
  res.status(404).render('er404');
  next();
});

const mysql2 = require('mysql2');
const connection = mysql2.createConnection({
  host: 'localhost',
  port: 3030,
  user: 'root',
  password: 'Password',
  database: 'overment'
});

connection.connect((err) => {
  if(err){throw err;}
  console.log('MySql Connected...')
});



//Create DB
app.get('/createdb', (req, res) =>{
  let sql = 'CREATE DATABASE nowedb';
  connection.query(sql, (err, result) =>{
    if(err){throw err;}
    console.log(result);
    res.send('DB created...');
  });
});

//stwórz bazędanych i zobacz gdzie będzie
module.exports = app;

/*Metody:
POST - zapisanie nowych danych
PUT - przesyłanie i zmiana istniejących danych
PATCH - aktualizacja istniejących danych
DELETE - usunięcie danych
*/

/* Brak połączenia z MySQL
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YourRootPassword';
-- or
CREATE USER 'foo'@'%' IDENTIFIED WITH mysql_native_password BY 'bar';
-- then
FLUSH PRIVILEGES;
*/