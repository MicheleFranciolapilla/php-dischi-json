<?php
    session_start();
    if (isset($_POST['record_index']))
    {
        $json_file = $_SESSION['json_file'];
        $file_content_str = file_get_contents($json_file);
        $records_array = json_decode($file_content_str,true);
        $index = $_POST['record_index'];
        if (($index >= 0) && ($index < count($records_array)))
        {
            $data = $records_array[$index];
            header('Content-type: application/json');
            echo json_encode($data);
        }
    }
?>