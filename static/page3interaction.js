const tableBody = document.getElementById("table-body");
const startTimestampInput = document.getElementById("startTimestamp");
const endTimestampInput = document.getElementById("endTimestamp");
const displayButton = document.getElementById("displayButton");
const updateButton = document.getElementById("updateButton");
const lastUpdatedElement = document.getElementById("lastUpdated");

function populateTable(data) {
    tableBody.innerHTML = data;
}

function updateLastUpdatedTimestamp() {
    const currentTime = new Date();
    lastUpdatedElement.textContent = `Last Updated: ${currentTime.toLocaleTimeString()}`;
}

function fetchAndUpdateTable(url) {
    fetch(url)
        .then((response) => response.text())
        .then((phpOutput) => {
            populateTable(phpOutput);
            updateLastUpdatedTimestamp();
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}

lastUpdatedElement.textContent = "Last Updated: Never";

document.addEventListener("DOMContentLoaded", () => {
    fetchAndUpdateTable("connect.php");

    displayButton.addEventListener("click", () => {
        const startTimestamp = startTimestampInput.value.trim();
        const endTimestamp = endTimestampInput.value.trim();
        const url = `search.php?startTimestamp=${startTimestamp}&endTimestamp=${endTimestamp}`;
        
        fetchAndUpdateTable(url);
    });

    updateButton.addEventListener("click", () => {
        fetchAndUpdateTable("connect.php");
    });
});
