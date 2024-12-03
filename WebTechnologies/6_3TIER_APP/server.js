const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const User = require('./models/user');
const Marks = require('./models/marks');

const app = express();
mongoose.connect('mongodb://localhost:27017/examDB')
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch((err) => console.error("Failed to connect to MongoDB", err));


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'exam_secret', resave: false, saveUninitialized: true }));

// Dummy answers
const answers = { q1: 'C', q2: 'C', q3: 'B', q4: 'B', q5: 'C', q6: 'A', q7: 'C', q8: 'D', q9: 'C', q10: 'D' };

// Route for Login
app.post('/login', async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if (user && user.password === req.body.password) {
        req.session.user = user;
        res.redirect('/quiz.html');
    } else {
        res.send('Invalid credentials');
    }
});

// Route to submit quiz
app.post('/submit-quiz', (req, res) => {
    if (!req.session.user) return res.redirect('/index.html');

    let score = 0;
    for (let key in answers) {
        if (req.body[key] === answers[key]) score++;
    }

    const mark = new Marks({ username: req.session.user.username, score });
    mark.save();

    res.redirect(`/result.html?score=${score}`);
});

// Display score on result page
app.get('/result.html', (req, res) => {
    if (!req.session.user) return res.redirect('/index.html');
    res.send(`
        <!DOCTYPE html><html><body>
        <h2>Your Score: ${req.query.score}</h2>
        <button onclick="window.location.href='/logout'">Logout</button>
        </body></html>
    `);
});

// Logout
app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/index.html');
});

app.listen(3000, () => console.log('Server started on http://localhost:3000'));
