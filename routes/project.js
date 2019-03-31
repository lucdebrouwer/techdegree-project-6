const express = require('express');
const router = express.Router();

const app = express();
const { data } = require('../data/data.json');
const { projects } = data; 

router.get('/:id', (req, res, next) => {

    const projectId = req.params.id;
    if(!projectId || isNaN) {
        const error = new Error('ID is missing!');
        error.status = 400;
        next(error);
    }
    app.locals.project = projects[projectId];
    res.render('project', app.locals.project);
    

});

module.exports = router;