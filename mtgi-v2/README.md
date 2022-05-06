# MTG Inventory v2

Back and better than ever.

## Instructions

You'll need a browser (I recommend Google Chrome), and Node.js installed on your machine.

Open a terminal and clone this repo into a folder of your choosing.

Once cloned, run `cd mtgi-v2` to navigate to the application.

Next, run `npm install` to download the necessary dependencies.

MTG Inventory is ready to go!

To boot up the local server/database, run `npx json-server --watch data/db.json --port 8000`

Now open a second terminal and start up the interface with `npm start`

The application will be found at `http://localhost:3000/`.

The inventory will be empty at first, click 'Add Card' to navigate to the 'New Card' form.

Fill in the required information for each card.

Watch your collection grow.

Some stretch features to watch out for:

- Decks
- Sorting
