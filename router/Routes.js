const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
// Starting our app.
const app = express();
// require('dotenv').config({path:'../.env'})

const port = process.env.PORT || 8000

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

console.log(connection)

app.get('/', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {
      if (err) throw err; 

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT city, name, description FROM placeactivity UNION SELECT city, drinks, descriptionDrinks FROM activity;', 
    function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;
      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});



// Creating a GET route that returns data from the 'users' table.
app.get('/activity', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {
      if (err) throw err; 

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT * FROM activity', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;
      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});

app.get('/placeActivity', function (req, res) {
  connection.getConnection(function (err, connection) {
    if (err) throw err;
  connection.query('SELECT * FROM placeActivity', function (error, results, fields) {
    if (error) throw error;
    res.send(results)
  });
});
});



// Starting our server.
app.listen(port, () => 
 console.log(`Go to ${port} so you can see the data.`)
);