const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.render('index', {title:'my express app', greeting:'hello'})
})
    
module.exports = app