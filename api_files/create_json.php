<?php
    if (isset($_POST['php_source']) && isset($_POST['json_destination']))
    {
        require_once $_POST['php_source'];
        file_put_contents($_POST['json_destination'], json_encode($records_array));
    }
?>