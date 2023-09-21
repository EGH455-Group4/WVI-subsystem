<?php
include('db_config.php');
$mysqli = mysqli_connect($db_host, $db_user, $db_password, $db_name);

$variables = ["X", "Y", "Z"];

$data = array();

foreach ($variables as $variable) {
    $data[$variable] = "N/A";
}

foreach ($variables as $variable) {
    $sql = "SELECT $variable FROM uavspot ORDER BY timestamp DESC LIMIT 1";

    $result = $mysqli->query($sql);

    if ($row = $result->fetch_assoc()) {
        $value = intval($row[$variable]);

        if (array_key_exists($variable, $data)) {
            $data[$variable] = $value;
        }
    }
}

header('Content-Type: application/json');

echo json_encode($data);

$mysqli->close();
?>
