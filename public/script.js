
const getCountriesDataFromDb = (async () => {

    const data = await fetch('http://localhost:3000/homepage')
    const result = await data.json()
    return await putAllDatainSecstion(result)

})()

const putAllDatainSecstion = async (data) => {
    const country = document.querySelector('select')
    console.log(country)
    let counter = 0
    for (let item of data) {
        if (counter === 5)
            return
        counter++
        let option = document.createElement('option')
        option.innerHTML += item.country_name
        country.appendChild(option)

    }



}

const findOptionVal  = () =>{
const options = document.querySelectorAll('option')
let optionVal ;
options.forEach(item =>{
    if (item.selected){
        return optionVal=item.value.toLocaleLowerCase()
    }
})
return goToRoute(optionVal)

}


const goToRoute = async (optionVal) =>{
   await fetch(`http://localhost:3000/${optionVal}`)
}
