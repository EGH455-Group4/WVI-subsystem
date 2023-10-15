<?php
include('db_config.php');
$mysqli = mysqli_connect($db_host, $db_user, $db_password, $db_name);

$startTimestamp = isset($_GET['startTimestamp']) ? $_GET['startTimestamp'] : '';
$endTimestamp = isset($_GET['endTimestamp']) ? $_GET['endTimestamp'] : '';

$startDateTime = new DateTime($startTimestamp, new DateTimeZone('Australia/Brisbane'));
$endDateTime = new DateTime($endTimestamp, new DateTimeZone('Australia/Brisbane'));

$startEpoch = date_format($startDateTime, 'U');
$endEpoch = date_format($endDateTime, 'U');

try {
    $query = "SELECT id, timestamp, type, data FROM UAV_detection WHERE timestamp >= ? AND timestamp <= ?";
    $stmt = $mysqli->prepare($query);

    $stmt->bind_param("ss", $startEpoch, $endEpoch);

    $stmt->execute();

    $stmt->bind_result($id, $timestamp, $type, $value);

    while ($stmt->fetch()) {
        $epoch = $timestamp;
        $dt = new DateTime("@$epoch");

        $dt->setTimezone(new DateTimeZone('Australia/Brisbane'));

        echo "<tr><td>";
        echo $id;
        echo "</td><td>";
        echo $dt->format('Y-m-d H:i:s');
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
