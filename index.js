const express = require('express')
const app = express()
const logger = require('./middleware/Logger')
const helmet = require('helmet')
const morgan = require('morgan')
const config = require('config')
const books = require('./routes/books')
const home = require('./routes/home')
const auth = logger.auth

app.use(express.json())
app.use(express.urlencoded({extended: true})) 
app.use(express.static('frontend'))
app.set('view engine', 'pug')
//app.use(log,auth)
app.use(helmet())
app.use('/api/books',books)     
app.use('/',home)

if(app.get('env') === 'development'){
    app.use(morgan('tiny'))
    console.log('morgan ishlayapti...');
}

console.log(app.get('env'))

console.log(config.get('name'))
console.log(config.get('mailserver.host'))
console.log(config.get('mailserver.password'))


    
const port = process.env.PORT || 5000


app.listen(port, () => { 
    console.log(`${port} eshitilyapti`)
})
