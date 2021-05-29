// const { Client } = require('pg')
// const client = new Client({

//     user: 'postgres',
//     password: 'password369',
//     host: '127.0.0.1',
//     database: 'virtualride'

// })


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