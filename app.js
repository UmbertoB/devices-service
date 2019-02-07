const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const routers = require('./src/routers');
const socket = require('./src/socket');

const tokenGuard = require('./src/middlewares/token-guard');

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

require('dotenv').load();

const port = process.env.SERVER_PORT;


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'));
app.use(cors());


app.use(tokenGuard());

routers(app);

socket(io, app);


http.listen(process.env.PORT || port, () => {
    console.log(`Server Running ${process.env.NODE_ENV === 'production' ? '(in production)' : ''}${port ? 'on Port ' + port : ''}`);
});

