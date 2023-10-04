function updatedata() {
    fetch('getTargetDetection.php')
        .then(response => response.json())
        .then(data => {
            console.log("Fetched image data:", data.target_detection);

            targetDetection = data.target_detection;

            document.getElementById("target-detection-image").src = targetDetection.location;

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

                    totalX += detections.aruco[i].pose.x_pos
                    totalY += detections.aruco[i].pose.y_pos
                    totalZ += detections.aruco[i].pose.z_pos
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
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

updatedata();
setInterval(updatedata, 1000);
