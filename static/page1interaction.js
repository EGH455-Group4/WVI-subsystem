function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomStatus() {
    const statuses = ["open", "closed"];
    return statuses[Math.floor(Math.random() * statuses.length)];
}

function updateGauges() {
    const tempValue = getRandomNumber(-100, 100);
    const pressureValue = getRandomNumber(0, 1000);
    const lightLevel = getRandomNumber(0, 100);
    const gasLevel = getRandomNumber(0, 1000);
    const humidityValue = getRandomNumber(0, 100);

    document.getElementById("tempValue").textContent = tempValue + " °C";
    document.getElementById("tempGauge").style.width = ((tempValue + 100) / 200) * 100 + "%";

    document.getElementById("pressureValue").textContent = pressureValue + " kPa";
    document.getElementById("pressureGauge").style.width = (pressureValue / 1000) * 100 + "%";

    document.getElementById("lightLevel").textContent = lightLevel + " Lux";
    document.getElementById("lightGauge").style.width = (lightLevel / 100) * 100 + "%";

    document.getElementById("gasLevel").textContent = gasLevel + " kg";
    document.getElementById("gasGauge").style.width = (gasLevel / 1000) * 100 + "%";

    document.getElementById("humidityValue").textContent = humidityValue + "%";
    document.getElementById("humidityGauge").style.width = (humidityValue / 100) * 100 + "%";

    const currentTime = new Date();
    document.getElementById("lastUpdated").textContent = currentTime.toLocaleTimeString();
}

updateGauges();
setInterval(updateGauges, 5000);
