<?php
include('db_config.php');
$mysqli = mysqli_connect($db_host, $db_user, $db_password, $db_name);

$sqlTargetDetection = "DELETE FROM target_detection";

$mysqli->execute_query($sqlTargetDetection);

$mysqli->close();