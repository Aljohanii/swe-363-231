const express = require('express');
const app = express();

// Import routers
const homeRouter = require('./homeRouter');
const contactRouter = require('./contactRouter');
const arRouter = require('./arRouter');
const thankRouter = require('./thankRouter');
const sourses = require('./sourses');

app.listen(5000, () => {
    console.log("Server running on port 5000");
});

// Serve static files from the root directory
app.use(express.static('./'));

// Use routers
app.use('/', homeRouter);
app.use('/', contactRouter);
app.use('/', arRouter);
app.use('/', thankRouter);
app.use('/', sourses);
// Catch-all for 404 Not Found responses
app.all('*', (req, res) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.use(express.urlencoded({ extended: true }));


app.post('/submit-form', (req, res) => {
    // Log the received form data to the console
    console.log('Form data received:', req.body);
    
    // Process the form data here (for now, we're just logging it)

    // Respond to the client with a confirmation message
    res.send('Form submission processed.');
});
