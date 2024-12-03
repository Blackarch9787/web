const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static('public'));

app.get('/data', (req, res) => {
    res.send('<html><body><h1>Hi,This is Mr.David in front of you !!!!....</h1></body></html>');
}); 

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
