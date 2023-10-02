<?php
include('db_config.php');
$mysqli = mysqli_connect($db_host, $db_user, $db_password, $db_name);

try {
    $query = "SELECT * FROM UAV_detection";
    $stmt = $mysqli->query($query);

    $result = '';

    while ($row = $stmt->fetch_assoc()) {
        $result .= "<tr><td>";
        $result .= $row['id'];
        $result .= "</td><td>";
        $result .= $row['timestamp'];
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

