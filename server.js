const app = require('./app');

//Ustawienie portu z wykorzystaniem zmiennych srodowiskowych
app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), () => {
  console.log(`Listening on ${ server.address().port }`);
});