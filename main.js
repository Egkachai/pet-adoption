async function start() {
    const weatherPromise = await fetch("https://api.weather.gov/gridpoints/MFL/110,50/forecast")
    const weatherData = await weatherPromise.json()

    const ourTemperature = weatherData.properties.periods[0].temperature
    document.querySelector("#temperature-output").textContent = ourTemperature
    
}

<<<<<<< HEAD
start()
=======
start()
>>>>>>> 5069b8cda76c3b3bc96f6b92a1f789220119ea17
