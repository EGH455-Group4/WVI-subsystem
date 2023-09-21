function updatedata() {
    fetch('getUAVspot.php')
        .then(response => response.json())
        .then(data => {
            console.log("Fetched data:", data);

            document.getElementById("xValue").textContent = `x = ${data.X !== "N/A" ? data.X : "0"}`;
            document.getElementById("yValue").textContent = `y = ${data.Y !== "N/A" ? data.Y : "0"}`;
            document.getElementById("zValue").textContent = `z = ${data.Z !== "N/A" ? data.Z : "0"}`;

            const currentTime = new Date();
            document.getElementById("lastUpdated").textContent = `Last Updated: ${currentTime.toLocaleTimeString()}`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    fetch('getGaugeReading.php')
        .then(response => response.json())
        .then(data => {
            console.log("Fetched pressure reading:", data);

            document.getElementById("pressureReading").textContent = `Pressure Reading = ${data.reading !== "N/A" ? data.reading + " Kpa" : "0 Kpa"}`;
        })
        .catch(error => {
            console.error('Error fetching pressure reading:', error);
        });
}

updatedata();
setInterval(updatedata, 5000);
