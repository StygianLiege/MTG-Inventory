const mtg = require('mtgsdk');

const mtgController = {};

mtgController.findCard = (req, res, next) => {
  mtg.card.where({ name: 'Archangel Avacyn' }).then((results) => {
    console.log(results);
  });
};
// partial name match
// mtg.card.where({ name: 'Archangel Avacyn' }).then((results) => {
//   console.log(results);
// });

// exact name match
// mtg.card.where({ name: '"Archangel Avacyn"' }).then((results) => {
//   console.log(results);
// });

module.exports = mtgController;
