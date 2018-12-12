module.exports = {
  client: 'mysql2',
  connection: {
    host: 'localhost',
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  }
};

/*
const mysql2 = require('mysql2');
const connection = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password',
  database: 'overment'
});

connection.query(
  'SELECT * FROM `applications`;',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);
*/