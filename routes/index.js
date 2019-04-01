const express = require('express');
const router = express.Router();
const path = require('path');
const app = express();

// Use ES6 object destructering to get the right data
const { data } = require('../data/data.json');
const { projects } = data; 

// Set static folder:
app.use(express.static(path.join(__dirname, 'public')));

router.get('/', (req, res) => {
    app.locals.data = data;
    res.render('index', app.locals.data);
})

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;