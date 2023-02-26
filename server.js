// Dependencies
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const routes = require('./controllers/index');
const sequelize = require('./config/connection');


// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3306;

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


// Sets up the routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
