// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const routes = require('./controllers/index')
const hbs = exphbs.create({});

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3306;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
// Sets up the routes
app.use(routes);

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});
