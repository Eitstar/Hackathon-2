const exp = require('express');
const app = exp();
const fs = require('fs')
const bp = require('body-parser')
const db = require('./modules/db.js')
app.get('/', function(req, res) {

    res.send('Hello Get mode')
})

app.post('/', (req, res) => {
    res.send('Hello POST mode')

})




app.listen(5555, () => console.log('Example app listening on port 5555!'));