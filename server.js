const express = require('express');
const path = require('path');
const app = express();

// Middleware to parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Custom middleware for form processing
const processForm = (req, res, next) => {
    // Here you can handle the form data
    console.log('Form data received:', req.body);
    
    // After processing, send a response to the client
    res.send('Form submission processed.');
};

app.listen(5000, () => {
    console.log("Server running on port 5000");
});

// Serve static files from the root directory
app.use(express.static('./'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'swe363.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'contact_us.html'));
});


app.get('/ar', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'swe363-Ar.html'));
});

app.get('/thank', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'thankYou.html'));
});

// Route to handle form submission
app.post('/submit-form', processForm);

// Catch-all for 404 Not Found responses
app.all('*', (req, res) => {
    res.status(404).send('<h1>Page not found</h1>');
});
