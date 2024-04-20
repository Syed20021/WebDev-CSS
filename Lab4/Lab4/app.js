//- Kyan M, Syed Hassnat A
//- Lab 4
const express = require('express');
const pug = require('pug');
const animal = require('./routes/animal.router');
const session = require('express-session');
const methodOverride = require('method-override');

require('dotenv').config();

// initialize method
const app = express();
// use port from env or default to 3000 if not set
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method')); 
// session middleware:
app.use(session({
    secret: process.env.SESSION_SECRET, 
    resave: false,
    saveUninitialized: false
}));

// Making session available in Pug templates
app.use((req, res, next) => {
    res.locals.session = req.session;
    next();
});

// Clear session messages after rendering
app.use((req, res, next) => {
    if (req.session.successMessage) {
      res.locals.successMessage = req.session.successMessage;
      req.session.successMessage = null;
    }
    next();
});
  
// configure routes
app.use('/', animal);

// setup template engine
app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");


// Listent on port
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})
