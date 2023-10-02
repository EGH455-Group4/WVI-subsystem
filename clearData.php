<?php
include('db_config.php');

$databaseNames = ['UAV_detection'];

$mysqli = mysqli_connect($db_host, $db_user, $db_password, $db_name);

if (!$mysqli) {
    die("Connection failed: " . mysqli_connect_error());
}

foreach ($databaseNames as $dbName) {
    $sql = "DELETE FROM $dbName";

    if ($mysqli->query($sql) === TRUE) {
        echo "Data deleted from database $dbName successfully.<br>";
    } else {
        echo "Error deleting data from database $dbName: " . $mysqli->error . "<br>";
    }
}

$mysqli->close();
?>
