<?php
    session_start();
    if (isset($_POST['php_source']) && isset($_POST['json_destination']))
    {
        $json_file = $_POST['json_destination'];
        $_SESSION['json_file'] = $json_file;
        require_once $_POST['php_source'];
        file_put_contents($json_file, json_encode($records_array));
        // file_put_contents($_POST['json_destination'], json_encode($records_array));
    }
?>