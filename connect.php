<?php
include('db_config.php');
$mysqli = mysqli_connect($db_host, $db_user, $db_password, $db_name);

try {
    $query = "SELECT * FROM UAV_detection";
    $stmt = $mysqli->query($query);

    $result = '';

    while ($row = $stmt->fetch_assoc()) {
        $epoch = $row['timestamp'];
        $dt = new DateTime("@$epoch");

        $dt->setTimezone(new DateTimeZone('Australia/Brisbane'));

        $result .= "<tr><td>";
        $result .= $row['id'];
        $result .= "</td><td>";
        $result .= $dt->format('Y-m-d H:i:s');
        $result .= "</td><td>";
        $result .= $row['type'];
        $result .= "</td><td>";
        $result .= $row['data'];
        $result .= "</td></tr>";
    }

    echo $result;

} catch (Exception $e) {
    die("Error: " . $e->getMessage());
}
?>

