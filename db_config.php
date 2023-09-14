<?php
$db_host = 'localhost';
$db_name = 'egh455g4';
$db_user = 'Group4';
$db_password = '12345';
?>

<!-- sample example code 

INSERT INTO egh455g4.sampledata (timestamp, type, value)
VALUES
    ('2023-09-01 10:00:00', 'Light', '20'),
    ('2023-09-02 11:00:00', 'Pressure', 'Value B'),
    ('2023-09-03 12:00:00', 'Gas', '326'),
    ('2023-09-04 10:00:00', 'Temperature', '-62'),
    ('2023-09-06 11:00:00', 'Humidity', '68'),
    ('2023-09-06 12:00:00', 'Temperature', '51');

        SELECT DATE_FORMAT(timestamp, '%Y-%m-%d %H:%i:%s') AS formatted_timestamp, type, value
        FROM egh455g4.sampledata;

    DELETE FROM egh455g4.sampledata;
     -->