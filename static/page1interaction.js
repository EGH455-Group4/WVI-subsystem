function UpdateSensor() {
    fetch('getData.php')
        .then(response => response.json())
        .then(data => {
            console.log("Fetched data:", data);

            const dataType = document.getElementById("dataFilter").value;

            document.getElementById("selectedDataType").textContent = "Selected Data Type: " + dataType;

            if (data.hasOwnProperty(dataType)) {
                const value = data[dataType];

                document.getElementById("selectedValue").textContent = value !== "N/A" ? value : "0";

                const currentTime = new Date();
                document.getElementById("lastUpdated").textContent = "Last Updated: " + currentTime.toLocaleTimeString();

                const variables = ["Temperature", "Pressure", "Light", "Gas", "Humidity"];
                variables.forEach(variable => {
                    const element = document.getElementById(variable + "Value");

                    if (element) {
                        const value = data[variable];
                        element.textContent = value !== "N/A" ? value : "0";

                        if (variable === "Temperature" || variable === "Pressure" || variable === "Light" || variable === "Gas" || variable === "Humidity") {
                            const gaugeElement = document.getElementById(variable + "Gauge");
                            if (gaugeElement) {
                                let min, max;
                                if (variable === "Temperature") {
                                    min = -100;
                                    max = 100;
                                } else if (variable === "Pressure") {
                                    min = 0;
                                    max = 1000;
                                } else if (variable === "Light") {
                                    min = 0;
                                    max = 100;
                                } else if (variable === "Gas") {
                                    min = 0;
                                    max = 1000;
                                } else if (variable === "Humidity") {
                                    min = 0;
                                    max = 100;
                                }
                                const percentage = (value - min) / (max - min) * 100;
                                gaugeElement.style.width = value !== "N/A" ? percentage + "%" : "0%";
                            }
                        }
                    }
                });
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

UpdateSensor();
setInterval(UpdateSensor, 5000);
