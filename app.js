const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

// ROUTES
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/index', (req, res) => {
    res.render('index');
});

// PORT
app.listen(3000, () => {
    console.log("Server started...");
});