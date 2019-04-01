# A static NodeJS and Express Portfolio site
This project is written to display the projects I have written so far throughout the Treehouse fullstack JavaScript techdegree. This project focusses on using NodeJS and Express to serve a static portfolio website.

I made a few changes to the styles to make it look more appealing.
 * Most of the headers, anchors have an orange hover effect
 * Font family changed to Century and Century gothic
 * about me.p background and live links are now blue of color instead of the default black color. 

Please note that accessing projects start at /project/0 and not at /project/1. When navigating to a project that doesn't exist, the express application will render a custom 404 page saying the ID is missing or is wrong. The projects array starts at 0 instead of at 1 for development convenience. 

## Installation
Make sure you're in a right directory, open up a command prompt that can run git commands.
Clone the project.
```
git clone https://github.com/lucdebrouwer/techdegree-project-6.git

```
## Serving the application
Now you can use [npm](https://www.npmjs.com/) to install the necessary dependencies.

```
npm install
```
To run the application in production 
```
npm start
```

To run the application in development, this will run an instance of nodemon.
```
npm run dev
```
