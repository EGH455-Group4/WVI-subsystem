var imageUpdated = false;

function updatedata() {
    fetch('getTargetDetection.php')
        .then(response => response.json())
        .then(data => {
            console.log("Fetched image data:", data.target_detection);

            targetDetection = data.target_detection;

            var imageElement = document.getElementById("target-detection-image");
            if (imageElement.src !== targetDetection.location) {
                imageElement.src = targetDetection.location;

                var imageUpdatedEvent = new Event("imageUpdated");
                document.dispatchEvent(imageUpdatedEvent);

                imageUpdated = true;
            }

            detections = targetDetection.detections;

            if (detections.aruco == null) {
                document.getElementById("arucoIDS").textContent = `Found IDs: None`;

                document.getElementById("xValue").textContent = `x = N/A`;
                document.getElementById("yValue").textContent = `y = N/A`;
                document.getElementById("zValue").textContent = `z = N/A`;
            } else {
                var ids = [];
                var totalX = 0;
                var totalY = 0;
                var totalZ = 0;

                for (let i = 0; i < detections.aruco.length; i++) {
                    ids.push(detections.aruco[i].aruco_id);

                    totalX += detections.aruco[i].pose.x_pos;
                    totalY += detections.aruco[i].pose.y_pos;
                    totalZ += detections.aruco[i].pose.z_pos;
                }

                document.getElementById("arucoIDS").textContent = `Found IDs: ${ids.toString()}`;

                document.getElementById("xValue").textContent = `x = ${(totalX/detections.aruco.length).toFixed(2)}`;
                document.getElementById("yValue").textContent = `y = ${(totalY/detections.aruco.length).toFixed(2)}`;
                document.getElementById("zValue").textContent = `z = ${(totalZ/detections.aruco.length).toFixed(2)}`;
            }

            if (detections.gauge == null) {
                document.getElementById("pressureReading").textContent = `Pressure Reading = None`;
            } else {
                document.getElementById("pressureReading").textContent = `Pressure Reading = ${detections.gauge.value} ${detections.gauge.unit}`;
            }

            if (detections.valve == null) {
                document.getElementById("valvePositions").textContent = `Valve Positions: None`;
            } else {
                var valves = [];

                for (let i = 0; i < detections.valve.length; i++) {
                    valves.push(detections.valve[i].status);
                }

                document.getElementById("valvePositions").textContent = `Valve Positions: ${valves.toString()}`;
            }

            const currentTime = new Date();
            document.getElementById("lastUpdated").textContent =  currentTime.toLocaleTimeString();

            checkScenarios(detections);

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


function checkScenarios(detections) {
    if (imageUpdated && detections.aruco == null && detections.gauge == null && detections.valve == null) {
        playAudio("noDataAudio");
        logToConsole("No data available.");
    } else if (imageUpdated && detections.aruco != null && detections.gauge == null && detections.valve == null) {
        playAudio("arucoAudio");
        logToConsole("ARUCO ID detected.");
    } else if (imageUpdated && detections.aruco == null && detections.gauge != null && detections.valve == null) {
        playAudio("pressureAudio");
        logToConsole("Pressure Gauge Reading detected.");
    } else if (imageUpdated && detections.aruco == null && detections.gauge == null && detections.valve != null) {
        playAudio("valveAudio");
        logToConsole("Valve Position detected.");
    } else if (imageUpdated && detections.aruco != null && detections.gauge != null && detections.valve == null) {
        playAudio("arucoPressureAudio");
        logToConsole("ARUCO ID and Pressure Gauge detected.");
    } else if (imageUpdated && detections.aruco != null && detections.gauge == null && detections.valve != null) {
        playAudio("arucoValveAudio");
        logToConsole("ARUCO ID and Valve Position detected.");
    } else if (imageUpdated && detections.aruco == null && detections.gauge != null && detections.valve != null) {
        playAudio("pressureValveAudio");
        logToConsole("Pressure Gauge Reading and Valve Position detected.");
    } else if (imageUpdated && detections.aruco != null && detections.gauge != null && detections.valve != null) {
        playAudio("allAudio");
        logToConsole("ARUCO ID, Pressure Gauge Reading, and Valve Position detected.");
    }
}

function playAudio(audioId) {
    const audio = document.getElementById(audioId);
    audio.play();
}

function logToConsole(message) {
    console.log("Message:", message);
}

updatedata();
setInterval(updatedata, 19000);

document.addEventListener("imageUpdated", () => {
    updatedata();
});
