const exp = require('express');
const bp = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const Client = require('pg').Client
// const route = require('route');
const app = exp();
app.use(exp.json());


app.use(bp.json())


const urlencodedParser = bp.urlencoded({ extended: false })
app.use(cors());

const client = new Client({
    user: 'postgres',
    password: '1234rewq',
    host: 'localhost',
    port: '5433',
    database: "virtualride"

})

// const conString = "postgres://YourUserName:YourPassword@YourHostname:5432/YourDatabaseName";

app.get('/homepage', (req, res) => {
    console.log('in homepage get...')
    execute()
    .then(result =>{
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
.get((res,req)=>{
    console.log('in get australia ')

    
})
.post((res,req)=>{
    console.log('in post australia ')

})
 
app.route('/france')
.get((res,req)=>{
    console.log('in get france ')
})
.post((res,req)=>{
    console.log('in post france ')

})

app.route('/brazil')
.get((res,req)=>{
    console.log('in get brazil ')
})
.post((res,req)=>{
    console.log('in post brazil ')

})

app.route('/china')
.get((res,req)=>{
    console.log('in get china ')
})
.post((res,req)=>{
    console.log('in post china ')

})

app.route('/egypt')
.get((res,req)=>{
    console.log('in get egypt ')
})
.post((res,req)=>{
    console.log('in post egypt ')

})





app.listen(3000, () => console.log('Example app listening on port 3000!'));
