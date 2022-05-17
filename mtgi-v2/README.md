# MTG Inventory v2

Back and better than ever.

## Instructions

You'll need a browser (I recommend Google Chrome), and Node.js installed on your machine.

Open a terminal and clone this repo into a folder of your choosing.

Once cloned, navigate to this application via `cd mtgi-v2` in the terminal.

Now run `npm install` in the terminal to download the necessary dependencies.

MTG Inventory is ready to go!

To boot up the local server/database, run `npx json-server --watch data/db.json --port 8000` next.

Now open a second terminal and start up the interface with `npm start`.

The application will be found at `http://localhost:3000/` in your browser.

The Inventory is your collection of cards.

It will have some sample cards at first.

To delete a card, click on the card from the Inventory list, and then click the **Delete** button at the bottom of the card information.

To add new cards, click **New Card** and fill in the required information.

When ready, hit **Submit**.

Your new card will now be in the Inventory.

Add more cards and watch your collection grow.

Use the **Search** and **Sort** features to tailor which cards appear and in which order.

Some stretch features to watch out for:

- Decks!!
