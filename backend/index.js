const express = require('express')
const app = express()
const router = require('./routes/router')



app.listen(3000, ()=> {
    console.log('Creé un servidor web')
})


app.use('/api',router)