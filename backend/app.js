const express = require('express');
const app = express();

// console.log('process.env.MYSQL_HOST', process.env.MYSQL_HOST);
// MYSQL_PORT=5432

// create connection to MySQL
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'original_dev_test'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});