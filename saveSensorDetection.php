<?php
include('db_config.php');

$jsonData = file_get_contents('php://input');
$data = json_decode($jsonData, true);

if ($data !== null) {
   $mysqli = mysqli_connect($db_host, $db_user, $db_password, $db_name);

   $time = time();

   $sql = "INSERT INTO sensor_detection (timestamp, data) values (?, ?);";

    $mysqli->execute_query($sql, [$time, $jsonData]);

    $mysqli->close();
} else {
   http_response_code(400);
   echo "Invalid JSON data";
}