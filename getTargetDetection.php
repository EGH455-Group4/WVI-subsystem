<?php
include('db_config.php');
$mysqli = mysqli_connect($db_host, $db_user, $db_password, $db_name);

$sql = "SELECT * FROM UAV_detection ORDER BY id DESC LIMIT 1";

$result = $mysqli->query($sql);

$detection = $result->fetch_row()[2] ?? [];

$result->close();

header('Content-Type: application/json');

echo $detection;

$mysqli->close();
?>
