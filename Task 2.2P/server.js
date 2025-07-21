const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

// Sum
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Invalid numbers provided.');
    }

    const sum = num1 + num2;
    res.send(`Sum: ${num1} + ${num2} = ${sum}`);
});

// Multiply
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/multiply', (req, res) => {
    const { num1, num2 } = req.body;
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).send('Invalid input');
    }

    const result = num1 * num2;
    res.json({ result });
});

// Subtraction
app.post('/subtract', (req, res) => {
    const { num1, num2 } = req.body;

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).send('Invalid input');
    }

    const result = num1 - num2;
    res.json({ result });
});

// Division
app.post('/divide', (req, res) => {
    const { num1, num2 } = req.body;

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).send('Invalid input. Both values must be numbers.');
    }

    if (num2 === 0) {
        return res.status(400).send('Cannot divide by zero.');
    }

    const result = num1 / num2;
    res.json({ result });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
