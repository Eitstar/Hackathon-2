// const formTag = document.getElementById('formID').submit(function(e) {
//     e.preventDefault();
// });



const sendOption = () => {
    let continent = document.querySelector('#continent').value
    let country = document.querySelector('#country').value

    console.log(continent)
    fetch('http://localhost:5555/homepage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ continent, country })
    })

}



// const filter = async() => {
//     try {
//         deleteAll()

//         // const selectcontinent = document.querySelector('#continent').value.toLowerCase()
//         // const selectcountry = document.querySelector('#country').value.toLowerCase()


//     } catch (err) {

//     }
// }










// const selectcontinent = document.querySelector('#continent')
// const selectcountry = document.querySelector('#country')

// selectcontinent.addEventListener('change', filter)
// selectcountry.addEventListener('change', filter)