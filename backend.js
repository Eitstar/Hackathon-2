const pg = require('pg');
// const R = require('ramda');
const exp = require('express');
const bp = require('body-parser');
const fs = require('fs');
const cors = require('cors');
// const { Client } = require('pg');
const app = exp();

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use(cores());

app.route('./homepage')
    .post(req, res) => {
        console.log('get in homepage...')
    })

.post((req, res) => {
    console.log('post in homepage...')
    console.log(req.body)
    execute(req.body)

})




app.listen(5555, () => console.log('Example app listening on port 5555!'));



// const cs = 'postgres://postgres:password369@localhost:5432/virtualride';
// const client = new pg.Client(cs);

// // const conString = "postgres://YourUserName:YourPassword@YourHostname:5432/YourDatabaseName";

// execute()

// async function execute() {
//     try {
//         await client.connect()
//         console.log("Connected successfully")
//         const couResults = await client.query("select country_name from countries")
//         const curResults = await client.query("select continent from currencies")
//         console.table(curResults.rows)
//         console.table(couResults.rows)
//     } catch (err) {
//         console.log(`Somthing want worng ${err}`)
//     } finally {
//         await client.end()
//         console.log("client disconnected successfully")
//     }
// }




// async function fetchNow() {

//     const client = new pg.Client(cs);

//     try {
//         await client.connect();

//         let result = await client.query('SELECT now()');
//         return R.prop('now', R.head(result.rows));
//     } finally {
//         client.end()
//     }
// }

// fetchNow().then(now => console.log(now));