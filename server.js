const path = require('path');
const express = require('express');
const app = express();


const session = require('express-session');
const exphbs = require('express-handlebars');

const helpers = require('./utils/auth');

const sequelize = require('./config/configuration');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/',(req,res) =>{
  res.render('index');


  })
const routes = require('./controllers');
 app.use(routes);




sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening @http://localhost:3001'));
});