const express = require('express')
const app = express()


app.listen(3000, ()=> {
    console.log('Creé un servidor web')
})


app.get('/Alexander_Benavides',(req, res)=> {
    res.send('<h1>Hola soy una app de finanzas</h1>')

})

app.get('/gastos',(req, res)=> {
    res.send('<h1>Hola soy una app de finanzas</h1>')

})