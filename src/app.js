const express = require('express')
require('dotenv').config()
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')


const todoRoute = require('./routes/TodoRoutes');
const UserRoute = require('./routes/UserRoutes');

const app = express()


//prevent cors error
app.use(cors())

//middlewares
//Is a development aid
app.use(morgan("dev"));
//understand json objects
//app.use(express.json());

app.use(bodyParser.json());


//understand the fields of a form that come per POST
app.use(express.urlencoded());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/todo', todoRoute);
app.use('/api/auth', UserRoute);


module.exports = app;