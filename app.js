// Tell our application to use express
const express = require('express');
const app = express();

// Tell our application to use a static folder for the client.
app.use('/static', express.static('public'));

// Tell our application to use the pug templating engine
app.set('view engine', 'pug');


// Define our main routes
const mainRoutes = require('./routes');
const projectRoutes = require('./routes/project');

// Tell our application to use the routes we just defined
app.use(mainRoutes);
app.use('/project', projectRoutes);

app.use(function(req, res, next)  {
    const error = new Error("Not found!");
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.locals.error = error;
    res.status(error.status || 500);
    res.render('error');
});


app.listen(3000, () => {
    console.log("The application is running on localhost:3000");
});