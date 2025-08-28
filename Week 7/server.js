var express = require("express")
var app = express()
const http = require('http').createServer(app); // Create HTTP server from app
const io = require('socket.io')(http); // Attach socket.io to server

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var port = process.env.PORT || 3000;
http.listen(port, () => { // <-- use http.listen
    console.log("App listening on: " + port)
})

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    setInterval(() => {
        socket.emit('number', parseInt(Math.random() * 10));
    }, 1000);
});

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
