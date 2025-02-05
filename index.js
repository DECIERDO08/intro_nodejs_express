const express = require('express');
const app = express();
const port = 3000;

//Define a route for the home page
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/about', (req, res) => {
    res.send('About Us');
});

//Serve static files from the "public" holder
app.use(express.static('public'));

app.post('/submit', (req, res) => {
    const data = req.body;
    res.send(`Received: ${JSON.stringify(data)}`);
});

//Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
