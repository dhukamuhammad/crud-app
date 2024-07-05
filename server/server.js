const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
const port = 5000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crud_app',
});

connection.connect((err) => {
  if (err) {  
    console.error('Error connecting to MySQL database: ', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.use(bodyParser.json());
app.use(cors())


app.get('/items', (req, res) => {
  const query = 'SELECT * FROM items';

  connection.query(query, (err, results) => {
    if (err) {
      res.send("error")
    } else {
      res.json(results);
    }
  });
});

app.post('/items', (req, res) => {
  const { name, number } = req.body;

  const query = 'INSERT INTO items (name, number) VALUES (?, ?)';
  connection.query(query, [name, number], (err, results) => {
    if (err) {
      res.send("error")
    } else {
      res.json(results);
    }
  });
});

app.put('/items/:id', (req, res) => {
  const itemId = req.params.id;
  const { name, number } = req.body;
  

  const query = 'UPDATE items SET name = ?, number = ? WHERE id = ?';
  connection.query(query, [name, number, itemId], (err, results) => {
    if (err) {
      res.send("error")
    } else {
      res.json(results);
    }
  });
});

app.delete('/items/:id', (req, res) => {
  const itemId = req.params.id;

  const query = 'DELETE FROM items WHERE id = ?';
  connection.query(query, [itemId], (err, results) => {
    if (err) {
      res.send("error")
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
