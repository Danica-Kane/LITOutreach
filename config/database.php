<?php
    define('DB_HOST', 'localhost');
    define('DB_USER', 'DanicaKane');
    define('DB_PASS', 'Vq7tyd_0To@!Dpry');
    define('DB_NAME', 'LITOutreach_Contact');

    //Create Conection
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

    // Check connection
    if($conn->connect_error){
        die('Connection Failed' . $conn->connect_error);
    }

    echo 'CONNECTED!';

