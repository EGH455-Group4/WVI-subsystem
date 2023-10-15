document.addEventListener("DOMContentLoaded", function() {
    var temperatureChart = createChart('temperatureChart', 'Temperature', 'Temperature (°C)', -100, 100);
    var pressureChart = createChart('pressureChart', 'Pressure', 'Pressure (hPa)', 0, 1500);
    var lightChart = createChart('lightChart', 'Light', 'Light (Lux)', 0, 500);
    var gasChart = createGasChart('gasChart', 'Gas Level', 'Gas Level (ppm)', 0, 50);
    var humidityChart = createChart('humidityChart', 'Humidity', 'Humidity (%)', 0, 100);
    
    var temperatureData = [];
    var pressureData = [];
    var lightData = [];
    var gasData = [];
    var oxidisingGasesData = [];
    var reducingGasesData = [];
    var humidityData = [];

    updateSensorData();
    setInterval(updateSensorData, 2000);

    function updateSensorData() {
        fetch("getSensorDetection.php")
            .then((response) => response.json())
            .then((data) => {
                console.log("Fetched sensor data:", data);

                if (data.air_quality.sensors.temperature) {
                    var temperatureValue = data.air_quality.sensors.temperature.value;
                    temperatureData.push(temperatureValue);
                    updateChart(temperatureChart, temperatureData);
                }

                if (data.air_quality.sensors.pressure) {
                    var pressureValue = data.air_quality.sensors.pressure.value;
                    pressureData.push(pressureValue);
                    updateChart(pressureChart, pressureData);
                }

                if (data.air_quality.sensors.light) {
                    var lightValue = data.air_quality.sensors.light.value;
                    lightData.push(lightValue);
                    updateChart(lightChart, lightData);
                }

                

                if (data.air_quality.sensors.humidity) {
                    var humidityValue = data.air_quality.sensors.humidity.value;
                    humidityData.push(humidityValue);
                    updateChart(humidityChart, humidityData);
                }

                if (data.air_quality.sensors.hazardous_gases) {
                    var nh3Value = data.air_quality.sensors.hazardous_gases.nh3.value;
                    var oxidisingGasesValue = data.air_quality.sensors.hazardous_gases.oxidising_gases.value;
                    var reducingGasesValue = data.air_quality.sensors.hazardous_gases.reducing_gases.value;

                    gasData.push(nh3Value);
                    oxidisingGasesData.push(oxidisingGasesValue);
                    reducingGasesData.push(reducingGasesValue);

                    updateGasChart(gasChart, gasData, oxidisingGasesData, reducingGasesData);
                }

                const currentTime = new Date();
                document.getElementById("lastUpdated").textContent = currentTime.toLocaleTimeString();
            })
            .catch((error) => {
                console.error("Error fetching sensor data:", error);
            });
    }

    function updateChart(chart, data) {
        chart.data.labels = data.map((_, index) => index + 1);
        chart.data.datasets[0].data = data;
        chart.update();
    }

    function updateGasChart(chart, data, oxidisingData, reducingData) {
        if (chart && chart.data.datasets.length === 3) {
            chart.data.labels = data.map((_, index) => index + 1);
            chart.data.datasets[0].data = data;
            chart.data.datasets[1].data = oxidisingData;
            chart.data.datasets[2].data = reducingData;
            chart.update();
        }
    }

    


    function createChart(chartId, label, yLabel) {
        var canvas = document.getElementById(chartId);
    
        if (!canvas) {
            console.error("Canvas element not found for chart: " + chartId);
            return null;
        }
    
        var ctx = canvas.getContext('2d');
    
        return new Chart(ctx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: label,
                    data: [],
                    backgroundColor: 'rgb(75, 192, 192)',
                }]
            },
            options: {
                scales: {
                    x: {
                        display: false,
                    },
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: yLabel,
                        },
                    },
                }
            }
        });
    }
    
});

function createGasChart(chartId, label, yLabel) {
    var canvas = document.getElementById(chartId);

    if (!canvas) {
        console.error("Canvas element not found for chart: " + chartId);
        return null;
    }

    var ctx = canvas.getContext('2d');

    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [
                {
                    label: label,
                    data: [],
                    backgroundColor: 'rgb(75, 192, 192)',
                },
                {
                    label: 'Oxidising Gases',
                    data: [],
                    backgroundColor: 'rgb(255, 99, 132)',
                },
                {
                    label: 'Reducing Gases',
                    data: [],
                    backgroundColor: 'rgb(54, 162, 235)',
                },
            ],
        },
        options: {
            scales: {
                x: {
                    display: false,
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: yLabel,
                    },
                },
            }
        }
    });
}

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
                updateGauge("LightGauge", data.air_quality.sensors.light.value, 0, 500);
            } else {
                document.getElementById("LightValue").textContent = `Current Light Level = N/A`;
            }

            if (data.air_quality.sensors.hazardous_gases) {
                document.getElementById("nh3Value").textContent = `NH3 Level: ${data.air_quality.sensors.hazardous_gases.nh3.value} ${data.air_quality.sensors.hazardous_gases.nh3.unit} `;
                document.getElementById("oxidising_gasesValue").textContent = `Oxidising Gases Level: ${data.air_quality.sensors.hazardous_gases.oxidising_gases.value} ${data.air_quality.sensors.hazardous_gases.oxidising_gases.unit} `;
                document.getElementById("reducing_gasesValue").textContent = `Reducing Gases Level: ${data.air_quality.sensors.hazardous_gases.reducing_gases.value} ${data.air_quality.sensors.hazardous_gases.reducing_gases.unit} `;

                updateGauge("GasGauge", data.air_quality.sensors.hazardous_gases.nh3.value, 0, 100);
                updateGauge("OxidisingGauge", data.air_quality.sensors.hazardous_gases.oxidising_gases.value, 0,5);
                updateGauge("ReducingGauge", data.air_quality.sensors.hazardous_gases.reducing_gases.value, 0,5);

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
            document.getElementById("lastUpdated").textContent = currentTime.toLocaleTimeString();
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
setInterval(updateSensorData, 3000);
