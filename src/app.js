import express from 'express'
import indexRoutes from './routes/index.routes'
const  exphbs =  require('express-handlebars')
import path from 'path'
const morgan = require('morgan')
const app = express()

//
console.log(path.join(__dirname, 'views'));
app.set('views',path.join(__dirname, 'views'));
app.engine('.hbs',exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))     
app.set('view engine', '.hbs')
//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
//Routes
app.use(indexRoutes)
//static failes
app.use(express.static(path.join(__dirname,"public")))

export default app;