const pg = require('pg');
const exp = require('express');
const bp = require('body-parser');
const fs = require('fs');
const cors = require('cors');
// const { Client } = require('pg');
const app = exp();
app.use(exp.json());


app.use(bp.json())


const urlencodedParser = bp.urlencoded({ extended: false })
app.use(cors());

const cs = 'postgres://postgres:password369@localhost:5432/virtualride';
const client = new pg.Client(cs);

// const conString = "postgres://YourUserName:YourPassword@YourHostname:5432/YourDatabaseName";

app.get('/homepage', (req, res) => {
    client.connect()
        .then(() => console.log("Connected successfully"))
        .then(() => client.query("select country_name from countries"))
        .then(results => console.table(results.rows))
        .then(() => client.query("select continent from currencies"))
        .then(results => console.table(results.rows))
        .catch(e => console.log(e))
        .finally(() => client.end())
    res.setHeader('Content-Type', 'text/plain')

    res.send(results => JSON.stringify(results.rows))

})


app.post('/homepage', urlencodedParser, (req, res) => {
    console.log('post in homepage...')
    console.log(req.body)
    execute(req.body)
    res.send(req.body.curResults)

})

app.listen(5555, () => console.log('Example app listening on port 5555!'));
// app.route('/homepage', (req, res) => {
//     res.send('get in route...')
// })