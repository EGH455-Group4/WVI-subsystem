<?php
include('db_config.php');
$mysqli = mysqli_connect($db_host, $db_user, $db_password, $db_name);

$dataTypes = ["Temperature", "Pressure", "Light", "Gas", "Humidity"];

$data = array();

foreach ($dataTypes as $dataType) {
    $data[$dataType] = "N/A";
}

foreach ($dataTypes as $dataType) {
    $sql = "SELECT type, value FROM sampledata WHERE type = '$dataType' AND timestamp = (SELECT MAX(timestamp) FROM sampledata WHERE type = '$dataType')";

    $result = $mysqli->query($sql);


    while ($row = $result->fetch_assoc()) {
        $value = floatval($row['value']);

        if (array_key_exists($dataType, $data)) {
            $data[$dataType] = $value;
        }
    }
}

$jsonData = json_encode($data);

echo $jsonData;

file_put_contents('data_log.json', $jsonData);

$mysqli->close();
?>
