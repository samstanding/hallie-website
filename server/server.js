const express = require('express');
require('dotenv').config();

const app = express();

const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

const userRouter = require('./routes/user.router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(sessionMiddleware);

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/user', userRouter);

app.use(express.static('build'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> {
    console.log('listening on port: ', PORT);
})
