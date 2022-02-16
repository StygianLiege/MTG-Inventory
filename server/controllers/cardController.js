const Card = require('../models/cardModel');
const path = require('path');
const mongoose = require('mongoose');
//// NOT SURE WHAT THE TWO BELOW ARE, THEY AUTOPOPULATED ON SAVE
//const { userInfo } = require('os');
//const { ModuleFilenameHelpers } = require('webpack');

const cardController = {};

// retrieve all cards from DB
cardController.getAllCards = (req, res, next) => {
  Card.find({}, (err, cards) => {
    if (err) return next(err /* finish this */);
    else {
      res.locals.cards = cards;
      return next();
    }
  });
};
// add card to DB
cardController.addCard = (req, res, next) => {
  Card.create(
    {
      /* finish this */
    },
    (err, card) => {
      if (err) return next(err /* finish this */);
      else {
        res.locals.cards = card;
        return next();
      }
    }
  );
};

// delete card from DB
cardController.deleteCard = (req, res, next) => {
  Card.deleteMany(
    {
      /* finish this */
    },
    (err, card) => {
      if (err) return next(err /* finish this */);
      else {
        res.locals.cards = card;
        return next();
      }
    }
  );
};

module.exports = cardController;
