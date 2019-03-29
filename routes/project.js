const express = require('express');
const router = express.Router();

const app = express();
const { data } = require('../data/data.json');
const { projects } = data; 

router.get('/:id', (req, res) => {
    app.locals.project = projects[req.params.id];
    res.render('project', app.locals.project);
})

module.exports = router;