const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/formdata')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });

// Define a schema and model for storing form data
const formDataSchema = new mongoose.Schema({
    username: String,
    email: String
});

// Specify the collection name explicitly
const FormData = mongoose.model('FormData', formDataSchema, 'recieved_info');

// Middleware to parse the body of POST requests
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/form.html');
});

// Handle form submission
app.post('/submit', async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;

    console.log('Received data:', { username, email }); // Log received data

    // Create a new document
    const formData = new FormData({
        username: username,
        email: email
    });

    try {
        // Save the document to MongoDB
        await formData.save();
        res.send(`
            <html>
                <body>
                    <h2>Form Data Received and Stored:</h2>
                    <p>Username: ${username}</p>
                    <p>Email: ${email}</p>
                </body>
            </html>
        `);
    } catch (err) {
        console.error('Error saving data to MongoDB:', err); // Improved logging
        res.status(500).send('Error saving data to MongoDB');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
