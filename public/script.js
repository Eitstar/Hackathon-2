// const formTag = document.getElementById('formID').submit(function(e) {
//     e.preventDefault();
// });



const sendOption = () => {
    let continent = document.querySelector('#continent').value
    let country = document.querySelector('#country').value


    fetch('http://localhost:5555/', {
        method: "get",
        headers: {
            'Content-Type': 'application/json'
        }

    }).then(function(res) {
        res.text().then(function(text) {
            poemDisplay.textContent = text;

        });
    });

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