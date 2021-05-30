const exp = require('express');
const bp = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const Client = require('pg').Client
    // const path = require('path');
    // const filePath = path.join(__dirname, '/public');;
const app = exp();
app.use(exp.json());


app.use(bp.json())


const urlencodedParser = bp.urlencoded({ extended: false })
app.use(cors());

const client = new Client({
    user: 'postgres',
    password: 'password369',
    host: 'localhost',
    port: '5432',
    database: "virtualride"

})


app.use('/static', exp.static('/.public'))
    // fs.openSync(filePath, '/.public');
    // console.log(__dirname)

app.get('/homepage', (req, res) => {

    res.sendFile('public/index.html', { root: __dirname })
    console.log('in homepage get...')
    execute()
        .then(result => {
            console.log('hello from then')
            console.table(result.rows)
            res.send(result.rows)
        })
})

app.post('/homepage', urlencodedParser, (req, res) => {
    console.log('post in homepage...')
        // console.log(req.body)
        // execute(req.body)
        // res.send(req.body.curResults)

})

async function execute() {
    try {
        await client.connect()
        console.log("Connected successfully")
        const couResults = await client.query("select country_name from countries")
        return couResults
    } catch (err) {
        console.log(`Somthing want worng ${err}`)
    } finally {
        await client.end()
        console.log("client disconnected successfully")
    }
}



/// all countreis



app.route('/australia')
    .get((res, req) => {
        res.sendFile('public/australia.html', { root: __dirname })
        console.log('in get australia ')


    })
    .post((res, req) => {
        console.log('in post australia ')

    })

app.route('/france')
    .get((res, req) => {
        res.sendFile('public/france.html', { root: __dirname })
        console.log('in get france ')
    })
    .post((res, req) => {
        console.log('in post france ')

    })

app.route('/brazil')
    .get((res, req) => {
        res.sendFile('public/brazil.html', { root: __dirname })
        console.log('in get brazil ')
    })
    .post((res, req) => {
        console.log('in post brazil ')

    })

app.route('/china')
    .get((res, req) => {
        res.sendFile('public/china.html', { root: __dirname })
        console.log('in get china ')
    })
    .post((res, req) => {
        console.log('in post china ')

    })

app.route('/egypt')
    .get((res, req) => {
        res.sendFile('public/egypt.html', { root: __dirname })
        console.log('in get egypt ')
    })
    .post((res, req) => {
        console.log('in post egypt ')

    })





app.listen(3000, () => console.log('Example app listening on port 3000!'));