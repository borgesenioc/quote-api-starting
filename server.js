const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

//add a route to GET a random quote
app.get('/api/quotes/random', (req, res, next) => {
    const randomQuote = getRandomElement(quotes);
    res.send(randomQuote);
});

//add a GET

//add a POST

//add a get per specific author or ID

//  Make the server listen to the right port
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});