const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

//add a route to GET a random quote
app.get('/api/quotes/random', (req, res, next) => {
    const randomQuote = getRandomElement(quotes);
    res.send({quote: randomQuote});
});

//add a GET for all quotes, or a single person if there is a query 
app.get('/api/quotes', (req, res, next) => {
    const personQuery = req.query.person;

    if (personQuery) {
        const personQuotes = quotes.filter(element => element.person === personQuery);
        if (personQuotes.length > 0) {
            res.send({ quotes: personQuotes}); // return a specific person's quotes
        } else {
            res.send({ quotes: [] }); // returns an emptyArray
        };
    } else {
        res.send({ quotes: quotes }) // returns all quotes
    }
});


//  Make the server listen to the right port
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});