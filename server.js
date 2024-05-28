const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

// Middleware to serve static files
app.use(express.static('public'));

// Middleware to parse JSON bodies
app.use(express.json());

// Route to GET a random quote
app.get('/api/quotes/random', (req, res) => {
    const randomQuote = getRandomElement(quotes);
    res.send({ quote: randomQuote });
});

// Route to GET all quotes, or a specific person's quotes if there is a query
app.get('/api/quotes', (req, res) => {
    const personQuery = req.query.person;
    if (personQuery) {
        const personQuotes = quotes.filter(element => element.person === personQuery);
        res.send({ quotes: personQuotes });
    } else {
        res.send({ quotes: quotes });
    }
});

// Route to POST a new quote
app.post('/api/quotes', (req, res) => {
    console.log('Request body:', req.body); // Log the request body
    const newQuote = req.body.quote;
    const newPerson = req.body.person;

    if (newQuote && newPerson) {
        const newObject = { quote: newQuote, person: newPerson };
        quotes.push(newObject);
        res.status(201).send(newObject);
    } else {
        res.status(400).send({ error: 'Both quote and person fields are required' });
    }
});

// Make the server listen to the right port
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
