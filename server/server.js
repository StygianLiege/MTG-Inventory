const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const cardController = require('./controllers/cardController');

const PORT = 3000;

const app = express();

/*
const mongoURI = // insert URI here //
*/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.get('/', cardController.getAllCards, (req, res) =>
  res.status(200).json(res.locals.cards)
);

app.post('/', cardController.addCard, (req, res) =>
  res.status(200).json(res.locals.card)
);

app.delete('/', cardController.deleteCard, (req, res) =>
  res.status(200).json(res.locals.card)
);

// unknown url handler
app.use('*', (req, res) => res.status(404).send('This page does not exist.'));

// error handler
app.use((err, req, res, next) => {
  const defErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occured' },
  };
  const errObj = Object.assign({}, defErr, err);
  return res.status(errObj.status).json(errObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
