var imageUpdated = false;

function updatedata() {
    fetch('getTargetDetection.php')
        .then(response => response.json())
        .then(data => {
            console.log("Fetched image data:", data.target_detection);

            targetDetection = data.target_detection;

            detections = targetDetection.detections;

            var noDetections = detections.aruco == null && detections.gauge == null && detections.valve == null

            document.getElementById("live-image").src = targetDetection.location

            if (!noDetections) {
                document.getElementById("target-image").src = targetDetection.location;

                var imageUpdatedEvent = new Event("imageUpdated");
                document.dispatchEvent(imageUpdatedEvent);

                imageUpdated = true;
            }

            updateInformation(detections, !noDetections)

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
        // playAudio("noDataAudio"); Can be uncommented if needed.
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

function updateInformation(detections, includeTarget) {
    if (detections.aruco == null) {
        document.getElementById("live_arucoIDS").textContent = `Found IDs: None`;
        document.getElementById("live_xValue").textContent = `x = N/A`;
        document.getElementById("live_yValue").textContent = `y = N/A`;
        document.getElementById("live_zValue").textContent = `z = N/A`;
        if (includeTarget) {
            document.getElementById("target_arucoIDS").textContent = `Found IDs: None`;
            document.getElementById("target_xValue").textContent = `x = N/A`;
            document.getElementById("target_yValue").textContent = `y = N/A`;
            document.getElementById("target_zValue").textContent = `z = N/A`;
        }
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
        document.getElementById("live_arucoIDS").textContent = `Found IDs: ${ids.toString()}`;
        document.getElementById("live_xValue").textContent = `x = ${(totalX/detections.aruco.length).toFixed(2)}`;
        document.getElementById("live_yValue").textContent = `y = ${(totalY/detections.aruco.length).toFixed(2)}`;
        document.getElementById("live_zValue").textContent = `z = ${(totalZ/detections.aruco.length).toFixed(2)}`;
        if (includeTarget) {
            document.getElementById("target_arucoIDS").textContent = `Found IDs: ${ids.toString()}`;
            document.getElementById("target_xValue").textContent = `x = ${(totalX/detections.aruco.length).toFixed(2)}`;
            document.getElementById("target_yValue").textContent = `y = ${(totalY/detections.aruco.length).toFixed(2)}`;
            document.getElementById("target_zValue").textContent = `z = ${(totalZ/detections.aruco.length).toFixed(2)}`;
        }
    }

    if (detections.gauge == null) {
        document.getElementById("live_pressureGauge").textContent = `Detected Gauge: No`;

        document.getElementById("live_pressureReading").textContent = `Pressure Reading = None`;

        if (includeTarget) {
            document.getElementById("target_pressureGauge").textContent = `Detected Gauge: No`;

            document.getElementById("target_pressureReading").textContent = `Pressure Reading = None`;
        }
    } else {
        document.getElementById("live_pressureGauge").textContent = `Detected Gauge: Yes`;

        if (includeTarget) {
            document.getElementById("target_pressureGauge").textContent = `Detected Gauge: Yes`;
        }

        if (detections.gauge.reading == null) {
            document.getElementById("live_pressureReading").textContent = `Pressure Reading = None`;

            if (includeTarget) {
                document.getElementById("target_pressureReading").textContent = `Pressure Reading = None`;
            }

        } else {

            document.getElementById("live_pressureReading").textContent = `Pressure Reading = ${detections.gauge.reading.value} ${detections.gauge.reading.unit}`;
            if (includeTarget) {
                document.getElementById("target_pressureReading").textContent = `Pressure Reading = ${detections.gauge.reading.value} ${detections.gauge.reading.unit}`;
            }
        }
    }

    if (detections.valve == null) {
        document.getElementById("live_valvePositions").textContent = `Valve Positions: None`;
        if (includeTarget) {
            document.getElementById("target_valvePositions").textContent = `Valve Positions: None`;
        }
    } else {
        var valves = []
        for (let i = 0; i < detections.valve.length; i++) {
            valves.push(detections.valve[i].status);
        }

        document.getElementById("live_valvePositions").textContent = `Valve Positions: ${valves.toString()}`;

        if (includeTarget) {
            document.getElementById("target_valvePositions").textContent = `Valve Positions: ${valves.toString()}`;
        }
    }
}

setInterval(updatedata, 1000);
