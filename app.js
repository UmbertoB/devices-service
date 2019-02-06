const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const routers = require('./src/routers');
const tokenGuard = require('./src/middlewares/token-guard');
const app = express();
require('dotenv').load();

const port = process.env.SERVER_PORT;


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'));
app.use(cors());


app.use(tokenGuard());

routers(app);


app.listen(process.env.PORT || port, () => {
    console.log(`Server Running ${process.env.NODE_ENV === 'production' ? '(in production)' : ''}${port ? 'on Port ' + port : ''}`);
});