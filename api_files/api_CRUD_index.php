<?php
  if (isset($_POST['json_source']))
  {
    $file_content_str = file_get_contents($_POST['json_source']);
    $records_array = json_decode($file_content_str,true);
    // Conversione dell'array di oggetti da formato php a formato json
    header('Content-type: application/json');
    echo json_encode($records_array);
  }
?>