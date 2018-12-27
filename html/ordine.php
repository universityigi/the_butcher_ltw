<?php
    DEFINE('DB_USERNAME', 'root');
    DEFINE('DB_PASSWORD', 'root');
    DEFINE('DB_HOST', 'localhost');
    DEFINE('DB_NAME', 'preordinazioni');
    
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $totale = $_POST['totale'];
    $carne = $_POST['carne'];
    $verdure = $_POST['verdure'];
    $formaggi = $_POST['formaggi'];
    $insalate = $_POST['insalate'];
    $extra = $_POST['extra'];
    $salse = $_POST['salse'];

    $return_data = array();
    
    $mysqli = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME); //nuovo oggetto di conn con questi paamri
  
    if ($mysqli->connect_error) {
        die('Connect Error ('.$mysqli->connect_errno.') '.$mysqli->connect_error);
    }

    $stmt = "INSERT INTO ordini (nome, email, totale, carne, verdure, formaggi, insalate, extra, salse) VALUES ('$nome', '$email', '$totale', '$carne', '$verdure','$formaggi', '$insalate', '$extra', '$salse')";
    $mysqli_result = $mysqli->query($stmt);
    if($mysqli_result == FALSE){
        $return_data['status'] = false;
        $return_data['errore'] = "Attenzione c'è stato un errore nell'ordinazione, riprova più tardi.";
    }
    else{
        $return_data['status'] = true;
    }
    $mysqli->close();
    echo json_encode($return_data);
?>