const express = require('express');
const app = express();
const PORT = 3000;

// Root endpoint to check API is running
app.get('/', (req, res) => {
    res.status(200).send("API is working");
});

// GET Endpoint for adding two numbers
app.get('/add', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send("Invalid input");
    }

    const sum = a + b;
    res.send(`The sum of ${a} and ${b} is: ${sum}`);
});
