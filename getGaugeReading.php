<?php
include('db_config.php');
$mysqli = mysqli_connect($db_host, $db_user, $db_password, $db_name);

$variable = "reading";

$data = array();
$data[$variable] = "N/A";

$sql = "SELECT $variable FROM gaugeread ORDER BY timestamp DESC LIMIT 1";

$result = $mysqli->query($sql);

if ($row = $result->fetch_assoc()) {
    $value = floatval($row[$variable]);
    $data[$variable] = $value;
}

header('Content-Type: application/json');

echo json_encode($data);

$mysqli->close();
?>
