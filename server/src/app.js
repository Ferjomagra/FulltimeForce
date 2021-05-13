const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')
const MongoClient = require('mongodb').MongoClient
const bodyparser = require('body-parser')

/*I Ejecutando express*/
const app = express()
/*I definiendo puerto*/
app.set('port', process.env.PORT || 8080);
/*F definiendo puerto*/

/*I vistas*/
app.set('views', path.join(__dirname, 'views'));
/*F vistas*/


/*I definiendo pug como leguaje para frontend*/
app.set('view engine', 'pug');
/*F definiendo pug como leguaje para frontend*/


/*I para que pueda leer peticiones desde otro host*/
app.use(cors())
/*F para que pueda leer peticiones desde otro host*/

app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({extended:false}))


/*i Se reuire la ruta de la carpeta server*/
app.use("", require('./routes/commits.routes'))
/*F Se reuire la ruta de la carpeta server*/


//static files
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app;
/*F Ejecutando express*/