<?php
include('db_config.php');

$jsonData = file_get_contents('php://input');
$data = json_decode($jsonData, true);

if ($data !== null) {
    error_log($data["UAV_detection"]["location"]);
    $mysqli = mysqli_connect($db_host, $db_user, $db_password, $db_name);

    $time = time();

    $type = "Target_Detection";

    $sql = "INSERT INTO UAV_detection (timestamp, data, type) VALUES (?, ?, ?);";
    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param("sss", $time, $jsonData, $type);
    $stmt->execute();
    $stmt->close();

    $mysqli->close();
} else {
    http_response_code(400);
    echo "Invalid JSON data";
}
?>
