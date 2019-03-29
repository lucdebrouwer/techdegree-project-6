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


app.listen(3000, () => {
    console.log("The application is running on localhost:3000");
});