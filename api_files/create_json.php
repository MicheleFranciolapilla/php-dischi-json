<?php
    require_once 'records.php';
    file_put_contents('records.json', json_encode($records_array));
?>