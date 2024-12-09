const input = document.getElementById("input")
const btn = document.getElementById("btn")
const img = document.getElementById("img")
const deg = document.getElementById("deg")
const con = document.getElementById("con")
const none = document.getElementById("weather-report")
const drop = document.getElementById("drop")
const km = document.getElementById("km")



city = "dhaka"

btn.addEventListener("click", ()=> {
    weatherData(input.value)
})

async function weatherData(city) {
    input.value = ""
    const apiKey = "c68294fce6ca442b203c6d3a7308c950"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    const response = await fetch(url);
    const data = await response.json();
                console.log(data)
    con.innerText =  data.weather[0].main;
    deg.innerText =  Math.round(data.main.temp - 273.15) + "°C"
    km.innerText = data.wind.speed + "km/H"
    drop.innerText = data.main.humidity + "%"

    switch (con.innerText){
        case "Clear":
            img.src = "sun.png";
            break;
        case "Rain":
            img.src = "sky.png";
            break;
        case "Haze":
            img.src = "weather.png";
            break;
        case "Clouds":
            img.src = "storm.png"
                

    }



}

   

   






