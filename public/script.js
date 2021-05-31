const getCountriesDataFromDb = async() => {

    const data = await fetch('http://localhost:3000/sendData')
    const result = await data.json()
    return await putAllDatainSecstion(result)

}

const putAllDatainSecstion = async(data) => {
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

const findOptionVal = () => {
    const options = document.querySelectorAll('option')
    let optionVal;
    options.forEach(item => {
        if (item.selected) {
            return optionVal = item.value.toLocaleLowerCase()
        }
    })
    return goToRoute(optionVal)

}


const goToRoute = (optionVal) => {
    window.location['href'] = `http://localhost:3000/${optionVal}.html`
    console.log(optionVal)

}

//285.29K − 273.15 

const temp = (optionVal) => {
    fetch(`http://localhost:3000/${optionVal}`)
        .then((res) => {
            console.log('Hello from js :)')
            return res.json()
        })
        .then((res) => {
            console.log(res)

            let weatherData = []
            let temp
            let weather = res.weather[0]['main']
            let icon = res.weather[0]['icon']
            let humidity = res.main.humidity + '%'
            let dayTemp = Math.round(res.main.temp_max - 273.15) + '°C'
            let nightTemp = Math.round(res.main.temp_min - 273.15) + '°C'
            let name = res.name

            for (let item in res) {
                if (res[item]['temp']) temp = Math.round(res[item]['temp'] - 273.15) + '°C'


            }

            weatherData.push({
                icon: icon,
                name: name,
                temp_now: temp,
                sky: weather,
                humidity: humidity,
                max_temp: dayTemp,
                min_temp: nightTemp
            })
            return weatherData
        })
        .then(res => {
            console.log(res[0])
            const name = document.querySelector('#name')
                // const icon = document.querySelector('i')
                // icon.setAttribute('id',`${res[0].icon}`)
            name.innerHTML = `<img src="http://openweathermap.org/img/wn/${res[0].icon}@2x.png"></img>`
            name.innerHTML += `<br>${res[0].name} <br>`
            name.innerHTML += `${res[0].sky} <br>`
            name.innerHTML += `${res[0].humidity} <br>`
            name.innerHTML += `now: ${res[0].temp_now} <br>`
            name.innerHTML += `day: ${res[0].max_temp} <br>`
            name.innerHTML += `night: ${res[0].min_temp} <br>`
                // weather.appendChild(weatherData.sky)
                // weather.appendChild(weatherData.temp_now)
        })

}