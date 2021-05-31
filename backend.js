const bp = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const Client = require('pg').Client
const express = require('express');
const app = express();
app.use(express.json());
const fetch = require("node-fetch");
app.use(bp.json())

app.use(express.static('public'))

const urlencodedParser = bp.urlencoded({ extended: false })
app.use(cors());

const createClient = () => new Client({
    user: 'postgres',
    password: 'password369',
    host: 'localhost',
    port: '5432',
    database: "virtualride"

});

// const conString = "postgres://YourUserName:YourPassword@YourHostname:5432/YourDatabaseName";
// app.use('/static', express.static('public'))
async function getDataFromDb() {
    //TODO: try to avoid the term "data" , instead use entity-type business name like "country"
    console.log('in homepage get...')
    const x = await execute()
        // console.table(x.rows)
    const data = x.rows // TODO: move to execute function
    return data

}

app.get('/sendData', (req, res) => { //TODO: get instead of send, and countries instead of data
    console.log('sendData')
    getDataFromDb()
        .then(data => res.send(data)) // TODO: better to avoid "then" when not needed. use await instead
})




app.post('/sendData', (req, res) => { // TODO:redundant
    console.log('post in homepage...')
        // console.log(req.body)
        // execute(req.body)
        // res.send(req.body.curResults)

})

async function execute() { // TODO:rename to getCountriesFromDB
    let client;
    try {
        client = createClient()
        await client.connect()
        console.log("Connected successfully")
        const couResults = await client.query("select country_name from countries")
        return couResults
    } catch (err) {
        console.log(`Somthing went worng ${err}`)
    } finally {
        await client.end()
        console.log("client disconnected successfully")
    }
}

async function weatherApi(contrey) {
    try {
        const getWeatherData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${contrey}&appid=e5cc5c4346c7ca6696cd86ea8c303b45`) // TODO: better to collect all keys and passwords in 1 file
        const result = await getWeatherData.json()
            // console.log(result)
        return result
    } catch (err) {
        console.log(`somthing went worng ${err}`)
    }

}

/// all countreis
//'/public/australia.html'



const supportedCountries = [ // TODO: instead of this list, select from DB. no reason to maintain 2 lists of countries, if you have in DB use it.
    {
        name: 'australia',
        city: 'Sydney'
    },
    {
        name: 'france',
        city: 'Paris'
    },
    {
        name: 'brasil',
        city: 'Rio de Janeiro'
    },
    {
        name: 'china',
        city: 'Beijing'
    },
    {
        name: 'egypt',
        city: 'Cairo'
    },

];


for (const country of supportedCountries) {
    app.route(`/${country.name}`)
        .get((req, res) => {
            console.log(`in get ${country.name}`);
            weatherApi(country.city)
                .then(result => res.send(result)) // TODO: better use await 
        })
}



app.
listen(3000, () => console.log('Example app listening on port 3000!'));