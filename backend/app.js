const express = require('express');
const app = express();
const cors = require("cors");
const helmet = require("helmet");

const resources = require("./routes/resources");


// create connection to MySQL
const mysql = require('mysql2');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'original_dev_test'
});
db.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

app.use(cors());
app.use(helmet());
app.use("/api", resources(db));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3001, function () {
  console.log('Listening on port 3001!');
});