
# Quote API Project

## Description
This project is a Quote API that lets users fetch and add quotes via an interactive web interface. Built with Express.js, it includes endpoints for retrieving random, all, or author-specific quotes and a form for adding new quotes.

## Features
- Fetch a random quote
- Fetch all quotes
- Fetch quotes by a specific author
- Add a new quote

## Setup
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node server.js
   ```

## Usage
- Navigate to `http://localhost:4001/` to fetch and view quotes.
- Navigate to `http://localhost:4001/add-quote.html` to add a new quote.

## Technologies Used
- Node.js
- Express.js
- HTML/CSS

## Directory Structure
```
quote-api-starting/
├── data.js
├── node_modules/
├── package.json
├── public/
│   ├── index.html
│   ├── add-quote.html
│   └── styles.css
├── server.js
├── utils.js
└── package-lock.json
```

## License
This project is licensed under the ISC License.
