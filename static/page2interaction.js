function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let x, y, z, pressureReading, pressureStatus;

function updateValues() {
    x = getRandomNumber(-100, 100);
    y = getRandomNumber(-100, 100);
    z = getRandomNumber(-100, 100);

    pressureReading = getRandomNumber(0, 1000);

    document.getElementById("xValue").textContent = `x = ${x}`;
    document.getElementById("yValue").textContent = `y = ${y}`;
    document.getElementById("zValue").textContent = `z = ${z}`;
    document.getElementById("pressureReading").textContent = `Pressure Reading = ${pressureReading}`;

    const currentTime = new Date();
    document.getElementById("lastUpdated").textContent = `Last Updated: ${currentTime.toLocaleTimeString()}`;
}

updateValues();
setInterval(updateValues, 5000);
