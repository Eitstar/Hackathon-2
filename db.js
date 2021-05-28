const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'password369',
        database: 'virtualride'
    }
});


// const dbcountries = () => {

// db.select('country_name').from('countries')

// .then(data => {
//         console.log(data);

//     })
//     .catch(err => {
//         console.log(err);

//     })

// }


// module.exports = {
//     dbcountries
// }




// db.select('continent').from('currencies')

// .then(data => {
//         return console.log(data);

//     })
//     .catch(err => {
//         console.log(err);

//     })


// db('countries')
//     .join('currencies', 'countries.id', 'countries.id')
//     .select('continent', 'country_name ')



// const innerJoin = () =>

//     {
const innerJoin = db('countries')
    .join('currencies', 'countries.id', 'currencies.countries.id')
    .select('continent', 'country_name ')

//     }

// innerJoin()
console.log(innerJoin)