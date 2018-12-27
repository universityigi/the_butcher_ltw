<?php
    DEFINE('DB_USERNAME', 'root');
    DEFINE('DB_PASSWORD', 'root');
    DEFINE('DB_HOST', 'localhost');
    DEFINE('DB_NAME', 'preordinazioni');

    $email = $_POST['email'];

    $return_data = array();

    $mysqli = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);

    if ($mysqli->connect_error) {
        die('Connect Error ('.$mysqli->connect_errno.') '.$mysqli->connect_error);
    }

    $stmt = "SELECT * FROM ordini where email='$email'";
    $mysqli_result = $mysqli->query($stmt);

    $num_righe = $mysqli_result->num_rows;

    $idx = 0;
    while($idx != $num_righe){
        $riga = $mysqli_result->fetch_array(MYSQLI_NUM);
        $panino = array();
        $panino['nome'] = $riga[0];
        $panino['email'] = $riga[1];
        $panino['totale'] = $riga[2];
        $panino['carne'] = $riga[3];
        $panino['verdure'] = $riga[4];
        $panino['formaggi'] = $riga[5];
        $panino['insalate'] = $riga[6];
        $panino['extra'] = $riga[7];
        $panino['salse'] = $riga[8];
        $return_data[$idx] = $panino;
        $idx += 1;
    }

    $mysqli->close();
    echo json_encode($return_data);
?>

