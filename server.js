const fibonacci = require('fibonacci')
const express = require('express')

const app = express()

const port = 8080



app.get('/fibonacci',(req,res)=>{
    const n = parseInt(req.query.n)
    const nthFibonacci = fibonacci.iterate(n)
    res.send(`The ${n}th fibonacci number is: `+nthFibonacci.number)
})



app.listen(port,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('http://localhost:8080/fibonacci?n=6')
    }
})