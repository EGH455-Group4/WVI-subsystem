function updateSensorData() {
    fetch('getSensorDetection.php')
        .then(response => response.json())
        .then(data => {
            console.log("Fetched sensor data:", data);

            if (data.air_quality.sensors.temperature) {
                document.getElementById("TemperatureValue").textContent = `Current Temperature = ${data.air_quality.sensors.temperature.value} ${data.air_quality.sensors.temperature.unit} `;
                updateGauge("TemperatureGauge", data.air_quality.sensors.temperature.value, -100, 100);

            } else {
                document.getElementById("TemperatureValue").textContent = `Current Temperature = N/A`;
            }

            if (data.air_quality.sensors.pressure) {
                document.getElementById("PressureValue").textContent = `Current Atmosphere Pressure = ${data.air_quality.sensors.pressure.value} ${data.air_quality.sensors.pressure.unit} `;
                updateGauge("PressureGauge", data.air_quality.sensors.pressure.value, 0, 1500);
            } else {
                document.getElementById("PressureValue").textContent = `Current Atmosphere Pressure = N/A`;
            }

            if (data.air_quality.sensors.light) {
                document.getElementById("LightValue").textContent = `Current Light Level = ${data.air_quality.sensors.light.value} ${data.air_quality.sensors.light.unit} `;
                updateGauge("LightGauge", data.air_quality.sensors.light.value, 0, 100);
            } else {
                document.getElementById("LightValue").textContent = `Current Light Level = N/A`;
            }

            if (data.air_quality.sensors.hazardous_gases) {
                document.getElementById("nh3Value").textContent = `NH3 Level: ${data.air_quality.sensors.hazardous_gases.nh3.value} `;
                document.getElementById("oxidising_gasesValue").textContent = `Oxidising Gases Level: ${data.air_quality.sensors.hazardous_gases.oxidising_gases.value} `;
                document.getElementById("reducing_gasesValue").textContent = `Reducing Gases Level: ${data.air_quality.sensors.hazardous_gases.reducing_gases.value} `;

                updateGauge("GasGauge", data.air_quality.sensors.hazardous_gases.nh3.value, 0, 100);
            } else {
                document.getElementById("nh3Value").textContent = `NH3 Level: N/A`;
                document.getElementById("oxidising_gasesValue").textContent = `Oxidising Gases Level: N/A`;
                document.getElementById("reducing_gasesValue").textContent = `Reducing Gases Level: N/A`;
            }

            if (data.air_quality.sensors.humidity) {
                document.getElementById("HumidityValue").textContent = `Current Humidity = ${data.air_quality.sensors.humidity.value} ${data.air_quality.sensors.humidity.unit} `;
                updateGauge("HumidityGauge", data.air_quality.sensors.humidity.value, 0, 100);
            } else {
                document.getElementById("HumidityValue").textContent = `Current Humidity = N/A`;
            }

            const currentTime = new Date();
            document.getElementById("lastUpdated").textContent = "Last Updated: " + currentTime.toLocaleTimeString();
        })
        .catch(error => {
            console.error('Error fetching sensor data:', error);
        });
}

function updateGauge(gaugeId, value, min, max) {
    const percentage = (value - min) / (max - min) * 100;
    const gaugeElement = document.getElementById(gaugeId);
    if (gaugeElement) {
        gaugeElement.style.width = percentage + "%";
    }
}

updateSensorData();
setInterval(updateSensorData, 2000);
