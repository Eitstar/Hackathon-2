// const formTag = document.getElementById('formID').submit(function(e) {
//     e.preventDefault();
// });



const getData = async() => {
    try {
        let url = await fetch("https://travel-places.p.rapidapi.com/", {
            "method": "post",
            "headers": {
                "x-rapidapi-key": "02c4070af7msha6dbe386952d7c4p174b49jsndfe36fb89332",
                "x-rapidapi-host": "travel-places.p.rapidapi.com"
            }
        })
        let data = await url.json()
        return data
    } catch (err) {
        console.log(err, "error in getData fun")
    }
}