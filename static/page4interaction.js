function setLCDScreenIP() {
    var ip = document.getElementById("pi_address").value;

    fetch(`http://${ip}:8050/lcd-screen `, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({"display": "IP_address"})
    }).then(response => response.json())
   .then(response => console.log(JSON.stringify(response)))
}

function setLCDScreenTemperature() {
    var ip = document.getElementById("pi_address").value;

    fetch(`http://${ip}:8050/lcd-screen `, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({"display": "temperature"})
    }).then(response => response.json())
   .then(response => console.log(JSON.stringify(response)))
}

function setLCDScreenTarget() {
    var ip = document.getElementById("pi_address").value;

    fetch(`http://${ip}:8050/lcd-screen `, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({"display": "image_processing"})
    }).then(response => response.json())
   .then(response => console.log(JSON.stringify(response)))
}

function startSampling() {
    var ip = document.getElementById("pi_address").value;

    fetch(`http://${ip}:8070/sample`, {method: 'POST'})
    .then(response => response.json())
    .then(response => console.log(JSON.stringify(response)))
}

function clearData() {
    fetch('clearData.php');
}