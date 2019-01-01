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
let port = process.env.PORT;
if (port == null || port == ""){
    port = 3000;
}
app.listen(port);