<!-- Sotto-programma per la finalizzazione del metodo CRUD index che consente l'acquisizione dell'intera collezione di dati da parte del chiamante -->
<?php
  session_start();
  $json_file = $_SESSION['json_file'];
  $file_content_str = file_get_contents($json_file);
  $records_array = json_decode($file_content_str,true);
  // Conversione dell'array di oggetti da formato php a formato json
  header('Content-type: application/json');
  echo json_encode($records_array);
?>