const express = require('express')

const app = express()

const PORT = 8080

app.get('/', (req, res) => {
    res.send(`<h1>99 Bottles of beer on the wall</h1><a href='/98'>Take One Down</a>`)
})

app.get('/0', (req, res) => {
    res.send(`<h1>Down to the ground</h1><a href='/'>Start Over</a>`)
})

app.get('/bugs', (req, res) => {
    res.send(`<h1>99 little bugs in the code</h1>
                <p>99 little bugs</p>
                <p>take one down</p>                
                <a href='/bugs/98'>patch it around</a>`)
})

app.get('/bugs/:number_of_bugs', (req, res) => {
    let random = Math.random()
    if (random > 0.1){
        res.send(`<h1>Theres ${req.params.number_of_bugs} little bugs in the code.</h1><a href='/bugs/${req.params.number_of_bugs - 1}'>Take One Down</a>`)
    } else {
        res.send(`<h1>Theres ${req.params.number_of_bugs} little bugs in the code.</h1><a href='/bugs/${Number(req.params.number_of_bugs) + Math.floor(Math.random()*10)}'>Take One Down</a>`)
    }
    
})

app.get('/:number_of_bottles', (req, res) => {
    res.send(`<h1>Theres ${req.params.number_of_bottles} Bottles of beer on the wall.</h1><a href='/${req.params.number_of_bottles - 1}'>Take One Down</a>`)
})

app.listen(PORT, ()=>{
    console.log('starting server at port: ' + PORT)
})

