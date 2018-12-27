<?php
    DEFINE('DB_USERNAME', 'root');
    DEFINE('DB_PASSWORD', 'root');
    DEFINE('DB_HOST', 'localhost');
    DEFINE('DB_NAME', 'preordinazioni');
    
    $nome = $_POST['nome'];
    $cognome = $_POST['cognome'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $data = $_POST['data'];
    $ristorante = $_POST['ristorante'];
    $orario = $_POST['orario'];
    $n_persone = $_POST['n_persone'];
    
    $return_data = array();
    
    $mysqli = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME); //nuovo oggetto di conn con questi paamri
  
    if ($mysqli->connect_error) {
        die('Connect Error ('.$mysqli->connect_errno.') '.$mysqli->connect_error);
    }
    
    $stmt = "SELECT * FROM tavolo where email='$email' and n_persone='$n_persone'";
    $mysqli_result = $mysqli->query($stmt);
    
    if($mysqli_result->num_rows == 1) {
        $return_data['status'] = false;
        $return_data['errore'] = "Attenzione esiste già una prenotazione a questo nome e per lo stesso numero di persone.";
    }
    else{
        $stmt = "INSERT INTO tavolo (nome, cognome, email, telefono, ristorante, orario, data, n_persone) VALUES ('$nome', '$cognome', '$email', '$telefono', '$ristorante','$orario', '$data', '$n_persone')";
        $mysqli_result = $mysqli->query($stmt);
        if($mysqli_result == FALSE){
            $return_data['status'] = false;
            $return_data['errore'] = "Attenzione c'è stato un errore nella registrazione, riprova più tardi.";
        }
        else{
            $return_data['status'] = true;
        }
    }
    $mysqli->close();
    echo json_encode($return_data);
?>