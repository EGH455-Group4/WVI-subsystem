<?php
include('db_config.php');
$mysqli = mysqli_connect($db_host, $db_user, $db_password, $db_name);

$startTimestamp = isset($_GET['startTimestamp']) ? $_GET['startTimestamp'] : '';
$endTimestamp = isset($_GET['endTimestamp']) ? $_GET['endTimestamp'] : '';

try {
    $query = "SELECT id, timestamp, type, data FROM UAV_detection WHERE timestamp >= ? AND timestamp <= ?";
    $stmt = $mysqli->prepare($query);

    $stmt->bind_param("ss", $startTimestamp, $endTimestamp);
    
    $stmt->execute();

    $stmt->bind_result($id, $timestamp, $type, $value);

    while ($stmt->fetch()) {
        echo "<tr><td>";
        echo $id;
        echo "</td><td>";
        echo $timestamp;
        echo "</td><td>";
        echo $type;
        echo "</td><td>";
        echo $value;
        echo "</td></tr>";
    }
} catch (Exception $e) {
    die("Error: " . $e->getMessage());
}
?>
